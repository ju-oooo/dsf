<template>
<div class="bg">
    <my-header title="论坛"></my-header>
    <div class="topic-box">
        <div class="title">全部话题</div>
        <div class="topic-list">
            <div class="topic" @click="$router.push('topic')" v-for="(item,index) in dataList" :key="index">#技术互助 小组小组#</div>
        </div>
    </div>
    <div class="nav">
        <div :class="navActive===1?'item line':'item'" @click="navActive=1">推荐帖子</div>
        <div :class="navActive===2?'item line':'item'" @click="navActive=2">我的管理</div>
        <div :class="navActive===3?'item line':'item'" @click="navActive=3">我的关注</div>
    </div>
    <div class="post-list" v-if="navActive===1">
        <div class="post" v-for="(item,index) in dataList" :key="index" @click="$router.push('article')">
            <div class="head">
                <img src="../assets/images/mine.jpeg" class="img">
                <div class="name">安徽新闻网</div>
            </div>
            <div class="title">如果是我，我会怎么设计“微信视频号”？</div>
            <div class="body">
                <div class="left">短视频的表现形式是一种内容传播方式，适合在移动状态和短时休闲状态场景下观看，内容时间长度在几秒到几分钟不等。因此其制作门槛低，人人都有能力发布短视频，用户参与主动性强...</div>
                <img src="../assets/images/mine.jpeg" class="img">

            </div>
            <div class="time">33人阅读 2020-12-12</div>
            <div class="label">
                <img src="../assets/images/fo-1.png" class="img">
                <span class="tit">技术互助小组</span>
            </div>
            <div class="foot">
                <div class="left">
                    <div class="block">
                        <img src="../assets/images/fo-2.png" class="img">
                        <div class="tit">233</div>
                    </div>
                    <div class="block">
                        <img src="../assets/images/fo-o.png" class="img">
                        <div class="tit">233</div>
                    </div>
                </div>
                <img src="../assets/images/fo-4.png" class="right">
            </div>
        </div>
    </div>
    <div class="management-list" v-if="navActive===2">
        <div class="management" v-for="(item,index) in dataList" :key="index">
            <div class="title">#技术互助小组#</div>
            <div class="content"><span class="tit">小组简介：</span>我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文 我是正文我是正文我是正文我是</div>
            <div class="foot">2020-12-12创建</div>
        </div>
    </div>
    <my-footer :active="4"></my-footer>
</div>
</template>

<script>
export default {
    name: "forum",
    data() {
        return {
            navActive: 1,
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

    .management-list {

        .management {
            margin-bottom: 10px;
            background: #fff;

            .title {
                font-size: 14px;
                height: 20px;
                background: #FBFBFB;
                line-height: 20px;
                color: #009FE9;
                padding: 10px 15px;
                box-sizing: border-box;
            }

            .content {
                font-size: 12px;
                line-height: 20px;
                color: #666;
                padding: 15px;
                box-sizing: border-box;

                .tit {
                    color: #333;
                }
            }

            .foot {
                border-top: 1px solid #dcdcdc;
                padding: 15px;

                box-sizing: border-box;
                font-size: 12px;
                color: #333333;
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
                    width: 80%;
                    font-size: 12px;
                    color: #333333;
                    text-align: justify;
                    line-height: 16px;
                }

                .img {
                    min-width: 90px;
                    height: 50px;
                    object-fit: cover;
                    margin-left: 20px;

                    border-radius: 6px;
                }
            }

            .time {
                padding: 0 10px;
                box-sizing: border-box;
                margin-top: 10px;
                font-size: 12px;
                color: #666666;
            }

            .label {
                margin-left: 10px;
                width: 151px;
                height: 27px;
                background: #F5F5F5;
                border-radius: 14px;
                font-size: 0;
                display: flex;
                align-items: center;
                padding-left: 10px;
                box-sizing: border-box;
                margin-top: 10px;

                .img {
                    width: 16px;
                    height: 16px;
                    margin-right: 5px;
                }

                .tit {
                    color: #999999;
                    font-size: 15px;
                }
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
            margin-right: 10px;
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

    .topic-box {
        height: 117px;
        background-color: #fff;
        padding: 10px;
        margin: 10px auto 0;
        box-sizing: border-box;

        .title {
            line-height: 22px;
            font-size: 16px;
            color: #333333;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .topic-list {

            display: flex;
            align-items: center;
            overflow-y: hidden;
            flex-wrap: nowrap;

            .topic {
                margin-right: 5px;
                float: left;
                min-width: 72px;
                height: 72px;
                line-height: 16px;
                padding: 10px 5px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                text-align: center;
                background: url("../assets/images/fo-t-bg.png") no-repeat;
                background-size: 72px;
                color: #009FE9;
                font-size: 12px;
            }
        }
    }

}
</style>
