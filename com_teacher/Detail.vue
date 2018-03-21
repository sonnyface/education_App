<template>
	<div>
		<div class="header">
			<mt-header title="详情">
				<router-link to="kind" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 图片及文字部分-->
		<div class="detCont">
			<div class="detailTop">
				<h3>江苏今年30.34万人上大学 高招录取率达91.91%</h3>
				<p>记者13日从江苏省教育考试院获悉，今年我省普通高校招生录取工作顺利结束，累计录取各类新生30.34万人，总录取91.91% 创历史新高。其中本科院校录取203237人，比公布的B计划多录取5862人；重点院校（原“985、211”院校）录取24860人，比公布计划多录取2903人；高职（专科）录取100162人，江苏考生的总体录取率稳步提高、本科录取率稳步提高、重点高校录取率稳步提高，“三个稳步提高”目标圆满实现。</p>
				<img src="../images/img14.png" alt="">
			</div>
		</div>
		<!-- 相关推荐 -->
		<div class="relateCact">
			<div class="relate_top">
				<img src="../images/kuang.png" alt="">
				<span>相关推荐</span>
			</div>
			<ul class="relateUl">
				<li>
					<h5>江苏多名考生被录取后无学可上 涉事学校回应</h5>					
					<p>
						<span>0评论</span>
						<span>41阅读</span>
						<span>中国青年报</span>
					</p>
				</li>
				<li>
					<h5>江苏多名考生被录取后无学可上 涉事学校回应</h5>					
					<p>
						<span>0评论</span>
						<span>41阅读</span>
						<span>中国青年报</span>
					</p>
				</li>
				<li>
					<h5>江苏多名考生被录取后无学可上 涉事学校回应</h5>					
					<p>
						<span>0评论</span>
						<span>41阅读</span>
						<span>中国青年报</span>
					</p>
				</li>
			</ul>
		</div>
		<div class="comment">
			<div class="relate_top">
				<img src="../images/kuang.png" alt="">
				<span>评论</span>
			</div>
			<ul class="lie">
				<li class="lie_li">
					<img src="../images/wode_shi.png" alt="">
					<div class="name">
						<div class="ming">梼杌</div>
						<div class="ma">gh4433245gh4433245gh4433245gh3245gh4433243245gh4433243245gh4433244433245gh4433gh4433245gh4433245gh4433245gh3245gh4433243245gh4433243245gh4433244433245gh4433245245</div>
						<div class="datatime">2018-1-1</div>
					</div>

				</li>
				<li class="lie_li">
					<img src="../images/wode_shi.png" alt="">
					<div class="name">
						<div class="ming">梼杌</div>
						<div class="ma">gh4433245gh4433245gh4433245gh4433245</div>
						<div class="datatime">2018-1-1</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottom">
			<input type="text" placeholder="评论...">
			<mt-button >发送</mt-button>			
		</div>
	</div>
</template>

<script>
import MyAjax from "./../md/MyAjax.js";
import Vue from"vue";
import router from "./../router/router_teacher.js";	

// 按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button)
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);


export default {
	data(){
		return {

		}
	},
	methods:{
		toVideo(){
			router.push({
				path:"video_now"
			})
		}
	},
	mounted(){

	}
}
</script>

<style lang="scss" scoped>

@import  "./../scss/main.scss";


	// 图片及文字部分
	.detCont{
		width: 100%;
		box-sizing: border-box;
		padding: 0.6rem 0.6rem 0;
		h3{
			font-size: 0.8rem;
			color: #444;
			line-height: 2.25rem;
			font-weight:100;
		}
		p{
			font-size: 0.6rem;
			color: #333333;
			line-height:1.4rem;
			text-indent:1.2rem;
		}
		img{
			width: 100%;
			margin:1rem 0 0.7rem 0;
		}
	}

	// 相关推荐头部公用部分
	.relate_top{
		width:100%;
		height:1.2rem;
		position:relative;
		text-align:center;
		font-size:0.65rem;
		color:#333;
		font-weight:800;
		img{
			width:4.25rem;
			height:0.9rem;
			position:absolute;
			left:0;
			right:0;
			margin:auto;
			bottom:0;
		}
	}

	// 相关推荐
	.relateCact{
		width:100%;
		box-sizing: border-box;
		padding: 0 0.6rem;
		
		.relateUl{
			width:100%;
			li{
				width:100%;
				position:relative;
				h5{
					font-size:0.8rem;
					color:#333;
					line-height:2.2rem;						
				}
				p{
					font-size:0.6rem;
					color:#999;
					padding-bottom:0.75rem;
					width:100%;
					@include flexBox;
					span{
						padding-right:0.5rem;
					}
					span:nth-of-type(3){
						@include flex(1);
						text-align:right;
						padding-right:0;
					}
				}
			}
			li::after{
				position:absolute;
				left:0;
				right:-0.6rem;
				bottom:0;
				content:'';
				height:1px;
				transform:scaleY(0.5);
				-webkit-transform:sacleY(0.5);
				background:#ddd;
			}
			
		}
	}
// 评论
.comment{
	width:100%;
	margin: 1.25rem 0 1.25rem 0;

	// 列表
	.lie{
		box-sizing:border-box;
		padding:0 0.6rem;
		.lie_li{
			padding:0.3rem 0.6rem;
			border-bottom:0.05rem solid #dadada;
			@include flexBox;
			img{
				width:2.2rem;
				height:2.2rem;
				border-radius:50%;
			}
			.name{
				@include flex(1);
				padding-left:0.3rem;
				.ming{
					font-size:0.6rem;
					color:#1fb8ff;
					line-height:1.1rem;
				}
				.ma{
					font-size:0.6rem;
					color:#444;
					line-height:0.9rem;	
					word-break: break-all;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.datatime{
					text-align: right;
					width:100%;
					font-size:0.6rem;
					color:#bbb;
					line-height: 1rem;
				}
			}
		}
	}
}
// 按钮及输入框
.bottom{
	width:100%;
	height:2.375rem;
	border-top:1px solid #ddd;
	box-sizing:border-box;
	padding:0.5rem  0.6rem;
	@include flexBox;
	input{
		@include flex(1);
		height:1.5rem;
		background:#f2f2f2;
		font-size:0.6rem;
		text-indent:0.5rem;

	}
	button{
		 width:2.6rem;
		 height:1.5rem;        
        background:#1fb8ff;
        color:#fff;
        font-size:0.6rem;
        line-height:1.5rem;
        margin-left:0.5rem;
	}

}


</style>