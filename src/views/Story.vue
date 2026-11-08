<template>
	<div id="sh" class="mb-5">
		<img src="../assets/ju.png"/>
		<h1>宠物社区</h1>
		<p id="phs1">汇聚每一位爱宠人士在这里分享毛孩子日常趣事，交流喂养、护理、训练经验，</p>
		<p id="phs2">解答养宠疑问，记录陪伴的温暖瞬间，一起科学养宠，相互陪伴，共赴温柔的养宠时光</p>
	</div>
	<div class="container">
		<div class="row" id="allpost">
			<div class="col-11">
				<h2 >全部帖子</h2>
				<p id="ap" class="mb-4">记录毛孩子的可爱瞬间，一起交流养宠心得</p>
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
								<div id="phe" class="row">
									<div class="col-2">
										<img id="hi" :src="getImgUrl(item.avatar)"/>
									</div>
									<div class="col-10">
										<p id="p">{{item.username}}</p>
										<p id="ip">IP：{{item.address}}</p>
									</div>
								</div>
							</template>
							<img id="bi" :src="getImgUrl(item.imgList?.[0])"/>
							<h4 id="ch4">{{item.title}}</h4>
							<p class="bp">{{item.content}}</p>
						</el-card>
					</div>
				</div>
				
				<div class="pagination-wrap">
				        <el-pagination
				            layout="prev,pager,next"
				            :current-page="current"
				            :page-size="pageSize"
				            :total="total"
				            @current-change="onPageChange"
				        />
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
			    <el-select v-model="postForm.categoryId" placeholder="请选择帖子类型">
			      <el-option label="宠物日常" :value="1"></el-option>
			      <el-option label="宠物喂养" :value="2"></el-option>
			      <el-option label="宠物医疗" :value="3"></el-option>
			      <el-option label="宠物训练" :value="4"></el-option>
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
	
	const current=ref(1)
	const pageSize=ref(12)
	const total=ref(0)
	const post=ref([])
	const filterPost=ref([])
	
	const getImgUrl=(url)=>{
		if(!url)return '/brand.png'
		return url.startsWith('http') ? url : `${baseUrl}${url}`
	}
	const postForm=ref({
		title: '',
		categoryId: '',
		content: '',
		imageUrlList: []
	})
	
	const getPostList=async()=>{
		try{
			const params={current: current.value,size: pageSize.value}
			if(activeCategory.value) params.categoryId=activeCategory.value
			
			const res=await service.get(`${baseUrl}/post/list`,{params})
			const pageData=res.records ? res:res.data
			console.log("后端返回完整",res)
			post.value=pageData.records
			total.value=pageData.total
			filterPost.value=post.value
			console.log('post.value：', post.value)
			console.log('filterPost.value：', filterPost.value)
		}catch(err){
			ElMessage.error("请求失败",err)
		}
	}
	
	async function uploadImg(file){
		const formData=new FormData()
		formData.append('file',file)
		const res=await service.post(`${baseUrl}/postimg/upload`,formData,{
			headers: { 'Content-Type': 'multipart/form-data'}
		})
		console.log('上传返回：',res)
		return res.data || res
	}
	
	async function handleImageChange(file){
		if(!file.raw) return
		try {
			const imgUrl=await uploadImg(file.raw)
			postForm.value.imageUrlList.push(imgUrl)
		}catch(err){
			ElMessage.error('图片上传失败')
			console.error(err)
		}
	}
	
	async function submitPost(){
		if(!postForm.value.title){
			ElMessage.warning('请输入帖子标题')
			return
		}
		if(!postForm.value.categoryId){
			ElMessage.warning('请选择帖子类型')
			return
		}
		if(!postForm.value.content){
			ElMessage.warning('请输入帖子内容')
			return
		}
		
		const submitData={
			title: postForm.value.title,
			categoryId: postForm.value.categoryId,
			content: postForm.value.content,
			imageUrlList: postForm.value.imageUrlList
		}
		try{
			await service.post(`${baseUrl}/post/publish`,submitData)
			ElMessage.success('发布成功')
			
			postpublish.value=false
			postForm.value={title: '',category: '',content: '',imageUrlList: []}
			
			getPostList()
		}catch(err){
			ElMessage.error('发布失败')
			console.error(err)
		}
	}
	
	const activeCategory=ref(null)
	
	function onPageChange(page){
		current.value=page
		getPostList()
	}
	
	function showall(){
		//filterPost.value=post.value
		activeCategory.value=null;current.value=1;getPostList()
	}
	function showday(){
		//filterPost.value=post.value.filter(item=>item.categoryId===1)
		activeCategory.value=1;current.value=1;getPostList()
	}
	function showfeed(){
		//filterPost.value=post.value.filter(item=>item.categoryId===2)
		activeCategory.value=2;current.value=1;getPostList()
	}
	function showmedical(){
		//filterPost.value=post.value.filter(item=>item.categoryId===3)
		activeCategory.value=3;current.value=1;getPostList()
	}
	function showtarin(){
		//filterPost.value=post.value.filter(item=>item.categoryId===4)
		activeCategory.value=4;current.value=1;getPostList()
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
	
	const handlePictureCardPreview = (file) => {
		console.log('点击了放大镜', file)
	    previewUrl.value = file.url || (file.response && file.response.url) || ''
		previewVisible.value = true
	}
	
	getPostList()
	
</script>

<style>
	@import "../assets/css/story.css";
</style>