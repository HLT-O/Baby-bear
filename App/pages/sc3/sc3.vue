<template>
	<view class="container">
		<view class="header">
			<view class="title">
				<h2>“盘中餐”哪里来？</h2>
			</view>
			<view class="time">
				2020-12-01 10:22 
			</view>
		</view>
		<view class="image">
			<image src="../../static/sc3.png" mode=""></image>
		</view>
		<view class="content">
			<p>每年的10月16日是世界粮食日。在本期 《争做光盘侠 盘盘齿留香》栏目中，我们要说 一说当今世界最重要的粮食作物之一 —— 稻。</p>
			<p>说到稻，E探脑海里立刻浮现出一碗晶莹剔透、清香松软的大米饭。大米的前身，是水 稻结出的种子——稻谷。所以，要想吃上香喷 喷的大米饭，我们就要先栽种水稻。快来一起 看看，咱们爱吃的大米饭是怎么来的吧——</p>
			<h3>准备秧田 浸泡稻种</h3>
			<p>想让水稻种子茁壮成长， 首先要给它准备一个舒适的 “家”——秧田。春天到来 时，人们开始翻耕田地，把硬 土耙碎、把泥土抚平。</p>
			<p>同时，人们还要选出饱 满、健壮的种子，在三十五摄 氏度左右的温水里反复浸泡几 天，等种皮膨胀、软化，准备 发芽。</p>
			<h3>发芽期 幼苗期</h3>
			<p>种子不断吸水，三四天 后，就会发出根和芽。</p>
			<p>这时，人们便将它们播 撒到秧田中去。二十天左右， 稻种就会长出三片叶子变成秧 苗。随着叶子慢慢长大，秧 苗也从靠种子里的养分“吃 饭”，变成靠新长出的根吸水 和叶子光合作用“吃饭”了。</p>
			<h3>成苗期 插秧</h3>
			<p>慢慢地，叶子从三片变成四到 五片。秧田显得拥挤起来，该“搬 家”喽！人们将秧苗从秧田中拔 出，分株移植到稻田中。</p>
			<p>人们一边倒退，一边插秧。插 秧的深度约为两厘米，秧苗间距约 二十五厘米。这样既可以让秧苗恢 复在“搬家”过程中受到的损伤， 还可以让每株秧苗都能获得充分的 空间和阳光，继续顺利生长。</p>
			<h3>分蘖期 拔节期</h3>
			<p>在“新家”重新扎根后， 秧苗反复分蘖（niè）（从主 茎或早期叶子基部不断伸出 新株）之后，开始拔节（水 稻的茎秆一节一节地向上伸 长），茎秆的顶部里面也开 始孕育稻穗。</p>
			<h3>穗期 成熟期</h3>
			<p>在“新家”重新扎根后， 秧苗反复分蘖（niè）（从主 茎或早期叶子基部不断伸出 新株）之后，开始拔节（水 稻的茎秆一节一节地向上伸 长），茎秆的顶部里面也开 始孕育稻穗。</p>
			<h3>收获期 晒干、碾米</h3>
			<p>秋天到，收获的时节也到了！人们收割稻穗、脱出稻谷、晾晒谷粒、去 掉稻壳……白花花的大米 终于跟大家见面啦！</p>
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
