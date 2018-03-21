<template>
	<div>
		<div class="header">
			<mt-header title="编辑">	
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<router-link to="/"  slot="right">
					<img src="../images/publish.png"  alt>
				</router-link>		
			</mt-header>
		</div>
		<div class="load_box">
			<mt-field placeholder="编辑发布信息..." type="textarea" rows="4" v-model="introduction" ></mt-field>
			<div class="video_pic"></div>
			<div class="upload_video">
				<img src="../images/uploade.png" alt="">
			</div>			
		</div>

	</div>
</template>

<script>

import MyAjax from "./../md/MyAjax.js";
import Vue from"vue";
import router from "./../router/router_agency.js";	


export default {
	data(){
		return {
			introduction:null

		}
	},
	methods:{
		toVideo(){
			router.push({
				path:"video_now"
			})
		},
		toDetail(){
			router.push({
				path:'Detail'
			})
		}
	},
	mounted(){

	}
}
</script>

<style scoped lang="scss">
@import "./../scss/main.scss";
.mint-header-button.is-right{
	height:100%;
	img{
		width:1.95rem;
		height:0.95rem;
		margin-top:0.7rem;
	}
}
.load_box{
	width:100%;
	box-sizing:border-box;
	padding: 0 0.6rem;
	border-bottom:1px solid #ddd;
	padding-bottom:0.5rem;
	.video_pic{
		width:100%;
		img{
			width:100%;
		}
	}
	.upload_video{
		width:100%;
		height:3.6rem;

		img{
			float:right;
			width:3.575rem;
		}

	}
}


</style>