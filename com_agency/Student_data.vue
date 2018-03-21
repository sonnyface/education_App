<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="学生资料">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<router-link to="/Dynamic_list" slot="right">
					<mt-button  >动态</mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- 内容区 -->
		<div class="main">
			<div class="top">
				<img src="../images/img10.png" height="133" width="133" alt="">
				<p>
					<span>欧阳秀</span>
					<i>15225928924</i>
				</p>
			</div>
			<!--当前状态  -->
			<div class="teacherLis">	
				<div class="statusNow">当前状态</div>	
				<div class="teachBox">	
					<dl>
						<dt>
							<img src="../images/img07.png" alt="">
							<span>初一 <i> (初中)</i></span>
						</dt>
						<dt>
							<img src="../images/img08.png" alt="">
							<span>语文</span>
						</dt>
						<dt>
							<img src="../images/img09.png"  alt="">
							<span>09:00</i></span>
						</dt>
					</dl>	
				</div>	
			</div>	
			<!--当前状态  -->
			<div class="teacherLis">	
				<div class="statusNow statusNow02">当前需求</div>		
				<div class="teachBox">	
					<dl>
						<dt>
							<img src="../images/class03.png" alt="">
							<span>初一 <i> (初中)</i></span>
						</dt>					
					</dl>	
					<dl>
						<dt>
							<img src="../images/class04.png" alt="">
							<span>语文</span>
						</dt>					
					</dl>	
					<dl>
						<dt>
							<img src="../images/class05.png" alt="">
							<span>2017年12月10日</i></span>
						</dt>					
					</dl>
					<dl>
						<dt>
							<img src="../images/class06.png" alt="">
							<span>09:00</i></span>
						</dt>					
					</dl>
				</div>	
			</div>			
		</div>
		<div class="setBtn">
			<mt-button @click="chat" >发起聊天</mt-button>
		</div>
	</div>
</template>
<script type="text/javascript">
import "../scss/student_data.scss";
import router from "./../router/router_agency.js";

export default{
	data(){
		return{

		}
	},
	methods:{
		chat(){
			router.push({
				path:'Server'
			})
		}

	},
	mounted(){

	}
}
</script>