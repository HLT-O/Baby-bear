<template>
	<view>
		<button type="default" @tap="scanCode">扫码</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			scanCode:function(){
				 // 允许从相机和相册扫码
				 uni.scanCode({
				     success: function (res) {
				         console.log('条码类型：' + res.scanType);
				         console.log('条码内容：' + res.result);
				     }
				 });
		},
		}
	}
</script>

<style>
	
</style>
