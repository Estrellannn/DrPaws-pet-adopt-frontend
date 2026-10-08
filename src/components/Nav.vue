<template>
	<nav class="navbar" :class="{ 'nav-hidden': isNavHidden }">
		<a class="navbar-brand">
			<img id="logo" src="../assets/logo.png"/>
			<img id="brand" src="../assets/brand.png"/>
		</a>
		<ul class="navbar-nav flex-row ">
			<li class="nav-item">
				<router-link to="/" class="nav-link">首页</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/adopt" class="nav-link">领养</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/story" class="nav-link">社区</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/shop" class="nav-link">服务</router-link>
			</li>
			<li id="nave" class="nav-item ">
				<router-link to="/user" class="nav-link">个人中心</router-link>
			</li>
		</ul>
	</nav>
	
	
</template>

<script setup>
	import { ref, onMounted, onBeforeUnmount } from 'vue'
	const isNavHidden = ref(false)
	// 标记：是否已经向下滚动离开顶部
	const hasScrolled = ref(false)
	
	const handleScroll = () => {
		const currentScrollY = window.scrollY
	
		// 回到页面最顶端，解锁，导航显示
		if(currentScrollY <= 50) {
			hasScrolled.value = false
			isNavHidden.value = false
		}
		// 一旦滚动超过阈值，标记为已滚动，导航永久隐藏，直到回到顶部
		else if(currentScrollY > 50) {
			hasScrolled.value = true
			isNavHidden.value = true
		}
	}
	
	onMounted(()=>{
		window.addEventListener('scroll', handleScroll)
	})
	onBeforeUnmount(()=>{
		window.removeEventListener('scroll', handleScroll)
	})
</script>

<style>
	@import "../assets/css/nav.css"
</style>