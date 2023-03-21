<template>
  <view class="log_infoContainer">
    <view class="header">
      <input type="text" placeholder="标题" v-model="logTitle"/>
    </view>
    <view class="content">
      <input type="text" placeholder="内容" v-model="logContent"/>
    </view>
    <!-- <view class="footer">
      <view class="insert_sound">
        <image src="../../static/log_info_sound.png"></image>
      </view>
      <view class="insert_img">
        <image src="../../static/log_info_img.png"></image>
      </view>
    </view> -->
    <!-- save_fixed start -->
    <view class="save_fixed">
      <image src="../../static/save.png" @click="save"></image>
    </view>
    <!-- save_fixed end -->
  </view>
</template>

<script>
	import config from "../../utils/config.js"
export default {
  data() {
    return {
			logTitle:'',
			logContent:'',
			logDate:'',
			logItem:{},
			userInfo:{}
		};
  },
	onShow(){
		// 使用挂载方法获取用户数据
		let userInfo = this.getGlobalUser("globalUser");
		
		console.log(userInfo);
		if(userInfo!=null){
			this.isLogin = true;
			this.userInfo = userInfo;
			console.log(this.userInfo)
		}else{
			this.isLogin = false;
			this.userInfo = {}
		}
	},
  methods: {
		save(){
			this.logDate = this.$options.methods.getTime();
			console.log(this.logContent,this.logTitle)
			uni.request({
				url:`${config.mobileHost}/log/insertLog`,
				data:{
					id:this.userInfo.id,
					logTitle:this.logTitle,
					logContent:this.logContent,
					logTime:this.logDate
				},
				method:'POST',
				success: (res) => {
					console.log(res)
				},
				fail: (err) => {
					console.log(err)
				}
			})
			// console.log(this.logDate);
			// this.logItem = {this.logName,this.logInfo};
			// uni.setStorage({
			// 	key:'log',
			// 	data:logItem,
			// 	success: (res) => {
			// 		console.log(res);
			// 	},
			// 	fail: (err) => {
			// 		console.log(err)
			// 	}
			// }),
			
			uni.navigateBack({
				url:'../log/log',
				success: (res) => {
					console.log(res);
				},
				fail: (err) => {
					console.log(err)
				}
			})
		}
		//获取时间
		,getTime(){
			let date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			let timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
			this.currentTag = [];
			return timer;
		},
		getGlobalUser:function(key){
			var userInfo = uni.getStorageSync("globalUser");
			if(userInfo!=null && userInfo != "" && userInfo != undefined){
				return userInfo;
			}else{
				return null;
			}
		}
	},
	
};
</script>

<style>
@import url("./newLog");
</style>
