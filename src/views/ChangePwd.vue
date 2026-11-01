<template>
	<div class="right-form">
		<el-form :model="userInfo" label-width="80px">
			<el-form-item label="用户名">
			  <el-input v-model="form.username" disabled></el-input>
			</el-form-item>
			<el-form-item label="旧密码">
			  <el-input v-model="form.oldpassword" type="password" ></el-input>
			</el-form-item>
			<el-form-item label="新密码">
			  <el-input v-model="form.newpassword" type="password" ></el-input>
			</el-form-item>
			
			<el-form-item >
			  <el-button id="sure" type="primary" @click="handelSubmit">确定</el-button>
			  <el-button @click="handleCancel">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
	
</template>

<script setup>
import {ref} from 'vue'
import service from '../api/request'
import { ElMessage } from 'element-plus'

const props = defineProps({
	userInfo:{
		type:Object,
		required:true
	}
})

const form=ref({
	username:props.userInfo.username,
	oldpassword:'',
	newpassword:''
})

const handleCancel=()=>{
	form.value.oldpassword=''
	form.value.newpassword=''
}

const handelSubmit=async()=>{
	if(!form.value.oldpassword){
		ElMessage.warning('请输入旧密码')
		return
	}
	if(!form.value.newpassword){
		ElMessage.warning('请输入新密码')
		return
	}
	try{
		const res=await service.put('/user/password',form.value)
		if(res.code===200){
			ElMessage.success('密码修改成功!')
			handleCancel()
		}else{
			ElMessage.error(res.msg)
		}
	}catch(err){
		ElMessage.error('请求失败，请稍后重试')
		console.log(err)
	}
}

</script>

<style>
</style>