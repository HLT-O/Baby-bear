<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>小白兔晒太阳</h2>
			</view>
			<view class="time">
				2017-03-30 07:47 
			</view>
		</view>
		<view class="image">
			<image src="../../static/story4.jpg" mode=""></image>
		</view>
		<view class="content">
			<p>小白兔可喜欢阳光了。</p>
			<p>春天来了，小白兔去树林里采蘑菇，他把新鲜的蘑菇穿起来，放在太阳底下晒晒，做成蘑菇干．煮汤时放几个，味道可鲜美啦!</p>
			<p>夏天来了，小白兔去小河边钓鱼，他把小鱼挂起来，放在太阳底下晒晒，做成小鱼干送给小猫，小猫高兴极啦!</p>
			<p>秋天来了，小白兔去田野上采野菊花，他把一朵朵白色的野菊花放在太阳底下晒晒，做成菊花茶，泡出来香喷喷的，小动物们都说好喝。</p>
			<p>冬天来了，外面很冷很冷，小白兔更喜欢阳光了。他把小被子和小枕头抱到外面，放在太阳底下晒晒，自己也坐在窗前，读一本好看的图画书。太阳晒呀晒呀，把被子晒得松松软软的，把枕头晒得松松软软的，把小白兔的毛也晒得松松软软的。</p>
			<p>晚上，小白兔钻进了松松软软的被窝，变成了一只毛茸茸的兔子，睡得香喷喷的。</p>
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
