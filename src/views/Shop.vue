<template>
	<div id="ph" class="mb-5">
		<img src="../assets/fuwu.png"/>
		<h1>我们的服务</h1>
		<p id="ph1">长期致力于流浪动物救助与领养推广，本着 “领养代替购买” 的宗旨，以 “家人” 般的呵护</p>
		<p id="ph2">将救助与领养服务做到贴心与负责，为流浪毛孩子寻找人性化、有温度的长久归宿</p>
	</div>
	<div class="container">
		<div id="container">
			<h2 class="mb-4">医疗保健</h2>
			<div class="row">
				<div class="col-10">
					<div class="row mb-4">
						<div id="yimg" class="col-7">
							<img id="ya" src="../assets/ya.png"/>
							<img id="yb" src="../assets/yb.png"/>
							<img id="yc" src="../assets/yc.png"/>
						</div>
						<div class="col-5">
							<p id="yp">我们拥有一支经验丰富的宠物医疗专业团队，由执业兽医师、护理人员组成。团队专注流浪动物诊疗工作，熟练完成基础体检、驱虫疫苗、绝育手术等各项医疗保健项目，认真为每一只毛孩子建立健康档案，细致排查疾病隐患。团队坚持科学诊疗，用心守护流浪动物健康，用专业能力为宠物和领养家庭保驾护航。</p>
						</div>
					</div>
					<div class="row mb-5">
						<div id="yi1" class="col-3 mr-1">
							<h4>基础健康体检</h4>
							<p id="pp">对猫狗做全身基础检查：查看皮肤、耳道、口腔、体重，排查外伤、皮肤病、寄生虫，评估精神状态。</p>
							<p id="yprice">120元/只</p>
						</div>
						<div id="yi1" class="col-3">
							<h4>疫苗与体内外驱虫</h4>
							<p id="pp">给宠物完成驱虫（体内 + 体外），按周期接种猫三联 / 犬四联 + 狂犬疫苗，降低传染病风险。</p>
							<p id="yprice">140~180元/只</p>
						</div>
						<div id="yi1" class="col-3">
							<h4>绝育手术</h4>
							<p id="pp">为成年宠物实施绝育手术，减少无序繁殖。</p>
							<p id="yprice1">180~380元/只</p>
						</div>
					</div>
				</div>
				<div class="col-2 mb-5">
					<el-aside id="yiyu" width="200px" >
						<h5>医疗保健</h5>
						<p>预约时间：周一~周五 &nbsp; 9:00~11:00 &nbsp; 13:00~17:00</p>
						<p>联系电话：13288880000</p>
						<button v-on:click="yuyue">立即预约</button>
					</el-aside>
				</div>
			</div>
			<div class="xun">
				<h2 class="mb-4">宠物训练</h2>
				<div class="row">
					<div class="col-10 ">
						<img id="x" class="mb-4" src="../assets/x.png"/>
						<p id="xpi">我们拥有专业的宠物训练团队，训犬师均持有宠物训练相关证书，长期从事流浪动物行为引导工作。团队擅长运用正向激励的训练方式，开展基础服从、居家行为矫正、社会化训练等人宠课程，帮助流浪宠物改掉不良习惯，学会基础指令，克服胆小应激等问题。我们也会指导领养主人掌握科学的陪伴方法，搭建稳定信任的人宠关系，助力毛孩子更好地融入家庭生活。</p>
						<div class="row mb-5">
							<div id="x1" class="col-3">
								<h4>基础服从训练</h4>
								<p id="xp">学习简单指令：坐下、等待、过来、随行。帮助宠物听懂主人指令，建立信任关系，改善不听呼唤、乱跑的问题。</p>
								<p id="xprice">260元/期</p>
							</div>
							<div id="x1" class="col-3">
								<h4>居家行为矫正</h4>
								<p id="xp">纠正坏习惯：乱咬东西、扑人、拆家、乱叫、随地大小便。解决流浪宠物进入新家后的适应问题，养成居家好习惯。</p>
								<p id="xprice">320元/期</p>
							</div>
							<div id="x1" class="col-3">
								<h4>社会化训练</h4>
								<p id="xp">训练宠物适应陌生人、其他猫狗、汽车、嘈杂环境。减少胆小、应激、害怕出门的情况，让毛孩子从容外出。</p>
								<p id="xprice">280元/期</p>
							</div>
							<div id="x1" class="col-3">
								<h4>人宠互动陪伴课程</h4>
								<p id="xp">教导主人正确的互动方式，学习如何安抚敏感流浪宠物，建立稳定亲密关系，减少领养后弃养概率。</p>
								<p id="xprice">免费(线上公益指导)</p>
							</div>
						</div>
					</div>
					<div class="col-2 mb-5">
						<el-aside id="yiyu" width="200px" >
							<h5>宠物训练</h5>
							<p>预约时间：周一~周五 &nbsp; 9:00~11:00 &nbsp; 13:00~17:00</p>
							<p>联系电话：13288880914</p>
							<button>立即预约</button>
						</el-aside>
					</div>
				</div>
			</div>
			<div class="mei">
				<h2 class="mb-4">宠物美容</h2>
				<div class="row">
					<div class="col-10">
						<div class="row">
							<div class="col-5">
								<p id="mpi">我们拥有细心专业的宠物美容团队，美容师熟练掌握猫狗洗护、毛发打理全套操作，熟悉流浪宠物容易紧张、敏感胆怯的特点。团队可提供全身基础洗护、毛发修剪造型、指甲修剪、耳道清洁、肛门腺清理、足底毛发修理等美容项目。在洗护打理的全过程中，美容师会同步细致检查宠物皮肤、毛发，及时发现皮屑、皮炎、寄生虫等皮肤隐患并告知主人。团队全程采用温和洗护方式，耐心安抚毛孩子情绪，轻柔完成各项美容操作，让宠物保持毛发干净蓬松、体态清爽舒适，更好地陪伴领养家庭。</p>
							</div>
							<div id="mi" class="col-4">
								<img id="ma" src="../assets/ma.jpg"/>
								<img id="mb" src="../assets/mb.webp"/>
								<img id="mc" src="../assets/mc.jpg"/>
							</div>
							<div id="mh" class="row mb-5">
								<div id="m1" class="col-6">
									<h4>局部毛发精修</h4>
									<p id="mp">修剪脚底毛、眼周杂毛、腹底长毛、臀部周边毛发；清理局部轻微毛结；修剪完成后简单梳理。不做全身造型，解决局部长毛带来的弄脏、打滑、遮挡视线等问题。</p>
									<p id="mprice1">100元/只</p>
								</div>
								<div id="m2" class="col-6">
									<h4>全身毛发修剪美容</h4>
									<p id="mp">包含全套基础沐浴；对全身毛发进行开结处理；根据宠物品种与体态，修剪全身毛发；同步修整脚底毛、腹毛、臀部毛发；洗护修剪全程检查皮肤毛发状态，及时反馈皮肤隐患。适合需要整体打理、毛发有少量打结的宠物。</p>
									<p id="mprice">130元/只</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-2 mb-5">
						<el-aside id="yiyu" width="200px" >
							<h5>宠物美容</h5>
							<p>预约时间：周一~周五 &nbsp; 9:00~11:00 &nbsp; 13:00~17:00</p>
							<p>联系电话：13288880422</p>
							<button>立即预约</button>
						</el-aside>
					</div>
				</div>
			</div>
			<h2 class="mb-4">宠物寄养</h2>
			<div class="row">
				<div class="col-10">
					<p id="jp">我们拥有温馨安全的宠物寄养环境，饲养员拥有丰富的猫狗照料经验，熟悉流浪宠物敏感胆小的性格特点。我们提供多档位寄养套餐，包含日常喂养、定时遛放、环境清洁、健康观察等服务，可根据宠物的体型、性格和特殊需求选择对应的寄养方案。寄养期间工作人员会每日观察宠物精神、食欲与身体状态，及时向主人反馈宠物情况，细心照料每一位毛孩子，让外出的主人安心，宠物也能得到贴心照顾。</p>
					<div class="row">
						<div class="col-4 mb-2">
							<img id="ja" src="../assets/ja.jpg"/>
						</div>
						<div class="col-4">
							<img id="jb" src="../assets/jb.jpg"/>
						</div>
						<div class="col-4">
							<img id="jc" src="../assets/jc.jpg"/>
						</div>
					</div>
					<div id="jip" class="row mb-5">
						<div id="ji1" class="col-3 mr-1">
							<h4>基础日间寄养</h4>
							<p id="pp">白天托管照料，提供定时喂食、饮水、环境清理，简单互动陪伴，适合白天临时外出，晚上接回的宠物。</p>
							<p id="jprice1">90元/天</p>
						</div>
						<div id="ji2" class="col-3">
							<h4>标准过夜寄养</h4>
							<p id="pp">包含全天喂养、早晚定时遛放、每日笼舍清洁，工作人员每日记录宠物状态，适合短期外出过夜寄养。</p>
							<p id="sprice">130元/天</p>
						</div>
						<div id="ji3" class="col-3">
							<h4>特殊看护寄养</h4>
							<p id="pp">针对老年宠物、术后康复宠物、需要按时喂药的宠物，提供定时喂药、重点健康监测、专属安静独立空间。</p>
							<p id="sprice">160元/天</p>
						</div>
					</div>
				</div>
				<div class="col-2 mb-5">
					<el-aside id="yiyu" width="200px" >
						<h5>宠物寄养</h5>
						<p>预约时间：周一~周五 &nbsp; 9:00~11:00 &nbsp; 13:00~17:00</p>
						<p>联系电话：13288880613</p>
						<button>立即预约</button>
					</el-aside>
				</div>
			</div>
			<!--宠物沐浴-->
			<h2 class="mb-4">宠物沐浴</h2>
			<div class="row">
				<div class="col-10">
					<p id="sp1">我们拥有细心专业的宠物美容团队，美容师熟练掌握猫狗洗护全套操作，熟悉流浪宠物容易紧张、敏感胆怯的特点。团队擅长采用温和安抚的洗护方式，开设基础沐浴、深度洁净沐浴、舒缓养护沐浴三类清洁服务，为毛孩子去除毛发灰尘与体味，完成耳道清洁、毛发吹干梳理，同时细致检查皮肤毛发状态，及时发现皮屑、皮炎、寄生虫等隐患并告知领养主人。全程轻柔操作安抚宠物情绪，让毛孩子安心完成清洁，保持毛发干净清爽，舒适地陪伴领养家庭。</p>
					<div id="si" class="row">
						<div class="col-4">
							<img id="sa" src="../assets/sa.jpg"/>
						</div>
						<div class="col-4">
							<img id="sb" src="../assets/sb.jpg"/>
						</div>
						<div class="col-4">
							<img id="sc" src="../assets/sc.jpg"/>
						</div>
					</div>
					<div id="st" class="row mb-5">
						<div id="yu1" class="col-3 mr-1">
							<h4>基础沐浴</h4>
							<p id="pp">使用宠物专用温和香波进行全身清洗，冲净毛发上灰尘与体味；完成全身毛发吹干，基础梳理浮毛；简易耳道清洁，擦除耳道表面污垢；同步做基础外观查看，简单观察皮肤有无明显异常。适合日常定期清洁。</p>
							<p id="sprice1">80元/只</p>
						</div>
						<div id="yu2" class="col-3">
							<h4>深度洁净沐浴</h4>
							<p id="pp">针对油脂厚重、体味较重的宠物，进行全身去油洗护；冲洗后充分吹干，对轻微打结毛发进行基础开结；深度清洁耳道，清理耳垢；足底擦拭清洁；洗护过程检查皮肤状态，记录皮屑、红点等问题并告知主人。适合长期未清洁、体味重的毛孩子。</p>
							<p id="sprice">100元/只</p>
						</div>
						<div id="yu3" class="col-3">
							<h4>舒缓养护沐浴</h4>
							<p id="pp">选用低敏宠物香波搭配护毛素，全身深度洗护，滋养干枯毛发；充分吹干并梳理毛发，缓解毛发干燥；完整耳道清洁；足底清洁；全面的皮肤与毛发检查，提供居家毛发养护小建议。适合皮肤偏敏感、毛发干枯脆弱的宠物。</p>
							<p id="sprice">120元/只</p>
						</div>
					</div>
				</div>
				<div class="col-2 mb-5">
					<el-aside id="yiyu" width="200px" >
						<h5>宠物沐浴</h5>
						<p>预约时间：周一~周五 &nbsp; 9:00~11:00 &nbsp; 13:00~17:00</p>
						<p>联系电话：13288880926</p>
						<button>立即预约</button>
					</el-aside>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	@import "../assets/css/shop.css"
</style>