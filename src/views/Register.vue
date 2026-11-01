<template>
	<div class="login-wrap">
	<div class="row g-0 h-100">
	    <!-- 左侧蓝色区域 -->
	    <div id="lh" class="col-5 right-box ">
			<a id="lhz" class="navbar-brand">
				<img id="logo" src="../assets/logo.png"/>
				<img id="brand" src="../assets/brand.png"/>
			</a>
			
			<div class="">
			    <div class="d-flex align-items-center gap-3 mb-2">
			        <h2>账号注册</h2>
			        <span id="l1" class="text-secondary">使用用户名、昵称、手机号和密码注册</span>
			    </div>
			    <p id="l2" class="mb-4">已有账号？<router-link to="/login">立即登录</router-link></p>
				
			    <!-- 错误提示（Vue变量控制） -->
			    <p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
				
			    <form @submit.prevent="handleRegister">
			        <div class="mb-3">
			            <label class="form-label">用户名</label>
			            <input v-model="form.username" type="text" class="form-control" placeholder="请输入用户名,后续不可更改" required>
			        </div>
					<div class="mb-3">
					    <label class="form-label">昵称</label>
					    <input v-model="form.nickname" type="text" class="form-control" placeholder="请输入昵称" required>
					</div>
			        <div class="mb-3">
			            <label class="form-label">密码</label>
			            <input v-model="form.password" type="password" class="form-control" placeholder="请输入密码" required>
			        </div>
					<div class="mb-3">
					    <label class="form-label">手机号</label>
					    <input v-model="form.phone" type="tel" class="form-control" placeholder="请输入手机号" required>
					</div>
					<!-- 确认密码 -->
					<div class="mb-3">
					    <label class="form-label">确认密码</label>
					    <input v-model="form.confirmPwd" type="password" class="form-control" placeholder="再次输入密码" required>
					</div>
			        <button id="login" type="submit" class="btn btn-dark w-100 mt-3">注册</button>
			    </form>
			</div>
	    </div>
	
	    <!-- 右侧图片区域 -->
	    <div class="col-7 left-box">
	        <div>
	            <img src="../assets/rocket.jpg" alt="rocket" style="width:800px;">
	        </div>
	        <img class="mt-4" src="../assets/brand.png"/>
	    </div>
	</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '../api/request.js'
import axios from 'axios'

const router = useRouter()
// 表单数据
const form = ref({
  username: '',
  nickname: '',
  password: '',
  phone: '',
  confirmPwd: ''
})
// 错误提示
const errorMsg = ref('')
const handleRegister = async () => {
  errorMsg.value = ''
  if(form.value.password !== form.value.confirmPwd){
    errorMsg.value = '两次输入的密码不一致！'
    return
  }
  const phoneReg = /^1[3-9]\d{9}$/
  if(!phoneReg.test(form.value.phone)){
    errorMsg.value = '手机号格式不正确！'
    return
  }
  try {
    // 发送axios请求，调用后端注册接口
    const res = await request.post('/user/register',{
      username: form.value.username,
      nickname: form.value.nickname,
      password: form.value.password,
      phone: form.value.phone
    })
    if(res.code === 200){
      // 注册成功跳转到登录页
      router.push('/login')
    }else{
      errorMsg.value = res.msg
    }
  } catch (err) {
    errorMsg.value = '注册失败，请检查网络或后端服务'
    console.error(err)
  }
}
</script>

<style scoped>
	@import url('../assets/css/login.css');
</style>
