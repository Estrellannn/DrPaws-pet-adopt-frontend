<template>
	<div id="sh" class="mb-5">
		<img src="../assets/ju.png"/>
		<h1>宠物社区</h1>
		<p>分享毛孩子日常，交流养宠知识，认识更多爱宠人士</p>
	</div>
	<div class="container">
		<h2 class="mb-4">全部帖子</h2>
		<div class="row">
			<div class="col-2 mb-5">
				<el-aside id="aside" width="200px">
					<h5 id="sh5">宠物话题</h5>
					<el-button id="xin" class="mb-1" @click="showall">全部话题</el-button>
					<el-button id="ri" class="mb-1" @click="showday">宠物日常</el-button>
					<el-button id="wei" class="mb-1" @click="showfeed">宠物喂养</el-button>
					<el-button id="yi" class="mb-1" @click="showsick">宠物医疗</el-button>
					<el-button id="xun" @click="showtain">宠物训练</el-button>
				</el-aside>
			</div>
			<div class="col-10 mb-5">
				<div class="row mb-3">
					<div v-for="item in filterart" :key="item.user" class="col-4 mb-3">
						<el-card style="width: 350px;height: 490px;" shadow="always">
							<template #header>
								<div class="row">
									<div class="col-2">
										<img id="hi" :src="item.himg"/>
									</div>
									<div class="col-10">
										<p id="p">{{item.user}}</p>
									</div>
								</div>
							</template>
							<img id="bi" :src="item.pimg"/>
							<h4 id="ch4">{{item.title}}</h4>
							<p id="bp">{{item.p}}</p>
						</el-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref,computed} from 'vue'
	const art=ref([
		{user:"aoba",type:"day",title:"狗狗每天需要遛多久",p:"很多养狗新手都会疑惑，狗狗每天到底要遛多久？其实遛弯时长不是固定的，要结合狗狗年龄、体型和健康状态来看...",pimg:new URL('../assets/11.jpg', import.meta.url).href,himg:new URL('../assets/aoba.jpg',import.meta.url).href},
		{user:"阿斯代伦",type:"feed",title:"猫咪换粮小技巧",p:"给猫咪换粮不能一次性直接换，需要7天循序渐进替换，保护猫咪肠胃...",pimg:new URL('../assets/13.jpg', import.meta.url).href,himg:new URL('../assets/阿斯代伦.png',import.meta.url).href},
		{user:"强尼",type:"sick",title:"狗狗驱虫怎么做",p:"体内外驱虫时间不一样，幼犬和成年犬周期不同，一定要按时驱虫...",pimg:new URL('../assets/12.jpg', import.meta.url).href,himg:new URL('../assets/强尼.jpg',import.meta.url).href},
		{user:"亨利",type:"day",title:"猫咪应激怎么办",p:"环境变化很容易让猫咪应激，搬家、来客都要做好安抚...",pimg:new URL('../assets/14.jpg', import.meta.url).href,himg:new URL('../assets/henry.jpg',import.meta.url).href},
		{user:"James Bond",type:"day",title:"新手养猫必买清单",p:"刚接猫咪回家不用疯狂囤货，基础用品准备猫砂、猫砂盆、猫粮、食盆水盆，其余用品可以后续慢慢添置...",pimg:new URL('../assets/15.jpg', import.meta.url).href,himg:new URL('../assets/James Bond.png',import.meta.url).href},
		{user:"悟空",type:"feed",title:"狗狗不能吃的食物",p:"巧克力、葡萄、洋葱、木糖醇对狗狗有剧毒，日常投喂零食一定要避开这些，防止宠物中毒...",pimg:new URL('../assets/16.jpg', import.meta.url).href,himg:new URL('../assets/悟空.jpg',import.meta.url).href},
	])
	
	const filterart=ref([])
	filterart.value=art.value
	
	function showall(){
		filterart.value=art.value
	}
	function showday(){
		filterart.value=art.value.filter(item=>item.type==="day")
	}
	function showfeed(){
		filterart.value=art.value.filter(item=>item.type==="feed")
	}
	function showsick(){
		filterart.value=art.value.filter(item=>item.type==="sick")
	}
	function showtain(){
		filterart.value=art.value.filter(item=>item.type==="tain")
	}
</script>

<style>
	@import "../assets/css/story.css"
</style>