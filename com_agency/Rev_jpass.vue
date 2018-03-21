<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="修改交易密码">
				<router-link to="/set" slot="left">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 输入标单 -->
		<ul class="x_biao">
			<li>
				<input type="text" placeholder="请输入手机号">
			</li>
			<li>
				<input type="text" placeholder="请输入验证码">
				<div>
					获取验证码
				</div>
			</li>
			<li>
				<input type="password" placeholder="设置6-8位数密码">
			</li>
			<li>
				<input type="password" placeholder="再次输入密码">
			</li>
		</ul>
		<div class="x_btn1">
			完成
		</div>
	</div>
</template>

<script>
	import router from "./../router/router_agency.js";
	import Vue from 'vue';
	import "./../scss/rev_jpass.scss";


	export default {
			data() {
				return {

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