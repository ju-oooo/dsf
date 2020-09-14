<template>
<div class="bg">
    <my-header :isBack="true" title="交易流水" rightTextClick="2020年9月▽" @rightClick="dialogType='sqys';dialogOpen=true"></my-header>
    <div class="item-list">
        <div class="head">
            <div class="time">时间</div>
            <div class="price">金额</div>
            <div class="pay">平台</div>
            <div class="order">订单明细</div>
        </div>
        <div class="item" v-for="(item,index) in dataList" :key="index">
            <div class="time">09-12</div>
            <div class="price red">+8000元</div>
            <div class="pay">支付宝</div>
            <div class="order">保证金返还</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "transaction",
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
        font-size: 14px;
        padding: 0 10px;
        box-sizing: border-box;

        .head {
            display: flex;
            color: #666;
            background: #F5F5F5;
            height: 45px;
            align-items: center;
        }

        .item {
            display: flex;
            height: 45px;
            align-items: center;
            color: #333;
            border-bottom: 1px dotted #dcdcdc;
        }

        .red {
            color: #FF4848;
        }

        .green {
            color: #17885D;
        }

        .time,
        .price,
        .pay,
        .order {
            width: 25%;
            text-align: center;
        }
    }
}
</style>
