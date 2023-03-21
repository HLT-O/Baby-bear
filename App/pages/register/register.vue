<template>
  <view class="register">
    <view class="reg-title"> 注册 </view>
		<view class="select-title">
					选择你的身份
				</view>
					<radio-group class="select">
						<view class="select-list">
						<image src="../../static/haizi.png"></image>
						儿童
						<radio value="1" :checked="radio==='1'" @click="changeValue(1)" color="#007AFF"/>
					  </view>
					<view class="select-list">
						<image src="../../static/stu.png"></image>
						帮扶人员
						<radio value="2" :checked="radio==='2'" @click="changeValue(2)" color="#007AFF"/>
					</view>
					<view class="select-list">
						<image src="../../static/jiazhang.png"></image>
						家长
						<radio value="3" :checked="radio==='3'" @click="changeValue(3)" color="#007AFF"/>
					</view>
					</radio-group>
					
					<view class="binding" v-if="radio===3">
									<view class="texto">
										绑定孩子的手机号码（选填）
									</view>
									<view class="childPhone">
										<input type="text" placeholder="点击输入号码" @input="childrenInput"/>
										<image class="yes1" src="../../static/image/login/correct.png" :style="display1"></image>
									</view>
								</view>
    <view class="reg-phone reg-public">
      <input type="text" placeholder="请输入手机号码" @input="accountInput" />
      <image
        class="yes"
        src="../../static/image/login/correct.png"
        :style="display"
      ></image>
    </view>
    <view class="reg-password reg-public">
      <input :type="type1" placeholder="请输入密码" @input="passwordInput" />
      <image class="look" :src="lookurl1" @tap="looks1"></image>
    </view>
    <view class="reg-confirm reg-public">
      <input
        :type="type2"
        placeholder="再次输入密码"
        @input="confirmPassword"
      />
      <image class="look" :src="lookurl2" @tap="looks2"></image>
    </view>
    <button :class="[{ but: isok }, { but1: !isok }]" @tap="register">
      注册
    </button>
  </view>
</template>

<script>
import axios from "axios";
import config from "../../utils/config.js"
export default {
  data() {
    return {
			childPhone:'',//孩子号码
			display1:'display: none;',
      regPhone: "", //账号
      regPassword: "", //密码
      regConfirm: "", //确认密码
      //尾编号为1对应密码，2对应确认密码
      type1: "password",
      type2: "password",
      look1: "false",
      look2: "false",
      lookurl1: "../../static/image/login/y1.png",
      lookurl2: "../../static/image/login/y1.png",
      display: "display: none;", //勾勾样式,
      bg: "background:#cbcbcb;",
      phoneJudge: false, //账号是否正确
      passwordJudge: false, //密码是否合格
      isok: false,
			radio:''
    };
  },
  onLoad() {
    this.looks1();
    this.looks2();
  },
  methods: {
	  getGlobalUser:function(key){
	  	var userInfo = uni.getStorageSync("globalUser");
	  	if(userInfo!=null && userInfo != "" && userInfo != undefined){
	  		return userInfo;
	  	}else{
	  		return null;
	  	}
	  },
		changeValue(value){
			this.radio = value;
			console.log(this.radio)
		},
		//孩子账号
					childrenInput(e){
						this.childPhone=e.detail.value;
						console.log(this.childPhone)
						//号码格式正确显示勾勾
						if(this.childPhone.length==11){
							let {childPhone}=this.$data;//解构赋值
							let phoneReg = /^1(3|4|5|6|7|8|9|)\d{9}$/;
							if(!phoneReg.test(childPhone)){//判断手机号格式
							    return;
							}else{
								this.display1="display: block;";//显示勾勾
								this.phoneJudge=true;//账号正确标志
							}
						}else{
							if(this.childPhone.length!=0)
							this.display1="display: none;";
							this.phoneJudge=false;//账号错误标志
						}
						
					},
					
    //获取账号
    accountInput(e) {
      this.regPhone = e.detail.value;
      //号码格式正确显示勾勾
      if (this.regPhone.length == 11) {
        let { regPhone, regPassword, regConfirm } = this.$data; //解构赋值
        let phoneReg = /^1(3|4|5|6|7|8|9|)\d{9}$/;
        if (!phoneReg.test(regPhone)) {
          //判断手机号格式
          return;
        } else {
          this.display = "display: block;"; //显示勾勾
          this.phoneJudge = true; //账号正确标志
        }
      } else {
        this.display = "display: none;";
        this.phoneJudge = false; //账号错误标志
      }
      this.isOk();
    },
    //获取密码
    passwordInput(e) {
      this.regPassword = e.detail.value;
      //密码是否大于六位
      if (this.regPassword.length >= 6) {
        this.passwordJudge = true; //密码没问题标志
      } else {
        this.passwordJudge = false; //密码有问题
      }
      this.isOk();
    },
    //获取确认密码
    confirmPassword(e) {
      this.regConfirm = e.detail.value;
      this.isOk();
    },
    //眼睛1
    looks1() {
      if (this.look1) {
        this.type1 = "password";
        this.look1 = !this.look1;
        this.lookurl1 = "../../static/image/login/y1.png";
      } else {
        this.type1 = "text";
        this.look1 = !this.look1;
        this.lookurl1 = "../../static/image/login/y2.png";
      }
    },
    //眼睛2
    looks2() {
      if (this.look2) {
        this.type2 = "password";
        this.look2 = !this.look2;
        this.lookurl2 = "../../static/image/login/y1.png";
      } else {
        this.type2 = "text";
        this.look2 = !this.look2;
        this.lookurl2 = "../../static/image/login/y2.png";
      }
    },
    //判断是否改变注册按钮颜色
    isOk: function () {
      if (this.phoneJudge && this.passwordJudge) {
        //账号密码正确
        if (this.regPassword === this.regConfirm) {
          //密码于确认密码相同
          this.isok = true;
        } else {
          this.isok = false;
        }
      } else {
        this.isok = false;
      }
    },
    //注册提交是判断账号密码是否正确
    register() {
      let { regPhone, regPassword, regConfirm ,radio,childPhone} = this.$data;
      let phoneReg = /^1(3|4|5|6|7|8|9|)\d{9}$/;
			console.log(radio);
			if(!radio){
								uni.showToast({
								  title: '请选择你的身份',
								  icon:'none'
								})
								return;
							}
			if(childPhone){
								if(!phoneReg.test(childPhone)){
							    uni.showToast({
							        title: '孩子手机号格式有误',
							        icon:'none'
							    })
							    return;
								}
							}
      if (!regPhone) {
        uni.showToast({
          title: "手机号不能为空",
          icon: "none",
        });
        return;
      }
      if (!phoneReg.test(regPhone)) {
        uni.showToast({
          title: "手机号格式有误",
          icon: "none",
        });
        return;
      }
      if (!regPassword) {
        uni.showToast({
          title: "密码不能为空",
          icon: "none",
        });
        return;
      }
      if (regPassword.length < 6) {
        uni.showToast({
          title: "密码不能少于六位",
          icon: "none",
        });
        return;
      }
      if (regPassword !== regConfirm) {
        uni.showToast({
          title: "两次密码不一致",
          icon: "none",
        });
        return;
      } else {
				
				// 调用后端注册接口
				uni.request({
					url:`${config.mobileHost}/login/register`,
					data:{
						phone:regPhone,
						password:regPassword,
						identity:radio,
						childPhone:childPhone
					},
					method:'POST',
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
				
				
        uni.showToast({
          title: "注册成功",
          icon: "none",
        });
				
				
       // 注册成功跳转页面
        setTimeout(function () {
          uni.redirectTo({
            url: "../login/login",
          });
        }, 1500);
      }
    },
  },
};
</script>

<style>
@import url("register.css");
</style>