<template>
	<div class="container">
		<div id="container" >
			<div class="row" id="post">
				<div class="col-3">
					<div id="post-left">
						<img src="../assets/阿斯代伦.png"/>
						<h6 id="postname">阿斯代伦</h6>
						<p>IP：博德之门上城区</p>
					</div>
				</div>
				<div class="col-9">
					<div id="post-right" class="mb-3">
						<h2>猫咪换粮小技巧</h2>
						<img src="../assets/11.jpg" />
						<p>很多养狗新手都会疑惑，狗狗每天到底要遛多久？其实遛弯时长不是固定的，要结合狗狗年龄、体型和健康状态来看。给猫咪换粮不能一次性直接换，需要7天循序渐进替换，保护猫咪肠胃。体内外驱虫时间不一样，幼犬和成年犬周期不同，一定要按时驱虫。</p>
					</div>
				</div>
			</div>
			<div class="row mb-5" id="pinglun">
				<el-button id="pb" type="success">写评论</el-button>
				<h5 id="ping">评论区</h5>
				<hr />
				<div class="row">
					<div class="col-2">
						<img src="../assets/阿斯代伦.png"/>
					</div>
					<div class="col-3" id="pingp">
						<h6 id="postname">阿斯代伦</h6>
						<p>IP：博德之门上城区</p>
					</div>
					<div class="col-7" id="pingr">
						<p >太可爱了，这个狗狗！</p>
					</div>
				</div>
				<hr />
				<div class="row">
					<div class="col-2">
						<img src="../assets/强尼.jpg"/>
					</div>
					<div class="col-3" id="pingp">
						<h6 id="postname">强尼·银手</h6>
						<p>IP：夜之城沃森区来生酒吧</p>
					</div>
					<div class="col-7" id="pingr">
						<p>我家狗也经常这样，老是喜欢出去玩，有时候叫都叫不回来。</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref,computed} from 'vue'
	import { useRouter } from 'vue-router'
	const router = useRouter()
	
	const art=ref([
		{id:1,user:"aoba",type:"day",title:"狗狗每天需要遛多久",p:"很多养狗新手都会疑惑，狗狗每天到底要遛多久？其实遛弯时长不是固定的，要结合狗狗年龄、体型和健康状态来看...",pimg:new URL('../assets/11.jpg', import.meta.url).href,himg:new URL('../assets/aoba.jpg',import.meta.url).href},
		{id:2,user:"阿斯代伦",type:"feed",title:"猫咪换粮小技巧",p:"给猫咪换粮不能一次性直接换，需要7天循序渐进替换，保护猫咪肠胃...",pimg:new URL('../assets/13.jpg', import.meta.url).href,himg:new URL('../assets/阿斯代伦.png',import.meta.url).href},
		{id:3,user:"强尼",type:"sick",title:"狗狗驱虫怎么做",p:"体内外驱虫时间不一样，幼犬和成年犬周期不同，一定要按时驱虫...",pimg:new URL('../assets/12.jpg', import.meta.url).href,himg:new URL('../assets/强尼.jpg',import.meta.url).href},
		{id:4,user:"亨利",type:"day",title:"猫咪应激怎么办",p:"环境变化很容易让猫咪应激，搬家、来客都要做好安抚...",pimg:new URL('../assets/14.jpg', import.meta.url).href,himg:new URL('../assets/henry.jpg',import.meta.url).href},
		{id:5,user:"James Bond",type:"day",title:"新手养猫必买清单",p:"刚接猫咪回家不用疯狂囤货，基础用品准备猫砂、猫砂盆、猫粮、食盆水盆，其余用品可以后续慢慢添置...",pimg:new URL('../assets/15.jpg', import.meta.url).href,himg:new URL('../assets/James Bond.png',import.meta.url).href},
		{id:6,user:"悟空",type:"feed",title:"狗狗不能吃的食物",p:"巧克力、葡萄、洋葱、木糖醇对狗狗有剧毒，日常投喂零食一定要避开这些，防止宠物中毒...",pimg:new URL('../assets/16.jpg', import.meta.url).href,himg:new URL('../assets/悟空.jpg',import.meta.url).href},
	])
</script>

<style>
	@import url("../assets/css/postdetail.css");
</style>