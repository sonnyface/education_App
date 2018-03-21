<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="发布需求">
				<router-link to="/mine" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<router-link to="/need_publish"  slot="right">
					<img src="../images/qian.png"  alt>
				</router-link>
			</mt-header>
		</div>
		<!--老师列表  -->	
		<ul class="teacherLis">
			<li @click="Nowneed">
				<div class="left">
					<img src="../images/img06.png"  alt="">
					<p>
						<span>傅二牛</span>
						<i>15225928924</i>
					</p>
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
			<li @click="Nowneed">
				<div class="left">
					<img src="../images/img06.png"  alt="">
					<p>
						<span>傅二牛</span>
						<i>15225928924</i>
					</p>
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
			<li @click="Nowneed">
				<div class="left">
					<img src="../images/img06.png"  alt="">
					<p>
						<span>傅二牛</span>
						<i>15225928924</i>
					</p>
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
</template>

<script>
import router from "./../router/router_student.js";
import Vue from 'vue';
import "./../scss/issue.scss";
import "./../scss/nowNeed.scss";

export default {
	data() {
		return {

		}
	},
	// 事件
	methods:{
		Nowneed(){
			router.push({
				path:'student_data'
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