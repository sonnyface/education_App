<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="我的邀请">
				<router-link to="/mine" slot="left">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 邀请码 -->
		<ul class="yaoqingma"> 
			<li>
				<div>邀请码</div>
				<div>
					<img src="../images/erweima.png" alt="">
					<span>she2884789</span>
				</div>
			</li>
			<li style="border:none;">
				邀请列表
			</li>
		</ul>
		<ul class="lie">
			<li class="lie_li">
				<img src="../images/wode_shi.png" alt="">
				<div class="name">
					<div class="ming">梼杌</div>
					<div class="ma">gh4433245</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import "./../scss/invite.scss";
	import MyAjax from "./../md/MyAjax.js";
	import Vue from"vue";
	import router from "./../router/router_agency.js";	

	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	
</style>