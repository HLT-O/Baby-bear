<template>
  <view class="logContainer">
    <!-- search start -->
    <!-- <view class="logHeader">
      <view class="search_icon"></view>
      <input type="text" placeholder="搜索日志" />
    </view> -->
    <!-- search end -->

    <!-- folder start -->
    <!-- <view class="folder">
      <view class="folder_item">
        <view class="folder_icon">
          <image src="../../static/folder.png"></image>
        </view>
        <view class="folder_name"> 文件夹 </view>
      </view>
      <view class="folder_num"> 0 </view>
    </view> -->
    <!-- folder end -->

    <!-- log_item start -->
    <view class="log_item" v-for="(tag, index) in alltag">
      <view class="tag">
        <view class="tag_item">
          <uni-tag
            :text="tag.tag_info"
            :type="tag.tag_type"
            circle="true"
          ></uni-tag>
        </view>
      </view>
      <view class="item_info">{{ tag.tag_input }}</view>
      <view class="item_date">{{ tag.tag_time }}</view>
    </view>
    <!-- log_item end -->

    <!-- <navigator>
      <view class="new_fixed" @click="addLog">
        <image src="../../static/new_log_item.png"></image>
      </view>
    </navigator> -->
  </view>
</template>

<script>
import config from "../../utils/config.js";
export default {
  data() {
    return {
      // ctg: [],
      alltag: [],
      userInfo: {},
    };
  },
  onLoad(options) {
    console.log(options);
    let childPhone = options.childPhone;
    console.log(childPhone);
    // 请求获取历史标签
    uni.request({
      url: `${config.mobileHost}/tag/getChildTag`,
      method: "GET",
      data: {
        childPhone: childPhone,
      },
      success: (res) => {
        for (let data of res.data) {
          data.tag_time = data.tag_time.substr(0, 10);
          console.log(data.tag_time);
        }
        this.alltag = res.data;
        console.log(res);
        console.log(typeof res.data[0].tag_time);
      },
    });
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

    // 请求获取历史标签
    // uni.request({
    //   url: `${config.mobileHost}/tag/getChildTag`,
    //   method: "GET",
    //   data: {
    //     childPhone: this.userInfo.childPhone,
    //   },
    //   success: (res) => {
    //     for (let data of res.data) {
    //       data.tag_time = data.tag_time.substr(0, 10);
    //       console.log(data.tag_time);
    //     }
    //     this.alltag = res.data;
    //     console.log(res);
    //     console.log(typeof res.data[0].tag_time);
    //   },
    // });
  },
  onBackPress(e) {
    // this.ctg[this.ctg.length - 1].currentTag = [];
    // this.ctg.currentTag = [];
    // console.log(this.ctg);
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
};
</script>

<style>
@import url("./child_historyTag");
</style>
