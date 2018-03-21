
<template>
	<div>
		<!--头部-->
		<div class="video">
			<mt-header title="">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
			<div class="player">
				<video-player  class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				:options="playerOptions"
				@play="onPlayerPlay(event)"
				@pause="onPlayerPause(event)"
				>
			</video-player>
		</div>
		<div class="playNum">
			<div class="left">
				<img src="../images/player.png"  alt="">
				<span>455播放量</span>
			</div>
			<div class="right">
				<img src="../images/heart.png" alt="">
				<span>12</span>
			</div>
			<div class="right">
				<img src="../images/comment.png" alt="">
				<span style="color:#cdcdcd">0</span>
			</div>
		</div>
	</div>
	<!-- 老师列表 -->
	<div class="teacherlis">
		<div class="teachTop">
			<div class="teachLeft">
				<img src="../images/pic09.png" height="88" width="88" alt="">
				<p>徐老师</p>
			</div>
			<div class="teachRight">
				<p><span>课程：</span>语文 </p>
				<p><span>程导读：</span>体会关键性语句的含义和表达作用，揣摩文中家庭生活的内容及作者心境与感受的表达。学习本文匠心体会关键性语句的含义和表达作用，揣摩文中家庭生活的内容及作者心境与感受的表达。学习本文匠心......</p>
			</div>
		</div>
		<div class="teachBtm">
			<img src="../images/pic10.png" >
		</div>
	</div>
	<!-- 收藏教学集 -->
	<div class="collcted">
		<div class="coll_top">			
			<img src="../images/heart.png"  alt="">
			<span>收藏教学集</span>
			<p>共12节课</p>			
		</div>
		<div class="skyBox"></div>
		<ul class="classLis">
			<li>
				<img class="bigImg" src="../images/class02.png" alt="">
				<img class="smlImg"  src="../images/play.png" alt="">
			</li>
			<li>
				<img class="bigImg" src="../images/class.png" alt="">
				<img class="smlImg"  src="../images/play.png" alt="">
			</li>
			<li>
				<img class="bigImg" src="../images/class02.png" alt="">
				<img class="smlImg"  src="../images/play.png" alt="">
			</li>
		</ul>
	</div>
		<!-- 热门课程 -->
	<div class="collcted">
		<div class="coll_top">			
			<img src="../images/fire.png"  alt="">
			<span style="color:#fc2210;">热门课程</span>
			<p></p>			
		</div>
		<div class="skyBox"></div>
		<ul class="classLis">
			<li>
				<img class="bigImg" src="../images/class02.png" alt="">
				<img class="smlImg"  src="../images/play.png" alt="">
			</li>
			<li>
				<img class="bigImg" src="../images/class.png" alt="">
				<img class="smlImg"  src="../images/play.png" alt="">
			</li>
			<li>
				<img class="bigImg" src="../images/class02.png" alt="">
				<img class="smlImg"  src="../images/play.png" alt="">
			</li>
		</ul>
	</div>
</div>
</template>


<script>
import "../scss/banner_detail.scss";
import { videoPlayer } from 'vue-video-player';
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
        	src: 'http://60.217.253.21/variety.tc.qq.com/A_HrtMpz4SB47H9k9i-khg35X2SLVTWTCP5943zftQhc/k02009x66ei.p201.1.mp4?vkey=69E3A115638E290684D1CDAC7F076B41E11ECF73FF3CA972084200B5C8A47EDB398387DD3445A8FE22475F5CFE44EBC7CB086776EDDBB30C5A3FEF05E04FC00737DC995973A0DE8128831603A4D14BC57AFAAD4F9B41A66AB558A1CF9D610B18CDFA7A0A79C9EE1BE4040ACCB49E4E5AFD89BAC65DD30E34&platform=10201&sdtfrom=&fmt=shd&level=0&locid=83567fa3-49b5-492d-83cd-b645c9bba760&size=2739959&ocid=279123372'
        }, {
        	withCredentials: false,
        	type: 'application/x-mpegURL',
            src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8' //你的m3u8地址（必填）
     	 }
      ],
        poster: '../images/video.png',//你的封面地址  
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      //   controlBar: {
      //     timeDivider: false, // 时间分割线
      //     durationDisplay: false, // 总时间
      //     progressControl: true, // 进度条
      //     customControlSpacer: true, // 未知
      //     fullscreenToggle: true // 全屏
      // },
  }
}
},
components: {
	videoPlayer
},
methods: {
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