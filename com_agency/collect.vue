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
				<mt-tab-item id="2">学生</mt-tab-item>
				<mt-tab-item id="3">动态</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="shoucang_kecheng">
						<ul class="jiqiao">
							<li>
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
						<ul class="teacherLis">
							<li>
								<div class="left">
									<img src="../images/img06.png"  alt="">
									<p>
										<span>傅二牛</span>
										<i>15225928924</i>
									</p >
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
									<div class="tuji">
										<img src="../images/wode_bg.png" alt="">
										<img src="../images/wode_bg.png" alt="">
										<img src="../images/wode_bg.png" alt="">
									</div>
									<!-- 时间 -->
									<div class="time">
										<div>2017.11.30</div>
										<div>
											<img src="../images/faxian_ping.png" alt="">
											<span>1</span>
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
import router from "./../router/router_agency.js";
import Vue from 'vue';
import "./../scss/collect.scss";
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

			},
			// 接口调用
			mounted() {

			}
		}
		</script>

		<style>
		</style>