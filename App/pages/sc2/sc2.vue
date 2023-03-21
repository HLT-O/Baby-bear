<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>考试不马虎的窍门</h2>
			</view>
			<view class="time">
				2017-03-30 07:47 
			</view>
		</view>
		<view class="image">
			<image src="../../static/sc2.png" mode=""></image>
		</view>
		<view class="content">
			<p>有这样一个真实的故事——</p>
			<p>有一场定时10分钟的数学竞赛，题目竟然有30道，而且难度还很大。这么多题，10分钟内要做完，实在是太紧张了。</p>
			<p>许多同学一拿到试卷，就半秒也不敢耽搁慌忙做题，全然不顾老师“请大家先将试卷浏览一遍再答题”的忠告。</p>
			<p>10分钟后，试卷都被收上来了。老师阅卷时，从中挑出了5份试卷，这5份答卷有一个共同特点，就是从1-28题全都没做，仅回答了最后两个题目。而其他试卷上，前面题目做了不少，还有一位同学做了12道题呢。</p>
			<p>猜猜最后谁获得了竞赛的冠军？哈哈，不是题目做得最多的同学，而是那5个仅仅回答了最后两道题的同学。原来秘密就藏在整个试卷的最下面一行字上——“本张试卷，请同学们只做最后两道题。”</p>
			<p>当然，其他同学可能会说：“哎呀，我粗心了，没看到这句话。”是呀，如果拿到试卷先不着急写，而是从头到尾看一下试卷的大概内容，有几道大题？题型是什么？是不是就能避免这样的“失误”呢？所以说，很多我们平常认为的“粗心、马虎”问题，本质都是缺乏规划，脑子模糊混乱造成的。你知道吗，我们的大脑经常在“拔河”：一方面它很容易“模糊”，习惯顺着感觉走。比如看到一连串的“+”号，就会直接把接下来的符号也想象成是“+”；但另一方面，大脑又特别喜欢有规律、分类清晰的事物。当“模糊”占上风时，我们就会凭着惯性和直觉去做题，表现出“粗心马虎”。</p>
			<p>所以，我们需要改善自己的学习方案，让大脑更清晰、分好类，就能战胜粗心马虎。分享给你几个小窍门——</p>
			<p>1.学会浏览、分类。做试卷之前，先把题目全部浏览一遍，让大脑提前知道试卷题目的总体情况和分类情况。</p>
			<p>2.发现简单规律。抄写算式或数字之前，先找到这组数字或算式的规律，比如，是几道加法、几道减法？加法里是几位数加几位数……</p>
			<p>3.增加“口头验算”。每次做完一道题时，默念一遍题目。像“6-4=10”这种低级错误肯定不会犯。</p>
			<p>最后，一个非常重要的点是：要减轻压力，不要给自己贴上“大马虎”的标签。压力会让人更加紧张，有时反而会更马虎。要相信自己，只要能在学习方案上改善一点点，并且坚持下去，你的大脑就会越来越清晰、有条理！</p>
			
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
