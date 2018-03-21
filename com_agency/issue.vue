<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="发布课程">
				<router-link to="/mine" slot="left">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 提交表单 -->
		<div class="for">
			<div class="inp">
				<div class="left">阶段</div>
				<div class="right">
					<input type="text">
				</div>
			</div>

			<div class="inp">
				<div class="left">年级</div>
				<div class="right">
					<input type="text">
				</div>
			</div>

			<div class="inp">
				<div class="left">课程名称</div>
				<div class="right">
					<input type="text">
				</div>
			</div>

			<div class="inp">
				<div class="left">老师名称</div>
				<div class="right">
					<input type="text">
				</div>
			</div>

			<div class="inp">
				<div class="left">课程介绍</div>
				<div class="right">
					<textarea name=""></textarea>
				</div>
			</div>
		</div>
		<!-- 按钮 -->
		<div class="issueBtn">
			<mt-button >完成</mt-button>
		</div>
	</div>
</template>

<script>
	import router from "./../router/router_agency.js";
	import Vue from 'vue';
	import "./../scss/issue.scss";


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