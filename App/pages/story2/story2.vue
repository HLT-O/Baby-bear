<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>爱旅行的小火车</h2>
			</view>
			<view class="time">
				2017-03-30 07:47 
			</view>
		</view>
		<view class="image">
			<image src="../../static/story2.jpg" mode=""></image>
		</view>
		<view class="content">
			<p>“哐当，哐当，哐当，”大森林里，跑来一列小火车，小火车的头上冒着阵阵白烟儿，正快乐地唱着歌。</p>
			<p>小火车是个小小旅行家，他有一个美丽的愿望，要带森林里的小动物一同旅行。</p>
			<p>这天早晨，小火车唱着歌，早早地奔向森林里，他又要出发了。小兔和小鹿看见了，背着包向他招手：“小火车，带我们去旅行吧！”</p>
			<p>“咔嚓，咔嚓，哐当！”小火车慢慢停下来，问：“好呀，你们想去哪儿呢？”</p>
			<p>我们想去高山上玩，去喝甜甜的山泉水！”小兔和小鹿一齐说。小火车点点头，打开车门让他们跳上来。</p>
			<p>“哐当，哐当，哐当，”小火车唱起歌跑起来了。不久，他看见小刺猬和小松鼠站在不远处，正冲他摆手哩！</p>
			<p>“小火车，带我们一起去旅行吧！”</p>
			<p>“咔嚓，咔嚓，哐当！”小火车慢慢停下来，问：“好呀，你们想去哪儿呢？”</p>
			<p>“我们想去森林里玩，去吃鲜美的野果子！” 小刺猬和小松鼠一齐说。小火车听了，打开车门，让他们跳上来。</p>
			<p>“哐当，哐当，哐当，” 小火车唱起歌出发了。这一路上，小斑马、小猴、小熊也都跳上小火车，要去旅行了。</p>
			<p>小火车里，小动物越聚越多，他们开了一场热闹的舞会。小火车跑着跑着，听见他的肚子里唱起来：“哐当，哐当，哐当，小火车，热心肠……”</p>
			<p>小火车听着听着，咧开嘴儿笑了。他跑得更带劲了！</p>
			<p>这一天，小火车把大家安全地送到了目的地，小动物们都高兴极了。他们一个个喊着：“小火车，谢谢你！”</p>
			<p>“不客气！”小火车发出哐当哐当的声音。</p>
			<p>不知不觉，天黑了，弯弯的月牙露出了头。虽然这时的候小火车很累，但他却很快乐。月牙爬呀爬，挂上树梢，小火车静静地躺在草地上，闭上眼睛，进入了甜美的梦乡。</p>
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
							<image src="../../static/jiazhang.png"></image>
						</view>
						<view class="user_name">
							家长1
						</view>
						<view class="user_comment">
							哈哈哈哈哈
						</view>
					</view>
					<view class="comment_info">
						<view class="user_icon">
							<image src="../../static/jiazhang.png"></image>
						</view>
						<view class="user_name">
							家长2
						</view>
						<view class="user_comment">
							留守儿童确实值得关心
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
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

.image{
	text-align: center;
	/* margin: 0 auto; */
}

image{
	border-radius: 30upx;
}

.content{
	padding-bottom: 50upx;
}

.content p{
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
