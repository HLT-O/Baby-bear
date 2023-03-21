<template>
	<view class="set">
		<view class="set-list">
			<navigator url="../notice/notice">
				<view class="set-item">
					消息通知 
				<image src="../../static/iconfont/more.png"></image>
			</view>
			</navigator>
			<navigator url="../currency/currency">
				<view class="set-item">
					通用
				<image src="../../static/iconfont/more.png"></image>
			</view>
			</navigator>
			
			<view class="set-item">
				帮助与反馈
				<image src="../../static/iconfont/more.png"></image>
			</view>
			<view class="set-item">
				关于小熊
				<image src="../../static/iconfont/more.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.set{
		padding: 0 30upx;
	}
	.set-list{
		display: flex;
		flex-direction: column;
		width:100% ;
		background: #ebebeb;
		/* padding: 0 20upx; */
		border-radius: 50upx;
	}
	.set-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: calc(100%)upx;
		height: 90upx;
		line-height: 90upx;
		padding:0 20upx;
	}
	.set-item image{
		width: 30upx;
		height: 30upx;
	}
</style>
