<template>
<div class="bg">
    <my-header :isBack="true" title="积分奖励"></my-header>
    <div class="item-list">
        <div class="head">
            <div class="time">时间</div>
            <div class="count">当月名次</div>
            <div class="get">获得奖励</div>
        </div>
        <div class="item" v-for="(item,index) in dataList" :key="index">
            <div class="time">2020-9</div>
            <div class="count">15</div>
            <div class="get">500元+1000股</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "pointsReward",
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
            display: flex;
            color: #3A3A3A;
            font-size: 14px;
            text-align: center;
            height: 50px;
            line-height: 50px;

            .time,
            .count {
                width: 30%;
            }

            .get {
                width: 40%;
            }

        }

        .item {
            display: flex;
            border-bottom: 1px dotted #EEEEEE;
            font-size: 14px;
            text-align: center;
            height: 50px;
            line-height: 50px;

            .time,
            .count {
                width: 30%;
            }

            .get {
                width: 40%;
                text-align: left;
                color: #FF4848;
            }
        }
    }
}
</style>
