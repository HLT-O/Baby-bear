<template>
	<view class="tab-page-root">
		<view class="tabbar-header flex_align-center">
			<view v-for="(item,i) in tabs" @tap="tabTap(i)" class="flex1" :key="item">{{item}}</view>
		</view>
		<view :style="{left:tabLineLeft+'px'}" class="tabbar-line"></view>
		<view class="tabbar-content" :style="'transform:translateX('+xPercent+'%);transition:transform '+pageDuration+'ms;'"
		 @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<view v-for="(item, i) in tabs" :key="item" :style="'transform:translateX('+i*100+'%)'" class="tabbar-page">
				<slot name="page" :i="i" ></slot><!-- :pageData="pageData" -->
			</view>
		</view>
	</view>
</template>

<script>
	const safeAreaWidth = uni.getSystemInfoSync().safeArea.width
	let tabbarLineWidth,
		yAxisGap = 8
	// #ifdef H5
	yAxisGap = 6
	// #endif
	export default {
		props: {
			tabs: {
				type: Array,
				required: true
			},
			// pageData: ''
		},
		data() {
			return {
				tabIndex: 0,
				xPercent: 0,
				startPageX: 0,
				startPageY: 0,
				yScrollTimes: 0,
				yScrolling: false,
				positive: 1,
				pageDuration: 0,
				tabLineLeft: safeAreaWidth / this.tabs.length - 17
			}
		},
		mounted() {
			uni.createSelectorQuery().in(this).select('.tabbar-line').boundingClientRect(data => { // data - 各种参数
				tabbarLineWidth = data.width
				this.tabLineLeft = (safeAreaWidth / this.tabs.length - tabbarLineWidth) / 2
			}).exec()
		},
		methods: {
			tabTap(i) {
				if (this.tabIndex != i) {
					this.pageDuration = 0
					this.xPercent = -i * 100
					this.tabIndex = i
					this.tabLineLeft = (i + 1 / 2) * safeAreaWidth / this.tabs.length - tabbarLineWidth / 2
					this.loadTabPage()
				}
			},
			touchstart(e) {
				this.startPageX = e.changedTouches[0].pageX
				this.startPageY = e.changedTouches[0].pageY
				this.startXPercent = this.xPercent
			},
			touchmove(e) {
				this.yScrollTimes++
				if (this.yScrollTimes == 1 && Math.abs(e.changedTouches[0].pageY - this.startPageY) > yAxisGap) {
					this.yScrolling = true
				}
				if (this.yScrolling) return
				this.pageDuration = 0
				const relativeXPercent = (e.changedTouches[0].pageX - this.startPageX) * 100 / safeAreaWidth
				if (this.relativeXPercent < relativeXPercent) {
					this.positive = -1
				} else {
					this.positive = 1
				}
				const xPercent = relativeXPercent + this.startXPercent
				if (xPercent >= 0) {
					this.xPercent = 0
				} else if (xPercent <= (1 - this.tabs.length) * 100) {
					this.xPercent = (1 - this.tabs.length) * 100
				} else {
					this.xPercent = xPercent
				}
				this.relativeXPercent = relativeXPercent
			},
			touchend() {
				if (-this.xPercent % 100 < 10 || (this.relativeXPercent < 0 && this.positive < 0)) {
					this.pageDuration = 80
					this.tabIndex = Math.floor(-this.xPercent / 100)
				} else if (-this.xPercent % 100 > 90 || (this.relativeXPercent > 0 && this.positive > 0)) {
					this.pageDuration = 80
					this.tabIndex = Math.floor(-this.xPercent / 100 + 1)
				} else {
					this.pageDuration = 300
					this.tabIndex += this.positive
					this.tabLineLeft = (this.tabIndex + 1 / 2) * safeAreaWidth / this.tabs.length - tabbarLineWidth / 2
					this.loadTabPage()
				}
				this.xPercent = -this.tabIndex * 100
				this.yScrolling = false
				this.yScrollTimes = 0
			},
			loadTabPage() {
				this.$emit('tabSwitch', this.tabIndex)
			}
		}
	}
</script>

<style>
	.flex_align-center {
		display: flex;
		align-items: center;
	}

	.flex1 {
		flex: 1;
	}

	.tab-page-root {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.tabbar-header {
		text-align: center;
		line-height: 72upx;
	}

	.tabbar-line {
		position: relative;
		left: 96upx;
		width: 58upx;
		height: 3upx;
		background-color: #1296db;
		transition: left 300ms;
	}

	.tabbar-content {
		min-height: calc(100% - 83upx);
	}

	.tabbar-page {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
</style>
