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
			        <h2>账号登录</h2>
			        <span id="l1" class="text-secondary">使用用户名和密码登录</span>
			    </div>
			    <p id="l2" class="mb-4">还没有账号？<router-link to="/register">立即注册</router-link></p>
				
			    <!-- 错误提示 -->
			    <p class="text-danger">{{ errorMsg }}</p>
				
				<div>
			        <div class="mb-3">
			            <label class="form-label">用户名</label>
			            <input v-model="loginForm.username" type="text" class="form-control" placeholder="请输入用户名" required>
			        </div>
			        <div class="mb-3">
			            <label class="form-label">密码</label>
			            <input v-model="loginForm.password" type="password" class="form-control" placeholder="请输入密码" required>
			        </div>
			        <button id="login" @click="handleLogin" class="btn btn-dark w-100 mt-3">登录</button>
				</div>
			</div>
	    </div>
	
	    <!-- 右侧登录表单区域 -->
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
import request from '../api/request.js'
import { useRouter } from 'vue-router'

const router = useRouter()
// 表单数据
const loginForm = ref({
  username: '',
  password: ''
})
// 错误提示文字
const errorMsg = ref('')

// 登录请求方法，点击按钮触发，调用后端 /user/login
const handleLogin = async () => {
  // 清空上次错误
  errorMsg.value = ''
  // 简单前端校验
  if(!loginForm.value.username || !loginForm.value.password){
    errorMsg.value = "用户名和密码不能为空"
    return
  }
  try {
    // ✅ 这里就是调用后端登录接口！
    const res = await request.post('/user/login', loginForm.value)
    if(res.code === 200){
      // 保存token到本地
      localStorage.setItem('token', res.data)
	  console.log("后端返回结果：", res)
      alert("登录成功！")
      // 跳转到首页
      router.push('/')
    }else{
      errorMsg.value = res.msg
    }
  } catch (err) {
    console.error(err)
    errorMsg.value = "登录失败，请检查账号密码或后端服务"
  }
}
</script>

<style>
	@import url('../assets/css/login.css');
</style>
