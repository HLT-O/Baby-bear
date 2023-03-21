export default {
	remindItem:function(){
		let reminds=[
			{
				content:'检查作业',
				time:new Date().getTime()+1000*60*59,
			},
			{
				content:'去看望外婆',
				time:new Date().getTime()+1000*60*60*24*2,
			},
			{
				content:'奶奶生日',
				time:new Date().getTime()+1000*60*60*24*4+1000*60*50,
			},
		]
		return reminds;
	}
}