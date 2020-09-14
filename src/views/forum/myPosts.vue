<template>
<div class="bg">
    <my-header :isBack="true" title="我的帖子"></my-header>
    <div class="post-list">
        <div class="post" v-for="(item,index) in dataList" :key="index" @click="$router.push('article')">
            <div class="head">
                <img src="../../assets/images/mine.jpeg" class="img">
                <div class="name">安徽新闻网</div>
            </div>
            <div class="title">如果是我，我会怎么设计“微信视频号”？</div>
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
                <img src="../../assets/images/fo-4.png" class="right">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "myPosts",
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
}
</style>
