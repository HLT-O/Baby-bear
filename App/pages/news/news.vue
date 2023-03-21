<template>
    <view v-if="userInfo.identity==2 || userInfo.identity == 3">
        <tab-page :tabs="tabs1" @tabSwitch="tabSwitch"><!-- :pageData="lists" -->
            <template #page="{i, pageData}" >
                <view v-if="i==0">
                	<view class="hot_words">
                	  <view class="hot_header">
                		  <!-- <view class="hot_title">
                		  		  <image src="../../static/acitivity.png"></image>
                		  		  <text>帮扶行动</text>
                		  </view>
                		  <navigator class="lookUp" url="../news/news">
                		  			  查看更多
                		  </navigator> -->
                	  </view>
                	  
                	
                	  <navigator url="../adult_article3/adult_article3" class="hot_item">
                	    <view class="item_title">人民日报：用关爱温暖留守儿童的心灵</view>
                	    <view class="item_content">
                	      <view class="item_content_info">
                	        “父母远离，关爱不离；父母不在，亲情仍在”。在中西部地区建立150个“儿童快乐家园”。对留守儿童而言，这不仅是生活的陪伴，更是心灵的慰藉，可说是他们最好的节日礼物。
                	      </view>
                	      <view class="item_content_img">
                	        <image src="../../static/adult_article3.jpg"></image>
                	      </view>
                	    </view>
                	  </navigator>
					  
					  <navigator url="../adult_article5/adult_article5" class="hot_item">
					    <view class="item_title">关爱留守儿童、助力乡村振兴</view>
					    <view class="item_content">
					      <view class="item_content_info">
					       为助力乡村振兴，进一步营造关心、重视留守儿童健康成长的浓厚氛围，给予留守儿童更多的关怀和帮助，让留守儿童快乐学习、健康成长。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/adult_article5.png"></image>
					      </view>
					    </view>
					  </navigator>
					  
					  <navigator url="../adult_article4/adult_article4" class="hot_item">
					    <view class="item_title">福建省漳州市云霄县积极开展农村留守儿童心理健康教育活动</view>
					    <view class="item_content">
					      <view class="item_content_info">
					        组织心理健康教育骨干老师深入留守儿童中进行调查研究、查找、分析、归纳留守儿童中存在的突出心理问题，结合实际，提出了必须着重解决的问题：情感缺失、安全意识淡薄、网络成瘾和手机依赖。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/adult_article4.jpg"></image>
					      </view>
					    </view>
					  </navigator>
					  
					  <navigator url="../helper_article/helper_article" class="hot_item">
					    <view class="item_title">广州将开展关爱留守儿童行动</view>
					    <view class="item_content">
					      <view class="item_content_info">
					        9月14日下午，全国农村留守儿童工作电视电话会议在北京召开，广州市妇联组织有关单位代表在广州分会场收听收看了会议实况并对如何贯彻会议精神作出具体部署。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/helper_article.jpg"></image>
					      </view>
					    </view>
					  </navigator>
                	</view>
                </view>
				<!-- 教育 -->
                <view v-if="i==1">
                    <view class="hot_words">
                      <view class="hot_header">
                    	  <!-- <view class="hot_title">
                    	  		  <image src="../../static/acitivity.png"></image>
                    	  		  <text>帮扶行动</text>
                    	  </view>
                    	  <navigator class="lookUp" url="../news/news">
                    	  			  查看更多
                    	  </navigator> -->
                      </view>
                      <navigator url="../education1/education1" class="hot_item">
                        <view class="item_title">有一种教育叫等待</view>
                        <view class="item_content">
                          <view class="item_content_info">
                            偶然间，阅读了台湾作家张文亮的散文《牵一只蜗牛去散步》：上帝给了我一个任务，叫我牵着一只蜗牛去散步，我不能走得太快，蜗牛已经尽力爬，为何每次总是那么一点点……”
                          </view>
                          <view class="item_content_img">
                            <image src="../../static/education1.jpg"></image>
                          </view>
                        </view>
                      </navigator>
                    
                      <navigator url="../education2/education2" class="hot_item">
                        <view class="item_title">10招引导孩子成欢乐的人</view>
                        <view class="item_content">
                          <view class="item_content_info">
                            我们都明白，家庭是一个孩子的欢乐之源，孩子在欢乐的状态中学习最有效。那么，你明白如何才能使家庭为孩子增添欢乐的力量呢？如何才能成为更欢乐的父母呢？也许，以下的文字会给你一些灵感和启发。
                          </view>
                          <view class="item_content_img">
                            <image src="../../static/education2.jpg"></image>
                          </view>
                        </view>
                      </navigator>
                    
                      <navigator url="../adult_article3/adult_article3" class="hot_item">
                        <view class="item_title">人民日报：用关爱温暖留守儿童的心灵</view>
                        <view class="item_content">
                          <view class="item_content_info">
                            “父母远离，关爱不离；父母不在，亲情仍在”。在中西部地区建立150个“儿童快乐家园”。对留守儿童而言，这不仅是生活的陪伴，更是心灵的慰藉，可说是他们最好的节日礼物。
                          </view>
                          <view class="item_content_img">
                            <image src="../../static/adult_article3.jpg"></image>
                          </view>
                        </view>
                      </navigator>
					  
					  <navigator url="../education3/education3" class="hot_item">
					    <view class="item_title">做个“三心”父母</view>
					    <view class="item_content">
					      <view class="item_content_info">
					        为了子女的锦绣前程，每一个做父母的都用心良苦，而最终的结果常常不尽如人意，原因何在呢？主要是由于父母教育孩子的方式不正确所致。其实为人父母，最重要的是要有“三心”。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/education3.jpg"></image>
					      </view>
					    </view>
					  </navigator>
                    </view>
                </view>
                <view v-if="i==2">
                    <view class="hot_words">
                    	<navigator url="../helper_article/helper_article" class="hot_item">
                    	  <view class="item_title">广州将开展关爱留守儿童行动</view>
                    	  <view class="item_content">
                    	    <view class="item_content_info">
                    	      9月14日下午，全国农村留守儿童工作电视电话会议在北京召开，广州市妇联组织有关单位代表在广州分会场收听收看了会议实况并对如何贯彻会议精神作出具体部署。
                    	    </view>
                    	    <view class="item_content_img">
                    	      <image src="../../static/helper_article.jpg"></image>
                    	    </view>
                    	  </view>
                    	</navigator>
                    	                	
                    	<navigator url="../helper_article2/helper_article2" class="hot_item">
                    	  <view class="item_title">关爱留守儿童，我们在行动~</view>
                    	  <view class="item_content">
                    	    <view class="item_content_info">
                    	      7月18日，阎良区举办“关爱留守儿童，放飞航空梦想”主题活动，组织阎良区40名留守儿童参加了拓展训练、航空模拟体验、集体赠书等，点燃孩子们的航空梦想，让“留守的花朵”在阳光下绽放！
                    	    </view>
                    	    <view class="item_content_img">
                    	      <image src="../../static/helper_article2.jpg"></image>
                    	    </view>
                    	  </view>
                    	</navigator>
						
						<navigator url="../adult_article4/adult_article4" class="hot_item">
						  <view class="item_title">福建省漳州市云霄县积极开展农村留守儿童心理健康教育活动</view>
						  <view class="item_content">
						    <view class="item_content_info">
						      组织心理健康教育骨干老师深入留守儿童中进行调查研究、查找、分析、归纳留守儿童中存在的突出心理问题，结合实际，提出了必须着重解决的问题：情感缺失、安全意识淡薄、网络成瘾和手机依赖。
						    </view>
						    <view class="item_content_img">
						      <image src="../../static/adult_article4.jpg"></image>
						    </view>
						  </view>
						</navigator>
						
						<navigator url="../adult_article5/adult_article5" class="hot_item">
						  <view class="item_title">关爱留守儿童、助力乡村振兴</view>
						  <view class="item_content">
						    <view class="item_content_info">
						     为助力乡村振兴，进一步营造关心、重视留守儿童健康成长的浓厚氛围，给予留守儿童更多的关怀和帮助，让留守儿童快乐学习、健康成长。
						    </view>
						    <view class="item_content_img">
						      <image src="../../static/adult_article5.png"></image>
						    </view>
						  </view>
						</navigator>
                    </view>
                </view>
				
            </template>
        </tab-page>
    </view>
	
	
	<!-- 儿童端 -->
	<view v-else-if="userInfo.identity==1">
	    <tab-page :tabs="tabs2" @tabSwitch="tabSwitch"><!-- :pageData="lists" -->
	        <template #page="{i, pageData}" >
	            <view v-if="i==0">
	            	<view class="hot_words">
	            	  <view class="hot_header">
	            		  <!-- <view class="hot_title">
	            		  		  <image src="../../static/acitivity.png"></image>
	            		  		  <text>帮扶行动</text>
	            		  </view>
	            		  <navigator class="lookUp" url="../news/news">
	            		  			  查看更多
	            		  </navigator> -->
	            	  </view>
	            	  
	            	
	            	  <navigator url="../story1/story1" class="hot_item">
	            	    <view class="item_title">其实我很棒</view>
	            	    <view class="item_content">
	            	      <view class="item_content_info">
	            	        为了将森林建设得更加美丽，大家都在努力工作呢，啄木鸟在树上悄悄啄啄，尖利的长嘴是害虫，没有藏身之地。
	            	      </view>
	            	      <view class="item_content_img">
	            	        <image src="../../static/story1.jpg"></image>
	            	      </view>
	            	    </view>
	            	  </navigator>
					  
					  <navigator url="../story2/story2" class="hot_item">
					    <view class="item_title">爱旅行的小火车</view>
					    <view class="item_content">
					      <view class="item_content_info">
					       “哐当，哐当，哐当，”大森林里，跑来一列小火车，小火车的头上冒着阵阵白烟儿，正快乐地唱着歌。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/story2.jpg"></image>
					      </view>
					    </view>
					  </navigator>
					  
					  <navigator url="../story3/story3" class="hot_item">
					    <view class="item_title">谁搬走了我的树荫</view>
					    <view class="item_content">
					      <view class="item_content_info">
					        小狗在睡梦中被热醒了，睁开眼睛一看：头顶上是火辣辣的太阳，树荫已经移到了大树的另一边。树荫下，一只小母鸡正半眯着眼，享受着树荫给它带来的阴凉。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/story3.jpg"></image>
					      </view>
					    </view>
					  </navigator>
					  
					  <navigator url="../story4/story4" class="hot_item">
					    <view class="item_title">小白兔晒太阳</view>
					    <view class="item_content">
					      <view class="item_content_info">
					       冬天来了，外面很冷很冷，小白兔更喜欢阳光了。他把小被子和小枕头抱到外面，放在太阳底下晒晒，自己也坐在窗前，读一本好看的图画书。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/story4.jpg"></image>
					      </view>
					    </view>
					  </navigator>
	            	</view>
	            </view>
				<!-- 科普 -->
	            <view v-if="i==1">
	                <view class="hot_words">
	                  <view class="hot_header">
	                	  <!-- <view class="hot_title">
	                	  		  <image src="../../static/acitivity.png"></image>
	                	  		  <text>帮扶行动</text>
	                	  </view>
	                	  <navigator class="lookUp" url="../news/news">
	                	  			  查看更多
	                	  </navigator> -->
	                  </view>
	                  <navigator url="../sc1/sc1" class="hot_item">
	                    <view class="item_title">水果为啥要打蜡？</view>
	                    <view class="item_content">
	                      <view class="item_content_info">
	                        妈妈从超市买的苹果可好看了，摸着也滑溜溜的。妈妈说，这是因为打了蜡。水果为什么要打蜡呢？打蜡的水果有害吗？
	                      </view>
	                      <view class="item_content_img">
	                        <image src="../../static/sc1.png"></image>
	                      </view>
	                    </view>
	                  </navigator>
	                
	                  <navigator url="../sc2/sc2" class="hot_item">
	                    <view class="item_title">考试不马虎的窍门</view>
	                    <view class="item_content">
	                      <view class="item_content_info">
	                        我有一个绰号，叫“大马虎”。从小学一年级到现在，我因为马虎，犯了很多低级错误。每次考试，我都会因为马虎丢分，比如考试时漏掉题目，应用题抄错数等。试卷发下来时，我悔得“肠子都青了”。
	                      </view>
	                      <view class="item_content_img">
	                        <image src="../../static/sc2.png"></image>
	                      </view>
	                    </view>
	                  </navigator>
	                
	                  <navigator url="../sc3/sc3" class="hot_item">
	                    <view class="item_title">“盘中餐”哪里来？</view>
	                    <view class="item_content">
	                      <view class="item_content_info">
	                        每年的10月16日是世界粮食日。在本期 《争做光盘侠 盘盘齿留香》栏目中，我们要说 一说当今世界最重要的粮食作物之一 —— 稻。
	                      </view>
	                      <view class="item_content_img">
	                        <image src="../../static/sc3.png"></image>
	                      </view>
	                    </view>
	                  </navigator>
					  
					  <navigator url="../sc4/sc4" class="hot_item">
					    <view class="item_title">春江水暖“丫”先知 </view>
					    <view class="item_content">
					      <view class="item_content_info">
					        听爸爸讲，他小时候 常常到村子里的小河捉鱼， 每次都满载而归。假期里， 爸爸带我去河边捉鱼。河 水哗哗地流淌着，绿色的 水草挥舞着手臂，好像在 欢迎我们的到来；小鱼 三五成群地追逐嬉戏，时 不时地跃出水面，甩一甩 尾巴，和岸边的青草打着 招呼。
					      </view>
					      <view class="item_content_img">
					        <image src="../../static/sc4.jpg"></image>
					      </view>
					    </view>
					  </navigator>
	                </view>
	            </view>
	            <view v-if="i==2">
	                <view class="hot_words">
	                	<navigator url="../child_video1/child_video1" class="hot_item">
	                	  <view class="item_title">狮子VS老虎 | 比一比儿歌</view>
	                	  <view class="item_content">
	                	    <view class="item_content_info">
	                	      狮子对阵老虎，到底谁才是森林之王？快来看一看吧！| 儿歌童谣 |
	                	      卡通动画
	                	    </view>
	                	    <view class="item_content_img">
	                	      <image src="../../static/child_video2.png"></image>
	                	    </view>
	                	  </view>
	                	</navigator>
	                	                	
	                	<navigator url="../child_video2/child_video2" class="hot_item">
	                	  <view class="item_title">拔萝卜 经典儿歌 卡通动画</view>
	                	  <view class="item_content">
	                	    <view class="item_content_info">
	                	      经典中文儿歌《拔萝卜》，赶紧学起来，让你的心情开心起来
	                	    </view>
	                	    <view class="item_content_img">
	                	      <image src="../../static/child_video1.png"></image>
	                	    </view>
	                	  </view>
	                	</navigator>
						
						<navigator url="../child_video3/child_video3" class="hot_item">
						  <view class="item_title">Kaboochi舞蹈 | 孩子们的卡通舞蹈视频 | kaboochi dance | 儿童舞蹈为孩子们的歌曲</view>
						  <view class="item_content">
						    <view class="item_content_info">
						      嗨孩子们！ 观看farmees Kaboochi动物舞蹈为孩子挑战最初参加kaboochi跳跃挑战。
						    </view>
						    <view class="item_content_img">
						      <image src="../../static/video3.png"></image>
						    </view>
						  </view>
						</navigator>
						
						<navigator url="../child_video5/child_video5" class="hot_item">
						  <view class="item_title">警车洗车| 卡通视频为孩子| 车辆视频 </view>
						  <view class="item_content">
						    <view class="item_content_info">
						     警车洗车，动画视频，让孩子们观看和享受。 我们希望你会喜欢这个孩子的视频。
						    </view>
						    <view class="item_content_img">
						      <image src="../../static/video5.png"></image>
						    </view>
						  </view>
						</navigator>
	                </view>
	            </view>
				
	        </template>
	    </tab-page>
	</view>
</template>

<script>
	import tabPage from '../../components/tab-page/tab-page.vue'
	    export default {
	        data() {
	            return {
	                tabs1: ['新闻', '教育', '活动'],
					tabs2:['故事','科普','卡通'],
	                // lists: [
	                //     ['AAA', 'BBBB','asd','asss'],
	                // ]
					userInfo:''
	            }
	        },
	        mounted() {
	            setTimeout(()=>{
	
	            },1000)
	        },
	        methods: {
	            tabSwitch(i){
	                console.log('可以在这里加载、刷新标签页', i)
	                if(i==1){
	                    //注意：以下是tab页加载数据的方式
	                    // this.lists.splice(1, 1, ['GGGG']);
	                }
	            }
	        },
	        components:{
	            tabPage
	        },
			onShow() {
				let userInfo = this.getGlobalUser("globalUser");
				
				if (userInfo != null) {
				  this.isLogin = true;
				  this.userInfo = userInfo;
				  console.log(this.userInfo);
				} else {
				  this.isLogin = false;
				  this.userInfo = {};
				}
			}
	    }
</script>
	
<style>
	.pages{
		padding: 0 30upx;
	}
	.pages-item{
		width: 100%;
		height: 300upx;
		margin: 10upx 0 30upx;
		background: #007AFF;
		border-radius: 24upx;
	}
	
	.hot_words {
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  width: 100%;
	  /* padding: 20upx 65upx 0 65upx; */
	  /* border-top: 5upx solid #ababab; */
	  margin-top: 30upx;
	}
	
	.hot_header{
		display: flex;
		/* background-color: red; */
	}
	
	.hot_header .lookUp{
		font-size: 14px;
		margin-top: 30upx;
		border-radius: 20upx;
		width: 180upx;
		text-align: center;
		height: 100upx;
		color: #1296db;
		line-height: 100upx;
		background-color: white;
		box-shadow: 10upx 15upx 5upx #eeeeee;
	}
	
	.hot_words .hot_title {
	  font-size: 22px;
	  font-weight: 500;
	  margin-bottom: 30upx;
	  margin: 30upx 65upx 30upx 65upx;
	  line-height: 50upx;
	  color: #1296db;
	  border-radius: 20upx;
	  width: 400upx;
	  height: 100upx;
	  padding-left: 20upx;
	  line-height: 100upx;
	  /* background-color: white; */
	  /* box-shadow: 10upx 15upx 5upx #eeeeee; */
	}
	
	.hot_title image{
		width: 40upx;
		height: 40upx;
		padding-right: 20upx;
		line-height: 40upx;
	}
	
	
	.hot_words .hot_item {
	  width: 80%;
	  height: 210upx;
	  margin: 0upx 0 50upx 50upx;
	  padding: 30upx;
	  /* background-color: #f9f9f9; */
	  padding-top: 40upx;
	  box-shadow: 10upx 15upx 5upx #eeeeee;
	  background-color: white;
	  border-radius: 50upx;
	}
	
	.hot_item .item_title {
	  width: 440upx;
	  font-size: 17px;
	  font-weight: bold;
	  margin-bottom: 10upx;
	  overflow: hidden;
	  -webkit-line-clamp: 1;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	}
	
	.hot_item .item_content {
	  display: flex;
	  justify-content: space-between;
	}
	
	.hot_item .item_content_info {
	  width: 430upx;
	  font-size: 14px;
	  overflow: hidden;
	  -webkit-line-clamp: 4;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  margin-top:10upx;
	}
	
	.hot_item .item_content_img {
	  /* padding-left: 5upx; */
	}
	
	.hot_item .item_content_img image {
	  width: 160upx;
	  height: 140upx;
	  border-radius: 30upx;
	  margin-top: -30upx;
	}
	
	/* 搜索 end */
	
</style>
