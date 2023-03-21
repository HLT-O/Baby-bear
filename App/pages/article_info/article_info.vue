<template>
	<view class="article_container">
		<view class="title"><h2>{{article[0].title}}</h2></view>
		<view class="content">`{{article[0].content}}`</view>
	</view>
</template>

<script>
	import config from "../../utils/config.js"
	export default {
		data() {
			return {
				article:{},
			}
		},
		methods: {
			
		},
		onLoad(options) {
			uni.request({
				url:`${config.mobileHost}/home/adult/article_info`,
				method:'GET',
				data:{
					id:options.id
				},
				success: (res) => {
					this.article = res.data;
					console.log(this.article);
				},
				fail: (err) => {
					console.log(err);
				}
			})
			console.log(options)
		},
	}
</script>

<style>

</style>
