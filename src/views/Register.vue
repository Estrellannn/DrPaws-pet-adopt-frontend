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
				
			    <!-- 错误提示 -->
			    <p class="text-danger" th:text="${msg}" th:if="${msg}"></p>
				
			    <form action="/doLogin" method="post">
			        <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>
			        <div class="mb-3">
			            <label class="form-label">用户名</label>
			            <input type="text" name="username" class="form-control" placeholder="请输入用户名,后续不可更改" required>
			        </div>
					<div class="mb-3">
					    <label class="form-label">昵称</label>
					    <input type="text" name="nickname" class="form-control" placeholder="请输入昵称" required>
					</div>
			        <div class="mb-3">
			            <label class="form-label">密码</label>
			            <input type="password" name="password" class="form-control" placeholder="请输入密码" required>
			        </div>
					<div class="mb-3">
					    <label class="form-label">手机号</label>
					    <input type="phone" name="phone" class="form-control" placeholder="请输入手机号" required>
					</div>
			        <button id="login" type="submit" class="btn btn-dark w-100 mt-3">注册</button>
			    </form>
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

<script>
</script>

<style>
	@import url('../assets/css/login.css');
</style>