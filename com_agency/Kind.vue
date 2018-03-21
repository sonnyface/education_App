<template>
	<div>
		<div class="header">
			<mt-header title="学生端发现">	
				<router-link to="/Up_load"  slot="right">
					<img src="../images/qian.png"  alt>
				</router-link>		
			</mt-header>
		</div>
		<!-- 列表 -->
		<ul class="list">
			<li>
				<div class="left">
					<img src="../images/pay.png" alt="">
				</div>
				<div class="right">
					<div class="biao">李子牛</div>
					<p>教师个人的范例，对于青年人的心灵，是任何东西都不可能代替的最有用的阳光。        ——乌申斯基</p>
					<div class="tuji tujiBox" @click="toVideo">
						<img class="tujiImg" src="../images/img13.png" alt="">
						<div class="tujiVideo">
							<h4>【英语课】大题秒杀技巧套路</h4>	
							<div>
								<img src="../images/wode_time.png" alt="">
								<span>1月01日到1月10日  高三  2课时</span>
							</div>
						</div>
					</div>
					<!-- 时间 -->
					<div class="time">
						<div>2017.11.30</div>
						<div>
							<img src="../images/faxian_ping.png" alt="">
							<span>1</span>
						</div>
					</div>
					<!-- 评论列表 -->
					<div class="ping_list">
						<div class="hui">
							<img src="../images/pay.png" alt="">
							<div class="laoshi">
								秦老师:
							</div>
							<p>你能说出这样的话我深感欣慰啊！</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="left">
					<img src="../images/pay.png" alt="">
				</div>
				<div class="right">
					<div class="biao">李子牛</div>
					<p>教师个人的范例，对于青年人的心灵，是任何东西都不可能代替的最有用的阳光。        ——乌申斯基</p>
					<div class="tuji" @click="toDetail">
						<img  class="tujiImg" src="../images/wode_bg.png" alt="">
						<img  class="tujiImg" src="../images/wode_bg.png" alt="">
						<img  class="tujiImg" src="../images/wode_bg.png" alt="">
					</div>
					<!-- 时间 -->
					<div class="time">
						<div>2017.11.30</div>
						<div>
							<img src="../images/faxian_ping.png" alt="">
							<span>1</span>
						</div>
					</div>
					<!-- 评论列表 -->
					<div class="ping_list">
						<div class="hui">
							<img src="../images/pay.png" alt="">
							<div class="laoshi">
								秦老师:
							</div>
							<p>你能说出这样的话我深感欣慰啊！</p>
						</div>
					</div>
				</div>
			</li>
			
		</ul>
	</div>
</template>

<script>
import "./../scss/kind.scss";
import MyAjax from "./../md/MyAjax.js";
import Vue from"vue";
import router from "./../router/router_agency.js";	


export default {
	data(){
		return {

		}
	},
	methods:{
		toVideo(){
			router.push({
				path:"video_now"
			})
		},
		toDetail(){
			router.push({
				path:'Detail'
			})
		}
	},
	mounted(){

	}
}
</script>

<style scoped>

</style>