<template>
	<view class="remind">
		<view class="title">
			提醒
		</view>
		<scroll-view scroll-y="true" >
			<view class="remind-item" v-for="(item,index) in reminds" :id="index">
				<uni-datetime-picker :value="item.time" start="1276129830000" end="1754841982000" @change="timestampChange"  hide-second="true"></uni-datetime-picker>
				<view class="top">
					<input class="record" type="text" :value="item.content" placeholder="输入提醒事项"/>
					<!-- <view class="select" @tap="isConfirm">
						<view class="confirm" :class="{displaynone:!isconfirm}"></view>
					</view> -->
				</view>
			</view>
		</scroll-view>
		<view class="add" @click="addRemind">
			添加提醒事项
		</view>
	</view>
</template>

<script>
	import remindsData from'./remindData.js';
	export default {
		data() {
			return {
				isconfirm:false,
				reminds:[],
			}
		},
		onLoad() {
			this.getReminds();
		},
		methods: {
			//提示事项已读
			isConfirm:function(){
				this.isconfirm=!this.isconfirm;
			},
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
				console.log(this.reminds);
			},
			//增加提醒
			addRemind:function(){
				let data={
					content:'',
					time:'',
				};
				let len=this.reminds.length;
				if(this.reminds[len-1].content!=''){
					this.reminds.push(data);
				}
				
			}
			
		}
	}
</script>

<style>
	.remind{
		padding:0 50upx ;
		position: relative;
	}
	.title{
		font-size: 50upx;
		color: #007AFF;
	}
	.remind-item{
		
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
	.add{
		position: fixed;
		margin-bottom: 60upx;
		bottom:env(safe-area-inset-bottom);
		left: 10;
		z-index: 99;
		font-size: 40upx;
		color: #007AFF;
	}
</style>
