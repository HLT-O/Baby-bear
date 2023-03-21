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
    <navigator :url="'../log_info/log_info?log_id='+item.log_id" v-for="item in allLog" @click="goToLog(item.log_id)">
      <view class="log_item" :id="item.log_id">
        <view class="item_name">{{item.log_title}}</view>
        <view class="item_info">{{item.log_content}}</view>
        <view class="item_date">{{item.log_time}}</view>
      </view>
    </navigator>
    <!-- log_item end -->

    <navigator url="../newLog/newLog">
      <view class="new_fixed">
        <image src="../../static/new_log_item.png"></image>
      </view>
    </navigator>
  </view>
</template>

<script>
	import config from "../../utils/config.js"
export default {
  data() {
    return {
			// log:[],
			// logName:'',
			// logInfo:'',
			// logDate:'',
			// logItem:{logName,logInfo,logDate}
			userInfo:{},
			allLog:[],
			logTitle:'',
			logContent:'',
		};
  },
  methods: {
		// addLog(){
		// 	uni.reLaunch({
		// 		url:'../newLog/newLog',
		// 		success: (res) => {
		// 			console.log(res)
		// 		},
		// 		fail: (err) => {
		// 			console.log(err)
		// 		}
		// 	})
		// },
		goToLog(log_id){
			console.log(log_id)
			uni.request({
				url:`${config.mobileHost}/log/logInfo`,
				method:'GET',
				data:{
					id:log_id
				},
				success: (res) => {
					console.log(res);
				},
				fail: (err) => {
					console.log(err);
				} 
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
	onShow() {
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
		
		// 获取历史日志
		uni.request({
			url:`${config.mobileHost}/log/getLog`,
			method:'GET',
			data:{
				id:this.userInfo.id
			},
			success: (res) => {
				this.allLog = res.data;
				for (let data of this.allLog) {
					data.log_time = data.log_time.substr(0,10);
				}
				console.log(this.allLog)
			},
			fail: (err) => {
				console.log(err)
			}
		})
		
		
	},
};
</script>

<style>
@import url("./log.css");
</style>
