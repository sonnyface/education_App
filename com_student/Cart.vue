<template>
	<div>
		<!-- 头部 -->
		<div class="header">
			<mt-header title="招生">
				<router-link to="/" slot="left">
				</router-link>				
				<router-link to="/Near_contact"  slot="right">
					<img src="../images/email.png"  alt>
				</router-link>	
			</mt-header>
		</div>
		<!-- 搜索框 -->
		<div class="searchBox" @click="search">			
			<div class="box"></div>
			<div class="searchBtn">搜索</div>
		</div>
		<!-- navbar切换阶段，年级，日期 -->
		<div class="navBar">
			<div class="navHead">			
				<mt-navbar v-model="selected">
					<mt-tab-item id="1" >
						<div class="navBoxs"  @click="stage()">
							<span>阶段</span>
							<i></i>		
						</div>				
					</mt-tab-item>
					<mt-tab-item id="2">
						<div class="navBoxs"  @click="stage()">
							<span>年级</span>
							<i></i>		
						</div>		
					</mt-tab-item>
					<mt-tab-item id="3">
						<div class="navBoxs"  @click="stage()">
							<span>学科</span>
							<i></i>		
						</div>		
					</mt-tab-item>
					<mt-tab-item id="4">
						<div class="navBoxs"  @click="stage()">
							<span>外教</span>
							<i></i>		
						</div>		
					</mt-tab-item>
					<mt-tab-item id="5">
						<div class="navBoxs"  @click="dateTap">
							<span>日期</span>
							<i></i>		
						</div>		
					</mt-tab-item>
					<mt-tab-item id="6">
						<div class="navBoxs"  @click="datatap('picker1')">
							<span>时间</span>
							<i></i>		
						</div>		
					</mt-tab-item>
					
				</mt-navbar>
			</div>

			<!-- tab内容区 -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/> -->
					
					<!--老师列表  -->
					<div class="teacherlist">					
						<ul class="teacherLis">
							<li @click="toDetail">
								<div class="left">
									<img src="../images/img06.png"  alt="">
									<p>
										<span>黎老师</span>
										<i><b style="color:#1fb8ff;font-weight:100;">ID:</b>AS456666</i>
									</p>
								</div>
								<div class="right">
									<dl>
										<dt>
											<img src="../images/img07.png" alt="">
											<span>初一</span>
										</dt>
										<dt>
											<img src="../images/img08.png" alt="">
											<span>语文</span>
										</dt>
										<dt>							
											<span style="color:#1fb8ff;">从业年限:10年</span>
										</dt>
									</dl>
								</div>					
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<mt-cell v-for="n in 6" :title="'选项 ' + n"  :key="n"/>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<mt-cell v-for="n in 6" :title="'选项 ' + n"  :key="n"/>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
					<mt-cell v-for="n in 6" :title="'选项 ' + n"  :key="n"/>
				</mt-tab-container-item>
				<mt-tab-container-item id="6">
					<mt-cell v-for="n in 6" :title="'选项 ' + n"  :key="n"/>
				</mt-tab-container-item>
			</mt-tab-container>

		</div>

		<!-- 弹出层 -->	
		<mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
			<div class="picker-toolbar">  
				<span class="mint-datetime-action mint-datetime-cancel" @click="canclestage()">取消</span>  
				<span class="mint-datetime-action mint-datetime-confirm" @click="selectstage()">确定</span>  
			</div> 
			<mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="3"></mt-picker>
		</mt-popup>

		<!-- 时间选择器 -->
		<mt-datetime-picker
		v-model="pickerVisible"
		ref="picker1"
		type="time"
		@confirm="handleConfirm">
	</mt-datetime-picker>


</div>
</template>

<script>
import "./../scss/cart.scss";
import Vue from "vue";
import router from "./../router/router_student.js";


// navbar切换阶段，年级
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


// 弹出层
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

// 引入时间控件
import  Calendar from 'vue2-datepick';
Vue.use(Calendar);
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

export default {
	data(){
		return {
			selected:'1',
			popupVisible:false,			
			pickerVisible:null,	
			slots: [
			{
				flex: 1,
				values: ['阶段'],
				className: 'slot1',
				textAlign: 'center'
			}, {
				flex: 1,
				values: ['小学','初中','高中'],
				className: 'slot2',
				textAlign: 'center'
			}
			]

		}
	},
	methods :{
		toDetail(){
			router.push({
				path:'class_fast'
			})

		},
		search(){
			router.push({
				path:'search'
			})
		},
		// 阶段
		stage:function(){
			console.log("111")
			var that=this;
			that.popupVisible=true
		},
		// 取消 阶段
		canclestage(){
			var that=this;
			that.popupVisible=false			
		},
		// 确定 阶段
		selectstage(){
			var that=this;
			that.popupVisible=false		
		},
		// picker获取其中事件
		onValuesChange(picker, values) {					
			console.log(values)		
		},
		// 日期
		dateTap(){
			var that=this;	
			that.$calendar.show({
				onOk:(date) =>{
					this.data= date		
					console.log(date)			
				}
			});
		},		
		// 时间
		datatap(picker){
			var that=this;	
			that.$refs[picker].open()	
			console.log(picker)
		},		
		handleConfirm(){

		}
	},
	mounted(){


	}
}
</script>

<style lang="scss" scoped>
.teacherLis{
	padding:0;
}
.teacherlist .teacherLis li .right dl{
	margin-left:0.2rem;
}


</style>