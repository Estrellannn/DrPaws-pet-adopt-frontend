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
						<div v-for="item in filterPet" :key="item.name" class="col-3 mb-3">
							<el-card id="acard">
								<img :src="item.img"/>
								<h4>{{item.name}}</h4>
								<p>{{item.gende}} &nbsp; {{item.type}}</p>
								<button @click="openDialog(item)">查看详细</button>
							</el-card>
						</div>
					</div>
					<div class="row mb-1 mt-4">
						
					<el-pagination
					  :current-page="1"
					  :page-size="3"
					  :total="8"
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
	    <img :src="currentPet.img" style="width:100%;border-radius:8px"/>
	    <p>名字：{{currentPet.name}}</p>
	    <p>品种：{{currentPet.type}}</p>
	    <p>性别：{{currentPet.gende}}</p>
	    <p>类型：{{currentPet.pet==='cat'?'猫咪':'狗狗'}}</p>
	    <p>介绍：一只温顺可爱的毛孩子，期待找到新家。</p>
	  </div>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="dialogVisible = false">关闭</el-button>
	      <el-button type="primary">申请领养</el-button>
	    </span>
	  </template>
	</el-dialog>
	
</template>

<script setup>
	import { ElPagination } from 'element-plus'
	import { ref , computed} from "vue";
	const checked1=ref(false)
	const checked2 = ref(false)
	const pet=ref([
	{name:"花花",type:"狸花",gende:"母",pet:"cat",img:new URL('../assets/1.jpg', import.meta.url).href},
	{name:"豆豆",type:"拉布拉多",gende:"母",pet:"dog",img:new URL('../assets/5.jpg', import.meta.url).href},
	{name:"面包",type:"橘猫",gende:"公",pet:"cat",img:new URL('../assets/2.jpg', import.meta.url).href},
	{name:"旺财",type:"金毛",gende:"母",pet:"dog",img:new URL('../assets/7.jpg', import.meta.url).href},
	{name:"土豆",type:"三花",gende:"公",pet:"cat",img:new URL('../assets/3.jpg', import.meta.url).href},
	{name:"多多",type:"狸花",gende:"公",pet:"cat",img:new URL('../assets/4.jpg', import.meta.url).href},
	{name:"毛球",type:"拉布拉多",gende:"母",pet:"dog",img:new URL('../assets/6.jpg', import.meta.url).href},
	{name:"可乐",type:"金毛",gende:"母",pet:"dog",img:new URL('../assets/8.jpg', import.meta.url).href}
	])
	
	const filterPet = ref([])
	filterPet.value = pet.value
	
	function showall(){
		filterPet.value=pet.value
	}
	
	function showcat(){
		filterPet.value=pet.value.filter(item=>item.pet==="cat")
	}
	function showdog(){
		filterPet.value=pet.value.filter(item=>item.pet==="dog")
	}
	function showm(){
		filterPet.value=pet.value.filter(item=>item.gende==="公")
	}
	function showf(){
		filterPet.value=pet.value.filter(item=>item.gende==="母")
	}
	
	const dialogVisible = ref(false)
	const currentPet = ref({})
	
	function openDialog(item){
	  currentPet.value = {...item}
	  dialogVisible.value = true
	}
	
</script>

<style>
	@import "../assets/css/adopt.css";
</style>