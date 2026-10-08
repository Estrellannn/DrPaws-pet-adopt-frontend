<template>
	<div  class="container">
		<div id="container">
		<div class="row">
			<div id="htitle" class="col-6">
				<h1>宠物领养中心</h1>
				<div id="h">每一只小动物都值得被善待。我们坚持领养代替购买，用心守护流浪毛孩子的健康，秉持“责任与陪伴”的宗旨，为流浪宠物寻觅靠谱的领养家庭，为领养者提供领养科普、后续饲养指导，让双向的陪伴长久温暖。</div>
				<el-button id="hb" type="success"><router-link  to="/adopt">点击领养</router-link></el-button>
			</div>
			<div class="col-6">
				<img id="himg" src="../assets/dog.png"/>
			</div>
		</div>
	</div></div>
	<div id="img-box">
		<img v-for="index in 6" :key="index" src="../assets/repeat.png"/>
	</div>
	<div class="service-wrap">
	  <div class="container">
		<div id="container">
	    <h2 >我们的核心服务</h2>
		<p id="hp">我们搭建专业规范的宠物领养服务体系，用标准化的领养审核与回访流程，带给领养人安心顺畅的领养体验，用心守护每一次人与毛孩子的温暖相遇。</p>
		<div id="card" class="row mt-5">
			<div class="col-4">
				<el-card id="a" shadow="always">
					<img src="../assets/a.png"/>
					<h5>宠物领养</h5>
					<p>专业工作人员核验领养资质，用心筛选每一个负责任的领养家庭</p>
				</el-card>
			</div>
			<div class="col-4">
				<el-card shadow="always">
					<img src="../assets/b.png"/>
					<h5>医疗保健</h5>
					<p>宠物诊疗科室齐全、功能完善，综合实力先进</p>
				</el-card>
			</div>
			<div class="col-4">
				<el-card shadow="always">
					<img src="../assets/c.png"/>
					<h5>宠物训练</h5>
					<p>我们有专业的管理团队，教导宠物适应城市生活</p>
				</el-card>
			</div>
		</div>
		<div id="card" class="row mt-5">
			<div class="col-4">
				<el-card shadow="always">
					<img src="../assets/d.png"/>
					<h5>宠物美容</h5>
					<p>美容技巧配合修剪技术，突出宠物可爱的一面</p>
				</el-card>
			</div>
			<div class="col-4">
				<el-card shadow="always">
					<img src="../assets/e.png"/>
					<h5>宠物寄养</h5>
					<p>可以日托或月托，我们是一个充满爱心的大家庭，安心的保障</p>
				</el-card>
			</div>
			<div class="col-4">
				<el-card shadow="always">
					<img src="../assets/f.png"/>
					<h5>宠物沐浴</h5>
					<p>专门的清洁服务，修剪毛发、修理指甲、除虫等日常护理</p>
				</el-card>
			</div>
		</div>
		<div id="content">
			<h2>我们的使命是为客户提供最优质的服务</h2>
			<p id="c1">以守护流浪毛孩子为初心，重新定义每一个小生命的尊严与价值，致力于推广科学宠物领养理念。秉持 “领养代替购买” 的宗旨，用家人般的陪伴与呵护，做好领养前评估、领养后回访，为每一只小动物找到温暖靠谱的家。</p>
		</div>
		<div id="cat">
			<h2 id="ch2">每一只毛孩子都在等待一个家</h2>
			<p id="c2">以守护流浪小动物为初心，秉持 “领养代替购买” 理念，用家人般的呵护，认真做好领养审核与回访，帮毛孩子遇见温暖长久的归宿。</p>
			<el-button id="hb2" type="success"><router-link to="shop">查看服务</router-link></el-button>
		</div>
		</div>
	  </div>
	</div>
	
	
</template>

<script>
</script>

<style>
	@import "../assets/css/home.css";
</style>