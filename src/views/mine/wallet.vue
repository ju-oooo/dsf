<template>
<div class="bg">
    <my-header :isBack="true" title="我的钱包"></my-header>
    <div class="head">
        <div class="top">
            <img src="../../assets/images/icon-wallet.png" class="img">
            <div class="title">账户余额</div>
        </div>
        <div class="bottom">
            <div class="price">￥5500.00</div>
            <div class="tit" @click="$router.push('withdraw')">可提现 ></div>
        </div>
    </div>
    <div class="item-list">
        <div class="head">余额明细</div>
        <div class="item" v-for="(item,index) in dataList" :key="index">
            <div class="time">2020-09-22</div>
            <div class="price red">+8000元</div>
            <div class="pay">任务赏金</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "wallet",
    data() {
        return {
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

    .item-list {
        .head {
            background-color: transparent;
            padding: 0 10px;
            height: 21px;
            line-height: 21px;
            color: #333333;
            font-size: 15px;
        }

        .item {
            padding: 0 1%;
            box-sizing: border-box;
            margin: auto;
            display: flex;
            align-items: center;
            color: #333;
            font-size: 14px;
            width: 90%;
            border-bottom: 1px dotted #dcdcdc;
            height: 40px;
        }

        .time,
        .price,
        .pay {
            width: 34%;
            text-align: center;
        }

        .time {
            text-align: left;
        }

        .type {
            text-align: right;

        }

        .red {
            color: #FF4848;
        }

        .green {
            color: #17885D;
        }
    }

    .head {
        width: 100%;
        height: 94px;
        background: #FFFFFF;

        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-around;
        margin-bottom: 10px;

        .top {
            font-size: 0;
            display: flex;
            align-items: center;

            .img {
                width: 32px;
                height: 32px;
                object-fit: contain;
                margin-right: 10px;
            }

            .title {
                font-size: 18px;
                font-weight: bold;
                color: #009FE9;
            }
        }

        .bottom {
            margin-top: 5px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;

            .price {
                font-size: 24px;
                color: #333;
                padding-left: 40px;
            }

            .tit {
                font-size: 14px;
                color: #999;
            }
        }
    }
}
</style>
