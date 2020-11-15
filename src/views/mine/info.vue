<template>
<div class="bg">
    <my-header :isBack="true" title="个人资料"></my-header>
    <div class="row start head bot">
        <div class="left">头像</div>
        <img src="../../assets/images/mine.jpeg" class="img">
    </div>
    <div class="row start bot">
        <div class="left">用户名</div>
        <input type="text" class="input" v-model="name" placeholder="请输入">
    </div>
    <div class="row bot">
        <div class="left">手机号</div>
        <div class="right input" v-if="certification">
            <input type="text" class="input" v-model="phone" placeholder="请输入">
            <span class="state gray">隐藏</span>
            <img src="../../assets/images/icon-down-o.png" class="img">
        </div>
    </div>
    <div class="row bot">
        <div class="left">QQ</div>
        <div class="right input" v-if="certification">
            <input type="text" class="input" v-model="phone" placeholder="请输入">
            <span class="state gray">隐藏</span>
            <img src="../../assets/images/icon-down-o.png" class="img">
        </div>
    </div>
    <div class="row ">
        <div class="left">微信</div>
        <div class="right input" v-if="certification">
            <input type="text" class="input" v-model="phone" placeholder="请输入">
            <span class="state gray">隐藏</span>
            <img src="../../assets/images/icon-down-o.png" class="img">
        </div>
    </div>
    <div class="row hei">
        <div class="left">个人信息</div>
        <div class="right start">
            <textarea class="text" placeholder="写点什么~"></textarea>
        </div>
    </div>
     <div class="row hei">
        <div class="left">项目经验</div>
        <div class="right start">
            <textarea class="text" placeholder="以往做过哪些方面的项目"></textarea>
        </div>
    </div>

    <div class="btn">保存</div>
</div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            name: "企业名称",
            phone: "17730126099",
            certification: true
        };
    }
};
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        font-size: 0;
        color: #333;
        font-weight: bold;
        height: 48px;
        background-color: #fff;

        &.hei {
            height: auto;
            margin-top: 20px;

            .left {
                display: flex;
                flex-direction: column;
                justify-items: flex-start;
                height: 117px;
            }
        }

        &.start {
            justify-content: flex-start;
        }

        &.head {
            height: auto;

            padding: 10px 20px;

            .img {
                width: 59px;
                height: 59px;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        .left {
            min-width: 60px;
            font-size: 14px;
            color: #666;
            text-align: right;
            margin-right: 20px;
        }

        .input {
            width: 100%;
            font-size: 14px;
            color: #333333;
        }

        .right {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            &.input {
                justify-content: space-between;

            }

            &.start {
                justify-content: flex-start;
                padding: 10px 0;
            }

            .text {
                width: 90%;
                padding: 5px;
                box-sizing: border-box;
                font-size: 14px;
                border: none;
                height: 127px;

                &::placeholder {
                    color: #999;
                }
            }

            .state {
                width: 40px;
                font-size: 12px;
                padding-right: 5px;
            }

            .img {
                width: 8px;
                object-fit: contain;
            }

            .gray {
                color: #999;
            }

            .red {
                color: #FF4848;
            }

        }
    }

    .bot {
        border-bottom: 1px solid #dcdcdc;
    }

    .btn {
        margin: 15vh auto 0;
        width: 315px;
        height: 46px;
        background: #009FE9;
        border-radius: 5px;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #FFFFFF;
    }
}
</style>
