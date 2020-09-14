<template>
<div class="bg">
    <my-header :isBack="true" title="支付详情"></my-header>
    <div class="content">
        <div class="left">
            <img src="../../assets/images/pay.png" class="img" />
        </div>
        <div class="right">
            <div class="tit">保证金<span class="price">￥4000</span></div>
            <div class="desc">未通过申请将原路返还资金</div>
        </div>
    </div>
    <div class="head bot">支付方式</div>
    <div class="pay-list">
        <div class="row bot" @click="checked=1">
            <div class="left">
                <img src="../../assets/images/wechat.png" class="img" />
                <span class="tit">微信支付</span>
            </div>
            <div class="right">
                <img v-show="checked===1" src="../../assets/images/icon-check.png" class="img" />
            </div>
        </div>
        <div class="row" @click="checked=2">
            <div class="left">
                <img src="../../assets/images/alipay.png" class="img" />
                <span class="tit">支付宝支付</span>
            </div>
            <div class="right">
                <img v-show="checked===2" src="../../assets/images/icon-check.png" class="img" />
            </div>
        </div>
    </div>
    <div class="btn">确认支付 ￥4000</div>
</div>
</template>

<script>
export default {
    name: "pay",
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

    .btn {
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        width: 315px;
        height: 46px;
        background: #009FE9;
        border-radius: 5px;
        margin: 120px auto 0;
        line-height: 46px;
        text-align: center;
    }

    .content {
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;
        align-items: center;

        .left {
            width: 20%;
            text-align: right;
            margin-right: 15px;
            margin-top: 10px;

            .img {
                width: 44px;
                height: 44px;
                object-fit: contain;
            }
        }

        .right {
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            align-items: flex-start;

            .tit {
                font-weight: bold;
                color: #333;
                font-size: 16px;
            }

            .price {
                padding-left: 15px;

                color: #FF4848;
                font-size: 22px;
            }

            .desc {
                padding-top: 10px;
                color: #999999;
                font-size: 12px;
            }
        }
    }

    .bot {
        border-bottom: 1px solid #dcdcdc;
    }

    .head {
        margin-top: 20px;
        padding: 0 10px;
        font-size: 14px;
        height: 50px;
        font-weight: bold;
        background-color: #fff;
        display: flex;
        color: #333;
        justify-content: flex-start;
        align-items: center;
    }

    .pay-list {
        .row {
            height: 50px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            box-sizing: border-box;
            background-color: #fff;

            .left {
                font-size: 0;
                display: flex;
                align-items: center;

                .img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                .tit {
                    font-size: 14px;
                    font-weight: bold;
                }

            }

            .right {
                .img {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}
</style>
