<template>
  <view class="pageContainer">
    <!-- 搜索栏 start -->
    <!-- <view class="headerContainer">
      <view class="search">
        <view class="logo">
          <image src="../../static/logo.png"></image>
        </view>
        <view class="search_input">
          <input type="text" placeholder="搜索" />
        </view>
        <view class="search_icon" @click="handleSearch">
          <image src="../../static/search_icon.png" mode="scalefill"></image>
        </view>
      </view>
    </view> -->
    <!-- 搜索栏 end -->

    <!-- 轮播图 start -->
    <view class="swiper_container">
      <swiper indicator-dots autoplay circular display-multiple-items="1">
        <swiper-item>
          <image src="../../static/swiper_item_1.jpg" mode="scalefill"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/swiper_item_2.webp" mode="scalefill"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/swiper_item_3.jpg" mode="scalefill"></image>
        </swiper-item>
      </swiper>
    </view>
    <!-- 轮播图end -->

    <!-- 功能start -->
    <!-- 如果是儿童 -->
    <view class="special_column" v-if="userInfo.identity == 1">
      <navigator class="column_item" url="../log/log">
        <image src="../../static/log_icon.png"></image>
        <view class="item_name">日志</view>
      </navigator>
      <navigator class="column_item" url="../bear/bear">
        <image src="../../static/bear5.png"></image>
        <view class="item_name">智能小熊</view>
      </navigator>
      <navigator class="column_item" url="../mood_tag/mood_tag">
        <image src="../../static/tag_icon.png"></image>
        <view class="item_name">心情标签</view>
      </navigator>
    </view>

    <!-- 如果是帮扶人员 -->
    <view class="special_column" v-if="userInfo.identity == 2">
      <!-- <navigator class="column_item" url="../log/log">
        <image src="../../static/log_icon.png"></image>
        <view class="item_name">日志</view>
      </navigator> -->
      <!-- <navigator class="column_item" url="../chat/chat">
		    <image src="../../static/chat_icon.png"></image>
		    <view class="item_name">智慧聊天</view>
		  </navigator> -->
      <navigator class="column_item" url="../bear/bear">
        <image src="../../static/bear5.png"></image>
        <view class="item_name">智能小熊</view>
      </navigator>
      <navigator
        class="column_item"
        :url="
          '../child_historyTag/child_historyTag?childPhone=' +
          userInfo.childPhone
        "
      >
        <image src="../../static/tag_icon.png"></image>
        <view class="item_name">心情标签</view>
      </navigator>
    </view>

    <!-- 如果是家长 -->
    <view class="special_column" v-else-if="userInfo.identity == 3">
      <!-- <navigator class="column_item" url="../log/log">
		    <image src="../../static/log_icon.png"></image>
		    <view class="item_name">日历</view>
		  </navigator> -->
      <navigator class="column_item" url="../bear/bear">
        <image src="../../static/bear5.png"></image>
        <view class="item_name">智能小熊</view>
      </navigator>
      <navigator
        class="column_item"
        :url="
          '../child_historyTag/child_historyTag?childPhone=' +
          userInfo.childPhone
        "
      >
        <image src="../../static/tag_icon.png"></image>
        <view class="item_name">心情标签</view>
      </navigator>
    </view>
    <!-- 功能 end -->

    <!-- 最新热点 家长端 start -->
    <view class="hot_words" v-if="userInfo.identity == 3 || isLogin==false">
      <view class="hot_header">
		  <view class="hot_title">
		  		  <image src="../../static/hotPoint.png"></image>
		  		  <text>最新热点</text>
		  </view>
		  <navigator class="lookUp" url="../news/news">
			  查看更多
		  </navigator>
	  </view>
      <!-- 传后端 -->
      <!-- <navigator :url="'../article_info/article_info?id='+allArticle[index].id" class="hot_item" v-for="(item,index) in allArticle">
        <view class="item_title">{{item.title}}</view>
        <view class="item_content">
          <view class="item_content_info">
            {{item.des}}
          </view>
          <view class="item_content_img">
            <image src="../../static/swiper_item_1.jpg"></image>
          </view>
        </view>
      </navigator> -->
      <navigator url="../adult_article1/adult_article1" class="hot_item">
        <view class="item_title">今天，如何关爱留守儿童</view>
        <view class="item_content">
          <view class="item_content_info">
            “孩子们，请画出一位自己最爱的亲人。”乡村小学的教室里，有的孩子捏着笔头踟蹰，有的孩子画着画着就大哭起来，有的孩子悄悄用手擦着眼角……
          </view>
          <view class="item_content_img">
            <image src="../../static/adult_article1.jpg"></image>
          </view>
        </view>
      </navigator>

      <navigator url="../adult_article2/adult_article2" class="hot_item">
        <view class="item_title">家长如何关爱留守儿童</view>
        <view class="item_content">
          <view class="item_content_info">
            社会的发展，生活节奏的加快，消费水平的提高，让很多的家长不得不离开自己的家乡，离开自己年幼的孩子出外打工，因此留守儿童越来越多，他们成了备受关注的焦点，那么家长如何关心自己留守的孩子，让孩子能够健康的成长呢？
          </view>
          <view class="item_content_img">
            <image src="../../static/adult_article2.jpg"></image>
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
    </view>
    <!-- 最新热点 end -->

    <!-- 帮扶行动 帮扶人员端 start -->
    <view class="hot_words" v-else-if="userInfo.identity == 2">
      <view class="hot_header">
		  <view class="hot_title">
		  		  <image src="../../static/acitivity.png"></image>
		  		  <text>帮扶行动</text>
		  </view>
		  <navigator class="lookUp" url="../news/news">
		  			  查看更多
		  </navigator>
	  </view>
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
    </view>
    <!-- 帮扶行动 帮扶人员端 end -->

    <!-- 卡通与故事 儿童端 start -->
    <view class="hot_words" v-else-if="userInfo.identity == 1">
      <view class="hot_header">
		 <view class="hot_title">
			 <image src="../../static/cartoon.png"></image>
			 <text>卡通与故事</text>
		 </view>
		  <navigator class="lookUp" url="../news/news">
		  			  查看更多
		  </navigator>
	  </view>
	  
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

      <navigator url="../child_article/child_article" class="hot_item">
        <view class="item_title">稻草人的故事</view>
        <view class="item_content">
          <view class="item_content_info">
            　　胖胖熊一会儿画一只猫，一会儿画一只狗，没有心思写作业。妈妈生气地说：“你呀，要向稻草人学习。”胖胖熊到底为什么想做稻草人呢
          </view>
          <view class="item_content_img">
            <image
              src="../../static/child_article.jpg"
              mode="scaleToFill"
            ></image>
          </view>
        </view>
      </navigator>
    </view>
    <!-- 卡通与故事 儿童端 end -->
  </view>
</template>

<script>
import config from "../../utils/config.js";
import panda_swiperTab from '@/components/panda-swiperTab/panda-swiperTab.vue';
export default {
 components:{panda_swiperTab},
  data() {
    return {
      // 用户信息
      userInfo: {},
      // 所有首页文章信息
      // allArticle:[],
    };
  },
  onload() {},
  onShow() {
    // 使用挂载方法获取用户数据
    let userInfo = this.getGlobalUser("globalUser");

    if (userInfo != null) {
      this.isLogin = true;
      this.userInfo = userInfo;
      console.log(this.userInfo);
    } else {
      this.isLogin = false;
      this.userInfo = {};
    }

    // if(this.userInfo.identity==3){
    // 	// 获取家长首页文章或视频
    // 	uni.request({
    // 		url:`${config.mobileHost}/home/adult/article`,
    // 		method:'GET',
    // 		success: (res) => {
    // 			this.allArticle = res.data;
    // 		},
    // 		fail: (err) => {
    // 			console.log(err);
    // 		}
    // 	})
    // }
  },
  methods: {
    getGlobalUser:function(key){
    	var userInfo = uni.getStorageSync("globalUser");
    	if(userInfo!=null && userInfo != "" && userInfo != undefined){
    		return userInfo;
    	}else{
    		return null;
    	}
    }
  }, 
};
</script>

<style>
@import url("./index.css");
</style>
