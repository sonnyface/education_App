<template>
	<div>
		<!-- 头部 -->
		<div class="header">
			<mt-header title="我的课程">
				<router-link to="" slot="left">
					<mt-button @click="toback" icon="back"></mt-button>											
				</router-link>				
				
			</mt-header>
		</div>
		<!-- 我的课程 -->
		<div class="kecheng">			
			<ul class="jiqiao">
				<li @click="toVideo_now">
					<div class="left">
						<img src="../images/wode_shi.png" alt="">
					</div>
					<div class="right">
						<div class="one">
							<img class="ke" src="../images/kemu.png" alt="">
							<span>英语</span>
							<p>【技巧课】大题秒杀技巧套路</p>
						</div>
						<div class="two">
							<img class="time" src="../images/wode_time.png" alt="">
							<p>1月01日到1月10日  高三  8课时</p>
						</div>
						<div class="three">
							<div class="num">
								<img class="time" src="../images/wode_yonghu.png" alt="">
								<p><span>123</span>人报名</p>
							</div>
							<div class="money">￥99.00</div>
						</div>
					</div>
				</li>
				<li @click="toVideo_now">
					<div class="left">
						<img src="../images/wode_shi.png" alt="">
					</div>
					<div class="right">
						<div class="one">
							<img class="ke" src="../images/kemu.png" alt="">
							<span>英语</span>
							<p>【技巧课】大题秒杀技巧套路</p>
						</div>
						<div class="two">
							<img class="time" src="../images/wode_time.png" alt="">
							<p>1月01日到1月10日  高三  8课时</p>
						</div>
						<div class="three">
							<div class="num">
								<img class="time" src="../images/wode_yonghu.png" alt="">
								<p><span>123</span>人报名</p>
							</div>
							<div class="money">￥99.00</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import "./../scss/mine.scss";
import Vue from "vue";
import router from "./../router/router_student.js";


export default {
	data(){
		return {
			

		}
	},
	methods :{
		toback(){
			window.history.go(-1);
		},
		toDetail(){
			router.push({
				path:'teacher_class'
			})
		},
		toVideo_now(){
			router.push({
				path:'video_old'
			})
		}
	},
	mounted(){


	}
}
</script>

<style lang="scss" scoped>
@import "./../scss/main.scss";

.kecheng{
	margin-top:0.5rem;
}

</style>