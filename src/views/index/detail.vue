<template>
<div class="bg">
    <my-header :isBack="true" title="项目详情" rightTextClick="申请延时" @rightClick="dialogType='sqys';dialogOpen=true"></my-header>
    <div class="head">
        <img src="../../assets/images/mine.jpeg" class="img" />
        <div class="footer">
            <div class="btn">共11张</div>
            <div class="btn blue">视频</div>
            <div class="btn white">照片</div>
        </div>
        <img src="../../assets/images/mine.jpeg" class="player" />

    </div>
    <div class="detail">
        <div class="row end">
            <div class="name">项目名称项目名称</div>
            <div class="state-o" v-if="state===0">已接单</div>
            <div class="state-o" v-else-if="state===1">待接单</div>
            <div class="state-o gray" v-else-if="state===2">已失效</div>
            <div class="state-o red" v-else>已完成</div>
        </div>
        <div class="row desc">
            <span class="con">距离</span>
            <span class="state" v-if="state===1">待接单</span>
            <span class="state" v-else-if="state===3">待确认</span>
            <span class="con">结束还有</span>
            <span class="time">0天 11时 21分 30秒</span>
        </div>
        <div class="type-list">
            <div class="line">
                <div class="left">
                    <div class="after"></div>
                    项目类型
                </div>
                <div class="right">工程分包</div>
            </div>
            <div class="line">
                <div class="left">
                    <div class="after"></div>
                    任务赏金
                </div>
                <div class="right red"><span class="price">2000</span>元</div>
            </div>
            <div class="line">
                <div class="left">
                    <div class="after"></div>
                    任务周期
                </div>
                <div class="right">3天</div>
            </div>
            <div class="line">
                <div class="left">
                    <div class="after"></div>
                    任务地址
                </div>
                <div class="right">海南省三亚市天涯区三亚湾凤翔路海田路</div>
            </div>
            <div class="line">
                <div class="left">
                    <div class="after"></div>
                    联系方式
                </div>
                <div class="right red">13898568569</div>
            </div>
        </div>
    </div>
    <!-- 项目进度 -->
    <div class="nav">
        <div class="item line">项目进度</div>
    </div>
    <div class="progress">
        <div class="item">
            <div class="top">
                <img src="../../assets/images/detail-o1.png" class="img">
            </div>
            <div class="bottom">
                <div class="lin tit">发起任务</div>
                <div class="lin state">订单</div>
                <div class="lin time">12-3</div>
            </div>
        </div>
        <div class="wire active"></div>
        <div class="item">
            <div class="top">
                <img src="../../assets/images/detail-2.png" class="img">
            </div>
            <div class="bottom">
                <div class="lin tit">雇主选标</div>
                <div class="lin state"></div>
                <div class="lin time"></div>
            </div>
        </div>
        <div class="wire"></div>
        <div class="item">
            <div class="top">
                <img src="../../assets/images/detail-3.png" class="img">
            </div>
            <div class="bottom">
                <div class="lin tit">线下交易</div>
                <div class="lin state"></div>
                <div class="lin time"></div>
            </div>
        </div>
        <div class="wire"></div>
        <div class="item">
            <div class="top">
                <img src="../../assets/images/detail-4.png" class="img">
            </div>
            <div class="bottom">
                <div class="lin tit">评价</div>
                <div class="lin state"></div>
                <div class="lin time"></div>
            </div>
        </div>
        <div class="wire"></div>
        <div class="item">
            <div class="top">
                <img src="../../assets/images/detail-5.png" class="img">
            </div>
            <div class="bottom">
                <div class="lin tit">支付赏金</div>
                <div class="lin state"></div>
                <div class="lin time"></div>
            </div>
        </div>
    </div>
    <!-- 待接单 -->
    <div class="nav" v-if="state===1">
        <div :class="navActive===1?'item line':'item'" @click="navActive=1">需求描述</div>
        <div :class="navActive===2?'item line':'item'" @click="navActive=2">历史评价</div>
        <div :class="navActive===3?'item line':'item'" @click="navActive=3">申请详情</div>
    </div>
    <!-- 待确认 -->
    <div class="nav" v-if="state===2">
        <div :class="navActive===1?'item line':'item'" @click="navActive=1">需求描述</div>
        <div :class="navActive===2?'item line':'item'" @click="navActive=2">进度详情</div>
    </div>
    <!-- 需求描述 -->
    <div class="desc-list" v-if="navActive===1">
        <div class="desc">
            <div class="title">达成条件</div>
            <div class="content">中国顶层文化主题展馆，省级重点展馆，可成为合作者未来经典案例。3000多平方展厅空间和展陈设计到施工图（其中展陈大纲、动线布局和风格概念由我方提供）。江苏南部区域有经验者个人或公司优先。价格面议</div>
        </div>
        <div class="desc">
            <div class="title">招标条件</div>
            <div class="content">中国顶层文化主题展馆，省级重点展馆，可成为合作者未来经典案例。3000多平方展厅空间和展陈设计到施工图（其中展陈大纲、动线布局和风格概念由我方提供）。江苏南部区域有经验者个人或公司优先。价格面议</div>
        </div>
        <div class="desc">
            <div class="title">场地条件</div>
            <div class="content">中国顶层文化主题展馆，省级重点展馆，可成为合作者未来经典案例。3000多平方展厅空间和展陈设计到施工图（其中展陈大纲、动线布局和风格概念由我方提供）。江苏南部区域有经验者个人或公司优先。价格面议</div>
        </div>
        <div class="desc">
            <div class="title">功能设备</div>
            <div class="content">中国顶层文化主题展馆，省级重点展馆，可成为合作者未来经典案例。3000多平方展厅空间和展陈设计到施工图（其中展陈大纲、动线布局和风格概念由我方提供）。江苏南部区域有经验者个人或公司优先。价格面议</div>
        </div>
    </div>
    <!-- 历史评价 -->
    <div class="appraisal-list" v-if="navActive===2">
        <div class="appraisal" v-for="index in 5" :key="index">
            <div class="top">
                <span class="name">一只**杨</span>
                <span class="time">2013-12-12</span>
                <span class="count">5分</span>
            </div>
            <div class="bottom">诚实守信，一场愉快的交易！</div>
        </div>
    </div>
    <!-- 申请详情 -->
    <div class="application-list" v-if="navActive===3">
        <div class="head-list">
            <div class="item active">已中标（1）</div>
            <div class="item">未中标（22）</div>
        </div>
        <div class="application" v-for="index in 5" :key="index">
            <div class="left">
                <div class="top">技工老杨<div class="btn">专家</div>
                </div>
                <div class="bottom">
                    <img src="../../assets/images/clock.png" class="img">
                    <span class="time">2020-12-12</span>
                </div>
            </div>
            <div class="right">
                <img src="../../assets/images/success.png" class="img">
                <img src="../../assets/images/error.png" class="img" @click="dialogType='shsb';dialogOpen=true">
            </div>
        </div>
    </div>
    <!-- 进度详情 -->
    <div class="progress-list" v-if="state===2&&navActive===2">
        <div class="progress">
            <div class="left">
                <div class="top">申请延长时间3天</div>
                <div class="bottom">2020-12-12</div>
            </div>
            <div class="right">
                <div class="btn red">审核失败</div>
            </div>
        </div>
        <div class="progress">
            <div class="left">
                <div class="top">申请项目交付</div>
                <div class="bottom">2020-12-12</div>
            </div>
            <div class="right">
                <div class="btn">等待审核</div>
            </div>
        </div>
    </div>

    <div class="footer-btn" v-if="state===1">
        <div class="btn" v-if="type===1">立即申请</div>
        <div class="btn" v-else-if="type===2" @click="()=>{$router.push('uploadFile')}">上传招标文件</div>
        <div class="btn" v-else-if="type===3">申请项目交付</div>
        <div class="btn" v-else-if="type===4" @click="()=>{$router.push('appraisal')}">评价</div>
        <div class="btn" v-if="type===5" @click="dialogType='qrtg';dialogOpen=true">确认申请人</div>
    </div>
    <my-dialog :type="dialogType" v-if="dialogOpen" @confirm="confirm" @cancel="cancel"></my-dialog>
</div>
</template>

<script>
export default {
    name: "detail",
    data() {
        return {
            dialogType: "sqys",
            type: false,
            navActive: 1,
            state: 1,
            dialogOpen: false
        };
    },
    created() {
        this.type = Number(this.$route.query.type) || 1
        this.state = Number(this.$route.query.state) || 1;
    },
    methods: {
        confirm(val) {
            if (this.dialogType === "sqys") {

            } else if (this.dialogType === "qrtg") {
                
            } else if (this.dialogType === "shsb") {

            }
            this.dialogOpen = false;
        },
        cancel() {
            this.dialogOpen = false;
        },
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

    .footer-btn {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;

        .btn {
            width: 355px;
            height: 36px;
            background: #009FE9;
            opacity: 1;
            border-radius: 5px;
            text-align: center;
            font-size: 15px;
            line-height: 36px;
            color: #FFFFFF;
        }
    }

    .application-list {
        .head-list {
            display: flex;
            margin: 10px 0;
            color: #FFA246;

            .item {
                width: 77px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                font-size: 12px;
                margin: 0 10px;
                border-radius: 5px;

                &.active {
                    color: #fff;
                    background-color: #FFA246;
                }
            }
        }

        .application {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px;
            border-bottom: 1px dotted #dcdcdc;

            .left {
                height: 50px;

                display: flex;
                flex-direction: column;
                justify-content: space-around;

                .top {
                    font-size: 14px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;

                    .btn {
                        text-align: center;
                        font-size: 14px;
                        margin-left: 10px;
                        width: 48px;
                        font-weight: initial;
                        height: 20px;
                        line-height: 20px;
                        border-radius: 6px;
                        color: #FFFFFF;
                        background-color: #FFA246;
                    }
                }

                .bottom {
                    font-size: 0;
                    display: flex;
                    align-items: center;

                    .time {
                        font-size: 12px;
                        color: #666;
                        margin-left: 5px;
                    }

                    .img {
                        width: 13px;
                        object-fit: contain;
                    }
                }
            }

            .right {
                font-size: 0;

                .img {
                    width: 20px;
                    height: 20px;
                    margin: 0 10px;
                }
            }
        }
    }

    .appraisal-list {
        .appraisal {
            .top {
                padding: 0 10px;
                background-color: #fff;
                font-size: 14px;
                height: 34px;
                line-height: 34px;

                .name,
                .time {
                    padding-right: 10px;
                    color: #666;
                }

                .count {
                    color: #FF6900;
                }
            }

            .bottom {
                padding: 0 10px;
                height: 34px;
                line-height: 34px;
                font-size: 14px;
                color: #333333;
            }
        }
    }

    .progress-list {
        .progress {
            padding: 10px 20px;
            font-size: 14px;
            border-bottom: 1px solid #dcdcdc;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                color: #333;

                .bottom {
                    padding-top: 5px;
                    color: #666;
                }
            }

            .right {
                .btn {
                    width: 88px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    color: #fff;
                    background: #5BC78A;

                    &.red {
                        background: #F86B6B;

                    }
                }
            }
        }
    }

    .desc-list {
        .desc {
            padding: 10px;
            background-color: #FFFFFF;

            .title {
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                padding: 20px 0 10px;
            }

            .content {
                font-size: 14px;
                line-height: 20px;
                color: #666666;
                text-align: justify;
            }

        }
    }

    .nav {
        width: 375px;
        height: 34px;
        background: #F5F5F5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 10px;

        .item {
            position: relative;
            width: 100px;
            font-size: 15px;
            font-weight: bold;
            // text-align: center;
            color: #666;

            &.line {
                color: #009FE9;
            }

            &.line::after {
                content: "";
                position: absolute;
                width: 120px;
                height: 5px;
                left: 5px;
                bottom: -8px;
                background: url("../../assets/images/icon-bottom.png") no-repeat;
                background-size: 50px 3px;
            }
        }
    }

    .progress {
        display: flex;
        align-items: flex-start;
        position: relative;
        padding: 0 5px;

        .wire {
            position: relative;
            top: 40px;
            height: 1px;
            width: 22px;
            background-color: #B8B8B8;

            &.active {
                background-color: #009FE9;
            }
        }

        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px 5px;

            .top {
                font-size: 0;

                .img {
                    width: 40px;
                    height: 40px;
                }
            }

            .bottom {
                width: 48px;
                margin-top: 5px;
                font-size: 12px;
                display: flex;
                flex-direction: column;
                color: #333;
                text-align: center;

                .lin {
                    margin-top: 5px;
                }

                .time {
                    color: #666;

                }
            }
        }
    }

    .detail {
        padding: 20px 10px;
        box-sizing: border-box;
        background-color: #fff;

        .row {
            display: flex;
            margin-bottom: 5px;

            &.end {
                align-items: flex-end;
            }

            .name {
                font-size: 22px;
                font-weight: bold;
                margin-right: 10px;
            }

            .state-o {
                width: 60px;
                height: 18px;
                font-size: 12px;
                color: #fff;
                line-height: 18px;
                text-align: center;
                background-color: #FFA246;

                &.gray {
                    background-color: #999;
                }

                &.red {
                    background-color: #F86B6B;
                }
            }

            &.desc {
                align-items: center;

                .con {
                    font-size: 14px;
                    color: #666666;
                    margin-right: 5px;
                }

                .state,
                .time {
                    margin-right: 5px;
                    font-size: 14px;
                    color: #FFA246;
                }

                .time {
                    font-size: 18px;
                }
            }
        }

        .type-list {
            border-top: 1px solid #dcdcdc;

            .line {
                display: flex;
                margin-top: 10px;

                .left {
                    position: relative;
                    width: 22%;
                    height: 20px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #666666;
                    text-align: center;

                    .after {
                        position: absolute;
                        width: 4px;
                        height: 14px;
                        top: 2px;
                        background: #66C296;
                        border-radius: 33px;
                    }

                }

                .right {
                    width: 80%;
                    font-size: 14px;
                    color: #333333;

                    &.red {
                        color: #D35438;
                    }

                    .price {
                        font-size: 22px;
                    }
                }
            }
        }
    }

    .head {
        width: 375px;
        height: 200px;
        position: relative;

        .img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .player {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            object-fit: cover;
        }

        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            padding: 10px 20px;

            .btn {
                color: #fff;
                text-align: center;
                margin-right: 20px;
                font-size: 12px;
                line-height: 22px;
                width: 62px;
                height: 22px;
                opacity: 0.88;
                background: #333;
                border-radius: 20px;
            }

            .white {
                color: #333;
                background: #fff;
            }

            .blue {
                background: #009FE9;
            }
        }
    }

}
</style>
