<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="设置">
				<router-link to="/mine" slot="left">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 列表 -->
		<ul class="set_list">
			<li class="list" @click="rev_pass()">
				<div>修改密码</div>
				<img src="../images/shezhi_right.png" alt="">
			</li>
			<li class="list" @click="rev_jpass()">
				<div>交易密码</div>
				<img src="../images/shezhi_right.png" alt="">
			</li>
			<li class="list" style="border:none;">
				<div>当前版本</div>
				<div class="ban">1.10</div>
			</li>
		</ul>
		<!-- 按钮 -->

		<div class="setBtn">
			<mt-button >退出登录</mt-button>
		</div>
	</div>
</template>

<script>
	import router from "./../router/router_student.js";
	import Vue from 'vue';
	import "./../scss/set.scss";

	// 按钮
	import { Button } from 'mint-ui';
	Vue.component(Button.name, Button)


	export default {
			data() {
				return {

				}
			},
			// 事件
			methods:{
				// 修改密码
					rev_pass(){			
						router.push({
							path:"rev_pass",
							// query:{
							// 	id:shopID,
							// 	shopId:shopId						
							// }
						});		
					},
					// 修改交易密码
					rev_jpass(){			
						router.push({
							path:"rev_jpass",
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