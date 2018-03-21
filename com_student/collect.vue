<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="我的收藏">
				<router-link to="/mine" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- TAB切换 -->
		<div>
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">课程</mt-tab-item>
				<mt-tab-item id="2">老师</mt-tab-item>
				<mt-tab-item id="3">动态</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="shoucang_kecheng">
						<ul class="jiqiao">
							<li @click="toVideo">
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
					
					<!--老师列表  -->
					<div class="teacherlist">					
						<ul class="teacherLis" style="padding:0 ;">
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
					
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="shoucang_dongtai">
						<ul class="list">
							<li>
								<div class="left">
									<img src="../images/pay.png" alt="">
								</div>
								<div class="right">
									<div class="biao">李子牛</div>
									<p>教师个人的范例，对于青年人的心灵，是任何东西都不可能代替的最有用的阳光。        ——乌申斯基</p>
									<div class="tuji tujiBox" @click="video_now">
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
											<img  style="padding-right:0.5rem;" src="../images/heart02.png" alt="">
											<img src="../images/talk.png" alt="">
											<!-- <span>1</span> -->
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
									<div class="tuji" >
										<img  class="tujiImg" src="../images/wode_bg.png" alt="">
										<img  class="tujiImg" src="../images/wode_bg.png" alt="">
										<img  class="tujiImg" src="../images/wode_bg.png" alt="">
									</div>
									<!-- 时间 -->
									<div class="time">
										<div>2017.11.30</div>
										<div>
											<img  style="padding-right:0.5rem;" src="../images/heart03.png" alt="">
											<img src="../images/faxian_ping.png" alt="">
											<!-- <span>1</span> -->
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
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
import router from "./../router/router_student.js";
import Vue from 'vue';
import "./../scss/collect.scss";
import"./../scss/kind.scss";
// 引入导航栏
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
	data() {
		return {
			selected:"1"
		}
	},
		// 事件
		methods:{
			video_now(){
				router.push({
					path:"video_now"
				})
			},
			toVideo(){
				router.push({
					path:"video_old"
				})
			},
			toDetail(){
				router.push({
					path:'teacher_data'
				})
			}

		},
		// 接口调用
		mounted() {

		}
	}
	</script>

	<style>
	</style>