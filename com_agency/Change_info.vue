
<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="完善资料">
				<router-link to="/mine" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<!-- <router-link to="/"  slot="right">
					<img src="../images/qian.png"  alt>
				</router-link> -->
			</mt-header>
		</div>
		<!-- 我的课程 -->
		<div class="kongBox"></div>
		<div class="com_head">
			<img src="./../images/tou.png" alt="">
			<span>上传头像</span>			
		</div>
		<div class="com_input">
			<label for="">
				<img src="../images/person.png" alt="">
				<span>姓名</span>
			</label>
			<input type="text" placeholder="">
		</div>
		<div class="com_input" style="border:none;">
			<label for="">
				<img src="../images/phone.png" alt="">
				<span>电话</span>
			</label>
			<input type="text" placeholder="">
		</div>
		<div class="kongBox"></div>

		
		<div class="com_btn">
			<mt-button>保存</mt-button>
		</div>
		
		
	</div>
</template>
<script type="text/javascript">
import router from "./../router/router_agency.js";
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
<style lang="scss" scoped>
@import "../scss/main.scss";
.kongBox{
	width:100%;
	height:0.25rem;
	background:#dff1ff;
}

.com_head{
	width:100%;
	height:6.125rem;
	@include flex-center;
	font-size:0.65rem;
	color:#444;
	img{
		width:3.25rem;
		height:3.25rem;
		border-radius:3.25rem;
	}
	span{
		padding-top:0.5rem;

	}


}
.com_input{
	width:100%;
	height:2.425rem;
	box-sizing:border-box;
	padding:0 0.6rem;
	@include flexBox;
	align-items:center; 
	-webkit-box-align:center;
	font-size:0.65rem;
	color:#444;
	border-bottom:1px solid #ddd;
	label{
		height:100%;
		display:block;
		line-height:2.425rem;
		@include flexBox;
		align-items:center; 
		-webkit-box-align:center;
		span{
			padding-left:0.5rem;
		}
		img{
			width:1.125rem;
			height:1.125rem;
		}
	}
	input{
		@include flex(1);
		height:1.125rem;
		margin-left:1rem;
	}
	.input{
		@include flex(1);
	}
	.take_photo{
		line-height:2.425rem;
		@include flexCenter;
		font-size:0.6rem;
		color:#c8c8c8;
		img{
			width:1.2rem;
			height:1.125rem;
			padding-left:0.5rem;
		}
	}

}
//正反面
.com_main{
	width:100%;
	height:8.125rem;	
	box-sizing:border-box;
	padding:0.75rem 0.6rem 0.4rem;
	.com_box{
		width:100%;
		height:100%;
		box-shadow:0 0 0.3rem #ddd;
		border-radius:0.375rem;
		@include flexCenter;
		.box_front{
			width:7rem;
			height:4.5rem;
			background:#ddd;
			border-radius:0.375rem;
			margin:0 0.75rem;
			img{
				width:100%;
			}
		}
	}
}
// 按钮
.com_btn{
	width:100;
	position:fixed;
	left:0;
	right:0;
	bottom:2.5rem;
	margin:auto;
	@include flex-center;
	
	button{
		width:10.0rem;    
		background:#1fb8ff;
		text-align:center;
		color:#fff;
		font-size:0.65rem;	
		height:1.7rem;
		background:#1fb8ff;
		color:#fff;
		font-size:0.65rem;
		line-height:1.7rem;
	}
}



</style>