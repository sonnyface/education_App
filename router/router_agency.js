import VueRouter from "vue-router";


// 代理端
//1。引入组件，用于路由对应的页面  
import Home03 from "./../com_agency/Home.vue";
import Kind03 from "./../com_agency/Kind.vue";
import Cart03 from "./../com_agency/Cart.vue";
import User03 from "./../com_agency/User.vue";
import Mine03 from "./../com_agency/Mine.vue";
import invite03 from "./../com_agency/invite.vue";
import set03 from "./../com_agency/set.vue";
import issue03 from "./../com_agency/issue.vue";
import vide03 from "./../com_agency/vide.vue";
import collect03 from "./../com_agency/collect.vue";
import Wallet03 from "./../com_agency/wallet.vue";
import Rev_pass03 from "./../com_agency/Rev_pass.vue";
import Rev_jpass03 from "./../com_agency/Rev_jpass.vue";
import Banner_detail from "./../com_agency/Banner_detail.vue";
import Home_vedio01 from "./../com_agency/Home_vedio01.vue";
import Nowneed from "./../com_agency/Nowneed.vue";
import Student_data from "./../com_agency/Student_data.vue";
import Dynamic_list from "./../com_agency/Dynamic_List.vue";
import Service from "./../com_agency/Service.vue";
import video_now from "./../com_agency/video_now.vue";
import Detail from "./../com_agency/Detail.vue";
import Search from "./../com_agency/search.vue";
import Near_contact from "./../com_agency/Near_contact.vue";
import Recharge from "./../com_agency/Recharge.vue";
import Widthdraw from "./../com_agency/Withdraw.vue";
import Complete_info from "./../com_agency/Complete_info.vue";
import Up_load from "./../com_agency/Up_load.vue";
import My_class from "./../com_agency/My_class.vue";
import Change_info from "./../com_agency/Change_info.vue";
import Success from "./../com_agency/success.vue";

import MainFooter03 from "./../com_agency/MainFooter.vue";

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
		default: Home03,
		footer: MainFooter03
	}
},
{
	path: "/kind",
	components: {
		default: Kind03,
		footer: MainFooter03
	}
},	
{
	path: "/cart",
	components: {
		default: Cart03,
		footer: MainFooter03
	}
},
{
	path: "/user",
	components: {
		default: User03,
		footer: MainFooter03
	}
},
{
	path: "/mine",
	components: {
		default: Mine03,
		footer: MainFooter03
	}
},
{
	path: "/invite",
	components: {
		default: invite03
	}
},
{
	path: "/set",
	components: {
		default: set03
	}
},
{
	path: "/issue",
	components: {
		default: issue03
	}
},
{
	path: "/vide",
	components: {
		default: vide03
	}
},
{
	path: "/collect",
	components: {
		default: collect03
	}
},
{
	path: "/wallet",
	components: {
		default: Wallet03
	}
},
{
	path: "/rev_pass",
	components: {
		default: Rev_pass03
	}
},
{
	path: "/rev_jpass",
	components: {
		default: Rev_jpass03
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
