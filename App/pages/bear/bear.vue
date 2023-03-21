<template>
	<view class="bear">
		
		<view class="nav">
			<view class="nav-box" @click="isSelect1">
				<view class="nav-left" :style="'border-bottom:'+[isselect ? '2px solid #007AFF':'none']">
					提醒
				</view>
			</view>
			<view class="nav-box" @click="isSelect2">
				<view class="nav-right" :style="'border-bottom:'+[isselect ? 'none':'2px solid #007AFF']">
					闹钟
				</view>
			</view>
		</view>
		
		
		<view class="remind" v-if="isselect">
			<view class="title">
				提醒事项
			</view>
			<!-- <scroll-view scroll-y="true" class="scrollView" show-scrollbar="false"> -->
				<checkbox-group @change="getValue">
					<view class="remind-item" v-for="(item,index) in reminds">
						<uni-datetime-picker :value="item.time" start="1276129830000" end="1754841982000" @change="timestampChange"  hide-second="true"></uni-datetime-picker>
						<view class="top">
							<input class="record" type="text" :value="item.content" placeholder="输入提醒事项"/>
							<checkbox :value="index"/>
						</view>
					</view>
				</checkbox-group>
			<!-- </scroll-view> -->
			<view class="add" @click="addRemind">
				添加提醒事项
		</view>
		</view>
		
		
		
		<view class="alarmClock" v-if="!isselect">
			<!-- <scroll-view scroll-y="true" class="scrollView" show-scrollbar="false"> -->
				<view class="alarmclock" v-for="item in alarmClock">
					<long-date type="day" :openStatus="true" @select="onSelectTime"></long-date>
				</view>
			<!-- </scroll-view> -->
			<view class="add" @click="addAlarmClock">
				添加闹钟
			</view>
		</view>
			
		<button @click="getWs()">请求</button>	
		
		
		
	</view>
</template>

<script>
	import remindsData from'./remindData.js';
	import longDate from "@/components/long-date/long-date.vue";
	export default {
		components: { 
		    longDate
		},
		data() {
			return {
				isselect:true,
				active: null,
				reminds:[],
				alarmClock:[{}],
				socketOpen:false,
				socketMsgQueue:['A'],
			}
		},
		onLoad() {
			this.getReminds(); 
			
			// 发送请求 请求唱歌
			// uni.request({
			// 	url:"http://localhost:8081",
			// 	data:'A',
			// 	success(res){
			// 		console.log(res);
			// 	},
			// 	fail(err){
			// 		console.log(err);
			// 	}
				
			// })
		},
		methods: {
			//提醒 闹钟转化
			isSelect1:function(){
				this.isselect=true;
			},
			isSelect2:function(){
				this.isselect=false;
			},
			//插件勿删
			onSelectTime(val) {
			    console.log(val);
			},
			addAlarmClock:function(){
				let data={};
				this.alarmClock.push(data);
			},
			//取选择到提醒事项的索引
			getValue:function(e){
				console.log(e.detail.value);
			},
			//提示事项已读
			// isConfirm:function(){
			// 	this.isconfirm=!this.isconfirm;
			// },
			// radioChange(index) {
			// 	console.log(index);
			//     if (this.active== index) { // 如果已经选中，则取消选中
			//         this.active= null;
			//     } else { // 否则进行选中赋值
			//             this.active= index;
			//         }
			// },
			//确认时间
			timestampChange:function(e){
				let time=this.format(e);
				console.log(time);
			},
			//未满10则加0
			add0:function(m){return m<10?'0'+m:m },
			//时间转换
			format:function(shijianchuo){
				//shijianchuo是整数，否则要parseInt转换
				var time = new Date(shijianchuo);
				var y = time.getFullYear();
				var m = time.getMonth()+1;
				var d = time.getDate();
				var h = time.getHours();
				var mm = time.getMinutes();
				var s = time.getSeconds();
				return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
			},
			//获取事项列表
			getReminds:function(){
				this.reminds=remindsData.remindItem();
				// console.log(this.reminds);
			},
			//增加提醒
			addRemind:function(){
				let data={
					content:'',
					time:'',
				};
				let len=this.reminds.length;
				this.reminds.push(data);
				if(this.reminds[len-1].content!=''){
					
				}
			},
			getWs(){
				
				var socketOpen = false;
				var socketMsgQueue = ['A'];
				
				
				uni.connectSocket({
				  url: 'ws://localhost:8888'
				});
				
				uni.onSocketOpen(function (res) {
				  socketOpen = true;
				  console.log('WebSocket连接已打开！');
				  for (var i = 0; i < 1; i++) {
				    sendSocketMessage(socketMsgQueue[i]);
				  }
				  socketMsgQueue = [];
				});
				function sendSocketMessage(msg) {
				  if (socketOpen) {
				    uni.sendSocketMessage({
				      data: msg
				    });
				  } else {
				    socketMsgQueue.push(msg);
				  }
				}
				
				
				
				
			}
		}
	}
</script>

<style>
	.bear{
		position: relative;
	}
	.nav{
		width: 100%;
		height: 60upx;
		display: flex;
		justify-content:  space-around;
		padding: 0 30upx;
		position: fixed;
		top:44px;
		left: 0;
		background: #f9f9f9;
		z-index: 99;
	}
	.nav-box{
		display: flex;
		justify-content: center;
		width: 50%;
	}
	.nav-left{
		width: 60%;
		text-align: center;
	}
	.nav-right{
		width: 60%;
		text-align: center;
	}
	.remind{
		margin-top: 60upx;
		padding:0 50upx ;
		/* display: none; */
	}
	.title{
		margin-top: 20upx;
		font-size: 40upx;
		color: #007AFF;
	}
	.scrollView{
		/* height: 1000upx; */
	}
	.remind-item{
		border-radius: 20upx;
		background: #f9f9f9;
		padding:10upx 20upx 20upx;
		margin-top: 20upx;
	}
	.top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10upx;
	}
	.record{
		display: block;
		width: 550upx;
		border-bottom: 1px solid #C0C0C0;
		white-space: nowrap;
		overflow: auto;
		text-overflow: ellipsis;
		margin-right: 40upx;
	}
	.select{
		width:48upx;
		height: 48upx;
		border: 2px solid #007AFF;
		border-radius: 99upx;
		box-sizing: border-box;
	}
	.confirm{
		width: 30upx;
		height: 30upx;
		background-color: #007AFF;
		border-radius: 99upx;
		margin: 6upx 6upx;
	}
	.displaynone{
		display: none;
	}
	.alarmClock{
		margin-top: 60upx;
	}
	.add{
		position: fixed;
		width: 100%;
		background:#f9f9f9;
		padding: 30upx 50upx 30upx;
		bottom:env(safe-area-inset-bottom);
		left:0;
		z-index: 99;
		font-size: 40upx;
		color: #007AFF;
	}
</style>
