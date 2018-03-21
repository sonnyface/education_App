import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Mint from 'mint-ui';
import vuex from "./vuex/vuex.js"

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);


import App_student from "./com_student/App.vue";
import router from "./router/router_student.js";

// 引入视频插件
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


//4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	el:" #app_student",
	router:router,
	vuex:vuex,
	data:{
		
	},
	methods:{
		
	},
	components:{
		"v-app":App_student,
		
	},
	computed:{
		
	},
	watch:{
		
	},
	mounted(){
		
	}
})
