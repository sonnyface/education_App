<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="学生端首页">
				<router-link to="/search" slot="right">
					<mt-button icon="search" ></mt-button>
				</router-link>
				
			</mt-header>
		</div>
		<!--内容区-->
		<div class="mian">
			<mt-swipe :auto="4000" :showIndicators="true">
				<mt-swipe-item>
					<img src="../images/banner01.png" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../images/banner01.png" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../images/banner01.png" />
				</mt-swipe-item>
			</mt-swipe>
			<!--导航 -->
			<ul class="stu_nav">
				<li>
					<router-link to="/class_lis">课程</router-link>
				</li>
				<li>
					<router-link to="/teacher_lis">名师</router-link>
				</li>
				<li>
					<router-link to="/sinatv">直播</router-link>
				</li>
				<li>
					<router-link to="/order_sinatv">点播</router-link>
				</li>
				<li>
					<router-link to="/service">客服</router-link>
				</li>				
			</ul>
			<!-- 优惠活动 -->				
			<div class="need">
				<mt-cell title="优惠活动"  >
					<!-- <span @click="nowNeed">查看更多 <img src="../images/img05.png"  alt=""> </span> -->
					<img   slot="icon" src="../images/voice.png" >
				</mt-cell>
			</div>
			<div class="lineBox"></div>
			<div class="stu_img"  @click="promotion">
				<img src="../images/bg02.png" alt="">
			</div>
			<!-- 名师推荐 -->
			<div class="need">
				<mt-cell title="名师推荐"  to="/teacher_more" >
					<span >查看更多 <img src="../images/jian01.png"  alt=""> </span>
					<img slot="icon" src="../images/hand.png" >
				</mt-cell>
			</div>
			<div class="lineBox"></div>
			<div class="stu_navimg">
				<ul>
					<li>
						<router-link to="/teacher_data"><img src="../images/class07.png" alt=""></router-link>
					</li>
					<li>
						<router-link to="/teacher_data"><img src="../images/clss08.png" alt=""></router-link>					
					</li>
					<li>
						<router-link to="/teacher_data"><img src="../images/class07.png" alt=""></router-link>						
					</li>
				</ul>
			</div>
			<!-- 最新课程 -->
			<div class="need">
				<mt-cell title="最新课程"  to="/class_fast" >
					<span >更多资源 <img src="../images/jian01.png"  alt=""> </span>
					<img slot="icon" src="../images/img04.png" >
				</mt-cell>
			</div>
			<!-- 我的课程 -->
			<div class="kecheng">			
				<ul class="jiqiao">
					<li @click="tovideo">
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
					<li @click="tovideo">
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
	</div>
</template>

<script>
import router from "./../router/router_student.js";
import Vue from 'vue';
import "./../scss/home.scss";
import "./../scss/mine.scss";
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
		
			// 优惠活动
			promotion(){
				router.push({
					path:'promotion'
				})
			},
			tovideo(){
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
		li{
			@include flex(1);
			
			border-left:1px solid #ddd;		
			a{
				font-size:0.65rem;
				color:#1fb8ff;
				display:block;
				width:100%;
				height:100%;
				@include flexCenter;	
			}
		}
		li:nth-of-type(1){
			border:none;
		}
	}
	.need .mint-cell-value span{
		color:#fc220f;
	}
	.stu_img{
		width:100%;
		margin-top:0.5rem;
		box-sizing:border-box;
		padding:0 0.6rem;
		img{
			width:100%;
			border-radius:0.25rem;
			box-shadow:0 0 0.25rem #ddd;
		}
	}
	.need{
		margin-top:0.25rem;
	}
	.stu_navimg{
		width:100%;
		margin-top:0.4rem;
		box-sizing:border-box;
		padding:0 0.6rem;
		overflow-x:auto;
		ul{
			@include flexBox;			
			width:130%;
			li{
				@include flex(1);
				padding-right:0.5rem;
				img{
					width:100%;
					border-radius:0.25rem;
				}
			}
		}
	}
	.kecheng{
		margin-bottom:2.8rem;
	}


	</style>