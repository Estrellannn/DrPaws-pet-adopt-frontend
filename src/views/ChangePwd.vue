<template>
	<div class="right-form">
		<el-form :model="userInfo" label-width="80px">
			<el-form-item label="用户名">
			  <el-input v-model="props.userInfo.account" disabled></el-input>
			</el-form-item>
			<el-form-item label="旧密码">
			  <el-input ></el-input>
			</el-form-item>
			<el-form-item label="新密码">
			  <el-input ></el-input>
			</el-form-item>
			
			<el-form-item >
			  <el-button id="sure" type="primary">确定</el-button>
			  <el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
	
</template>

<script setup>
	const props = defineProps({
		userInfo:{
			type:Object,
			required:true
		}
	})
</script>

<style>
</style>