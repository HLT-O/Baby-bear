<template>
	<view class="QRcode">
			<view class="location-header">
				<view class="header">
					<image src="../../static/haizi.png" style="width: 120upx; height:120upx; border-radius: 99upx;" v-if="userInfo.identity==1"></image>
					<image src="../../static/jiazhang.png" style="width: 120upx; height:120upx; border-radius: 99upx;" v-else-if="userInfo.identity==3"></image>
					<image src="../../static/stu.png" style="width: 120upx; height:120upx; border-radius: 99upx;" v-else-if="userInfo.identity==2"></image>
				</view>
			</view>
			<view class="location-code">
				<view class="con-code">
					<view class="username" v-if="userInfo.identity==1">儿童{{userInfo.id}}</view>
					<view class="username" v-else-if="userInfo.identity==2">帮扶人员{{userInfo.id}}</view>
					<view class="username" v-else-if="userInfo.identity==3">家长{{userInfo.id}}</view>
					<view class="qrimg">
						<tki-qrcode
						ref="qrcode"
						:val="val"
						:size="size"
						:unit="unit"
						:background="background"
						:foreground="foreground"
						:pdground="pdground"
						:icon="icon"
						:iconSize="iconsize"
						:lv="lv" 
						:loadMake="loadMake"
						@result="src"/>
					</view>
				</view>
			</view>
		<view class="spiegare">
			扫码添加我为好友
		</view>
	</view>
	
</template>

<script>
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	export default {
		data() {
			return {
				val: '天天', // 要生成的二维码值
				size: 300, // 二维码大小
				unit: 'upx', // 单位
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' ,// 二维码生成后的图片地址或base64,
				userInfo:'',
				isLogin:false,
			}
		},
		onLoad() {
			let userInfo = this.getGlobalUser("globalUser");
			
			console.log(userInfo);
			if (userInfo != null) {
			  this.isLogin = true;
			  this.userInfo = userInfo;
			  console.log(this.userInfo);
			} else {
			  this.isLogin = false;
			  this.userInfo = {};
			}
		},
		methods: {
			
		},
		components: {
			tkiQrcode
		},
	}
</script>

<style>
	.container{
		width: 100%;
		position: relative;
	}
	.location-header{
		width: 100%;
		position: absolute;
		top: 150upx;
		left: 0;
		z-index: 99;
	}
	.header{
		display: block;
		width: 130upx;
		height: 130upx;
		border-radius: 99upx;
		box-sizing: border-box;
		border: 6upx solid #007AFF;
		margin: 0 auto;
	}
	.location-code{
		width: 100%;
		position: absolute;
		top: 210upx;
	}
	.username{
		margin: 80upx 0 30upx 0;
		text-align: center;
	}
	.con-code{
		width: 400upx;
		height: 550upx;
		margin: 0 auto;
		border-radius: 20upx;
		border:2px solid #007AFF;
		padding:  0 0 130upx 0;
	}
	.qrimg{
		width:100%;
		height: 90%;
		display: flex;
		justify-content: center;
	}
	.tki-qrcode{
		width: 300upx;
		height: 300upx;
	}
	.con-code{
		
	}
	.spiegare{
		width: 100%;
		text-align: center;
		position: absolute;
		top: 900upx;
	}
</style>
