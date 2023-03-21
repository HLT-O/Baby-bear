<template>
	<view class="currency">
		<view class="currency-list">
			<view class="currency-item">
				语言
			<image src="../../static/iconfont/more.png"></image>
			</view>
			<view class="currency-item">
				字体大小
				<image src="../../static/iconfont/more.png"></image>
			</view>
			<view class="currency-item">
				聊天背景
				<image src="../../static/iconfont/more.png"></image>
			</view>
			<view class="currency-item">
				照片、视频、文件和通话
				<image src="../../static/iconfont/more.png"></image>
			</view>
			<view class="currency-item">
				辅助功能
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
	.currency{
		padding: 0 30upx;
	}
	.currency-list{
		display: flex;
		flex-direction: column;
		width:100% ;
		background: white;
		/* padding: 0 20upx; */
		border-radius: 50upx;
		box-shadow: 10upx 15upx 5upx #eeeeee;
		border-radius: 50upx;
		margin-bottom: 20upx;
		margin-top: 30upx;
	}
	.currency-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: calc(100%)upx;
		height: 90upx;
		line-height: 90upx;
		padding:0 20upx;
		padding-left: 30upx;
		margin-top: 15upx;
		font-size: 17px;
	}
	.currency-item image{
		width: 30upx;
		height: 30upx;
	}
</style>
