<template>
  <view class="container">
    <view class="header">
      <view class="title">
        <h2>拔萝卜 经典儿歌 卡通动画</h2>
      </view>
      <view class="time"> 2020-10-25 14:32 </view>
    </view>
    <view class="image">
      <video
        src="../../static/video1.mp4"
        controls
      ></video>
    </view>
    <view class="content">
      <h3>经典中文儿歌《拔萝卜》让你的心情开心起来</h3>
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
@import url("./child_video2");
</style>
