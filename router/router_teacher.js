import VueRouter from "vue-router";


// 教师端
//1。引入组件，用于路由对应的页面  
import Home02 from "./../com_teacher/Home.vue";
import Kind02 from "./../com_teacher/Kind.vue";
import Cart02 from "./../com_teacher/Cart.vue";
import User02 from "./../com_teacher/User.vue";
import Mine02 from "./../com_teacher/Mine.vue";
import invite02 from "./../com_teacher/invite.vue";
import set02 from "./../com_teacher/set.vue";
import issue02 from "./../com_teacher/issue.vue";
import vide02 from "./../com_teacher/vide.vue";
import collect02 from "./../com_teacher/collect.vue";
import Wallet02 from "./../com_teacher/wallet.vue";
import Rev_pass02 from "./../com_teacher/Rev_pass.vue";
import Rev_jpass02 from "./../com_teacher/Rev_jpass.vue";
import Banner_detail from "./../com_teacher/Banner_detail.vue";
import Home_vedio01 from "./../com_teacher/Home_vedio01.vue";
import Nowneed from "./../com_teacher/Nowneed.vue";
import Student_data from "./../com_teacher/Student_data.vue";
import Dynamic_list from "./../com_teacher/Dynamic_List.vue";
import Service from "./../com_teacher/Service.vue";
import video_now from "./../com_teacher/video_now.vue";
import Detail from "./../com_teacher/Detail.vue";
import Search from "./../com_teacher/search.vue";
import Near_contact from "./../com_teacher/Near_contact.vue";
import Recharge from "./../com_teacher/Recharge.vue";
import Widthdraw from "./../com_teacher/Withdraw.vue";
import Complete_info from "./../com_teacher/Complete_info.vue";
import Up_load from "./../com_teacher/Up_load.vue";
import My_class from "./../com_teacher/My_class.vue";
import Change_info from "./../com_teacher/Change_info.vue";
import Success from "./../com_teacher/success.vue";

import MainFooter02 from "./../com_teacher/MainFooter.vue";


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
{path: "/",
redirect: "/home"
},
{
	path: "/home",
	components: {
		default: Home02,
		footer: MainFooter02
	}
},
{
	path: "/kind",
	components: {
		default: Kind02,
		footer: MainFooter02
	}
},	
{
	path: "/cart",
	components: {
		default: Cart02,
		footer: MainFooter02
	}
},
{
	path: "/user",
	components: {
		default: User02,
		footer: MainFooter02
	}
},
{
	path: "/mine",
	components: {
		default: Mine02,
		footer: MainFooter02
	}
},
{
	path: "/invite",
	components: {
		default: invite02
	}
},
{
	path: "/set",
	components: {
		default: set02
	}
},
{
	path: "/issue",
	components: {
		default: issue02
	}
},
{
	path: "/vide",
	components: {
		default: vide02
	}
},
{
	path: "/collect",
	components: {
		default: collect02
	}
},
{
	path: "/wallet",
	components: {
		default: Wallet02
	}
},
{
	path: "/rev_pass",
	components: {
		default: Rev_pass02
	}
},
{
	path: "/rev_jpass",
	components: {
		default: Rev_jpass02
	}
},
{
	path:"/Banner_detail",
	components:{
		default:Banner_detail
	}
},
{
	path:"/Home_vedio01",
	components:{
		default:Home_vedio01
	}
},
{
	path:"/Nowneed",
	components:{
		default:Nowneed
	}
},
{
	path:'/Student_data',
	components:{
		default:Student_data
	}
},
{
	path:'/Dynamic_list',
	components:{
		default:Dynamic_list
	}	
},
{
	path:"/Server",
	components:{
		default:Service
	}
},
{
	path:'/video_now',
	components:{
		default:video_now
	}
},
{
	path:'/Detail',
	components:{
		default:Detail
	}
},
{
	path:'/search',
	components:{
		default:Search
	}
},
{
	path:'/Near_contact',
	components:{
		default:Near_contact
	}
},
{
	path:'/Recharge',
	components:{
		default:Recharge
	}
},
{
	path:'/Widthdraw',
	components:{
		default:Widthdraw
	}
},
{
	path:'/Complete_info',
	components:{
		default:Complete_info
	}
},
{
	path:'/Up_load',
	components:{
		default:Up_load
	}
},
{
	path:"/My_class",
	components:{
		default:My_class
	}
},
{
	path:"/Change_info",
	components:{
		default:Change_info
	}
},
{
	path:'/success',
	components:{
		default:Success
	}
}

];



var router = new VueRouter({
	routes		
})
export default router;
