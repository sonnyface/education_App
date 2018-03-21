<template>
    <div>
        <!--头部-->
        <div class="header">
            <mt-header title="购买">
                <router-link to="" slot="left">
                    <mt-button @click="toback" icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <!-- 输入 -->
        <div class="shu">
            <div>
                <p>输入金额</p>
                <input type="number">
            </div>
        </div>
        <!-- 支付方式 -->
        <div class="fangshi">
            <div class="fang_list">
                <mt-radio align="right" title="选择支付方式" v-model="value" :options="options"></mt-radio>
            </div>
            
        </div>
        <!-- 按钮 -->
        <div class="issueBtn">
            <mt-button @click="success()">确定</mt-button>
        </div>
    </div>
</template>

<script>
    import router from "./../router/router_student.js";
    import Vue from 'vue';
    import "./../scss/recharge.scss";

    // 单选
    import { Radio } from 'mint-ui';
    Vue.component(Radio.name, Radio);

    export default {
            data() {
                return {
                    value:null,
                    options:[
                      {
                        label: "微信",
                        value: '微信'
                      },
                      {
                        label: "支付宝",
                        value: '支付宝'
                      }
                    ]
                }
            },
            // 事件
            methods:{
                // 成功
                success(){
                    router.push({
                        path:"Success",
                        // query:{
                        //  id:shopID,
                        //  shopId:shopId                       
                        // }
                    });
                },
                toback(){
                    window.history.go(-1);
                }
            },
            // 接口调用
            mounted() {
                $(".mint-cell:nth-of-type(1) .mint-radio-label").html("<img src='../images/wx.png' alt='' />"+"微信")
                $(".mint-cell:nth-of-type(2) .mint-radio-label").html("<img src='../images/ali.png' alt='' />"+"支付宝")

            }
        }

</script>
<style>
</style>