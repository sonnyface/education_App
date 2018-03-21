<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="录制视频">
				<router-link to="/" slot="left">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 我的课程 -->
		<div class="kecheng">
			<h6  >最近上传</h6>
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
		<!-- 更早视频 -->
		<div class="classBox"></div>
		<div class="kecheng">
			<h6>更早视频</h6>
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
<script type="text/javascript">
	import "../scss/home_vedio01.scss";
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

<style scoped>
		.kecheng h6{
		text-align: left !important;
	}
</style>
