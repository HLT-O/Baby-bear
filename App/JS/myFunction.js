export default{
	//首页时间转化
	dateTime(e){
		let old=new Date(e);
		let now =new Date();
		//获取old具体时间
		let od=old.getTime();
		let oh=old.getHours();
		let om=old.getMinutes();
		let oY=old.getFullYear();
		let oM=old.getMonth()+1;
		let oD=old.getDate();
		//获取now具体时间
		let nd=now.getTime();
		let nh=now.getHours();
		let nm=now.getMinutes();
		let nY=now.getFullYear(); 
		let nM=now.getMonth()+1;
		let nD=now.getDate();
		
		//当天时间
		if(oD===nD && oM===nM && oY===nY){
			 if(oh<10){
				 oh='0'+oh;
			 }
			 if(om<10){
				 om='0'+om;
			 }
			 return oh+':'+om;
		}
		//昨天时间
		if(oD+1===nD && oM===nM && oY===nY){
			 if(oh<10){
				 oh='0'+oh;
			 }
			 if(om<10){
				 om='0'+om;
			 }
			 return '昨天'+oh+':'+om;
		}
		if(oD+1<nD && oM===nM && oY===nY){
			 if(oh<10){
				 oh='0'+oh;
			 }
			 if(om<10){
				 om='0'+om;
			 }
			 return oY+'/'+oM+'/'+oD;
		}
	},
	//聊天时间
	chatDateTime(e){
		let old=new Date(e);
		let now =new Date();
		//获取old具体时间
		let od=old.getTime();
		let oh=old.getHours();
		let om=old.getMinutes();
		let oY=old.getFullYear();
		let oM=old.getMonth()+1;
		let oD=old.getDate();
		//获取now具体时间
		let nd=now.getTime();
		let nh=now.getHours();
		let nm=now.getMinutes();
		let nY=now.getFullYear();
		let nM=now.getMonth()+1;
		let nD=now.getDate();
		
		//当天时间
		if(oD===nD && oM===nM && oY===nY){
			 if(oh<10){
				 oh='0'+oh;
			 }
			 if(om<10){
				 om='0'+om;
			 }
			 return oh+':'+om;
		}
		//昨天时间
		if(oD+1===nD && oM===nM && oY===nY){
			 if(oh<10){
				 oh='0'+oh;
			 }
			 if(om<10){
				 om='0'+om;
			 }
			 return '昨天'+oh+':'+om;
		}
		if(oD+1<nD && oM===nM && oY===nY){
			 if(oh<10){
				 oh='0'+oh;
			 }
			 if(om<10){
				 om='0'+om;
			 }
			 return oY+'/'+oM+'/'+oD+' '+oh+':'+om;
		}
	},
	//聊天页面间隔时间差
	spacTime(old,now){
		old =new Date(old);
		now =new Date(now);
		var told=old.getTime();
		var tnow=now.getTime();
		if(told>(tnow+1000*60*5)){
			return now;
		}else{
			return '';
		}
	},
	//时间间隔2
	intervallTime(old,now){
		old =new Date(old);
		now =new Date(now);
		var told=old.getTime();
		var tnow=now.getTime();
		if((told+1000*60*5)<tnow){
			return now;
		}else{
			return '';
		}
	}
}