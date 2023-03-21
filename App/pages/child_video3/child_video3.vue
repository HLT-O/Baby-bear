<template>
  <view class="container">
    <view class="header">
      <view class="title">
        <h2>Kaboochi舞蹈</h2>
      </view>
      <view class="time"> 2020-03-21 11:52 </view>
    </view>
    <view class="image">
      <video
        src="../../static/video3.mp4"
        controls
      ></video>
    </view>
    <view class="content">
      <h3>嗨孩子们！ 观看farmees Kaboochi动物舞蹈为孩子挑战最初参加kaboochi跳跃挑战。</h3>
     
    </view>
	<view class="comment">
		<view class="issue">
			<input type="text" value="" placeholder="写下你的留言"/>
		</view>
		<view class="publish">发送</view>
		<view class="comment_select clearfix">
			<view class="textHeader">
				精选留言
			</view>
			<view class="comment_info">
				<view class="user_icon">
					<image src="../../static/haizi.png"></image>
				</view>
				<view class="user_name">
					儿童8
				</view>
				<view class="user_comment">
					哈哈哈哈哈
				</view>
			</view>
			<view class="comment_info">
				<view class="user_icon">
					<image src="../../static/haizi.png"></image>
				</view>
				<view class="user_name">
					儿童2
				</view>
				<view class="user_comment">
					这个故事好好笑
				</view>
			</view>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.container{
	width: 99%;
	margin: 0 auto;
	padding: 0 40upx 0 40upx;
}

.header .title{
	text-align: center;
}

.header .time{
	color: #9E9E9E;
	margin: 10upx 50upx;
	margin-top: 20upx;
	margin-left: 60upx;
}

.image,video{
	text-align: center;
	/* margin: 0 auto; */
	margin-top: 10upx;
}

.content{
	margin-top: 30upx;
	padding-bottom: 50upx;
}

.content p,h1,h2,h3,h4,h5,li{
	margin: 15upx;
}

/* 留言板块 start*/
.comment{
	padding-bottom: 80upx;
}

.issue{
	width: 95%;
	background-color: white;
	padding-left: 30upx;
	padding-top: 20upx;
	color: #C0C0C0;
	height: 150upx;
	line-height: 80upx;
	border-radius: 10px;
	font-size: 12px;
}

.publish{
	background-color: #1296db;
	width: 100upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	border-radius: 10upx;
	color: white;
	font-size: 13px;
	margin-left: 520upx;
	margin-top: 30upx;
}

.textHeader{
	color: #9E9E9E;
	font-size: 14px;
	margin-left: 10upx;
}

.comment_info{
	width: 100%;
	margin-top:20upx;
	padding-top: 20upx;
	/* padding-left: 20upx; */
	height: 120upx;
	/* background-color: white; */
}

.user_icon{
	float: left;
}

.user_icon image{
	width: 80upx;
	height: 80upx;
}

.user_name{
	margin-left: 90upx;
	color: #757575;
	font-size: 13px;
	height: 40upx;
}

.user_comment{
	margin-left: 90upx;
	color: #757575;
	font-size: 14px;
	height: 40upx;
}
</style>
