<template>
	<view class="">
		<scroll-view scroll-x class="bg-white nav text-center nav_pos" :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-blue text-bold currentLine cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<swiper :current="TabCur" @change="SwiperChange" :style="{ height:mainHeight + 'px' }">
			<!-- 这个是tabNav的 根据tabNav的长度进行下面的循环 -->
			<swiper-item class="swiperItem" v-for="(wrap,i) in tabNav" :key='i'>
				<view class="cu-card article no-card margin-tops">
					<!-- 对你的接口上的数据进行循环 -->
					<view class="cu-item shadow" v-for="(item,index1) in list" :key="index1">
						<view class="title">
							<view class="text-cut">{{item.title}}</view>
						</view>
						<view class="content">
							<!-- <image :src="item.imgUrl" mode="aspectFill"></image> -->
							<view class="desc">
								<view class="text-content">{{item.desc}}</view>
								<view>
									<view class="cu-tag bg-red light sm round">2020-10-11</view>
									<view class="cu-tag bg-green light sm round">管理员</view>
								</view>
								<view class="flex justify-end ">
									<text class="cuIcon-close"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"panda_swiperTab",
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				mainHeight: 200, //全屏或者局部滑动设置的高度
				tabNav: ['通知公告', '政策法规', '新闻动态'],
				list: [], //中间数组
				notice: [{
						id: 0,
						title: 'Prominent developers say That X.Org has all but given up Wayland is the future of Linux display services',
						imgUrl: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '作为 Linux 平台上的一款显示服务软件，X.Org Server 的最后一个主要版本，仍停留在 2018 年 5 月。如果你期待着 X.Org Server 1.21 在不久的将来发布，那这里有一个坏消息。Phoronix 援引某位来自英特尔的知名开发人员的爆料称，X.Org Server 已是'
					},
					{
						id: 1,
						title: '小程序也被复制粘贴？这个开发者遭遇了抄袭和扒窃',
						imgUrl: 'https://images.pexels.com/photos/4577448/pexels-photo-4577448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '如果你在 2018 年就开始习惯用微信小程序加水印，那你很可能用过「水印大师」这个小程序。做过十个小程序的开发者于军说，「水印大师」是他最用心的小程序，上线两年多来一直有持续的迭代和维护。 作为一个有丰富的小程序开发经验的开发者，于军给我们分享了他这些年开发小程序的故事。他如何把自己的小程序打造为用'
					},
					{
						id: 2,
						title: '这才是最好的程序语言，不服来辩',
						imgUrl: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '娅宁 发自凹非寺 量子位报道公众号 QbitAI 毫不夸张，这是我听过「最动听」的程序员故事。 1024，程序员节。 一个小程序悄然上线，然后迅速在圈内引起波澜，大家争相上传自己的代码，看看一行行敲下的字符，究竟有多优雅。 口罩检测是明快的，失物找回有固定明确的击打节奏，疲劳提醒雄浑之中透着温暖，行'
					},
					{
						id: 3,
						title: '30行代码：让27吨发电机原地爆炸',
						imgUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '只需要 30 行代码 （约 140KB 的文件），就能让 20 吨的发电机原地爆炸？ 这一幕确实发生在了美国爱达荷州的测试场地上。 黑客模拟者将大约 30 行代码推进保护继电器中，不到 23 秒，机器就已经开始摇晃。 又过了几秒钟，发电机开始冒黑烟，最后直接爆炸。 从黑客攻击手段，回溯一项实验 事情'
					},
					{
						id: 4,
						title: '一个人也能做开放世界游戏？独立开发者复盘',
						imgUrl: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: 'GameLook 报道/对于大多数人来说，开放世界似乎是大团队或者 3A 工作室才能做的品类，比如《塞尔达传说：荒野之息》、《上古卷轴 5 天际》、《GTA 5》、《荒野大镖客2》等都是顶级大作。 不过，这不意味着开放世界就是中小团队的禁区，比如海外独立开发者 Adam Robinson-Yu 就在'
					},
					{
						id: 5,
						title: '7款移动浏览器发现假冒网址漏洞',
						imgUrl: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '安全公司 Rapid7 和安全研究员 Rafay Baloch 合作在 7 款移动浏览器上发现了十个假冒网址漏洞。 受影响的浏览器包括了 Apple Safari、Opera Touch 和 Opera Mini，以及 Bolt、RITS、UC Browser 和 Yandex Browser。所谓'
					},
					{
						id: 6,
						title: '如何为数据科学设置VS代码',
						imgUrl: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '字幕组双语原文：如何为数据科学设置 VS 代码 英语原文：How To Setup VS Code For Data Science — The Manual 翻译：雷锋字幕组（yhfwww） 经过一番热烈，甚至激烈的推荐，我从使用 PyCharm 转到使用 VSCode。在配置环境时，我觉得花了太'
					}
				],
				policy: [{
						id: 0,
						title: '高智商犯罪！85后北大毕业开发20余款微信清粉软件获利800余万',
						imgUrl: 'https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '85 后，北大毕业，曾经在互联网大厂工作，年薪百万，在深圳有车有房。 这样的人生在谁看来都再完美不过，怎么也不会把他和网络犯罪联系起来。 但真实的故事就是如此。 近日，据公安部网安局官方微信消息，浙江温州苍南警方在多地开展行动，成功侦破一起开发微信“清粉”软件从事违法犯罪活动的案件，初步查明涉案金额'
					},
					{
						id: 1,
						title: '杭州程序员手工建了一个“波音737驾驶舱”',
						imgUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '近日，杭州一名程序员打造了一个“波音 737 驾驶舱”上了热搜。 据报道，这名程序员名叫曹林，是一名航模狂热爱好者，疫情期间，利用空余时间打造了一个“波音 737 驾驶舱”，能模拟驾驶的大部分功能。 曹林说，他也只是一个普通的爱好者，为了实现更逼真的驾驶舱体验，他自学 3D 建模，空气动力学、航空流'
					},
					{
						id: 2,
						title: '图灵奖得主LeCun亲授，深度学习课程在线发布',
						imgUrl: 'https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '木易发自凹非寺 量子位报道公众号 QbitAI 深度学习作为 AI 入门的一门必修课程，在网上一直有着许多教学资源。 最常见的莫过于吴恩达老师的《深度学习》课程。 就在前不久，纽约大学数据科学中心（CDS）上传完成了其 2020 年春季学期的《深度学习》的全部内容资源。 而这次的课程，是由图灵奖得主'
					}
				],
				news: [{
						id: 0,
						title: '好强一个Julia！CSV数据读取，性能最高多出R、Python 22倍',
						imgUrl: 'https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '木易发自凹非寺 量子位报道公众号 QbitAI 工欲善其事，必先利其器。 一项便捷且高效的语言对于数据工作者来说是至关重要的。 目前，数据科学绝大多数使用的是R、Python、Java、MatLab 和 SAS。 其中，尤为 Python、R的使用最为广泛。 不过，Julia 自 2009 年出现以'
					},
					{
						id: 1,
						title: '新闻动态肯定会看到付款后对方答复',
						imgUrl: 'https://images.pexels.com/photos/2917442/pexels-photo-2917442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '萧箫发自凹非寺 量子位报道公众号 QbitAI 当视觉特效师与 GAN 强强联手，做出来的动画会不会更好看？ 答案是 YES。 这是一位视觉特效师，用海外版抖音上超火的小姐姐 Bella Poarch 的视频，生成的奥巴马 TikTok 版动画，不仅动画效果逼真，表情生动，GAN 生成的人物也不会出'
					},
					{
						id: 2,
						title: '「脑机接口礼服」长啥样？1024 个独立电极加定制芯片',
						imgUrl: 'https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						desc: '在被誉为是赛博朋克史诗的《攻壳机动队》中，全身“义体化”的公安 9 课队长草薙素子的形象令人难忘，电影中对于脑机接口技术与人类自我意识核心“Ghost”之间关系的探讨也让我们无限回味。 回归现实，在「宇宙网红」Elon Musk 的大力推广下，我们对脑机接口技术也不再陌生。 对于非植入式脑机接口而言'
					}
				],
			}
		},
		onLoad() {
			// 首次加载先将notice数组赋值给中间数组,否则刚打开页面是没有内容显示的
			this.list = this.notice
		},
		onReady() {
			//获取屏幕的高度使得全屏左右滑动
			this.mainHeight = uni.getSystemInfoSync().windowHeight; 
		},
		onPullDownRefresh() {
			console.log(`${this.TabCur} -- ${this.tabNav[this.TabCur]}`);//查看当前是在哪个导航下进行刷新
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				// 根据当前TabCur的值判断把哪个数组赋值给list
				this.list = this.TabCur == 0 ? this.notice : this.TabCur == 1 ? this.policy : this.news
				// Math.max(0, index - 1);
			},
			SwiperChange(e) {
				this.TabCur = e.detail.current
				this.scrollLeft = (e.detail.current - 1) * 60
				this.list = this.TabCur == 0 ? this.notice : this.TabCur == 1 ? this.policy : this.news
			}
		}
	}
</script>

<style>
	@keyframes currentLine {
		0% {
			transform: scale(0.7);
		}

		100% {
			transform: scale(1);
		}
	}

	.currentLine {
		animation: currentLine 300ms forwards;
	}

	/* 解决不能滚动问题 */
	/* uni-swiper .uni-swiper-wrapper, */
	uni-swiper-item {
		overflow-y: scroll !important;
	}
	
	.nav_pos{
		position: fixed;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		/* #ifdef APP-PLUS */
		top: 0px;
		/* #endif */
		width: 100%;
		z-index: 999;
	}

	.nav_pos{
		position: fixed;
		display: flex;
		/* top: 100px; */
		width: 100%;
		z-index: 999;
	}
</style>
