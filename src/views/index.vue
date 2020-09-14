<template>
<div class="bg">
    <div class="header">
        首页
        <div class="right" @click="$router.push('clockIn')">
            <img src="../assets/images/icon-qd.png" class="img">
            <div class="tit">签到</div>
        </div>
    </div>
    <img class="bg-img" src="../assets/images/bg-nav.png" />
    <div class="search" @click="()=>{$router.push('search')}">
        <div class="left">
            <span class="address">合肥</span>
            <img class="img" src="../assets/images/icon-down.png" />
        </div>
        <input class="input" type="text" placeholder="热门搜索关键字" />
    </div>
    <div class="banner">
        <img class="img" src="../assets/images/banner.png" />
    </div>
    <!-- 每日任务 -->
    <div class="task-list">
        <div class="title">每日任务</div>
        <div class="item" v-for="(item,index) in taskList" :key="index">
            <span class="tit">您发布的项目有了新的进度</span>
            <span class="time">14:23</span>
        </div>
    </div>
    <!-- 工程列表 -->
    <div class="engineering-nav">
        <div :class="['nav',navActive==1?'active':'']" @click="navActive=1">工程分包</div>
        <div :class="['nav',navActive==2?'active':'']" @click="navActive=2">新设备招标</div>
        <div :class="['nav',navActive==3?'active':'']" @click="navActive=3">设备维护维修</div>
    </div>
    <div class="engineering-list">

        <div class="item" v-for="(item,index) in dataList" :key="index" @click="()=>{$router.push(`detail?type=${navActive}`)}">
            <div class="head">
                <div class="name">刘先生</div>
                <div class="right">23小时前发布 | 23人竞标</div>
            </div>
            <div class="body">
                <div class="row">
                    <div class="title">工程分包标题</div>
                    <div class="price">赏金：3000元</div>
                </div>
                <div class="row">
                    <div class="address">任务地址：合肥 蜀山区</div>
                    <div v-if="index===0" class="btn active">已竞标</div>
                    <div v-else @click.stop="dialogOpen=true" class="btn">我要竞标</div>
                </div>
            </div>
            <div class="foot">
                <img src="../assets/images/icon-hz.png" class="img" />
                综合评分3.6分
            </div>
        </div>
    </div>
    <my-footer :active="1"></my-footer>
    <my-dialog type="bzj" v-if="dialogOpen" @confirm="confirm" @cancel="cancel"></my-dialog>
    <div class="btn-add" @click="$router.push('release')">
        <img class="img" src="../assets/images/icon-add.png" />
    </div>
</div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            dialogOpen: false,
            navActive: 1,
            taskList: 2,
            dataList: 9,
            // dataList: [{...}],
        };
    },
    methods: {
        confirm() {
            this.dialogOpen = false;
            this.$router.push("pay");
        },
        cancel() {
            this.dialogOpen = false;
        },
    }
};
</script>

<style lang="scss" scoped>
.btn-add {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 120px;
    right: 20px;
    border-radius: 50%;
    font-size: 0;
    background-color: #fff;

    .img {
        position: relative;
        top: -12px;
        left: -12px;
        width: 54px;
        height: 54px;
    }
}

.bg {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
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
        text-align: center;
        line-height: 60px;
        font-size: 18px;
        font-weight: normal;
        background: url("../assets/images/bg-nav.png") no-repeat;
        background-size: 100% 150px;
        color: #fff;
        z-index: 999;

        .right {
            position: absolute;
            width: 50px;
            top: 30px;
            right: 10px;
            height: 50px;
            font-size: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .img {
                width: 22px;
                height: 22px;
                object-fit: contain;
            }

            .tit {
                position: relative;
                top: -20px;
                font-size: 12px;
                color: #fff;
            }
        }
    }

    .search {
        width: 360px;
        height: 35px;
        border-radius: 33px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        margin: auto;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;

        .left {
            width: 15%;
            display: flex;
            align-items: center;

            .address {
                height: 16px;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                color: #009FE9;
                padding-right: 10px;
            }

            .img {
                width: 9px;
                height: 5px;
            }
        }

        .input {
            width: 75%;
            font-size: 12px;
            height: 22px;
            line-height: 22px;

            &::placeholder {
                color: #999999;
                font-size: 12px;
            }
        }
    }

    .banner {
        position: absolute;
        top: 110px;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;

        .img {
            width: 360px;
            height: 132px;
            border-radius: 6px;
        }
    }

    .task-list {
        background-color: #fff;
        color: #009FE9;
        width: 360px;
        font-size: 14px;
        padding: 260px 10px 20px;

        .title {
            font-weight: bold;
            color: #009FE9;
            line-height: 20px;
        }

        .item {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            line-height: 20px;

            .tit {
                padding-left: 20px;
                color: #333;
            }

            .time {
                color: #999;
            }
        }
    }

    .engineering-nav {
        display: flex;
        padding: 10px;
        width: 100%;
        background: #F5F5F5;

        .nav {
            font-size: 16px;
            color: #999;
            margin-right: 30px;
            font-weight: bold;
            padding: 5px 0;

            &.active {
                color: #009FE9;
                border-bottom: 3px solid #009FE9;
            }
        }
    }

    .engineering-list {
        .item {
            background-color: #fff;

            .head {
                font-size: 12px;
                border-bottom: 1px solid #DCDCDC;
                padding: 10px;
                display: flex;
                justify-content: space-between;

                .name {
                    font-weight: bold;
                }

                .right {
                    color: #999;
                }
            }

            .body {
                border-bottom: 1px solid #DCDCDC;
                padding: 10px 10px 0;

                .row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;

                    .title {
                        font-size: 14px;
                        font-weight: bold;
                    }

                    .price {
                        font-size: 14px;
                        font-weight: bold;
                        color: #F86B6B;

                    }

                    .address {
                        font-size: 12px;
                        color: #333;
                    }

                    .btn {
                        font-size: 14px;
                        text-align: center;
                        line-height: 25px;
                        width: 75px;
                        height: 25px;
                        border: 1px solid #F86B6B;
                        color: #fff;
                        background-color: #F86B6B;
                        border-radius: 7px;

                        &.active {
                            color: #F86B6B;
                            background-color: #fff;
                        }
                    }

                }
            }

            .foot {
                padding: 10px;
                margin-bottom: 20px;
                font-size: 12px;
                color: #666;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                .img {
                    width: 13px;
                    height: 15px;
                    padding-right: 5px;
                }

            }
        }
    }
}
</style>
