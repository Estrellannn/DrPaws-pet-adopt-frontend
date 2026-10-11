<template>
	<div id="ah" class="mb-5">
		<img id="ai" src="../assets/adopt.png"/>
		<h1>宠物领养</h1>
		<p id="ah1">致力于流浪伴侣动物救助与领养推广，秉持领养代替购买理念，以家人般的温暖守护每一只毛孩子，提供领养咨询、</p>
		<p id="ah2">宠物健康科普、领养回访服务，为流浪小动物寻觅稳定有爱的家，让双向陪伴长久温暖。</p>
	</div>
	<div class="container">
		<div>
			<h2>待领养的宠物</h2>
			<p id="ap" class="mb-4">每一只流浪毛孩子都在等待一个温暖的家</p>
			<div class="row mb-5">
				<div class="col-2 mt-1">
					<el-aside id="aside" width="200px">
						<h5 id="ah5">宠物类型</h5>
						<el-button id="all" class="mb-1" @click="showall">全部</el-button>
						<el-button id="mao" class="mb-1" @click="showcat">猫咪</el-button>
						<el-button id="dog" @click="showdog">狗狗</el-button>
						<h5 id="ah5">性别</h5>
						<el-button id="m" class="mb-1" @click="showm">公</el-button>
						<el-button id="f" @click="showf">母</el-button>
					</el-aside>
				</div>
				<div class="col-10">
					<div class="row mb-1 mt-1">
						<div v-for="item in filterPet" :key="item.id" class="col-3 mb-3">
							<el-card id="acard">
								<img :src="`${baseUrl}${item.petImg}`"/>
								<h4>{{item.petName}}</h4>
								<p>{{item.petGender}} &nbsp; {{item.petBreed}}</p>
								<button @click="openDialog(item)">查看详细</button>
							</el-card>
						</div>
					</div>
					<div class="row mb-1 mt-4">
						
					<el-pagination
					  :current-page="pageNum"
					  :page-size="pageSize"
					  :total="total"
					  @change="handlePageChange"
					  layout="prev, pager, next"
					  class="mt-5"
					/>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 弹窗组件 -->
	<el-dialog
	  v-model="dialogVisible"
	  title="宠物详情"
	  width="500px"
	>
	  <div id="pet-detail" class="pet-detail">
	    <img :src="`${baseUrl}${currentPet.petImg}`" style="width:100%;border-radius:8px"/>
	    <p>名字：{{currentPet.petName}}</p>
	    <p>品种：{{currentPet.petBreed}}</p>
	    <p>性别：{{currentPet.petGender}}</p>
	    <p>类型：{{currentPet.petType}}</p>
	    <p>介绍：{{currentPet.petDesc}}</p>
		<p>健康情况：{{currentPet.health}}</p>
	  </div>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button type="primary">申请领养</el-button>
	    </span>
	  </template>
	</el-dialog>
	
</template>

<script setup>
	import { ElPagination } from 'element-plus'
	import { ref , computed} from "vue"
	import service from '../api/request'
	
	const baseUrl = import.meta.env.VITE_API_BASE_URL
	const pageNum = ref(1)
	const pageSize = ref(8)
	const total = ref(0)
	const pet = ref([])
	const filterPet = ref([])
	const getPetList = async ()=>{
		try{
			const res=await service.get(`${baseUrl}/api/adopt/list`,{
				params:{
					pageNum:pageNum.value,
					pageSize:pageSize.value
				}
			})
			console.log("领养接口返回", res)
			pet.value=res.records
			total.value=res.total
			filterPet.value=pet.value
		}catch(err){
			console.error("请求失败",err)
		}
	}
	
	const handlePageChange = (newPage)=>{
		pageNum.value = newPage
		getPetList()
	}
	
	const checked1=ref(false)
	const checked2 = ref(false)
	
	function showall(){
		filterPet.value=pet.value
	}
	
	function showcat(){
		filterPet.value=pet.value.filter(item=>item.petType==="猫咪")
	}
	function showdog(){
		filterPet.value=pet.value.filter(item=>item.petType==="狗狗")
	}
	function showm(){
		filterPet.value=pet.value.filter(item=>item.petGender==="公")
	}
	function showf(){
		filterPet.value=pet.value.filter(item=>item.petGender==="母")
	}
	
	const dialogVisible = ref(false)
	const currentPet = ref({})
	
	function openDialog(item){
	  currentPet.value = {...item}
	  dialogVisible.value = true
	}
	
	getPetList()
</script>

<style>
	@import "../assets/css/adopt.css";
</style>