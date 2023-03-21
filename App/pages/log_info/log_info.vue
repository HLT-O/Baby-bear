<template>
  <view class="log_infoContainer">
    <view class="header">
			<view>{{log.log_title}}</view>
    </view>
		<view class="line"></view>
    <view class="content">
      <view>{{log.log_content}}</view>
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
    <!-- <view class="save_fixed">
      <image src="../../static/save.png" @click="saveLog"></image>
    </view> -->
    <!-- save_fixed end -->
  </view>
</template>

<script>
	import config from "../../utils/config.js"
export default {
  data() {
    return {
			log_id:'',
			log:{},
		};
  },
  methods: {
		saveLog(){
			uni.redirectTo({
				url:"../log/log"
			})
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
	onLoad(options) {
		this.log_id = options.log_id;
		uni.request({
			url:`${config.mobileHost}/log/logInfo`,
			data:{
				log_id:this.log_id
			},
			success: (res) => {
				this.log = res.data[0]
				console.log(this.log)
			},
			fail: (err) => {
				console.log(err)
			}
		})
	}
};
</script>

<style>
@import url("./log_info.css");
</style>
