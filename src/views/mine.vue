<template>
<div class="bg">
    <div class="header">
        <div class="center">个人中心</div>
        <div class="right">
            <img class="img" src="../assets/images/mine-r1.png" @click="()=>{$router.push('news')}" />
            <img class="img" src="../assets/images/mine-r2.png" @click="()=>{$router.push('setting')}" />
        </div>
    </div>
    <img class="bg-img" src="../assets/images/bg-nav.png" />
    <div class="mine">
        <div class="left">
            <img class="img" src="../assets/images/mine.jpeg" />
        </div>
        <div class="right">
            <div class="row">
                <span class="name">我的昵称</span>
                <span class="grade">初级</span>
            </div>
            <div class="row">
                <span class="account">ID:223555</span>
                <span class="padding">|</span>
                <span class="score">综合评分:4.9分</span>
            </div>
        </div>
    </div>
    <div class="item-list">
        <div class="item" @click="$router.push('info')">
            <img src="../assets/images/nav-1.png" class="img" />
            <span class="tit">基本资料</span>
        </div>
        <div class="item" @click="$router.push('transaction')">
            <img src="../assets/images/nav-2.png" class="img" />
            <span class="tit">交易流水</span>
        </div>
        <div class="item" @click="$router.push('wallet')">
            <img src="../assets/images/nav-3.png" class="img" />
            <span class="tit">我的钱包</span>
        </div>
        <div class="item" @click="$router.push('historicalEvaluation')">
            <img src="../assets/images/nav-4.png" class="img" />
            <span class="tit">历史评价</span>
        </div>
    </div>
    <my-footer :active="5"></my-footer>
</div>
</template>

<script>
export default {
    name: "mine",
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

    .bg-img {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
    }

    .header {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 60px;
        // text-align: center;
        line-height: 60px;
        font-size: 18px;
        font-weight: normal;
        background: url("../assets/images/bg-nav.png") no-repeat;
        background-size: 100% 150px;
        color: #fff;
        z-index: 999;
        display: flex;
        justify-content: space-around;

        .left,
        .right {
            position: absolute;
            height: 60px;
            line-height: 60px;
            top: 0;
        }

        .left {
            left: 14px;
            top: 20px;
            width: 10px;
            height: 17px;

        }

        .right {
            width: 80px;
            right: 14px;
            text-align: right;
            font-size: 0;

            .img {
                margin-top: 20px;
                margin-left: 15px;
                width: 22px;
            }
        }
    }

    .mine {
        width: 355px;
        height: 75px;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        margin: auto;
        position: absolute;
        top: 75px;
        left: 0;
        right: 0;

        .left {
            width: 15%;
            font-size: 0;

            .img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        .right {
            width: 75%;

            .row {
                font-size: 14px;
                margin: 10px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #009FE9;

                .name {
                    color: #333;
                    font-size: 18px;
                    font-weight: bold;
                    padding-right: 10px;
                }

                .padding {
                    padding: 0 10px;
                    height: 18px;
                    line-height: 18px;
                }

                .grade {
                    width: 48px;
                    height: 18px;
                    background: #E5F6FE;
                    border-radius: 13px;
                    color: #009FE9;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                }
            }
        }
    }

    .item-list {
        margin-top: 180px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .item {
            margin: 10px 0;
            width: 33%;
            height: 99px;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0;

            .img {
                width: 35px;
                object-fit: contain;
            }

            .tit {
                font-size: 12px;
                font-weight: bold;
                color: #009FE9;
                padding-top: 10px;
            }
        }
    }

}
</style>
