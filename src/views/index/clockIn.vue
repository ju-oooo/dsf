<template>
<div class="bg">
    <div class="header">
        <img class="left" src="../../assets/images/back.png" @click="()=>{$router.back()}" />
        <div class="center">每日签到</div>
    </div>
    <img class="bg-img" src="../../assets/images/bg-nav.png" />
    <div class="content">
        <div class="head">
            <img src="../../assets/images/icon-data.png" class="img">
            <div class="sum">积分总计: 2333 </div>
        </div>
        <div class="link">积分排行 ></div>
    </div>
    <div class="clock-in">
        <div class="clock-btn" @click="flag=false">{{flag?"立即签到":"签到完成"}}</div>
        <div class="tit">今日签到可领取<span class="org">20</span>积分！</div>
    </div>

    <div class="task-list">
        <div class="nav-list">
            <div :class="checked===1?'nav active':'nav'" @click="checked=1">任务中心</div>
            <div :class="checked===2?'nav active':'nav'" @click="checked=2">积分明细</div>
        </div>
        <div v-if="checked===1">
            <div class="task">
                <div class="left">
                    <img src="../../assets/images/task-1.png" class="img" />
                    <div class="tit">每日签到</div>
                    <div class="val">+5积分</div>
                </div>
                <div class="right">
                    <div class="btn success">已完成</div>
                </div>
            </div>
            <div class="task">
                <div class="left">
                    <img src="../../assets/images/task-1.png" class="img" />
                    <div class="tit">发布需求</div>
                    <div class="val">+50积分</div>
                </div>
                <div class="right">
                    <div class="btn">去发布</div>
                </div>
            </div>
            <div class="task">
                <div class="left">
                    <img src="../../assets/images/task-1.png" class="img" />
                    <div class="tit">分享好友</div>
                    <div class="val">+50积分</div>
                </div>
                <div class="right">
                    <div class="btn" @click="$router.push('inviteFriends')">去分享</div>
                </div>
            </div>
            <div class="task">
                <div class="left">
                    <img src="../../assets/images/task-1.png" class="img" />
                    <div class="tit">完善资料</div>
                    <div class="val">+20积分</div>
                </div>
                <div class="right">
                    <div class="btn">去完善</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="nav-list">
                <div class="nav active">每日任务（5）</div>
            </div>
            <div class="today-task">
                <div class="title">下载人人网app并注册</div>
                <div class="bottom">
                    <div class="sum">积分奖励：30积分</div>
                    <div class="btn">去完成</div>
                </div>
            </div>
            <div class="today-task">
                <div class="title">阅读置顶文章</div>
                <div class="bottom">
                    <div class="sum">积分奖励：30积分</div>
                    <div class="btn">去完成</div>
                </div>
            </div>
            <div class="today-task">
                <div class="title">观看视频</div>
                <div class="bottom">
                    <div class="sum">积分奖励：30积分</div>
                    <div class="btn">去完成</div>
                </div>
            </div>
        </div>
        <div v-if="checked===2">
            <div class="integral" v-for="(item,index) in dataList" :key="index">
                <div class="time">2020-12-12</div>
                <div class="type">文章置顶 </div>
                <div class="sum">-15</div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: "clockIn",
    data() {
        return {
            flag: true,
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

    .header {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        font-weight: normal;
        background: url("../../assets/images/bg-nav.png") no-repeat;
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

    }

    .bg-img {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
    }

    .content {
        position: relative;
        z-index: 1;
        margin-top: 70px;

        .head {
            display: flex;
            align-items: center;
            margin-left: 20px;
            font-size: 0;

            .img {
                width: 15px;
                object-fit: contain;
                margin-right: 10px;
            }

            .sum {
                color: #fff;
                font-size: 15px;
            }
        }

        .link {
            position: absolute;
            right: 0;
            background-color: #019AE2;
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            width: 100px;
            color: #fff;
            height: 22px;
            line-height: 22px;
            border-top-left-radius: 33px;
            border-bottom-left-radius: 33px;
        }
    }

    .clock-in {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px 0 20px;

        .clock-btn {
            text-align: center;
            font-weight: bold;
            padding: 10px;
            background-color: #fff;
            position: relative;
            z-index: 1;
            border: 2px solid #009FE9;
            color: #009FE9;
            font-size: 18px;
            width: 64px;
            height: 64px;
            box-sizing: border-box;
            border-radius: 50%;
        }

        .tit {
            margin-top: 10px;
            color: #666;
            font-size: 14px;
            line-height: 22px;
        }

        .org {
            color: #FFA246;
        }
    }

    .task-list {
        width: 360px;
        margin: 5px auto;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background: #FFFFFF;

        .nav-list {
            display: flex;
            margin-bottom: 20px;

            .nav {
                margin-right: 20px;
                font-weight: bold;
                font-size: 15px;
                color: #666;

                &.active {
                    color: #009FE9;
                }
            }
        }

        .task {
            display: flex;
            justify-content: space-between;
            font-size: 0;
            margin-top: 5px;
            padding: 10px 5px;
            box-sizing: border-box;
            border-bottom: 0.5px dotted #DCDCDC;

            .left {
                width: 80%;
                display: flex;
                align-items: center;

                .img {
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
                    margin-right: 10px;
                }

                .tit {
                    font-weight: bold;
                    margin-right: 10px;
                    color: #333333;
                    font-size: 15px;
                }

                .val {
                    font-size: 14px;
                    color: #FFA246;
                }
            }

            .right {
                width: 20%;
                display: flex;
                align-items: center;

                .btn {
                    width: 63px;
                    text-align: center;
                    line-height: 20px;
                    height: 20px;
                    background: #FFA246;
                    border-radius: 10px;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                    color: #fff;
                    font-size: 14px;

                    &.success {
                        color: #666;
                        background: #F8F8F8;
                    }
                }
            }

        }

        .line {
            height: 3px;
            border-radius: 5px;
            background-color: #f5f5f5;
            margin-bottom: 10px;
        }

        .today-task {
            border-bottom: 0.5px dotted #DCDCDC;
            padding-bottom: 10px;
            box-sizing: border-box;
            margin-bottom: 10px;

            .title {
                margin-bottom: 10px;
                font-weight: bold;
                font-size: 15px;
                color: #FFA246;
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .sum {
                    font-size: 15px;
                }

                .btn {
                    width: 63px;
                    text-align: center;
                    line-height: 20px;
                    height: 20px;
                    background: #FFA246;
                    border-radius: 10px;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                    color: #fff;
                    font-size: 14px;

                    &.success {
                        color: #666;
                        background: #F8F8F8;
                    }
                }
            }
        }

        .integral {
            display: flex;
            color: #666;
            font-size: 14px;
            height: 50px;
            line-height: 50px;
            border-bottom: 0.5px dotted #DCDCDC;

            .time {
                width: 30%;
                text-align: left;
            }

            .type {
                width: 40%;
                text-align: center;
            }

            .sum {
                width: 30%;
                color: #FF4848;
                text-align: right;
            }
        }

    }
}
</style>
