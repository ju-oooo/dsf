<template>
<div class="bg">
    <my-header :isBack="true" title="提现"></my-header>
    <div class="content">
        <div class="con">
            <div class="head">
                <span class="desc">账户余额将提现至</span>
                <div :class="checked===1?'btn active':'btn'" @click="checked=1">
                    <img src="../../assets/images/pay-wechat.png" class="img">
                    <div class="tit">微信</div>
                </div>
                <div :class="checked===2?'btn active':'btn'" @click="checked=2">
                    <img src="../../assets/images/pay-alipay.png" class="img">
                    <div class="tit">支付宝</div>
                </div>
            </div>
            <div class="input-box">
                <input type="text" placeholder="请输入提现金额" class="input" />
            </div>
            <div class="desc">账户余额￥5500.00</div>
        </div>
        <div class="btn">提现到微信</div>
        <div class="item-list">
            <div class="head">提现记录</div>
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div class="left">￥80</div>
                <div class="right">
                    <div class="top">2020-09-05提现</div>
                    <div class="bottom">2020-09-05到账</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            checked: 1,
            dataList: 9,
            // dataList: [{...}],

        };
    }
};
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-size: 100vw 100vh;
    padding-bottom: 100px;

    .content {
        margin: 10px 0;

        .con {
            box-sizing: border-box;
            padding: 20px 10px;
            background: #fff;

            .head {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #999;

                .btn {
                    width: 80px;
                    height: 23px;
                    margin: 0 15px;
                    display: flex;
                    font-size: 0;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                    border-radius: 12px;
                    border: 1px solid #DCDCDC;

                    &.active {
                        border: 1px solid #5BC78A;

                    }

                    .img {
                        width: 20px;
                        height: 20px;
                        object-fit: contain;
                    }

                    .tit {
                        font-size: 14px;
                        color: #333;
                    }
                }
            }

            .input-box {
                position: relative;

                &::before {
                    content: "￥";
                    position: absolute;
                    font-size: 26px;
                    width: 20px;
                    height: 50px;
                    left: 0;
                    bottom: 3px;
                    color: #333;
                }

                .input {
                    font-size: 24px;
                    color: #333;
                    padding: 5px;
                    padding-left: 25px;
                    width: 100%;
                    margin: 20px auto;
                    border-bottom: 1px solid #dcdcdc;
                    box-sizing: border-box;

                    &::placeholder {
                        color: #999;
                    }
                }
            }

            .desc {
                font-size: 14px;
                color: #999;
            }
        }
    }

    .btn {
        width: 315px;
        height: 46px;
        background: #009FE9;
        border-radius: 5px;
        text-align: center;
        line-height: 46px;
        margin: 50px auto 50px;
        color: #FFFFFF;

        font-size: 16px;
    }

    .item-list {
        padding: 0 10px;
        box-sizing: border-box;

        .head {
            font-size: 14px;
            color: #009FE9;
            position: relative;
            padding-left: 10px;
            font-weight: bold;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                width: 5px;
                height: 17px;
                background-color: #009FE9;
                border-radius: 3px;
            }
        }

        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #dcdcdc;
            margin-top: 10px;

            .left {
                font-size: 18px;
                color: #333;
                padding-left: 20px;
            }

            .right {
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-size: 12px;
                color: #999;
                padding-right: 20px;

            }
        }
    }
}
</style>
