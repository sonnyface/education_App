<template>
	<div>
		<!-- 头部 -->
		<div class="header">
			<mt-header title="师资列表">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>											
				</router-link>				
				
			</mt-header>
		</div>
		<!--老师列表  -->
		<div class="teacherlist">					
			<ul class="teacherLis">
				<li @click="toDetail">
					<div class="left">
						<img src="../images/img06.png"  alt="">
						<p>
							<span>黎老师</span>
							<i><b style="color:#1fb8ff;font-weight:100;">ID:</b>AS456666</i>
						</p>
					</div>
					<div class="right">
						<dl>
							<dt>
								<img src="../images/img07.png" alt="">
								<span>初一</span>
							</dt>
							<dt>
								<img src="../images/img08.png" alt="">
								<span>语文</span>
							</dt>
							<dt>							
								<span>从业年限:10年</i></span>
							</dt>
						</dl>
					</div>					
				</li>
				<li @click="toDetail">
					<div class="left">
						<img src="../images/img06.png"  alt="">
						<p>
							<span>黎老师</span>
							<i><b style="color:#1fb8ff;font-weight:100;">ID:</b>AS456666</i>
						</p>
					</div>
					<div class="right">
						<dl>
							<dt>
								<img src="../images/img07.png" alt="">
								<span>初一</span>
							</dt>
							<dt>
								<img src="../images/img08.png" alt="">
								<span>语文</span>
							</dt>
							<dt>							
								<span>从业年限:10年</i></span>
							</dt>
						</dl>
					</div>					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import "./../scss/cart.scss";
import Vue from "vue";
import router from "./../router/router_student.js";


export default {
	data(){
		return {
			

		}
	},
	methods :{
		toDetail(){
			router.push({
				path:'teacher_data'
			})
		}
	},
	mounted(){


	}
}
</script>

<style lang="scss" scoped>
.teacherLis{
	padding:0;
}
.teacherlist .teacherLis li .right dl{
	margin-left:0.2rem;
}

.teacherlist .teacherLis li .right dl dt:nth-of-type(3) span{
	color:#1fb8ff;
}
</style>