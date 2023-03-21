<template>
	<view class="input-msg" :style="paddingBottom">
		<view class="input-content">
			<image :src="recordImg" class="put-img1" mode="widthFix" @tap="changeRecord"></image>
			<textarea fixed="true" auto-height="true" :class="{displaynone:!isrecord}" 
						@input="inputs" v-model="msg" @focus="focus" @blur="blur"/>
			<view class="record" :class="{displaynone:isrecord}" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove">按住说话</view>
			<image :src="emojiImg" class="put-img2" mode="widthFix" @tap="emoji"></image>
			<image :src="otherImg" class="put-img3" mode="widthFix" @tap="other"></image>
		</view>
		<view class="emoji" :class="{displaynone:isemoji}">
			<view class="emoji-send">
				<view class="emoji-send-det" @tap="emojiBack"><image src="./emoji/img/tg.png"></image></view>
				<view class="emoji-send-bt" @tap="emojiSend">发送</view>
			</view>
			<emoji @emotion="emotion" :height="260"></emoji>
		</view> 
		<view class="other" :class="{displaynone:isother}">
			<view class="other-list" @tap="sendImg('album')">
				<image src="../../static/iconfont/chat/zp.png"></image>
				<view class="other-list-title">图片</view>
			</view>
			<view class="other-list" @tap="sendImg('camera')">
				<image src="../../static/iconfont/chat/xj.png" ></image>
				<view class="other-list-title">拍照</view>
			</view>
			<view class="other-list">
				<image src="../../static/iconfont/chat/wz.png"></image>
				<view class="other-list-title">定位</view>
			</view>
			<view class="other-list">
				<image src="../../static/iconfont/chat/sp.png"></image>
				<view class="other-list-title">视频</view>
			</view>
			<view class="other-list">
				<image src="../../static/iconfont/chat/wj.png"></image>
				<view class="other-list-title">文件</view>
			</view>
		</view>
		<view class="voice-bg" :class="{displaynone:voiceBg}" >
			<view class="voice-bg-len">
				<view class="voice-bg-time" :style="{width:vlength/0.6+'%'}">{{vlength}}″</view>
			</view>
			<view class="voice-del">上划取消录音</view>
		</view>
	</view>
</template>

<script>
	import emoji from'./emoji/emoji.vue';
	//录音
	const recorderManager = uni.getRecorderManager();
	export default{
		data(){
			return{
				isrecord:true,
				isemoji:true,
				isother:true,
				otherImg:"../../static/iconfont/chat/jia.png",
				emojiImg:"../../static/iconfont/chat/bq.png",
				recordImg:"../../static/iconfont/chat/yy.png",
				msg:'',
				paddingBottom:'padding-bottom:env(safe-area-inset-bottom);',
				timer:'',
				vlength:0,//音频时长
				voiceBg:true,
				pageY:0,
			}
		},
		components:{
			emoji,
		},
		onLoad(){
		},
		methods:{
			//语音文字切换
			changeRecord:function(){
				if(!this.isrecord){
					this.isrecord=true;
					this.isother=true;
					this.isemoji=true;
					this.recordImg="../../static/iconfont/chat/yy.png";
					this.otherImg="../../static/iconfont/chat/jia.png";
					this.emojiImg="../../static/iconfont/chat/bq.png";
				}else{
					this.isrecord=false;
					this.isother=true;
					this.isemoji=true;
					this.recordImg="../../static/iconfont/chat/jp.png";
					this.otherImg="../../static/iconfont/chat/jia.png";
					this.emojiImg="../../static/iconfont/chat/bq.png";
				}
			},
			//表情
			emoji:function(){
				if(this.isemoji){
					this.isrecord=true;
					this.isemoji=false;
					this.isother=true;
					this.recordImg="../../static/iconfont/chat/jp.png";
					this.emojiImg="../../static/iconfont/chat/bq1.png";
					this.otherImg="../../static/iconfont/chat/jia.png";
				}else{
					this.isemoji=true;
					this.emojiImg="../../static/iconfont/chat/bq.png";
				}
				setTimeout(()=>{
					this.getSubHeight();
				},10)
			},
			//接收表情
			emotion:function(e){
				this.msg=this.msg+e;
			},
			//更多功能
			other:function(){
				if(this.isother){
					this.isother=false;
					this.isemoji=true;
					this.otherImg="../../static/iconfont/chat/jia1.png";
					this.emojiImg="../../static/iconfont/chat/bq.png";
				}else{
					this.isother=true;
					this.otherImg="../../static/iconfont/chat/jia.png";
				}
				setTimeout(()=>{
					this.getSubHeight();
				},10)
			},
			//文字发送
			inputs:function(e){
				var chatm=e.detail.value;
				var pos=chatm.indexOf('\n');
				if(pos!=-1&&chatm.length>1){
					// this.$emit('inputss',this.msg);
					// setTimeout(()=>{
					// 	this.msg='';
					// },0)
					this.send(this.msg,0);
				}
			},
			//图片发送
			sendImg:function(e){
				let count =9;
				if(e=='album'){
					count=9;
				}else{
					count=1;
				}
				uni.chooseImage({
					count:count,//默认9
					sizeType:['original','compressed'],
					sourceType:[e],
					success:(res)=>{
						const filePaths=res.tempFilePaths;
						for(let i=0;i<filePaths.length;i++){
							this.send(filePaths[i],1);
						}
						// console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			//开始录音
			touchstart:function(e){
				this.pageY=e.changedTouches[0].pageY;//获取触摸时得的位置
				this.vlength='0';
				console.log('开始');
				this.voiceBg=false;
				let i=1;
				this.timer=setInterval(()=>{
					this.vlength=i
					i++;
					console.log(i);
					if(i>60){
						//结束计时
						clearInterval(this.timer);
						this.touchend();
					}
				},1000)
				recorderManager.start();
			},
			//结束录音
			touchend:function(){
				console.log('结束');
				clearInterval(this.timer);
				recorderManager.stop();
				if(this.vlength<1){
					this.vlength=1;
				}
				recorderManager.onStop((res)=> {
					let data={
						voice:res.tempFilePath,
						time:this.vlength,
					}
					if(!this.voiceBg){
						this.send(data,2);
					}
					this.voiceBg=true;
				    // console.log('recorder stop' + JSON.stringify(res));
				    // self.voicePath = res.tempFilePath;
				});
			},
			//取消录音
			touchmove:function(e){
				if(this.pageY-e.changedTouches[0].pageY>100){
					this.voiceBg=true;
					// recorderManager.stop();
				}
			},
			//获取模块高度
			 getSubHeight:function(){
			 	let info = uni.createSelectorQuery().in(this).select(".input-msg");
				info.boundingClientRect(data => { 
					//	data - 包含元素的高度等信息
						this.$emit('heights',data.height);
				}).exec(function(res){
					// 注意：exec方法必须执行，即便什么也不做，否则不会获取到任何数据
				})
			 },
			 //输入框聚焦
			 focus:function(){
				 this.paddingBottom='padding-bottom:0;';
				 this.isemoji=true;
				 this.isother=true;
				 this.otherImg="../../static/iconfont/chat/jia.png";
				 this.emojiImg="../../static/iconfont/chat/bq.png";
				 setTimeout(()=>{
					 this.getSubHeight();
				 },10)
			 },
			 //输入框失焦
			 blur:function(){
				 this.paddingBottom='padding-bottom:env(safe-area-inset-bottom);';
			 },
			 //表情发送
			 emojiSend:function(){
				 if(this.msg.length>0){
				 	// this.$emit('inputss',this.msg);
				 	// setTimeout(()=>{
				 	// 	this.msg='';
				 	// },0)
					this.send(this.msg,0);
				 }
			 },
			 //删除按钮...BUG
			 emojiBack:function(){
				 if(this.msg.length>0){
				 	this.msg=this.msg.substring(0,this.msg.length-1);
				 }
			 },
			 //传入消息类型函数
			send:function(msg,type){
				let data ={
					message:msg,
					types:type,
				}
				this.$emit('inputss',data);
				setTimeout(()=>{
					this.msg='';
				},0)
			}
		}
	}
</script>

<style>
	.input-msg{
		background: #ececec;
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 100;
		padding-bottom:env(safe-area-inset-bottom);
	}
	.input-content{
		display: flex;
		width: 100%;
		align-items: flex-end;
		box-sizing: border-box;
		padding:12upx 10upx; 
	}
	.input-content image{
		flex: auto;
		width: 60upx;
		height: 60upx;
		margin: 0 10upx;
	}
	.input-content textarea{
		width: 530upx;
	/* 	height: 60upx; */
		font-size: 32upx;
		flex: auto;
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 10rpx;
		max-height:120upx ;
	}
	.input-content .record{
		width: 530upx;
		height: 46upx;
		flex: auto;
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 10rpx;
		max-height:120upx ;
		text-align: center;
		line-height:46upx ;
	}
	.displaynone{
		display: none;
	}
	.emoji{
		width: 100%;
		height: 410upx;
		background:#ececec;
		box-shadow: 0px -1upx 0px 0px rgba(0,0,0,0.1);
	}
	.emoji-send{
		display: flex;
		width: 260upx;
		height: 104upx;
		padding-top: 24upx;
		background-color:rgba(236,236,236,0.8);
		border-radius: 8px;
		position: fixed;
		bottom: env(safe-area-inset-bottom);
		right: 0;
	}
	.emoji-send-bt{
		flex: 1;
		margin: 0 32upx 0 20upx;
		height: 80upx;
		background-color: #FFFFFF;
		font-size: 32upx;
		text-align: center;
		line-height: 80upx;
		border-radius: 12upx;
	}
	.emoji-send-det{
		flex: 1;
		margin-left:24upx ;
		height: 80upx;
		background-color: #FFFFFF;
		text-align: center;
		border-radius: 12upx;
	}
	.emoji-send-det image{
		margin-top: 10upx;
		width: 60upx;
		height: 60upx;
	}
	.other{
		width: 100%;
		height: 460upx;
		background:#ececec;
		box-shadow: 0px -1upx 0px 0px rgba(0,0,0,0.1);
		bottom: env(safe-area-inset-bottom);
		padding:8upx 20upx;
		box-sizing: border-box;
	}
	.other-list{
		width: 25%;
		text-align: center;
		float: left;
		padding-top: 32upx;
	}
	.other-list image{
		width: 72upx;
		height: 72upx;
		padding: 24upx;
		background:rgba(255,255,255,1);
		border-radius: 24upx;
	}
	.other-list-title{
		font-size: 24upx;
		color: rgba(39,40,50,0.5);
		line-height: 34upx;
	}
	.voice-bg{
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		top: 0;
		bottom: 0;
		z-index:99;
	}
	.voice-bg-len{
		height: 84upx;
		width: 600upx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background-color:rgba(255,255,255,0.6);
		border-radius: 42upx;
		text-align: center;
	}
	.voice-bg-time{
		display: inline-block;
		min-width: 30upx;
		line-height: 84upx;
		background-color: #007AFF;
		border-radius: 42upx;
	}
	.voice-del{
		position: absolute;
		bottom: 120upx;
		margin-bottom:env(safe-area-inset-bottom);
		width: 100%;
		text-align: center;
		color: #ebebeb;
		font-size: 30upx;
	}
</style>
