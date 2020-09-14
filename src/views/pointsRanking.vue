<template>
<div class="bg">
    <div class="header">
        <img src="../assets/images/pr-bg.png" class="bg-img" />
        <img class="header-left" src="../assets/images/back.png" @click="()=>{$router.back()}" />
        <img src="../assets/images/pr-1.png" class="img1" />
    </div>
    <div class="card">
        <div class="left">
            <div class="top">
                <div class="item">
                    <div class="up">15</div>
                    <div class="down">今日排名</div>
                </div>
                <div class="item">
                    <div class="up">2000</div>
                    <div class="down">我的排名</div>
                </div>
            </div>
            <div class="bottom">
                <div class="block"><span class="tit">2020年</span><img src="../assets/images/icon-down-o.png" class="img" /></div>
                <div class="block"><span class="tit">7月</span><img src="../assets/images/icon-down-o.png" class="img" /></div>
            </div>
        </div>
        <div class="right">
            <div class="btn" @click="$router.push('pointsReward')">查看我的奖励</div>
        </div>
    </div>
    <div class="item-list">
        <div class="head">
            <div class="id">排名</div>
            <div class="name">昵称</div>
            <div class="phone">手机尾号</div>
            <div class="count">积分</div>
        </div>
        <div class="item" v-for="(item,index) in dataList" :key="index">

            <div class="id">
                <img src="../assets/images/pr-o1.png" v-if="index===0" class="img" />
                <img src="../assets/images/pr-o2.png" v-else-if="index===1" class="img" />
                <img src="../assets/images/pr-o3.png" v-else-if="index===2" class="img" />
                <span v-else>{{index+1}}</span>
            </div>

            <div class="name">李现</div>
            <div class="phone">6063</div>
            <div :class="index<3?'count blue':'count'">20000</div>
        </div>
    </div>
    <div class="reward-list">
        <div class="head">
            <img src="../assets/images/pr-h1.png" class="img">
            <span class="title">积分奖励</span>
            <img src="../assets/images/pr-h2.png" class="img">
        </div>
        <div class="reward">第一名：现金 <span class="org">500元</span> 和 <span class="org">1000股</span> D股</div>
        <div class="reward">第二名：现金 <span class="org">300元</span> 和 <span class="org">800股</span> D股</div>
        <div class="reward">第三名：现金 <span class="org">200元</span> 和 <span class="org">500股</span> D股</div>
        <div class="reward">第四名：现金 <span class="org">50元</span> 和 <span class="org">300股</span> D股</div>
        <div class="reward">第五名：现金 <span class="org">30元</span> 和 <span class="org">100股</span> D股</div>
        <div class="reward">第六至十名：<span class="org">50股</span> D股</div>
        <div class="foot" @click="$router.push('description')">查看赠股说明>></div>
    </div>
    <my-footer :active="3"></my-footer>
</div>
</template>

<script>
export default {
    name: "pointsRanking",
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
    border-bottom: 1px solid #EEEEEE;

    .reward-list {

        background-color: #E5F6FE;
        padding-bottom: 30px;
        width: 351px;
        margin: 20px auto;

        .head {
            background-color: #009FE9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 57px;
            border-radius: 14px 14px 0px 0px;
            margin-top: 10px;

            .title {
                font-size: 18px;
            }
        }

        .reward {
            width: 330px;
            height: 51px;
            line-height: 51px;
            margin: 10px auto;
            background: #FAFAFA;
            border: 1px solid #DEE9FF;
            border-radius: 26px;
            padding: 0 20px;
            box-sizing: border-box;
            color: #999999;
            font-size: 16px;

            .org {
                color: #FFA246;
            }
        }

        .foot {
            font-size: 14px;
            color: #009FE9;
            padding-top: 30px;
            padding-right: 10px;
            text-align: right;
        }
    }

    .item-list {
        .head {
            display: flex;
            color: #3A3A3A;
            font-size: 14px;
            text-align: center;
            height: 50px;
            line-height: 50px;

            .id,
            .name,
            .phone {
                width: 22%;
            }

            .count {
                width: 30%;
            }

        }

        .item {
            display: flex;
            color: #3A3A3A;
            font-size: 14px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-bottom: 1px dotted #EEEEEE;

            .id,
            .name,
            .phone {
                width: 22%;

            }

            .count {
                width: 30%;
            }

            .id {
                color: #A1C2FF;
            }

            .img {
                width: 23px;
                object-fit: contain;
            }

            .blue {
                color: #009FE9;
            }
        }
    }

    .card {
        position: relative;
        z-index: 2;
        width: 351px;
        height: 105px;
        margin: -105px auto 0;
        background: #FFFFFF;
        border-radius: 8px 8px 0px 0px;
        font-size: 14px;
        color: #999;
        display: flex;
        justify-content: space-between;
        padding: 17px 20px;
        box-sizing: border-box;

        .left {
            width: 50%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .top {
                display: flex;
                justify-content: space-between;

                .item {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    align-items: center;

                    .up {
                        color: #009FE9;
                        font-size: 18px;
                    }
                }
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .block {
                    width: 69px;
                    height: 20px;
                    line-height: 20px;
                    font-size: 0;
                    background-color: #F5F5F5;
                    display: flex;
                    justify-content: center;

                    .tit {
                        font-size: 12px;
                    }

                    .img {
                        padding-left: 5px;
                        width: 8px;
                        object-fit: contain;
                    }
                }
            }
        }

        .right {
            display: flex;
            align-items: center;
            justify-content: center;

            .btn {
                width: 115px;
                height: 29px;
                line-height: 29px;
                background: #E5F6FE;
                border-radius: 15px;
                text-align: center;
                color: #009FE9;
                font-size: 14px;
            }
        }
    }

    .header {
        width: 100vw;
        height: 300px;

        .header-left {
            position: absolute;
            height: 60px;
            line-height: 60px;
            left: 14px;
            top: 20px;
            width: 10px;
            height: 17px;
        }

        .bg-img {
            position: relative;
            top: -20px;
            left: -30px;
            height: 320px;
            object-fit: cover;

        }

        .img1 {
            position: absolute;
            top: 21px;
            left: 138px;
            width: 220px;
            object-fit: contain;
        }
    }
}
</style>
