<template>
	<div>
		<!--头部-->
		<div class="top">
			<div class="touxiang" @click="complete_info">
				<img src="../images/wode_tou.png"/>
			</div>
		</div>
		<!--列表-->
		<div class="lie">
			<ul class="zong">
				<li class="list" @click="issue()">
					<img src="../images/wode_fabu.png" alt="">
					<p>发布课程</p>
				</li>
				<li class="list" @click="vide()">
					<img src="../images/wode_luzhi.png" alt="">
					<p>上传录屏</p>
				</li>
				<li class="list" @click="invite()"> 
					<img src="../images/wode_yao.png" alt="">
					<p>我的邀请</p>
				</li>
				<li class="list" @click="wallet()">
					<img src="../images/wode_qian.png" alt="">
					<p>钱包</p>
				</li>
				<li class="list" @click="collect()">
					<img src="../images/wode_shou.png" alt="">
					<p>收藏</p>
				</li>
				<li class="list" @click="set()">
					<img src="../images/wode_she.png" alt="">
					<p>设置</p>
				</li>
			</ul>
			<div class="xian"></div>
		</div>
		<!-- 我的课程 -->
		
		<div class="kecheng">
			<h6 @click="toMore" > 我的课程>> </h6>
			<ul class="jiqiao">
				<li @click="tovideo_now">
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
	import router from "./../router/router_agency.js";
	import Vue from 'vue';
	import "./../scss/mine.scss";
	export default {
			data() {
				return {

				}
			},
			// 事件
			methods:{
				tovideo_now(){
					router.push({
						path:'video_now'
					})
				},
				toMore(){
					router.push({
						path:'My_class'
					})
				},
				complete_info(){
					router.push({
						path:'Complete_info'
					})
				},
				// 我的邀请
				invite(){			
					router.push({
						path:"invite",
					
					});		
				},
				// 设置
				set(){			
					router.push({
						path:"set",
						
					});		
				},
				// 发布课程
				issue(){			
					router.push({
						path:"issue",
					
					});		
				},
				// 上传录屏
				vide(){			
					router.push({
						path:"vide",
						// query:{
						// 	id:shopID,
						// 	shopId:shopId						
						// }
					});		
				},
				// 上传录屏
				collect(){			
					router.push({
						path:"collect",
						// query:{
						// 	id:shopID,
						// 	shopId:shopId						
						// }
					});		
				},
				// 钱包
				wallet(){			
					router.push({
						path:"wallet",
						// query:{
						// 	id:shopID,
						// 	shopId:shopId						
						// }
					});		
				},
			},
			// 接口调用
			mounted() {

			}
		}
</script>

<style>
</style>