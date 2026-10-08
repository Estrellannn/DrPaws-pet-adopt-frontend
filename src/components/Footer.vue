<template>
	<div class="footer-wrap">
		<div class="container">
			<div id="container">
				<footer>
					<img id="footer1" src="../assets/f1.png"/>
					<img src="../assets/f2.png"/>
					<div id="fo" class="row">
						<div class="col-7">
							<h5>给流浪毛孩子一个家</h5>
							<p id="fp">广东省广州市广府中心A座888室</p>
							<p>客服专线 400-888-0914</p>
						</div>
						<div class="col-4">
							<h5 id="ku">快速链接</h5>
							<div id="flj">
								<ul id="fljul">
									<li class="me-2">
										<router-link to="/">首页</router-link>
									</li>
									<p class="me-2">|</p>
									<li class="me-2">
										<router-link to="/adopt">领养</router-link>
									</li>
									<p class="me-2">|</p>
									<li class="me-2">
										<router-link to="/story">社区</router-link>
									</li>
									<p class="me-2">|</p>
									<li>
										<router-link to="/shop">服务</router-link>
									</li>
								</ul>
							</div>
							<div class="row">
								<div class="col-1 me-3">
									<img src="../assets/fa.png"/>
								</div>
								<div class="col-1 me-2">
									<img src="../assets/fb.png"/>
								</div>
								<div class="col-1">
									<img src="../assets/fc.png"/>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#footer1{
		margin-right: 11px;
	}
	h5{
		color: #6549c2;
		font-weight: 600;
	}
	p{
		color: #ecebef;
	}
	#ku{
		color: #ffffff;
	}
	li{
		text-decoration: none;
	}
	#flj{
		margin-top: 20px;
	}
	#flj a{
		color: #d2d2d2;
		text-decoration: none;
	}
	#flj a.router-link-active {
	  color: #ffffff !important;
	}
	#fljul{
		display: flex;
		list-style: none;
		margin: 0;
	}
	ul{
		margin: 0;
		padding: 0;
	}
	#fo{
		margin-top: 25px;
	}
	#fp{
		margin-top: 20px;
	}
</style>