<template>
	<div>
		<!--头部-->
		<div class="header">
			<mt-header title="客服">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>

		<section class="chatlist" :class="showSelBox>0?'chatlist-bottom-collapse':'chatlist-bottom'">
			<mt-loadmore :top-method="loadTop" top-pull-text="加载更多" top-drop-text="释放加载" @top-status-change="handleTopChange" ref="loadmore">
				<ul>
					<template v-for="item in records">
						<li class="chat-mine" v-if="item.type==1">
							<div class="chat-user"><img src="../images/user.png"></div>
							<div class="time"><cite><i>{{item.time}}</i>{{item.name}}</cite></div>
							<div class="chat-text" v-html="replaceFace(item.content)"></div>
						</li>
						<li v-if="item.type==2">
							<div class="chat-user"><img src="../images/default.png"></div>
							<div class="time"><cite>{{item.name}}<i>{{item.time}}</i></cite></div>
							<div class="chat-text" v-html="replaceFace(item.content)"></div>
						</li>
					</template>
				</ul>
			</mt-loadmore>
		</section>


		<section class="foot">
			<mt-field id="txtContent" placeholder="请输入消息" class="con" v-model="content"></mt-field>        
			<mt-button class="btn btn-send" v-on:click="sendMsg">发送</mt-button>    
		</section>
		


	</div>
</template>

<script>

import util from '../md/util'
import { Toast } from 'mint-ui';

export default {

    data() {
        return {
            showSelBox: 0, // 0隐藏 1显示表情 2显示其他
            selFace: '表情',
            selOther: '其他功能',
            content:'',
            topStatus: '',
            //聊天记录
            records: [{
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '游客',
                content: '你好！'
            }, {
                type: 2,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '客户MM',
                content: '这里是<a target="_blank" href="https://github.com/taylorchen709/vue-chat">源码</a>'
            }],
            // 表情
            EXPS: [
                { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
                { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
                { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g }                            
            ]
        }
    },
    methods: {
        getEXP: function (pageNow,pageSize) {
            return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow)
        },
        //发送消息
        sendMsg: function(){
            var _this=this;

            if(this.content==''){
                Toast('请输入消息');
                return;
            }

            this.records.push({
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                name: '游客',
                content: this.content
            });

            setTimeout(function(){
                _this.records.push({
                    type: 2,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    name: '客服MM',
                    content: '你好！'
                });
            },100);

            this.content='';

            this.scrollToBottom();
            //this.focusTxtContent();//聚焦输入框
        
        },
        //聚焦输入框
        focusTxtContent:function(){
            document.querySelector("#txtContent input").focus();
        },
        //滚动条滚动到底部
        scrollToBottom:function(){
            setTimeout(function(){
                var chatlist = document.getElementsByClassName('chatlist')[0];
                chatlist.scrollTop=chatlist.scrollHeight;
            },100);
        },
        //替换表情代码
        replaceFace:function(con){
            var _this=this;
            var exps=this.EXPS;
            for(var i=0;i<exps.length;i++){
                //con = con.replace(new RegExp(exps[i].code,'g'), '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
                con = con.replace(exps[i].reg, '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
            }
            return con;
        },
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadTop(id) {
            var _this=this;
            setTimeout(() => {
                var chatlist = document.getElementsByClassName('chatlist')[0];
                var oldHeight=chatlist.scrollHeight;

                _this.records.unshift({
                    type: 1,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    name: '游客',
                    content: '你好！13213'
                }, {
                    type: 2,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    name: '客户MM',
                    content: '这里是<a target="_blank" href="https://github.com/taylorchen709/vue-chat">源码</a>13213'
                });

                setTimeout(function(){
                    var newHeight=chatlist.scrollHeight;
                    chatlist.scrollTop=newHeight-oldHeight;
                },100);

                this.$refs.loadmore.onTopLoaded(id);
            }, 1500);
        }
    },
    mounted:function(){
        this.scrollToBottom();
        this.focusTxtContent();
    }
    // updated:function(){
    //     this.scrollToBottom();
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .chatlist {
        position: absolute;
        top: 60px;
        bottom: 48px;
        left: 0px;
        right: 0px;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 10px;
    }
    
    .chatlist-bottom {
        bottom: 48px;
    }
    
    .chatlist-bottom-collapse {
        bottom: 198px;
    }
    
    .chatlist ul {
        min-height: 300px;
    }
    
    .chatlist ul .chat-mine {
        text-align: right;
        padding-left: 0;
        padding-right: 60px;
    }
    
    .chatlist ul li {
        position: relative;
        /*font-size: 0;*/
        margin-bottom: 10px;
        padding-left: 60px;
        min-height: 68px;
    }
    
    .chat-mine .chat-user {
        left: auto;
        right: 3px;
    }
    
    .chat-user {
        position: absolute;
        left: 3px;
    }
    
    .chat-text,.chat-user {
        display: inline-block;
        vertical-align: top;
        /*font-size: 14px;*/
    }
    
    .chat-user img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
    
    .time {
        width: 100%;
    }
    
    cite {
        left: auto;
        right: 60px;
        text-align: right;
    }
    
    cite {
        font-style: normal;
        line-height: 24px;
        font-size: 12px;
        white-space: nowrap;
        color: #999;
        text-align: left;
    }
    
    cite i {
        font-style: normal;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 12px;
    }
    
    .chat-mine .chat-text {
        margin-left: 0;
        text-align: left;
        background-color: #33DF83;
        color: #fff;
    }
    
    .chat-text {
        position: relative;
        line-height: 22px;
        /*margin-top: 25px;*/
        padding: 10px 15px;
        background-color: #eee;
        border-radius: 3px;
        color: #333;
        word-break: break-all;
        max-width: 462px\9;
    }
    
    .mint-cell-value input{
    	text-indent: 0.5rem;
    }
    .chat-text, .chat-user {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
    }
    
    .chat-text img {
        max-width: 100%;
        vertical-align: middle;
    }
    
    .chat-user {
        position: absolute;
        left: 3px;
    }
    
    .chat-text:after {
        content: '';
        position: absolute;
        left: -10px;
        top: 15px;
        width: 0;
        height: 0;
        border-style: solid dashed dashed;
        border-color: #eee transparent transparent;
        overflow: hidden;
        border-width: 10px;
    }
    
    .chat-mine .chat-text:after {
        left: auto;
        right: -10px;
        border-top-color: #33DF83;
    }
    
    .foot {
        width: 100%;
        min-height: 48px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        background-color: #F8F8F8;
        box-shadow: 0 0 0.5rem #ddd;
    }
    
    .foot .con {
        position: absolute;
        left:0;
        right: 40px;
    }
    
    .foot .btn-plus {
        width: 28px;
        padding: 9px 3px;
        position: absolute;
        left: 0px;
        border-left: 1px solid #d9d9d9;
    }
    
    .foot .btn-plus i {
        font-size: 2em;
        color: #ccc;
    }
    
    .foot .btn-face {
        width: 28px;
        padding: 9px 3px 9px 0px;
        position: absolute;
        left: 35px;
        /*border-right: 1px solid #d9d9d9;*/
    }
    
    .foot .btn-face i {
        font-size: 2em;
        color: #d9d9d9;
    }
    
    .foot .selbox {
        height: 150px;
        margin-top: 48px;
        border-top: 1px solid #d9d9d9;
    }
    
    .show {
        display: block;
    }
    
    .hide {
        display: none;
    }
    
    .face-box {
        /* position: absolute; */
        /* top: 48px; */
        /* left: 0px; */
        /* right: 0px; */
        /* bottom: 0px; */
        padding: 15px 15px 0px 15px;
        overflow: hidden;
        width: 290px;
        margin: 0px auto;
        height: 135px;
    }
    
    .face-box li {
        width: 30px;
        float: left;
        padding: 6px 10px 0px 8px;
    }
    
    .btn {
    	height: 100%;
    	width: 3.75rem;
        margin-left: 0.375rem; 
        background-color: #00a1e9;
        color: #fff;
        font-size: 0.9rem;
        
    }
    
    .btn-send {
        position: absolute;
        right: 0px;
        top: 0;
    }
</style>