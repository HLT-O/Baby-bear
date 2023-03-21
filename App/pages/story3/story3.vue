<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>谁搬走了我的树荫</h2>
			</view>
			<view class="time">
				2017-03-30 07:47 
			</view>
		</view>
		<view class="image">
			<image src="../../static/story3.jpg" mode=""></image>
		</view>
		<view class="content">
			<p>火辣辣的太阳像一个大火球，炙烤着大地。</p>
			<p>“热呀!”小狗一个劲儿地吐着舌头：“真受不了!”</p>
			<p>“大树下面有树荫，可能没那么热。我到大树下去乘乘凉吧。”小狗跑到一棵大树下。</p>
			<p>树荫下真凉爽呀!小狗躲在树下，不知不觉睡着了。</p>
			<p>“好热呀!”小母鸡“扑棱”着翅膀飞也似地跑到树荫下，“我要在这里凉快凉快。”</p>
			<p>小狗在睡梦中被热醒了，睁开眼睛一看：头顶上是火辣辣的太阳，树荫已经移到了大树的另一边。树荫下，一只小母鸡正半眯着眼，享受着树荫给它带来的阴凉。</p>
			<p>“可恶的小母鸡，趁我睡着的时候抢走了我的树荫!”小狗非常生气，过去和小母鸡论理：“你怎么能这样做?太自私了吧!”</p>
			<p>“我……我没有抢你的树荫呀!”看到怒气冲冲的小狗，小母鸡吓坏了。</p>
			<p>“还想抵赖?那我问你，树荫怎么跑到你那一边了。”小狗还很理直气壮呢。</p>
			<p>“我怎么知道?我来的时候，树荫就在这一边了。”小鸡解释说，“我还纳闷，你怎么不睡在树荫下呢?”</p>
			<p>“我才不信你的话，我要把树荫搬回来。”小狗用劲儿推着大树，希望树荫能回到原来的位置去，可是忙得满头大汗，树荫并没有动。小狗好泄气呀!</p>
			<p>“小狗哥哥，你别忙了。树荫还给你，我走了!”</p>
			<p>“还说不是抢了我的树荫，认了吧?”看着小母鸡远走的背影，小狗很得意。</p>
			<p>第二天，小狗又到树荫下去乘凉，“怎么回事？树荫又回到原来的位置了。”</p>
			<p>“别管他，这次我不让人搬走我的树荫了。要乘凉，一起坐呀！没必要搬来搬去的嘛!”小狗想。</p>
			<p>小狗就坐在树荫下乘凉。这次，小狗发现，没有人搬走树荫，是树荫自己挪了位。“怎么回事呀?树荫没有脚，怎么会走呢?”小狗想呀想，却怎么也想不明白。这时山羊爷爷来了。小狗向山羊爷爷请教。山羊爷爷摸着胡子笑呵呵地说：“自己动脑筋好好想想。</p>
			<p>小狗看看太阳，看看树，终于明白了：原来是太阳让树荫移了位!自己错怪了小母鸡。</p>
			<p>“一定要向小母鸡道歉!”小狗向小母鸡家走去。</p>
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
