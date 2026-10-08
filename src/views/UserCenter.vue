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
            <el-avatar :size="80" :src="avatarImg"></el-avatar>
          </div>
          <p>用户名：{{ userInfo.account }}</p>
          <p>姓名：{{ userInfo.name }}</p>
          <p>性别：{{ userInfo.gender }}</p>
          <p>手机：{{ userInfo.phone }}</p>
          <p>身份证：{{ userInfo.idcard }}</p>
        </div>
      </div>

      <!-- 中间侧边导航菜单 -->
      <div class="center-menu">
        <div class="menu-item active">个人中心</div>
        <div class="menu-item">修改密码</div>
        <div class="menu-item">领养申请</div>
        <div class="menu-item">我的发布</div>
      </div>

      <!-- 右侧表单区域 -->
      <div class="right-form">
        <el-form :model="userInfo" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="userInfo.account" disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="userInfo.gender" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="userInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="身份证">
            <el-input v-model="userInfo.idcard"></el-input>
          </el-form-item>

          <!-- 头像上传 -->
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
            >
              <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" class="avatar">
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
    </div>
	</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import avatarImg from '../assets/aoba.jpg'

const userInfo = ref({
  account: 'aoba',
  name: '苍叶',
  gender: '男',
  phone: '13922220422',
  idcard: '412345678912345221',
  avatarUrl: avatarImg
})
</script>

<style scoped>
	@import url('../assets/css/user.css');
</style>
