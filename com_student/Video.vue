
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

	<!-- 课程简介 -->
	<div class="content">
		<div class="coll_top">
			<div class="topleft">
				<img src="../images/img11.png"  alt="">
				<span>教师简介</span>
			</div>	

		</div>	
		<!-- 老师列表 -->
		<div class="teacherlis">
			<div class="teachTop">
				<div class="teachLeft">
					<img src="../images/pic09.png" height="88" width="88" alt="">					
				</div>
				<div class="teachRight">
					<p>黎老师 </p>
					<p><span>ID: </span>AS456666</p>
				</div>				
			</div>	
			<!--老师列表  -->
			<div class="teacherlist">					
				<ul class="teacher">
					<li>
						<div class="right">
							<dl>
								<dt>
									<img src="../images/page.png" alt="">
									<span>在职教师</span>
								</dt>
								<dt>
									<img src="../images/img07.png"  alt="">
									<span>初一</span>
								</dt>
								<dt>
									<img src="../images/img08.png" alt="">
									<span>语文</span>
								</dt>
								<dt>
									<img src="../images/ye.png"  alt="">
									<span>从业：<i>10年</i></span>
								</dt>
								
							</dl>
						</div>					
					</li>
				</ul>
			</div>			
		</div>		
	</div>

	<!-- 课程简介 -->
	<div class="content">
		<div class="coll_top">
			<div class="topleft">
				<img src="../images/img11.png"  alt="">
				<span>课程简介</span>
			</div>	

		</div>
		<ul class="coll_uls">			
			<li class="active">精讲</li>
			<li>数学</li>
			<li>解析</li>
			<li>高考真题</li>
			<li>
				
				<div class="video_bottom">
					<p></p>
					<div>价格</div>
					<span>￥99.00</span>
				</div>
			</li>
		</ul>
		<!-- 老师列表 -->
		<div class="teacherlis">
			<div class="teachTop">				
				<div class="teachRight" style="margin:0;">
					<p><span style="color:#444; font-weight:800;">课程：</span>语文 </p>
					<p><span style="color:#444; font-weight:800;">课程导读: </span>体会关键性语句的含义和表达作用，揣摩文中家庭生活的内容及作者心境与感受的表达。学习本文匠心体会关键性语句的含义和表达作用，揣摩文中家庭生活的内容及作者心境与感受的表达。学习本文匠心......</p>
				</div>
			</div>				
		</div>		
	</div>

	<div class="stu_btn">
		<mt-button @click="tochat">发起聊天</mt-button>	
		<mt-button @click="toWithdraw">预约</mt-button>	
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
        	src: 'http://42.236.95.153/vlive.qqvideo.tc.qq.com/AzJzwCBxGYIXtdPmDReaAviGvGPvK9ANoquMLIwOz8Qo/s02003or44p.p201.1.mp4?vkey=5A2EBA38AC9B2D4EBA9192D50655A58B6052C0DD594F389B9113B9BA832CE484BC6D274993375ECEA42DDF7B444980B5BE4AC1DAF2A879918998A460425C74453D943D8C06CEC6756EEC7A91D14740D3E4A126B302F86C69AB516273549518A05FF150172DD7AF95BF88DA750DB0A1B6F7602A23CDF2CA03&platform=70201&sdtfrom=&fmt=shd&level=0&locid=5c2ee4c1-d85d-4198-b587-caa44f360d0f&size=2578145&ocid=2453673388'
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
	// 聊天
	tochat(){
		router.push({
			path:'service'
		})
	},
	// 支付
	toWithdraw(){
		router.push({
			path:'Withdraw'
		})
	}
},
computed: {
	player() {
		return this.$refs.videoPlayer.player
	}
}
}
</script>
<style lang="scss" scoped>
@import "./../scss/main.scss";
.teacherlis .teachTop{
	margin-top:0.5rem;
	height:auto;
	.teachRight{
		p span{
			color:#1fb8fe;
		}
	}
}

.coll_uls li:last-child{
	@include flex(1);
	@include flexBox;	
	border:none;	
	.video_bottom{
		padding:0;
		p{
			display:block;
			@include flex(1);
		}
	}
}

// 下边按钮
.stu_btn{
	width:100%;
	height:2rem;
	@include flexBox;
	position:fixed;
	left:0;
	bottom:0;
	button{
		@include flex(1);
		height:100%;
		border-radius:0;
		color:#fff;
		font-size:0.8rem;

	}
	button:nth-of-type(1){
		background:#1fb8ff;		
	}
	button:nth-of-type(2){
		background:#567cf5;		
	}
}



// 老师列表
.teacherlist{
	width:100%;
	padding:0;
	margin-top:0.5rem;
	.teacher{
		width:100%;	
		padding:0;
		li{
			width:100%;
			height:1.925rem;
			@include flexBox;
			box-sizing:border-box;
			padding:0 0.4rem;
			border:1px solid #ddd;
			border-radius:0.375rem;
			box-shadow: 0 0 0.5rem #ddd;				
			.right{
				@include flex(1);
				dl{
					width:100%;
					height:1.925rem;						
					margin-left:0.2rem;
					@include flexBox;
					align-items:center;
					-webkit-box-align:center;
					dt{
						margin-right:0.6rem; 
						@include flexBox;
						line-height: 1.45rem;
						img{
							width:1.0rem;
							height:1.0rem;
							margin-top:0.22rem;
						}
						span{
							font-size:0.6rem;
							color:#444; 
							padding-left: 0.25rem;
							i{
								color:#1fb8fe;
							}
						}
					}
				}

			}
		}
	}

}


.video .playNum .right img{
	height:auto;
}
.video .playNum .right{
	width:auto;
}



</style>