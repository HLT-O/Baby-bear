<template>
	<view class="chat"  v-if="isLogin==true">
		<view class="head" v-if="userInfo.identity==1"> 
			<view class="head-left">
				<navigator url="../QRcode/QRcode">
					<image class="portrait" src="../../static/haizi.png" mode=""></image>
				</navigator>
				<text class="name">儿童{{userInfo.id}}</text>
			</view>
			<view class="head-right">
				<navigator url="../scanCode/scanCode">
					<image src="../../static/image/chat/tianjia.png" mode=""></image>
				</navigator>	
			</view>
		</view>  
		<view class="head" v-else-if="userInfo.identity==2">
			<view class="head-left">
				<navigator url="../QRcode/QRcode">
					<image class="portrait" src="../../static/stu.png" mode=""></image>
				</navigator>
				<text class="name">帮扶人员{{userInfo.id}}</text>
			</view>
			<view class="head-right">
				<navigator url="../scanCode/scanCode">
					<image src="../../static/image/chat/tianjia.png" mode=""></image>
				</navigator>	
			</view>
		</view>  
		<view class="head" v-else-if="userInfo.identity==3">
			<view class="head-left">
				<navigator url="../QRcode/QRcode">
					<image class="portrait" src="../../static/jiazhang.png" mode=""></image>
				</navigator>
				<text class="name">家长{{userInfo.id}}</text>
			</view>
			<view class="head-right">
				<navigator url="../scanCode/scanCode">
					<image src="../../static/image/chat/tianjia.png" mode=""></image>
				</navigator>	
			</view>
		</view>  
		
		
		<!-- 原来的好友列表，，重要勿删 -->
<!-- 		<view class="chat-list">
				<view class="friend" v-for="(item,index) in friends" :key="item.id" @click="navigator">
				<view class="friend-left">
					<image :src="item.imgurl" mode=""></image>
					<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
				</view>
				<view class="friend-info">
					<text class="friend-name">{{item.name}}</text>
					<text class="news">{{item.news}}</text>
				</view>
				<view class="time">
					{{changeTime(item.time)}}
				</view>
			</view> -->
			
			
			<!-- 静态的好友列表 -->
			
			<view class="chat-list" v-if="userInfo.identity==1">
				<navigator url="../chatRoom/chatRoom">
					<view class="chat-item">
					<view class="friend" >
					<view class="friend-left">
						<image src="../../static/image/chat/stu.png"></image>
						<text class="tip">2</text>
					</view>
					<view class="friend-info">
						<text class="friend-name">帮扶人员14</text>
						<text class="news">今天过得怎么样呀，</text>
					</view>
					<view class="time">
						{{changeTime(new Date()-1000*60*2)}}
					</view>
					</view>
				</view>
				</navigator>
				
				<navigator url="../chatRoom2/chatRoom">
					<view class="chat-item">
						<view class="friend" >
					<view class="friend-left">
						<image src="../../static/jiazhang.png"></image>
					</view>
					<view class="friend-info">
						<text class="friend-name">家长</text>
						<text class="news">好好学习</text>
					</view>
					<view class="time">
						{{changeTime(new Date())}}
					</view>
					</view>
					</view>
				</navigator>
				
				<navigator url="../chatRoom3/chatRoom">
				<view class="chat-item">
					<view class="friend">
					<view class="friend-left">
						<image src="../../static/stu.png"></image>
						<text class="tip">3</text>
					</view>
					<view class="friend-info">
						<text class="friend-name">帮扶人员12</text>
						<text class="news">好的，没事就好</text>
					</view>
					<view class="time">
						{{changeTime(new Date())}}
					</view>
					</view>
					</view>
				</navigator>
			</view>
			
			<view class="chat-list" v-if="userInfo.identity==2">
				<navigator url="../chatRoom/chatRoom">
					<view class="chat-item">
					<view class="friend" >
					<view class="friend-left">
						<image src="../../static/haizi.png"></image>
						<text class="tip">2</text>
					</view>
					<view class="friend-info">
						<text class="friend-name">儿童8</text>
						<text class="news">今天心情很不错</text>
					</view>
					<view class="time">
						{{changeTime(new Date()-1000*60*2)}}
					</view>
					</view>
				</view>
				</navigator>
				
				<navigator url="../chatRoom2/chatRoom">
					<view class="chat-item">
						<view class="friend" >
					<view class="friend-left">
						<image src="../../static/jiazhang.png"></image>
					</view>
					<view class="friend-info">
						<text class="friend-name">家长8</text>
						<text class="news">好的 谢谢你</text>
					</view>
					<view class="time">
						{{changeTime(new Date())}}
					</view>
					</view>
					</view>
				</navigator>
				
				<navigator url="../chatRoom3/chatRoom">
				<view class="chat-item">
					<view class="friend">
					<view class="friend-left">
						<image src="../../static/stu.png"></image>
						<text class="tip">3</text>
					</view>
					<view class="friend-info">
						<text class="friend-name">帮扶人员13</text>
						<text class="news">好的，这边工作就交给你了</text>
					</view>
					<view class="time">
						{{changeTime(new Date())}}
					</view>
					</view>
					</view>
				</navigator>
			</view>
			
			<view class="chat-list" v-if="userInfo.identity==3">
				<navigator url="../chatRoom/chatRoom">
					<view class="chat-item">
					<view class="friend" >
					<view class="friend-left">
						<image src="../../static/haizi.png"></image>
						<text class="tip">2</text>
					</view>
					<view class="friend-info">
						<text class="friend-name">儿童16</text>
						<text class="news">今天心情很不错</text>
					</view>
					<view class="time">
						{{changeTime(new Date()-1000*60*2)}}
					</view>
					</view>
				</view>
				</navigator>
				
				<!-- <navigator url="../chatRoom2/chatRoom">
					<view class="chat-item">
						<view class="friend" >
					<view class="friend-left">
						<image src="../../static/jiazhang.png"></image>
					</view>
					<view class="friend-info">
						<text class="friend-name">家长8</text>
						<text class="news">好的 谢谢你</text>
					</view>
					<view class="time">
						{{changeTime(new Date())}}
					</view>
					</view>
					</view>
				</navigator>
				 -->
				<navigator url="../chatRoom3/chatRoom">
				<view class="chat-item">
					<view class="friend">
					<view class="friend-left">
						<image src="../../static/stu.png"></image>
						<text class="tip">3</text>
					</view>
					<view class="friend-info">
						<text class="friend-name">帮扶人员13</text>
						<text class="news">好的，这边工作就交给你了</text>
					</view>
					<view class="time">
						{{changeTime(new Date())}}
					</view>
					</view>
					</view>
				</navigator>
			</view>
			
			
	</view>
</template>

<script>
	import chatData from'./chatData.js';
	import myFunction from'../../JS/myFunction.js';
	export default {
		data() {
			return {
				friends:[],
				userInfo:'',
				isLogin:''
			}
		},
		onLoad() {
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
			
			this.getFrinds();
			
		},
		onShow() {
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
			if(this.isLogin==false){
				uni.showLoading({
					title:'请先登录'
				});
				setTimeout(function(){
					uni.hideLoading();
				},700);
			}
			console.log(this.isLogin)
			
			this.getFrinds();
			
		},
		methods: {
			//处理时间
			changeTime:function(e){
				return myFunction.dateTime(e);
			},
			//获取好友列表
			getFrinds:function(){
				this.friends=chatData.frineds();
				console.log(this.friends); 
			},
			// navigator1:function(){
			// 	uni.navigateTo({
			// 		url:"../chatRoom/chatRoom"
			// 	});
			// },
			// navigator2:function(){
			// 	uni.navigateTo({
			// 		url:"../chatRoom2/chatRoom"
			// 	});
			// },
			// navigator3:function(){
			// 	uni.navigateTo({
			// 		url:"../chatRoom3/chatRoom2"
			// 	});
			// }
		}
	}
</script>

<style>
@import url("chat.css");
</style>
