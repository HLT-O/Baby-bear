<template>
  <view class="moodTagContainer">
    <view class="tagContainer">
		<view class="question">滑动选择此刻心情</view>
		<view class="tag">
		  <swiper
		    :indicator-dots="false"
		    :autoplay="false"
		    :interval="3000"
		    :duration="1000"
		    :circular="true"
		  >
		    <swiper-item v-for="item in tagImg" @click="addTag(item)">
		      <view class="swiper-item">
		        <image :src="item.src" mode="" :id="item.id"></image>
		      </view>
		    </swiper-item>
		  </swiper>
		</view>
	</view>

    <!-- 当前选中标签 start -->
    <view class="currentTag">
      <view v-for="ctg in alltag">
        <uni-tag :text="ctg.des" :type="ctg.type" circle="true"></uni-tag>
      </view>
    </view>
    <!-- 当前选中标签 end -->

    <!-- 记录框 start -->
    <view class="mood_input">
      <uni-easyinput
        type="textarea"
        placeholder="记录你的心情吧"
        placeholder-style="color:#3471ff"
        v-model="moodInput"
      />
    </view>
    <!-- 记录框 end -->

    <view class="history" @click="goHistory">历史标签</view>
    <view class="finsh" @click="handle">完成</view>
  </view>
</template>

<script>
import config from "../../utils/config.js";
export default {
  data() {
    return {
      // value:'',
      // 标签数据
      tagImg: [
        {
          id: 1,
          src: "../../static/tag/happy.png",
          des: "开心",
          type: "primary",
        },
        {
          id: 2,
          src: "../../static/tag/sad.png",
          des: "生气",
          type: "error",
        },
        {
          id: 3,
          src: "../../static/tag/sorrowful.png",
          des: "悲伤",
          type: "warning",
        },
        {
          id: 4,
          src: "../../static/tag/contented.png",
          des: "满足",
          type: "success",
        },
        {
          id: 5,
          src: "../../static/tag/active.png",
          des: "活泼",
          type: "success",
        },
        {
          id: 6,
          src: "../../static/tag/happyCry.png",
          des: "笑哭",
          type: "success",
        },
      ],
      // 当前点击标签数据
      currentTag: "",
      alltag: [],
      // 记录框数据
      moodInput: "",
      // 用户信息
      userInfo: {},
      isLogin: false,
    };
  },

  methods: {
    // 完成后回到首页
    handle() {
      // let currentTag = this.alltag;
      let alltag = this.alltag;
      let moodInput = this.moodInput;
      let timer = this.$options.methods.getTime();
      let tagData = { alltag, moodInput, timer };
      // this.ctg.push(tagData);
      // console.log(this.ctg);
      // // 清空数据
      // // uni.clearStorage();
      // // 保存数据
      // uni.setStorage({
      //   key: "ctg",
      //   data: this.ctg,
      //   success: (result) => {
      //     // console.log(result);
      //   },
      //   fail: (error) => {
      //     // console.log(error);
      //   },
      // });

      // 前端发数据给后端
      uni.request({
        url: `${config.mobileHost}/tag/insert`,
        method: "POST",
        data: {
          id: this.userInfo.id,
          tagData: tagData,
          input: moodInput,
          time: timer,
        },
        success: (res) => {
          console.log(res);
        },
        fail: (err) => {
          console.log(err);
        },
      });

      // 跳转至历史
      uni.navigateTo({
        url: "../historyTag/historyTag",
        success: (res) => {
          // console.log(res);
        },
        fail: (err) => {
          // console.log(err);
        },
      });
    },

    // 点击完成跳转至历史标签
    goHistory() {
      // currentTag = this.currentTag;
      // moodInput = this.moodInput;
      // 清空数据
      // uni.clearStorage();
      // 保存数据
      // uni.setStorage({
      //   key: "ctg",
      //   data: {currentTag,moodInput},
      //   success: (result) => {
      //     console.log(result);
      //   },
      //   fail: (error) => {
      //     console.log(error);
      //   },
      // });
      uni.navigateTo({
        url: "../historyTag/historyTag",
        success: (res) => {
          console.log(res);
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },

    // 新增标签
    addTag(item) {
      this.alltag = [];
      this.alltag.push(item);
      // console.log(this.alltag);
    },

    //获取时间
    getTime() {
      let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        minute =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        second =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      month >= 1 && month <= 9 ? (month = "0" + month) : "";
      day >= 0 && day <= 9 ? (day = "0" + day) : "";
      let timer =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
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
  onLoad() {},
  onShow() {
    // 使用挂载方法获取用户数据
    let userInfo = this.getGlobalUser("globalUser");

    if (userInfo != null) {
      this.isLogin = true;
      this.userInfo = userInfo;
      console.log(this.userInfo);
    } else {
      this.isLogin = false;
      this.userInfo = {};
    }
  },
  components: {},
};
</script>

<style>
@import url("./mood_tag.css");
</style>
