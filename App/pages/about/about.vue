<template>
  <view class="aboutContainer">
    <view class="logo">
      <image src="../../static/logo.png"></image>
    </view>
    <view class="aboutList">
      <view class="about_item">
        <view class="title">功能介绍</view>
        <image class="more" src="../../static/iconfont/more.png"></image>
      </view>
      <view class="about_item">
        <view class="title">帮助与反馈</view>
        <image class="more" src="../../static/iconfont/more.png"></image>
      </view>
      <view class="about_item">
        <view class="title">当前版本</view>
        <text>1.0.0</text>
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
@import url("./about.css");
</style>
