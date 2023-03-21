<template>
  <view class="myPage">
    <!-- 头像 名称-->
    <view class="login-info-box" v-if="isLogin == false">
      <view class="portrait-box">
        <navigator url="../login/login">
          <image
            class="portrait"
            src="/static/image/my/missing-face.png"
          ></image>
        </navigator>
      </view>
      <view class="info-box" v-if="isLogin == false">
        <text class="username">游客</text>
		<view class="tips">
			点击头像登录
		</view>
      </view>
    </view>
    <view class="login-info-box" v-else-if="isLogin && userInfo.identity == 1">
      <view class="portrait-box">
        <view>
          <image class="portrait" src="../../static/haizi.png"></image>
        </view>
      </view>
      <view class="info-box">
        <text class="username">儿童{{ this.userInfo.id }}</text>
      </view>
    </view>

    <view class="login-info-box" v-else-if="isLogin && userInfo.identity == 2">
      <view class="portrait-box">
        <view>
          <image class="portrait" src="../../static/stu.png"></image>
        </view>
      </view>
      <view class="info-box">
        <text class="username">帮扶人员{{ this.userInfo.id }}</text>
      </view>
    </view>

    <view class="login-info-box" v-else-if="isLogin && userInfo.identity == 3">
      <view class="portrait-box">
        <view>
          <image class="portrait" src="../../static/jiazhang.png"></image>
        </view>
      </view>
      <view class="info-box">
        <text class="username">家长{{ this.userInfo.id }}</text>
      </view>
    </view>
    <!-- 账号管理 -->
    <view class="cardList" v-if="isLogin">
      <navigator url="../count_manage/count_manage">
        <view class="card-item">
		  <image src="../../static/user_manage.png" class="item_icon"></image>
          <text class="title">账号</text>
          <image class="more1" src="../../static/iconfont/more.png"></image>
        </view>
      </navigator>
	  
	  <navigator url="../notice/notice">
	  		  <view class="card-item">
	  		  	<image src="../../static/secret.png" class="item_icon"></image>
	  		    <text class="title">消息通知</text>
	  		    <image class="more5" src="../../static/iconfont/more.png"></image>
	  		  </view>
	  </navigator>
	  
      <navigator url="../currency/currency">
		  <view class="card-item">
		  		  <image src="../../static/settings.png" class="item_icon"></image>
		    <text class="title">通用</text>
		    <image class="more2" src="../../static/iconfont/more.png"></image>
		  </view>
	  </navigator>

      <!-- <navigator url="../currency/currency">
		  <view class="card-item">
		  	<image src="../../static/settings.png" class="item_icon"></image>
		    <text class="title">通用</text>
		    <image class="more3" src="../../static/iconfont/more.png"></image>
		  </view>
	  </navigator> -->
	  
	 
	  
	  

      <navigator url="../about/about">
        <view class="card-item">
			<image src="../../static/about.png" class="item_icon"></image>
          <text class="title">关于与帮助</text>
          <image class="more4" src="../../static/iconfont/more.png"></image>
        </view>
      </navigator>
    </view>
    <button type="default" @click="clearStr" v-if="isLogin">退出登录</button>
  </view>
</template>
 
<script>
export default {
  data() {
    return {
      title: "Hello",
      userInfo: {},
      isLogin: false,
    };
  },
  onLoad() {
	  console.log(this.userInfo)
  },
  onShow() {
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
  },
  onUnload() {},

  methods: {
    clearStr() {
      uni.clearStorageSync();
      uni.showToast({
        title: "清空缓存成功",
        mask: false,
        duration: "1500",
      });
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
@import url("my.css");
</style>