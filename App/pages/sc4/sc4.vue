<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>春江水暖“丫”先知 </h2>
			</view>
			<view class="time">
				2020-11-24 9:22 
			</view>
		</view>
		<view class="image">
			<image src="../../static/sc4.jpg" mode=""></image>
		</view>
		<view class="content">
			<p>爸爸的童年是在乡下 度过的。每一次爸爸讲他 小时候的事情，都讲得津 津有味，我听得入迷。</p>
			<p>听爸爸讲，他小时候 常常到村子里的小河捉鱼， 每次都满载而归。假期里， 爸爸带我去河边捉鱼。河 水哗哗地流淌着，绿色的 水草挥舞着手臂，好像在 欢迎我们的到来；小鱼 三五成群地追逐嬉戏，时 不时地跃出水面，甩一甩 尾巴，和岸边的青草打着 招呼。</p>
			<p>这时，一群小鱼游到 了水边，我瞅准时机，抡 起手中的抄网，结果还没 等网兜入水，鱼群就四散而逃。我有些沮丧地问爸 爸：“爸爸，你小时候真 的捉到过鱼吗？”“真的呀， 我们那时候都用手捉呢！” 爸爸自豪地说。为了证明 给我看，爸爸脱下鞋，准 备下水徒手捉鱼。</p>
			<p>河水不深，刚没过爸 爸的小腿肚儿。爸爸在河 里低着头，弯着腰，像是 一个排雷的工兵。不一会 儿工夫，爸爸抬起身，举 着他的“战利品”，向我 挥动着手臂。“太棒了！ 太棒了！”我边喊边向爸 爸跑去。爸爸果然是捕鱼 “高手”，很快，我的小 桶里已经有好几条小鱼了。</p>
			<p>小鱼在小桶里游来游去，这时爸爸也上了岸， 和我一起欣赏这些可爱 的小家伙。不经意间，我 看到爸爸的脚丫子通红， 我想一定是被冻的，其实 这个时节，山里的河水还 很凉。我的鼻头突然一 酸，很心疼爸爸，我知道他是为了让我高兴才 这么做的。</p>
			<p>我不由得想到一句诗： “春江水暖鸭先知。”其实， 爸爸的脚丫子也知道河水 的冷暖吧？</p>
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

.content p,h3{
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
