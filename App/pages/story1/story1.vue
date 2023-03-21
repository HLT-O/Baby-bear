<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>其实我很棒</h2>
			</view>
			<view class="time">
				2017-03-30 07:47 
			</view>
		</view>
		<view class="image">
			<image src="../../static/story1.jpg" mode=""></image>
		</view>
		<view class="content">
			<p>清晨，阳光穿过树叶间的空隙，透过早雾，一缕缕的洒满了整片森林。</p>
			<p>为了将森林建设得更加美丽，大家都在努力工作呢，啄木鸟在树上悄悄啄啄，尖利的长嘴是害虫，没有藏身之地。</p>
			
			<p>小猴子在树木间跳来跳去，把缠在树干上的系统扯下来，让树木长得更加茂盛，小松鼠就更忙了，她先用尖牙把一颗颗松果咬下来，然后再用爪子把土刨开，将松球埋进土里。</p>
			
			<p>看到大家忙碌的身影，小象落寞的坐在一棵大树后，心想我没有啄木鸟的长嘴，也没有猴子的巧手和松鼠的尖牙利爪，我什么都没有，真是太差劲了。</p>
			<p>想着想着，小象落下了伤心的泪水。</p>
			<p>夜幕降临，小象起身回家，没想到却被地上的枯树干绊了一跤。</p>
			<p>小象生气极了，用鼻子卷起枯树干，一下子把它扔得远远的。</p>
			<p>忽然间小象明白了什么，于是他高兴的跑回家告诉妈妈，我发现我有鼻子，妈妈听了哈哈大笑起来，你本来就有鼻子呀。</p>
			<p>小象红着脸，不好意思的笑了。</p>
			<p>夜渐渐的深了，小象躺在床上，想我明天一定要大干一场，想着想着她进入了甜美的梦乡。</p>
			<p>第二天小霞早早的起床了，他用鼻子卷走了森林里横七竖八的枯树干，小松鼠在小巷腾出的空地上播种，他们配合得完美极了，不久这片空地上长出一棵小树苗，大家都夸奖小将有一个能干的鼻子。</p>
			<p>小象开心的甩了甩鼻子，心想我为什么要否定自己呢？ 其实我很棒。</p>
			<p>森林里每个人都有自己的闪光点，唯独小象觉得自己一无是处，无意中小象发现了自己的长处——长鼻子，从而找到了自信。每个人身上都有闪光点，把众人的目光吸引过来，让孩子在人生的舞台上淋漓尽致地展示自己，实现自我价值。</p>
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
