<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="发布需求">
				<router-link to="" slot="left">
				    <mt-button @click="toback" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 提交表单 -->
		<div class="for">
			<div class="inp">
				<div class="left">阶段</div>
				<div class="right">
					<input type="text" placeholder="初中小学或高中">
				</div>
			</div>

			<div class="inp">
				<div class="left">年级</div>
				<div class="right">
					<input type="text" placeholder="例: 初中">
				</div>
			</div>

			<div class="inp">
				<div class="left">课程名称</div>
				<div class="right">
					<input type="text">
				</div>
			</div>

			<div class="inp">
				<div class="left">上课时间</div>
				<div class="right">
					<input type="text">
				</div>
			</div>
		
		</div>
		<!-- 按钮 -->
		<div class="issueBtn">
			<mt-button >发布</mt-button>
		</div>
	</div>
</template>

<script>
	import router from "./../router/router_student.js";
	import Vue from 'vue';
	import "./../scss/issue.scss";


	export default {
			data() {
				return {

				}
			},
			// 事件
			methods:{
				toback(){
					window.history.go(-1);
				}
			
			},
			// 接口调用
			mounted() {

			}
		}
</script>

<style>
</style>