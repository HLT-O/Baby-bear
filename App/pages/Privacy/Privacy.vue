<template>
	<view class="Privacy">
		<view class="Privacy-list">
			<view class="Privacy-item">日志管理</view>
			<view class="Privacy-item">心情标签管理</view>
			<view class="Privacy-item">权限管理</view>
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
	.Privacy{
		padding: 0 30upx;
	}
	.Privacy-list{
		display: flex;
		flex-direction: column;
		width:100% ;
		background: #ebebeb;
		/* padding: 0 20upx; */
		border-radius: 50upx;
	}
	.Privacy-item{
		width: calc(100%)upx;
		height: 90upx;
		line-height: 90upx;
		padding:0 20upx;
	}
</style>
