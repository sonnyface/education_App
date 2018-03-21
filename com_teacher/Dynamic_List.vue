<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="动态列表">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>				
			</mt-header>
		</div>
		<!-- 列表 -->
		<ul class="list">
			<li>
				<div class="left">
					<img src="../images/pay.png" alt="">
				</div>
				<div class="right">
					<div class="biao"> 曾会能</div>
					<p>【当前需求】</p>
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
					<!-- 时间 -->
					<div class="time">
						<div>2017.11.30</div>
						<div>
							<img src="../images/faxian_ping.png" alt="">
							<span>1</span>
						</div>
					</div>
					
				</div>
			</li>
			<li>
				<div class="left">
					<img src="../images/pay.png" alt="">
				</div>
				<div class="right">
					<div class="biao"> 曾会能</div>
					<p>【当前需求】</p>
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
					<!-- 时间 -->
					<div class="time">
						<div>2017.11.30</div>
						<div>
							<img src="../images/faxian_ping.png" alt="">
							<span>1</span>
						</div>
					</div>
					
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import "../scss/dynamic_list.scss";
export default{
	data(){
		return{

		}
	},
	methods:{

	},
	mounted(){

	}
}
</script>