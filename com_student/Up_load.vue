<template>
	<div>
		<div class="header">
			<mt-header title="编辑">	
				<router-link to="/" slot="left">
					<mt-button @click="toback" icon="back"></mt-button>
				</router-link>
				<router-link to="/"  slot="right">					
				</router-link>		
			</mt-header>
		</div>
		<div class="load_box">
			<mt-field placeholder="说点想说的..." type="textarea" rows="4" v-model="introduction" ></mt-field>
			<div class="video_pic"></div>
			<div class="upload_video">
				<img src="../images/addimg.png" alt="">
			</div>			
		</div>
		<!-- 按钮 -->
		<div class="setBtn">
			<mt-button >发布</mt-button>
		</div>

	</div>
</template>

<script>

import MyAjax from "./../md/MyAjax.js";
import Vue from"vue";
import router from "./../router/router_student.js";	


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
		},
		toback(){
			window.history.go(-1);
		}
	},
	mounted(){

	}
}
</script>

<style scoped lang="scss" scoped>
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
	
	.mint-cell-value textarea{
		font-size:0.65rem;
	}
	.video_pic{
		width:100%;
		img{
			width:100%;
		}
	}
	.upload_video{
		width:100%;
		height:2.5rem;

		img{
			float:right;
			width:2.375rem;
		}

	}
}

// 按钮
.setBtn{
    width:10.0rem;    
    background:#1fb8ff;
    text-align:center;
    color:#fff;
    font-size:0.65rem;
    border-radius:0.25rem;
    position:fixed;
    bottom:2.5rem;
    left:0;
    right:0;
    margin:auto;
    button{
        width:100%;
        height:1.7rem;
        background:#1fb8ff;
        color:#fff;
        font-size:0.65rem;
        line-height:1.7rem;

    }
}


</style>