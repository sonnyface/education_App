<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="老师资料">
				<router-link to="" slot="left">
					<mt-button @click="toback" icon="back"></mt-button>
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
							<img src="../images/page.png" alt="">
							<span>在职教师</i></span>
						</dt>
						<dt>
							<img src="../images/img07.png" alt="">
							<span>初一</span>
						</dt>
						<dt>
							<img src="../images/img08.png"  alt="">
							<span>语文</span>
						</dt>
						<dt>
							<img src="../images/ye.png"  alt="">
							<span>从业：<i style="color:#1fb8fe;">10年</i></span>
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
							<span>2017年12月10日</span>
						</dt>					
					</dl>
					<dl>
						<dt>
							<img src="../images/class06.png" alt="">
							<span>09:00</span>
						</dt>					
					</dl>
					<dl>
						<dt>
							<img src="../images/money.png" alt="">
							<span>课程价格 <i >￥99.00</i></span>
						</dt>					
					</dl>
				</div>	
			</div>			
		</div>
		<div class="setBtn">
			<router-link to="/service">
				<mt-button style="color:#fff;" >发起聊天</mt-button>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
import "../scss/student_data.scss";
import router from "./../router/router_teacher.js";

export default{
	data(){
		return{

		}
	},
	methods:{
		toback(){
			 window.history.go(-1);
		}
		

	},
	mounted(){

	}
}
</script>
<style lang="scss" scoped>
	@import "./../scss/main.scss";


</style>