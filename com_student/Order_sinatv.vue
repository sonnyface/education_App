<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="点播">
				<router-link to="/" slot="left">
					<mt-button icon="back" ></mt-button>
				</router-link>				
			</mt-header>
		</div>
		<!--内容区-->
		<div class="mian">
			<!-- navbar切换 -->
			<mt-navbar v-model="selected" class="stu_nav">
				<mt-tab-item id="1">课程 </mt-tab-item>
				<mt-tab-item id="2">名师 </mt-tab-item>
				<mt-tab-item id="3">年级 </mt-tab-item>
			
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
					<!-- 我的课程 -->
					<div class="kecheng">			
						<ul class="jiqiao">
							<li  @click="toVideo_now">
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
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					
				</mt-tab-container-item>
			</mt-tab-container>
		
			
		</div>	
	</div>
</template>

<script>
import router from "./../router/router_student.js";
import Vue from 'vue';
import "./../scss/mine.scss";
import MyAjax from "./../md/MyAjax.js";

//navbar
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
	data() {
		return {
			selected:'1'
		}
	},
	methods: {	
		toVideo_now(){
			router.push({
				path:'video'
			})
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

	<style scoped lang="scss">
	@import "./../scss/main.scss";

	.stu_nav{
		width:100%;
		height:1.425rem;
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
		@include flexBox;
		.mint-tab-item{
			@include flex(1);	
			@include flex-center;		
			border-left:1px solid #ddd;	
			border-bottom:3px solid #fff;			
		}
		
		li:nth-of-type(1){
			border:none;
		}
	}
	
	.kecheng{
		margin-top:1.0rem;
	}


	</style>