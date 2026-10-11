<template>
	<div class="right-form">
	    <el-form :model="userInfo" label-width="80px">
	      <el-form-item label="用户名">
	        <el-input v-model="props.userInfo.username" disabled></el-input>
	      </el-form-item>
	      <el-form-item label="昵称">
	        <el-input v-model="props.userInfo.nickname"></el-input>
	      </el-form-item>
	      <el-form-item label="性别">
	        <el-select v-model="props.userInfo.gender" placeholder="请选择">
	          <el-option label="男" :value="2"></el-option>
	          <el-option label="女" :value="1"></el-option>
	        </el-select>
	      </el-form-item>
	      <el-form-item label="手机">
	        <el-input v-model="props.userInfo.phone"></el-input>
	      </el-form-item>
	      <el-form-item label="身份证">
	        <el-input v-model="props.userInfo.idCard"></el-input>
	      </el-form-item>
		  <el-form-item label="住址">
		    <el-input v-model="props.userInfo.address"></el-input>
		  </el-form-item>
	
	      <!-- 头像上传 -->
	      <el-form-item label="头像">
	        <el-upload
	          class="avatar-uploader"
	          action="#"
	          :show-file-list="false"
	        >
	          <img v-if="baseUrl+props.userInfo.uavatar" :src="baseUrl+props.userInfo.avatar" class="avatar">
	          <div v-else class="upload-add">+</div>
	        </el-upload>
	        <div class="tip-text">点击上传头像</div>
	      </el-form-item>
	
	      <el-form-item >
	        <el-button id="sure" type="primary">确定</el-button>
	        <el-button>取消</el-button>
	      </el-form-item>
	    </el-form>
	  </div>
</template>

<script setup>
	const baseUrl = import.meta.env.VITE_API_BASE_URL
	const props = defineProps({
		userInfo:{
			type:Object,
			required:true
		}
	})
</script>

<style>
	@import url('../assets/css/info.css');
</style>