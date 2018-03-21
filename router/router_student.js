import VueRouter from "vue-router";


// 教师端
//1。引入组件，用于路由对应的页面  
import Home01 from "./../com_student/Home.vue";
import Kind01 from "./../com_student/Kind.vue";
import Cart01 from "./../com_student/Cart.vue";
import User01 from "./../com_student/User.vue";
import Mine01 from "./../com_student/Mine.vue";
import invite01 from "./../com_student/invite.vue";
import set01 from "./../com_student/set.vue";
import issue01 from "./../com_student/issue.vue";
import vide01 from "./../com_student/vide.vue";
import collect01 from "./../com_student/collect.vue";
import Wallet01 from "./../com_student/wallet.vue";
import Rev_pass01 from "./../com_student/Rev_pass.vue";
import Rev_jpass01 from "./../com_student/Rev_jpass.vue";
import Search from "./../com_student/search.vue";
import Class_lis from "./../com_student/Class_lis.vue";
import Teacher_lis from "./../com_student/Teacher_lis.vue";
import Teacher_class from "./../com_student/Teacher_class.vue";
import Video from  "./../com_student/video.vue";
import Service from "./../com_student/Service.vue";
import Withdraw from "./../com_student/Withdraw.vue";
import Sinatv from "./../com_student/Sinatv.vue";
import Order_sinatv from "./../com_student/Order_sinatv.vue";
import Promotion from "./../com_student/promotion.vue";
import Teacher_more from "./../com_student/Teacher_more.vue";
import Teacher_data from "./../com_student/Teacher_data.vue";
import Class_fast from "./../com_student/Class_fast.vue";
import Video_now from "./../com_student/Video_now.vue";
import Up_load from "./../com_student/Up_load.vue";
import Near_contact from "./../com_student/Near_contact.vue";
import Change_info from "./../com_student/Change_info.vue";
import Complete_info from "./../com_student/Complete_info.vue";
import Recharge from "./../com_student/Recharge.vue";
import Widthdraw from "./../com_student/Withdraw.vue";
import success from "./../com_student/success.vue";
import Need_publish from "./../com_student/Need_publish.vue";
import Video_old from "./../com_student/Video_old.vue";
import Student_data from "./../com_student/Student_data.vue";


import MainFooter01 from "./../com_student/MainFooter.vue";



// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
{
	path: "/",
	redirect: "/home"
},
{
	path: "/home",
	components: {
		default: Home01,
		footer: MainFooter01
	}
},
{
	path: "/kind",
	components: {
		default: Kind01,
		footer: MainFooter01
	}
},	
{
	path: "/cart",
	components: {
		default: Cart01,
		footer: MainFooter01
	}
},
{
	path: "/user",
	components: {
		default: User01,
		footer: MainFooter01
	}
},
{
	path: "/mine",
	components: {
		default: Mine01,
		footer: MainFooter01
	}
},
{
	path: "/invite",
	components: {
		default: invite01
	}
},
{
	path: "/set",
	components: {
		default: set01
	}
},
{
	path: "/issue",
	components: {
		default: issue01
	}
},
{
	path: "/vide",
	components: {
		default: vide01
	}
},
{
	path: "/collect",
	components: {
		default: collect01
	}
},
{
	path: "/wallet",
	components: {
		default: Wallet01
	}
},
{
	path: "/rev_pass",
	components: {
		default: Rev_pass01
	}
},
{
	path: "/rev_jpass",
	components: {
		default: Rev_jpass01
	}
},
{
	path:'/search',
	components:{
		default:Search
	}
},
{
	path:'/class_lis',
	components:{
		default:Class_lis
	}
},
{
	path:"/teacher_lis",
	components:{
		default:Teacher_lis
	}
},
{
	path:'/teacher_class',
	components:{
		default:Teacher_class
	}
},
{
	path:'/video',
	components:{
		default:Video
	}
},
{
	path:'/service',
	components:{
		default:Service
	}
},
{
	path:'/withdraw',
	components:{
		default:Withdraw
	}
},
{
	path:'/sinatv',
	components:{
		default:Sinatv
	}
},
{
	path:"/order_sinatv",
	components:{
		default:Order_sinatv
	}
},
{
	path:"/promotion",
	components:{
		default:Promotion
	}
},
{
	path:'/teacher_more',
	components:{
		default:Teacher_more
	}
},
{
	path:'/teacher_data',
	components:{
		default:Teacher_data
	}
},
{
	path:'/Class_fast',
	components:{
		default:Class_fast
	}
},
{
	path:"/video_now",
	components:{
		default:Video_now
	}
},
{
	path:"/up_load",
	components:{
		default:Up_load
	}
},
{
	path:"/near_contact",
	components:{
		default:Near_contact
	}
},
{
	path:"/change_info",
	components:{
		default:Change_info
	}
},
{
	path:"/complete_info",
	components:{
		default:Complete_info
	}
},
{
	path:"/recharge",
	components:{
		default:Recharge
	}
},
{
	path:"/Widthdraw",
	components:{
		default:Widthdraw
	}
},
{
	path:"/success",
	components:{
		default:success
	}
},
{
	path:"/need_publish",
	components:{
		default:Need_publish
	}
},
{
	path:"/video_old",
	components:{
		default:Video_old
	}
},
{
	path:"/student_data",
	components:{
		default:Student_data
	}
}






];



var router = new VueRouter({
	routes		
})
export default router;
