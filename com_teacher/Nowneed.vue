<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="当前需求">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!--老师列表  -->	
		<ul class="teacherLis">
			<li @click="Nowneed">
				<div class="left">
					<img src="../images/img06.png"  alt="">
					<p>
						<span>傅二牛</span>
						<i>15225928924</i>
					</p>
				</div>
				<div class="right">
					<dl>
						<dt>
							<img src="../images/img07.png" alt="">
							<span>初一</i></span>
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
			</li>
			<li @click="Nowneed">
				<div class="left">
					<img src="../images/img06.png"  alt="">
					<p>
						<span>傅二牛</span>
						<i>15225928924</i>
					</p>
				</div>
				<div class="right">
					<dl>
						<dt>
							<img src="../images/img07.png" alt="">
							<span>初一</i></span>
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
			</li>
			<li @click="Nowneed">
				<div class="left">
					<img src="../images/img06.png"  alt="">
					<p>
						<span>傅二牛</span>
						<i>15225928924</i>
					</p>
				</div>
				<div class="right">
					<dl>
						<dt>
							<img src="../images/img07.png" alt="">
							<span>初一</i></span>
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
			</li>
		</ul>
		
	</div>
</template>
<script type="text/javascript">

import router from "./../router/router_teacher.js"
import "./../scss/nowNeed.scss";
export default{
	data(){
		return{

		}
	},
	methods:{
		Nowneed(){
			router.push({
				path:'Student_data'
			})
		}

	},
	mounted(){

	}
}
</script>