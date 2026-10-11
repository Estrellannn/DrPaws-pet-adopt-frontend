<template>
  <div id="user" class="container">
  <div id="container" class="mb-5">
    <div class="title-box">个人中心</div>
    <div class="container-wrap">
      <!-- 左侧：个人信息展示卡片 -->
      <div class="left-card">
        <div class="card-header">个人信息</div>
        <div class="card-body">
          <div class="avatar-box">
            <el-avatar :size="80" :src="baseUrl+userInfo.avatar"></el-avatar>
          </div>
          <p>用户名：{{ userInfo.username }}</p>
          <p>昵称：{{ userInfo.nickname }}</p>
          <p>性别：{{ userInfo.gender === 1 ? '女' : '男'}}</p>
          <p>手机：{{ userInfo.phone }}</p>
          <p>身份证：{{ userInfo.idCard }}</p>
		  <p>住址：{{ userInfo.address }}</p>
        </div>
      </div>

      <!-- 中间侧边导航菜单 -->
      <div class="center-menu">
		<router-link to="/user/info">
			<div class="menu-item active">个人中心</div>
		</router-link>
        <router-link to="/user/changepwd">
			<div class="menu-item">修改密码</div>
		</router-link>
        <router-link to="/user/adoptapply">
			<div class="menu-item">领养申请</div>
		</router-link>
        <router-link to="/user/mypublish">
			<div class="menu-item">我的发布</div>
		</router-link>
		<router-link to="/user/service">
			<div class="menu-item">服务预约</div>
		</router-link>
		<router-link to="/login">
			<div class="menu-item">退出登录</div>
		</router-link>
      </div>

      <!-- 右侧表单区域 -->
		<router-view :user-info="userInfo"></router-view>
      </div>
	</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import request from '../api/request.js'

const baseUrl = import.meta.env.VITE_API_BASE_URL
const router = useRouter()
const userInfo=ref({})
const avatarImg=ref('')

const getUserInfo=async()=>{
	try{
		const res=await request.get('/user/getInfo')
		if(res.data){
			userInfo.value=res.data
			avatarImg.value=res.data.avatar
		}
	}catch(err){
		router.push('/login')
	}
}

onMounted(()=>{
	const token=localStorage.getItem('token')
	if(!token){
		router.push('/login')
	}else{
		getUserInfo()
	}
})



// import avatarImg from '../assets/aoba.jpg'

// const userInfo = ref({
//   account: 'aoba',
//   name: '苍叶',
//   gender: '男',
//   phone: '13922220422',
//   idcard: '412345678912345221',
//   address: '碧岛旧住民区东区',
//   avatarUrl: avatarImg
// })
</script>

<style scoped>
	@import url('../assets/css/user.css');
</style>
