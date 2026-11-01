<template>
	<div id="sh" class="mb-5">
		<img src="../assets/ju.png"/>
		<h1>宠物社区</h1>
		<p>分享毛孩子日常，交流养宠知识，认识更多爱宠人士</p>
	</div>
	<div class="container">
		<div class="row" id="allpost">
			<div class="col-11">
				<h2 class="mb-4">全部帖子</h2>
			</div>
			<div class="col-1">
				<button id="jia" class="mb-4" @click="open(item)"><p id="jiap">+</p></button>
			</div>
		</div>
		<div class="row">
			<div class="col-2 mb-5">
				<el-aside id="aside" width="200px">
					<h5 id="sh5">宠物话题</h5>
					<el-button id="xin" class="mb-1" @click="showall">全部话题</el-button>
					<el-button id="ri" class="mb-1" @click="showday">宠物日常</el-button>
					<el-button id="wei" class="mb-1" @click="showfeed">宠物喂养</el-button>
					<el-button id="yi" class="mb-1" @click="showmedical">宠物医疗</el-button>
					<el-button id="xun" @click="showtarin">宠物训练</el-button>
				</el-aside>
			</div>
			<div class="col-10 mb-5">
				<div class="row mb-3">
					<div v-for="item in filterPost" :key="item.id" @click="goDetail(item.id)" class="col-4 mb-3">
						<el-card style="width: 350px;height: 490px;" shadow="always">
							<template #header>
								<div class="row">
									<div class="col-2">
										<img id="hi" :src="`${baseUrl}${item.avatar}`"/>
									</div>
									<div class="col-10">
										<p id="p">{{item.username}}</p>
									</div>
								</div>
							</template>
							<img id="bi" :src="item.imgList?.[0] ? `${baseUrl}${item.imgList[0]}` : '/brand.png'"/>
							<h4 id="ch4">{{item.title}}</h4>
							<p class="bp">{{item.content}}</p>
						</el-card>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 弹窗组件 -->
	<el-dialog
	  v-model="postpublish"
	  title="帖子发布"
	  width="716px"
	>
	  <div id="post-detail" class="post-detail">
	      <el-form :model="postForm" label-width="60px">
	        <el-form-item label="标题">
	          <el-input v-model="postForm.title" placeholder="请输入帖子标题"></el-input>
	        </el-form-item>
			<el-form-item label="类型">
			    <el-select v-model="postForm.category" placeholder="请选择帖子类型">
			      <el-option label="宠物日常" value="宠物日常"></el-option>
			      <el-option label="宠物喂养" value="宠物喂养"></el-option>
			      <el-option label="宠物医疗" value="宠物医疗"></el-option>
			      <el-option label="宠物训练" value="宠物训练"></el-option>
			    </el-select>
			  </el-form-item>
	        <el-form-item label="图片">
	          <el-upload
	            action="#"
	            :auto-upload="false"
	            list-type="picture-card"
	            :on-change="handleImageChange"
				@preview="handlePictureCardPreview"
				:limit="8"
				multiple
	          >
	            <el-icon><Plus /></el-icon>
	          </el-upload>
			  <div style="color:#888;font-size:12px;margin-top:4px;margin-left: 10px;">最多上传8张图片</div>
	        </el-form-item>
	        <el-form-item label="内容">
	          <el-input
	            v-model="postForm.content"
	            type="textarea"
	            :rows="4"
	            placeholder="请输入帖子内容"
	          ></el-input>
	        </el-form-item>
	      </el-form>
	    </div>
	  <template #footer>
	      <span class="dialog-footer">
	        <el-button type="primary" @click="submitPost">确认发布</el-button>
	      </span>
	    </template>
	  </el-dialog>
	
	<el-image-viewer
	  v-if="previewVisible"
	  :url-list="[previewUrl]"
	  @close="previewVisible = false"
	/>
	
</template>

<script setup>
	import { ref,computed} from 'vue'
	import { useRouter } from 'vue-router'
	import service from '../api/request'
import { ElMessage } from 'element-plus'
	const baseUrl = import.meta.env.VITE_API_BASE_URL
	const total=ref(0)
	const post=ref([])
	const filterPost=ref([])
	
	const getPostList=async()=>{
		try{
			const res=await service.get(`${baseUrl}/post/list`,{
				
			})
			console.log("后端返回完整",res)
			post.value=res
			total.value=res.total
			filterPost.value=post.value
			console.log('post.value：', post.value)
			console.log('filterPost.value：', filterPost.value)
		}catch(err){
			ElMessage.error("请求失败",err)
		}
	}
	
	function showall(){
		filterPost.value=post.value
	}
	function showday(){
		filterPost.value=post.value.filter(item=>item.categoryId===1)
	}
	function showfeed(){
		filterPost.value=post.value.filter(item=>item.categoryId===2)
	}
	function showmedical(){
		filterPost.value=post.value.filter(item=>item.categoryId===3)
	}
	function showtarin(){
		filterPost.value=post.value.filter(item=>item.categoryId===4)
	}
	
	const router = useRouter()
	const postpublish=ref(false)
	const previewVisible=ref(false)
	const previewUrl = ref('')
	
	const goDetail=(postId)=>{
		router.push(`/post/${postId}`)
	}
	
	function open(item){
		postpublish.value = true
	}
	
	const postForm = ref({
	  title: '',
	  category: '',
	  content: ''
	})
	
	function handleImageChange(file) {
	  postForm.value.imageFile = file.raw
	}
	
	const handlePictureCardPreview = (file) => {
		console.log('点击了放大镜', file)
	    previewUrl.value = file.url || (file.response && file.response.url) || ''
		previewVisible.value = true
	}
	
	getPostList()
	
</script>

<style>
	@import "../assets/css/story.css"
</style>