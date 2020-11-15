<template>
<div class="bg">
    <div class="header">
        <img class="left" src="../../assets/images/back.png" @click="()=>{$router.back()}" />
        <div class="other">
            <div class="other-left">#技术互助小组#</div>
            <div class="other-right">
                <img class="img" src="../../assets/images/icon-man.png" />
                <span class="tit">管理员</span>
            </div>

        </div>
    </div>
    <div class="other top">
        <div class="other-time">2020-12-12创建</div>
        <div class="other-right">
            <span class="tit">申请管理</span>
        </div>
    </div>
    <img class="bg-img" src="../../assets/images/bg-nav.png" />
    <div class="content">
        <span class="tit">话题简介：</span>我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我
    </div>
    <div class="nav">
        <div :class="navActive===1?'item line':'item'" @click="navActive=1">全部</div>
        <div :class="navActive===2?'item line':'item'" @click="navActive=2">精华</div>
    </div>
    <div class="post-list" v-if="navActive===1">
        <div class="post" v-for="(item,index) in dataList" :key="index" @click="$router.push('article')">
            <div class="head">
                <img src="../../assets/images/mine.jpeg" class="img">
                <div class="name">安徽新闻网</div>
            </div>
            <div class="title">
                <span class="label">置顶</span>
                如果是我，我会怎么设计“微信视频号”？</div>
            <div class="body">
                <div class="left">短视频的表现形式是一种内容传播方式，适合在移动状态和短时休闲状态场景下观看，内容时间长度在几秒到几分钟不等。因此其制作门槛低，人人都有能力发布短视频，用户参与主动性强...</div>
            </div>
            <div class="time">33人阅读 2020-12-12</div>

            <div class="foot">
                <div class="left">
                    <div class="block">
                        <img src="../../assets/images/fo-2.png" class="img">
                        <div class="tit">233</div>
                    </div>
                    <div class="block">
                        <img src="../../assets/images/fo-o.png" class="img">
                        <div class="tit">233</div>
                    </div>
                </div>
                <img src="../../assets/images/fo-4.png" @click.stop="openPopup=1" class="right">
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="btn" @click="openPopup=2">
            <img src="../../assets/images/icon-add-1.png" class="img">
            <div class="down">发帖</div>
        </div>
        <div class="btn" @click="$router.push('myPosts')">
            <img src="../../assets/images/icon-like.png" class="img">
            <div class="down">我的</div>
        </div>
    </div>
    <div class="popup-box" v-if="openPopup>-1" @click="openPopup=-1">
        <div class="popup" @click.stop="" v-if="openPopup===1">
            <div class="row gray">置顶帖子/取消置顶</div>
            <div class="row">设为精华贴/取消精华帖</div>
            <div class="row">举报违规</div>
            <div class="row success">确定</div>
        </div>
        <div class="postings" @click.stop="" v-if="openPopup===2">
            <div class="p-head">
                <div class="left" @click.stop="openPopup=-1">取消</div>
                <div class="center">发表帖子</div>
                <div class="right success" @click.stop="openPopup=-1">发表</div>
            </div>
            <div class="body">
                <input type="text" placeholder="输入标题" class="input">
                <textarea type="text" placeholder="随便说说" class="text" />
                </div>
            <div class="btns">
                <div class="desc">
                    <img src="../../assets/images/icon-1-o.png" class="img"/>
                    <div class="tit">积分置顶(该操作将会消耗您<span class="red">20</span>积分)</div>
                </div>
                <div class="foot">
                    <div class="btn">
                        <img src="../../assets/images/icon-2.png" class="img">
                        <div class="tit">图片/视频</div>
                    </div>
                    <div class="btn">
                        <img src="../../assets/images/icon-3.png" class="img">
                        <div class="tit">拍摄</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "topic",
    data() {
        return {
            navActive: 1,
            dataList: 9,
            openPopup: -1,
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

    .popup-box {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1000;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);

        .postings {
            position: absolute;
            bottom: 0;
            width: 100vw;
            border-radius: 12px 12px 0px 0px;
            background: #FFFFFF;
            height: 95vh;

            .p-head {
                display: flex;
                align-items: center;
                color: #999999;
                text-align: center;
                height: 50px;
                width: 100%;
                box-sizing: border-box;
                border-bottom: 1px solid #EEEEEE;

                .left,
                .right {
                    font-size: 14px;
                    width: 20%;

                    &.success {
                        color: #009FE9;
                    }
                }

                .center {
                    width: 60%;
                    color: #333;
                    font-size: 18px;
                }
            }

            .body {

                .input,
                .text {
                    width: 100%;
                    height: 50px;
                    padding: 0 20px;
                    color: #333;
                    font-size: 16px;
                    border: none;

                    &::placeholder {
                        color: #DFDFDF;

                    }
                }

                .input {
                    border-bottom: 1px dotted #333;
                }

                .text {
                    padding: 20px;
                    height: 200px;
                }
            }

            .btns {
                position: absolute;
                bottom: 0;
                border-top: 1px solid #EEEEEE;

                .desc {
                    height: 50px;
                    display: flex;
                    font-size: 0;
                    align-items: center;

                    .img {
                        min-width: 15px;
                        width: 15px;
                        margin: 0 5px;
                    }

                    .tit {
                        font-size: 14px;
                        color: #666666;

                        .red {
                            color: #FF4848;
                        }
                    }
                }

                .foot {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    height: 150px;
                    background: #FAFAFA;
                    width: 100vw;

                    .btn {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: 0;

                        .img {
                            width: 58px;
                            height: 58px;
                            object-fit: cover;
                        }

                        .tit {
                            margin-top: 5px;
                            color: #333333;
                            font-size: 14px;
                        }

                    }
                }
            }
        }

        .popup {
            position: absolute;
            bottom: 55px;
            left: 0;
            right: 0;
            margin: auto;
            width: 357px;

            .row {
                color: #666666;
                height: 41px;
                background-color: #fff;
                font-size: 15px;
                line-height: 41px;
                text-align: center;

                &.gray {
                    background-color: #f5f5f5;
                }

                &.success {
                    margin-top: 10px;
                    color: #009FE9;
                }

            }
        }
    }

    .footer {
        width: 223px;
        height: 44px;
        background: #FFFFFF;
        border-radius: 28px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 20px;

        .btn {
            display: flex;
            flex-direction: column;
            font-size: 0;
            justify-content: center;
            align-items: center;

            .img {
                width: 15px;
                height: 15px;
            }

            .down {
                color: #999;
                font-size: 14px;
                margin-top: 3px;
            }
        }
    }

    .post-list {
        .post {
            margin-bottom: 10px;
            background: #fff;
            padding-top: 10px;

            .head {
                padding: 0 10px;
                box-sizing: border-box;
                font-size: 0;
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                .img {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    margin-right: 5px;
                    object-fit: cover;
                }

                .name {
                    color: #666666;
                    font-size: 12px;
                }

            }

            .title {
                padding: 0 10px;
                box-sizing: border-box;
                font-weight: bold;
                line-height: 21px;
                color: #333333;
                font-size: 15px;

                .label {
                    width: 24px;
                    height: 13px;
                    font-size: 6px;
                    line-height: 14px;
                    color: #FFFFFF;
                    background: #FB5858;
                    text-align: center;
                    display: inline-block;
                    padding: 2px 5px;
                    border-radius: 6px;
                }
            }

            .body {
                padding: 0 10px;
                box-sizing: border-box;
                font-size: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 5px;

                .left {
                    width: 100%;
                    font-size: 12px;
                    color: #333333;
                    text-align: justify;
                    line-height: 16px;
                }
            }

            .time {
                padding: 0 10px;
                box-sizing: border-box;
                margin-top: 10px;
                font-size: 12px;
                color: #666666;
            }

            .foot {
                margin: 0 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #dcdcdc;
                padding: 15px 0;
                box-sizing: border-box;
                margin-top: 5px;

                .left {
                    font-size: 0;
                    display: flex;

                    .block {
                        display: flex;
                        align-items: center;
                        margin-right: 10px;

                        .img {
                            width: 18px;
                            height: 18px;
                            margin-right: 10px;

                        }

                        .tit {
                            font-size: 14px;
                            color: #333333;

                            &.active {
                                color: #009FE9;
                            }
                        }
                    }

                }

                .right {
                    width: 32px;

                }
            }
        }
    }

    .nav {
        width: 375px;
        height: 44px;
        background: #F5F5F5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        margin: 10px auto;

        .item {
            position: relative;
            margin-right: 20px;
            font-size: 15px;
            font-weight: bold;
            text-align: center;
            color: #999;
            padding-bottom: 2px;

            &.line {
                border-radius: 3px;
                font-size: 16px;
                border-bottom: 3px solid #009FE9;
                color: #009FE9;
            }
        }
    }

    .content {
        position: relative;
        z-index: 1;
        font-size: 14px;
        padding: 20px 10px;
        text-align: justify;
        color: #666666;
        background-color: #fff;
        border-radius: 12px 12px 0px 0px;

        .tit {
            color: #333;
        }
    }

    .header {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 60px;
        // line-height: 60px;
        font-size: 18px;
        font-weight: normal;
        background: url("../../assets/images/bg-nav.png") no-repeat;
        background-size: 100% 150px;
        color: #fff;
        z-index: 999;
        display: flex;
        justify-content: space-around;

        .left {
            position: absolute;
            line-height: 60px;
            left: 14px;
            top: 20px;
            width: 10px;
            height: 17px;
        }

    }

    .other {
        position: relative;
        z-index: 9;
        width: 87%;
        height: 60px;
        display: flex;
        margin-left: 40px;
        margin-right: 10px;
        align-items: center;
        color: #fff;
        justify-content: space-between;

        &.top {
            font-size: 14px;
            margin-top: 40px;
        }

        .other-left {
            width: 80%;
        }

        .other-right {
            position: absolute;
            right: 10px;
            min-width: 80px;
            height: 20px;
            background: #FFFFFF;
            font-size: 0;
            color: #009FE9;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 9px;

            .img {
                min-width: 15px;
                height: 15px;
                object-fit: cover;
                margin-right: 5px;
            }

            .tit {
                font-size: 14px;
            }
        }
    }

    .bg-img {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
    }
}
</style>
