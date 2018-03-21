<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="最近联系人">				
				<router-link to="" slot="left">
					<mt-button @click="toback" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!--内容区-->
		<div class="mian">
			<!--老师列表  -->
			<ul class="teacherLis">
				<li @click="student_data">
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
								<span style="color:#1fb8ff">从业年限:10年</span>
							</dt>
						</dl>
					</div>					
				</li>	
				<li @click="student_data">
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
								<span style="color:#1fb8ff">从业年限:10年</span>
							</dt>
						</dl>
					</div>					
				</li>	
				<li @click="student_data">
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
								<span style="color:#1fb8ff">从业年限:10年</span>
							</dt>
						</dl>
					</div>					
				</li>		


			</ul>
		</div>	
	</div>
</template>

<script>
import router from "./../router/router_student.js";
import Vue from 'vue';
import "./../scss/home.scss";
import MyAjax from "./../md/MyAjax.js";

	//引入头部	
	import { Header } from 'mint-ui';
	Vue.component(Header.name, Header);

	//轮播图
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	//最新需求
	import { Cell } from 'mint-ui';
	Vue.component(Cell.name, Cell);

	export default {
		data() {
			return {

			}
		},
		methods: {

			// 学生资料
			student_data(){
				router.push({
					path:'teacher_data'
				})
			},
			toback(){
				window.history.go(-1);
			}
		

		},
		mounted() {
			// var that = this;
			// var num = 0;
			// var id = this.$route.query.id;

			//$(".cityAdress").html(foodList);
			//			var url="https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id=140&page="+num;
			//			MyAjax.vueJson(url,function(data){
			//				//console.log(data);
			//				that.everyFood=data;
			//	
			//			},function(err){
			//				console.log(err)
			//			})
			//			
		}

	}
	</script>


	<style lang="scss" scoped>

	.teacherlist .teacherLis li .right dl{
		margin-left:0.2rem;
	}


	</style>