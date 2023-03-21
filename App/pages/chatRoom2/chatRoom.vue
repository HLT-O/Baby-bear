<template>
	<view class="chatRoom">
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView" >
			<view class="chat-main" :style="{paddingBottom:input+'px'}">
				<view class="chat-block" v-for="(item,index) in msgs" :key="index" :id="'m'+item.tip">
					<view class="chat-time"v-if="item.time!=''">{{changeTime(item.time)}}</view>
					<view class="chat-info c-left" v-if="item.id=='b'">
						<image :src="item.imgurl" class="info-head"></image>
						<!-- 文字 -->
						<view class="chat-content" v-if="item.types=='0'">
							{{item.message}}
						</view>
						<!-- 图片 -->
						<view class="chat-content" v-if="item.types=='1'">
							<image :src="item.message" mode="widthFix" @tap="perviewImg(item.message)"></image>
						</view>
						<!-- 语音 -->
						<view class="chat-content" v-if="item.types=='2'" >
							<view class="msg-text voice" :style="{width:item.message.time*4+'px'}" @tap="playVoice(item.message.voice)">
								<image src="../../static/iconfont/chat/yuyin.png" class="voice-img"></image>
							{{item.message.time}}″
							</view>
						</view>
					</view>
					
					<view class="chat-info c-right" v-if="item.id!='b'">
						<image :src="item.imgurl" class="info-head"></image>
						<view class="chat-content" v-if="item.types=='0'">
							{{item.message}}
						</view>
						<view class="chat-content" v-if="item.types=='1'">
							<image :src="item.message" mode="widthFix" @tap="perviewImg(item.message)"></image>
						</view>
						<!-- 语音 -->
						<view class="chat-content" v-if="item.types=='2'">
							<view class="msg-text voice" :style="{width:item.message.time*4+'px'}" @tap="playVoice(item.message.voice)">
								{{item.message.time}}″
								<image src="../../static/iconfont/chat/yuyin.png" class="voice-img"></image>
							
							</view>
						</view>
					</view>
				</view>
<!-- 				<view class="chat-block">
					<view class="chat-time">12:12</view>
					<view class="chat-info c-left">
						<image src="../../static/image/chat/t3.jpeg"></image>
						<view class="chat-content">
							你好啊！我的朋友，多日不见，甚是想念，
						</view>
					</view>
				</view>
				
				<view class="chat-block">
					<view class="chat-time">12:12</view>
					<view class="chat-info c-right">
						<image src="../../static/image/chat/t3.jpeg"></image>
						<view class="chat-content">
							你好啊！我的朋友
						</view>
					</view>
				</view> -->
			</view>
		</scroll-view>
		<submit @inputss="inputsss" @heights="heights"></submit>
<!-- 		<view class="bottom">
		</view> -->
	</view>
</template>

<script>
	import chatRoomData from'./chatRoomData.js';
	import myFunction from'../../JS/myFunction.js';
	import submit from'../../components/submit/submit.vue';
	export default {
		data() {
			return {
				msgs:[],
				imgMsg:[],
				oldTime:new Date(),
				scrollToView:'',
				input:'50',
			}
		},
		onLoad() {
			this.getMsg();
		},
		components:{
			submit,
		},
		methods: {
			//处理时间
			changeTime:function(e){
				return myFunction.chatDateTime(e);
			},
			//获取聊天数据
			getMsg:function(){
				let msg = chatRoomData.message();
				for(var i=0; i<msg.length;i++){
					msg[i].imgurl='../../static/image/chat/'+msg[i].imgurl;
					//时间间隔
					if(i<msg.length-1){
						let t=myFunction.spacTime(this.oldTime,msg[i].time);
					if(t){
						this.oldTime=t;
					}
					msg[i].time=t;
					}
					
					//补充图片地址
					if(msg[i].types==1){
						msg[i].message='../../static/image/chat/'+msg[i].message;
						this.imgMsg.unshift(msg[i].message);
					}
				//倒叙插入
				this.msgs.unshift(msg[i]);
				}
				//跳转到底部
				this.$nextTick(function(){
					this.scrollToView = 'm'+this.msgs[i-2].tip; 
				})
			},
			//预览图片
			perviewImg:function(e){
				//定位点击的图片
				let index=0;
				for(let i=0;i<this.imgMsg.length;i++){
					if(this.imgMsg[i]==e){
						index=i;
					}
				}
				 uni.previewImage({
					current:index,//从点击的图片开始预览
				    urls:this.imgMsg,
				});
			},
			//接收消息
			inputsss:function(e){
				let len=this.msgs.length;
				let nowTime=new Date();
				//时间间隔
				//
				let t=myFunction.intervallTime(this.oldTime,nowTime);
				if(t){
					this.oldTime=t;
				}
				nowTime=t;
				let data={
					id:'a',
					imgurl:'../../static/image/chat/t4.png',
					message:e.message,
					types:e.types,
					time:nowTime,
					tip:len,
				};
				this.msgs.push(data);
				//跳转至最后一句条消息
				this.$nextTick(function(){
					this.scrollToView = 'm'+len; 
				})
				if(e.types==1){
					this.imgMsg.push(e.message);
				}
			},
			//音频播放
			playVoice:function(e){
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = e;
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
			},
			//接收框高度
			heights:function(e){
				this.input=e;
				this.goBottom();
			},
			//滚动到最底部
			goBottom:function(){
				this.scrollToView='';
				this.$nextTick(function(){
					let len=this.msgs.length-1;
					this.scrollToView = 'm'+this.msgs[len].tip; 
				})
			}
		}
	}
</script>

<style>
	@import url("chatRoom.css");
</style>
