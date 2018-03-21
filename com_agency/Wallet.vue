<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="钱包">
				<router-link to="/mine" slot="left">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 内容 -->
		<div class="mon">
			<img src="../images/x_money.png" alt="">
			<p class="yue">余额</p>
			<p class="money">￥2500</p>
		</div>
		<!-- 按钮 -->

		<div class="x_btn">
			<p>温馨提示，你现在可提现金额20%</p>
			<div class="btn_1" @click="toRecharge"><mt-button >充值</mt-button></div>
			<div class="btn_2"  @click="towidthdraw"><mt-button >提现</mt-button></div>
		</div>
	</div>
</template>

<script>
	import router from "./../router/router_agency.js";
	import Vue from 'vue';
	import "./../scss/wallet.scss";


	export default {
			data() {
				return {

				}
			},
			// 事件
			methods:{
				toRecharge(){
					router.push({
						path:'/Recharge'
					})
				},
				towidthdraw(){
					router.push({
						path:'/Widthdraw'
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