<template>
  <view class="container">
    <view class="login-title"> 登录账号 </view>
    <view class="login-describe"> 登录后可使用更多的功能 </view>
    <view class="input-content">
      <view class="input-item">
        <input
          type="text"
          placeholder="账号或手机号码"
          id="phone"
          @input="phoneInput"
        />
      </view>
      <view class="input-item">
        <input
          :type="type"
          placeholder="密码"
          id="password"
          @input="passwordInput"
        />
        <image class="look" :src="lookurl" @tap="looks"></image>
      </view>
    </view>
    <button class="confirm-btn" @tap="login">登录</button>
    <view class="forget-section"> 忘记密码? </view>
    <!-- 		<view class="register-section">
	    还没有账号?
	    <text >马上注册</text>
		</view> -->
		<navigator url="../register/register">
					<view class="register-section">
					还没有账号?
					<text >马上注册</text>
					</view>
				</navigator>
  </view>
</template>

<script>
import request from "../../server/utils/request";
import config from "../../utils/config.js"
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      password: "",
      type: "password",
      look: "false",
      lookurl: "../../static/image/login/y1.png",
			userInfo:{}
    };
  },
  onLoad() {
    this.looks();
  },
  onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      uni.navigateTo({
        url: "../register/register",
      });
    }
  },
  methods: {
    phoneInput(event) {
      this.phone = event.target.value;
      // console.log(this.phone);
    },
    passwordInput(event) {
      this.password = event.target.value;
      // console.log(this.password);
    },
    async login() {
      let { phone, password } = this.$data;
      // 前端验证
      if (!phone) {
        uni.showToast({
          title: "手机号不能为空",
          icon: "none",
        });
        return;
      }
      let phoneReg = /^1(3|4|5|6|7|8|9|)\d{9}$/;
      if (!phoneReg.test(phone)) {
        wx.showToast({
          title: "手机号格式有误",
          icon: "none",
        });
        return;
      }
      if (!password) {
        wx.showToast({
          title: "密码不能为空",
          icon: "none",
        });
        return;
      }

      //前端发数据给后端
			let result;
      uni.request({
        url: `${config.mobileHost}/login`,
        data: {
          phone: phone,
          password: password,
        },
				success: (res) => {
					result = res;
					this.userInfo = result.data;
					console.log(result);
					if (result.data.code === 200) {
					  // 登录成功
					  uni.showToast({
					    title: "登录成功",
					  });
						
					  // 将用户的信息存储至本地
						uni.setStorageSync('globalUser',result.data);
						
					  // 跳转至个人中心my页面
					  uni.switchTab({
					    url: "../my/my",
					  });
					} else if (result.data.code === 400) {
					  uni.showToast({
					    title: "手机号错误或密码",
					    icon: "none",
					  });
					} else if (result.data.code === 502) {
					  uni.showToast({
					    title: "密码错误",
					    icon: "none",
					  });
					} else {
					  uni.showToast({
					    title: "登录失败，请重新登录",
					    icon: "none",
					  });
						return;
					}
				},
        method:'POST'
      });
      // 后端验证
   //    axios.post(`${config.mobileHost}/login`,{
			// 	phone:phone,
			// 	password:password 
			// }).then((res) => {
			// 	result = res;
			// 	this.userInfo = result.data;
			// 	console.log(result);
			// 	if (result.data.code === 200) {
			// 	  // 登录成功
			// 	  uni.showToast({
			// 	    title: "登录成功",
			// 	  });
					
			// 	  // 将用户的信息存储至本地
			// 		uni.setStorageSync('globalUser',result.data);
					
			// 	  // 跳转至个人中心my页面
			// 	  uni.switchTab({
			// 	    url: "../my/my",
			// 	  });
			// 	} else if (result.data.code === 400) {
			// 	  uni.showToast({
			// 	    title: "手机号错误或密码",
			// 	    icon: "none",
			// 	  });
			// 	} else if (result.data.code === 502) {
			// 	  uni.showToast({
			// 	    title: "密码错误",
			// 	    icon: "none",
			// 	  });
			// 	} else {
			// 	  uni.showToast({
			// 	    title: "登录失败，请重新登录",
			// 	    icon: "none",
			// 	  });
			// 		return;
			// 	}
   //    });
      // result = res;
      
    },
    looks() {
      if (this.look) {
        this.type = "password";
        this.look = !this.look;
        this.lookurl = "../../static/image/login/y1.png";
      } else {
        this.type = "text";
        this.look = !this.look;
        this.lookurl = "../../static/image/login/y2.png";
      }
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
@import url("login.css");
</style>