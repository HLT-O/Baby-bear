<template>
	<view class="notice">
		<view class="ONOFF">
			平台未打开时
		</view>
		<view class="notice-list">
			<view class="notice-itme">
				新消息通知
				<view class="switch" :style="'background:'+[control1?'#48c035':'#b1b1b1']" @click="Switch1">
					<view class="switch-control" :class="[control1?'long-data-fr':'long-data-fl']"></view>
				</view>
			</view>
			<view class="notice-itme">
				语音和视频通话提醒
				<view class="switch" :style="'background:'+[control2?'#48c035':'#b1b1b1']" @click="Switch2">
					<view class="switch-control" :class="[control2?'long-data-fr':'long-data-fl']"></view>
				</view>
			</view>
			<view class="notice-itme">
				通知显示消息详细
				<view class="switch" :style="'background:'+[control3?'#48c035':'#b1b1b1']" @click="Switch3">
					<view class="switch-control" :class="[control3?'long-data-fr':'long-data-fl']"></view>
				</view>
			</view>
		</view>
		<view class="ONOpen">
			平台打开时
		</view>
		<view class="notice-list">
			<view class="notice-itme">
				声音
				<view class="switch" :style="'background:'+[control4?'#48c035':'#b1b1b1']" @click="Switch4">
					<view class="switch-control" :class="[control4?'long-data-fr':'long-data-fl']"></view>
				</view>
			</view>
			<view class="notice-itme">
				振动
				<view class="switch" :style="'background:'+[control5?'#48c035':'#b1b1b1']" @click="Switch5">
					<view class="switch-control" :class="[control5?'long-data-fr':'long-data-fl']"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				control1:true,
				control2:true,
				control3:true,
				control4:false,
				control5:true,
				
			}
		},
		methods: {
			Switch1:function(){
				this.control1=!this.control1;
			},
			Switch2:function(){
				this.control2=!this.control2;
			},
			Switch3:function(){
				this.control3=!this.control3;
			},
			Switch4:function(){
				this.control4=!this.control4;
			},
			Switch5:function(){
				this.control5=!this.control5;
			},
		}
	}
</script>

<style>
    .notice{
		padding: 0 30upx;
	}
	.ONOFF{
		font-size: 28upx;
		color: #363636;
		padding:0 20upx;
		margin-bottom: 10upx;
		margin-top: 30upx;
	}
	
	.ONOpen{
		font-size: 28upx;
		color: #363636;
		padding:0 20upx;
		margin-bottom: 10upx;
		margin-top: 50upx;
	}
	.notice-list{
		display: flex;
		flex-direction: column;
		width:100% ;
		background: white;
		border-radius: 50upx;
		box-shadow: 10upx 15upx 5upx #eeeeee;
		border-radius: 50upx;
		margin-bottom: 20upx;
	}
	.notice-itme{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: calc(100%)upx;
		height: 90upx;
		line-height: 90upx;
		padding:0 30upx;
		padding-left: 40upx;
		font-size: 37upx;
		margin-top: 15upx;
		font-size: 17px;
	}
	.switch{
		display: block;
		padding: 2px;
		width: 90upx;
		background: #48c035;
		border-radius: 40upx;
		z-index: 999;
	}
	.switch-control{
		width: 45upx;
		height: 45upx;
		border-radius: 40upx;
		background: #FFFFFF;
	}
	.long-data-fl {
		float: left;
	}
	
	.long-data-fr {
		float: right;
	}
</style>
