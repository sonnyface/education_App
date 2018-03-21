<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="搜索">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 搜索框 -->
		<div class="searchBox">			
			<div class="box">
				<input type="text" placeholder="欧阳秀">
			</div>
			<div class="searchBtn">
				<mt-button >搜索</mt-button>		
			</div>
		</div>
		<!--老师列表  -->
		<div class="teacherlist">					
			<ul class="teacherLis">
				<li>
					<div class="left">
						<img src="../images/img06.png"  alt="">
						<p>
							<span>傅二牛</span>
							<i>15225928924</i>
						</p>
					</div>
					<div class="right">
						<dl>
							<dt>
								<img src="../images/img07.png" alt="">
								<span>初一</i></span>
							</dt>
							<dt>
								<img src="../images/img08.png" alt="">
								<span>语文</span>
							</dt>
							<dt>
								<img src="../images/img09.png"  alt="">
								<span>09:00</i></span>
							</dt>
						</dl>
					</div>					
				</li>
			</ul>
		</div>
		
		
	</div>
</template>
<script type="text/javascript">	
import "./../scss/cart.scss";
import router from "./../router/router_teacher.js";
export default{
	data(){
		return{

		}
	},
	methods:{
		toVideo_now(){
			router.push({
				path:'video_now'
			})
		}
	},
	mounted(){

	}
}
</script>
<style type="text/css" lang="scss" scoped>
@import "./../scss/main.scss";

// 搜索框
.box input{
	width:100%;	
	text-align:center;
	font-size:0.65rem;
	color:#444;
}
 .searchBtn button{
	width:100%;
	height:100%;        
	background:#1fb8ff;
	color:#fff;
	font-size:0.7rem;
	line-height:0.725rem
	
}




</style>