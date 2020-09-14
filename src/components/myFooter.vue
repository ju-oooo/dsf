<template>
<div>
    <div class="footer-list">
        <div class="item" @click="toView('Index')">
            <img v-show="active===1" src="../assets/images/footer-index-o.png" class="img" />
            <img v-show="active!==1" src="../assets/images/footer-index.png" class="img" />
            <span :class="active===1?'active':'tit'">首页</span>
        </div>
        <div class="item" @click="toView('Order')">
            <img v-show="active===2" src="../assets/images/footer-order-o.png" class="img" />
            <img v-show="active!==2" src="../assets/images/footer-order.png" class="img" />
            <span :class="active===2?'active':'tit'">订单</span>
        </div>
        <div class="item" @click="toView('PointsRanking')">
            <img v-show="active===3" src="../assets/images/footer-pointsRanking-o.png" class="img" />
            <img v-show="active!==3" src="../assets/images/footer-pointsRanking.png" class="img" />
            <span :class="active===3?'active':'tit'">积分排行</span>
        </div>
        <div class="item" @click="toView('Forum')">
            <img v-show="active===4" src="../assets/images/footer-forum-o.png" class="img" />
            <img v-show="active!==4" src="../assets/images/footer-forum.png" class="img" />
            <span :class="active===4?'active':'tit'">论坛</span>
        </div>
        <div class="item" @click="toView('Mine')">
            <img v-show="active===5" src="../assets/images/footer-mine-o.png" class="img" />
            <img v-show="active!==5" src="../assets/images/footer-mine.png" class="img" />
            <span :class="active===5?'active':'tit'">我的</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "MyFooter",
    props: {
        active: {
            type: Number,
            default: 1
        }
    },
    methods: {
        toView(name) {
            this.$router.replace({
                name
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.footer-list {
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    width: 100vw;
    justify-content: space-around;
    height: 72px;
    align-items: center;
    background-color: #fff;

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 12px;

        .img {
            width: 32px;
            height: 32px;
            margin-bottom: 4px;
        }

        .tit {
            color: #999999;
        }

        .active {
            color: #009FE9;
        }
    }
}
</style>
