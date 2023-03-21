<template>
  <view class="pageContainer">
    <view class="cardList">
      <view class="card-item">
        <text class="title">账号</text>
		<text v-if="this.userInfo.identity==1">儿童{{this.userInfo.id}}</text>
		<text v-else-if="this.userInfo.identity==2">帮扶人员{{this.userInfo.id}}</text>
		<text v-else="this.userInfo.identity==3">家长{{this.userInfo.id}}</text>
        <!-- <image class="more" src="../../static/iconfont/more.png"></image> -->
      </view>
      <view class="card-item">
        <text class="title">手机号</text>
		<text>{{this.userInfo.phone}}</text>
        <!-- <image class="more" src="../../static/iconfont/more.png"></image> -->
      </view>
     <!-- <view class="card-item">
        <text class="title">密码</text>
        <image class="more" src="../../static/iconfont/more.png"></image>
      </view> -->
      <view class="card-item">
        <text class="title">应急联系人</text>
		<text v-if="this.userInfo.identity == 1 || parentsPhone">{{parentsPhone}}</text>
		<text v-else>无</text>
        <!-- <image class="more" src="../../static/iconfont/more.png"></image> -->
      </view>
    </view>
  </view>
</template>

<script>
import config from "../../utils/config.js"
export default {
  data() {
    return {
		// 手机号
		userPhone:'',
		// 用户信息,
		userInfo:'',
		// 是否登录
		isLogin: false,
		// 应急联系人
		parentsPhone:'',
	};
  },
  methods: {
	  getGlobalUser:function(key){
	  	var userInfo = uni.getStorageSync("globalUser");
	  	if(userInfo!=null && userInfo != "" && userInfo != undefined){
	  		return userInfo;
	  	}else{
	  		return null;
	  	}
	  }
  },
  onLoad() {
  	// 使用挂载方法获取用户数据
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
  	
  	uni.request({
  		url:`${config.mobileHost}/user`,
  		method:"GET",
  		data:{
  			identity:3,
  			childPhone: this.userInfo.phone
  		},
  		success: (res) => {
  			this.parentsPhone = res.data.phone;
  			console.log(this.parentsPhone);
  		},
  		fail: (err) => {
  			console.log(err)
  		}
  	})
  },
  onShow() {
  	
  }
};
</script>

<style>
@import url("./count_manage.css");
</style>
