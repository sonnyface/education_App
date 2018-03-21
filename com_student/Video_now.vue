
<template>
	<div>
		<!--头部-->
		<div class="video">
			<mt-header title="">
				<router-link to=""  slot="left">
					<mt-button @click="back_page" icon="back"></mt-button>
				</router-link>
			</mt-header>
			<div class="player">
				<video-player  class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				:options="playerOptions"
				@play="onPlayerPlay($event)"
				@pause="onPlayerPause($event)"
				>
			</video-player>
		</div>
		<div class="playNum">
			<div class="left">			
				<span>【数学】2017新课标II高考真题解析</span>
			</div>
			<div class="right">
				<img src="../images/player.png"  alt="">
				<span>455播放量</span>
			</div>			
		</div>		
	</div>
	<div class="video_bottom">
		<div>购买</div>
		<span>￥99.00</span>
	</div>
	<!-- 课程简介 -->
	<div class="content">
		<div class="coll_top">
			<div class="topleft">
				<img src="../images/img11.png"  alt="">
				<span>课程简介</span>
			</div>	
			<div class="topright">
				<img src="../images/heart.png"  alt="">
				<p>12</p>	
			</div>
		</div>
		<ul class="coll_uls">			
			<li class="active">精讲</li>
			<li>数学</li>
			<li>解析</li>
			<li>高考真题</li>
		</ul>
		<!-- 老师列表 -->
		<div class="teacherlis">
			<div class="teachTop">
				<div class="teachLeft">
					<img src="../images/pic09.png" height="88" width="88" alt="">
					<p>徐老师</p>
				</div>
				<div class="teachRight">
					<p><span>课程：</span>语文 </p>
					<p><span>课程导读: </span>体会关键性语句的含义和表达作用，揣摩文中家庭生活的内容及作者心境与感受的表达。学习本文匠心体会关键性语句的含义和表达作用，揣摩文中家庭生活的内容及作者心境与感受的表达。学习本文匠心......</p>
				</div>
			</div>
			<div class="teachBtm">
				<img src="../images/pic10.png" >
			</div>
		</div>
		<div class="coll_top coll_top02" >
			<div class="topleft">
				<img src="../images/img11.png"  alt="">
				<span>评论</span>
			</div>	
			<div class="topright">
				<img src="../images/img12.png"  alt="">
				<p>12</p>	
			</div>
		</div>
		<div class="kongbox"></div>
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
</div>
</template>


<script>
import "../scss/video_now.scss";
import { videoPlayer } from 'vue-video-player';
import router from  './../router/router_student.js';

export default {
	data () {
		return {
			playerOptions: {
//      playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
        	type: 'video/mp4',
        	src: '../images/banner.mp4'
        }, {
        	withCredentials: false,
        	type: 'application/x-mpegURL',
            src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8' //你的m3u8地址（必填）
        }
        ],
        poster: '../images/video.png',//你的封面地址  
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
           controlBar: {
             timeDivider: false, // 时间分割线
             durationDisplay: false, // 总时间
             progressControl: true, // 进度条
             customControlSpacer: true, // 未知
             fullscreenToggle: true // 全屏
         },
  }
}
},
components: {
	videoPlayer
},
methods: {
	back_page(){
		window.history.go(-1)
		console.log("1111")
	},
	onPlayerPlay(player) {
		// alert("play");
		var that=this;
		that.autoplay=true

	},
	onPlayerPause(player){
		// alert("pause");
	},
},
computed: {
	player() {
		return this.$refs.videoPlayer.player
	}
}
}
</script>

<style scoped lang="scss">
@import "./../scss/main.scss";

.video .playNum .right img{
	height:auto;
}
.video .playNum .right{
	width:auto;
}
</style>