<template>
	<div class="right-form">
	    <el-form :model="editForm" label-width="60px">
	      <el-form-item label="用户名">
	        <el-input v-model="editForm.username" disabled></el-input>
	      </el-form-item>
	      <el-form-item label="昵称">
	        <el-input v-model="editForm.nickname"></el-input>
	      </el-form-item>
	      <el-form-item label="性别">
	        <el-select v-model="editForm.gender" placeholder="请选择">
	          <el-option label="男" :value="2"></el-option>
	          <el-option label="女" :value="1"></el-option>
	        </el-select>
	      </el-form-item>
	      <el-form-item label="手机">
	        <el-input v-model="editForm.phone"></el-input>
	      </el-form-item>
	      <el-form-item label="身份证">
	        <el-input v-model="editForm.idCard"></el-input>
	      </el-form-item>
		  <el-form-item label="住址">
		    <el-input v-model="editForm.address"></el-input>
		  </el-form-item>
	
	      <!-- 头像上传 -->
	      <el-form-item label="头像">
	        <el-upload
	          class="avatar-uploader"
	          :action="baseUrl +'/upload/avatar'"
	          :show-file-list="false"
			  @success="handleAvatar"
	        >
	          <img v-if="editForm.avatar" :src="avatarSrc" class="avatar">
	          <div v-else class="upload-add">+</div>
	        </el-upload>
	        <div class="tip-text">点击上传头像</div>
	      </el-form-item>
	
	      <el-form-item >
	        <el-button id="sure" type="primary" @click="handleSubmit">修改</el-button>
	        <el-button @click="handleCancel">取消</el-button>
	      </el-form-item>
	    </el-form>
	  </div>
</template>

<script setup>
	import { ref, watch, computed } from 'vue';

	const baseUrl = import.meta.env.VITE_API_BASE_URL
	const props = defineProps({
		userInfo:{
			type:Object,
			required:true
		}
	})
	
	const editForm =ref({})
	
	watch(()=>props.userInfo,(newVal)=>{
		editForm.value={...newVal}
	},{immediate:true})
	
	const emit = defineEmits(['updateInfo'])
	
	const handleAvatar=(res)=>{
		console.log("头像上传返回地址:",res);
		editForm.value.avatar=res.data;
	}
	
	const avatarSrc=computed(()=>{
		if(!editForm.value.avatar)
		return ''
		if(editForm.value.avatar.startsWith('http')){
			return editForm.value.avatar
		}else{
			return baseUrl+editForm.value.avatar
		}
	})
	
	const handleSubmit=()=>{
		emit('updateInfo',{...editForm.value})
	}
	const handleCancel=()=>{
		
	}
	
</script>

<style>
	@import url('../assets/css/info.css');
</style>