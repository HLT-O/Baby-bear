<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>水果为啥要打蜡？</h2>
			</view>
			<view class="time">
				2017-03-30 07:47 
			</view>
		</view>
		<view class="image">
			<image src="../../static/sc1.png" mode=""></image>
		</view>
		<view class="content">
			<p>动脑筋爷爷：</p>
			<p>妈妈从超市买的苹果可好看了，摸着也滑溜溜的。妈妈说，这是因为打了蜡。水果为什么要打蜡呢？打蜡的水果有害吗？</p>
			<p>小冉：</p>
			<p>给水果打蜡是果蔬正常的采后保鲜处理，也是果蔬加工过程中的必需环节。因为被采摘下来的果蔬要经过长途运输，采取一定的保鲜措施才能更好地保证果蔬的质量。</p>
			<p>打蜡一般采用浸渍、涂抹、喷布等方法，风干后，蜡会在果蔬的表面形成一层薄薄的、透明的膜。打蜡后，果蔬能够减慢呼吸代谢，减少水分损失，防止被霉菌感染，还能防止被害虫侵袭。</p>
			<p>咱们国家2011版的《食品添加剂使用标准》规定，在水果表面使用的食用蜡，包括巴西棕榈蜡和吗啉脂肪酸盐果蜡。巴西棕榈蜡是从棕榈树叶上提取的天然植物蜡，在水果表面的最大使用量为每千克0.0004克；吗啉脂肪酸盐果蜡是以吗啉脂肪酸盐为乳化剂、用天然动植物蜡及水制成的果蜡，可以涂敷在柑橘、苹果等果实的表面。因此，如果严格按照国家相关标准给水果打蜡，食品安全性还是可以保证的，我们不必过分担心。</p>
			<p>如果实在不放心，你可以用温盐水好好洗刷水果，或者把皮削掉再吃就好啦！</p>
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
