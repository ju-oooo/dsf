<template>
<div class="bg">
    <my-header title="订单"></my-header>
    <div class="nav">
        <div :class="navActive===1?'item line':'item'" @click="navActive=1">接单任务</div>
        <div :class="navActive===2?'item line':'item'" @click="navActive=2">我的发布</div>
    </div>
    <div class="item-list">
        <div class="item" v-for="(item,index) in dataList" :key="index" @click="()=>{$router.push(`detail?type=${index}&state=${index}`)}">
            <div class="progress" v-if="index===0">已接单</div>
            <div class="progress " v-else-if="index===1">待接单</div>
            <div class="progress gray" v-else-if="index===2">已失效</div>
            <div class="progress red" v-else>已完成</div>
            <div class="title">设备维护维修标题</div>
            <div class="desc">简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍</div>
            <div class="time">状态截止剩余：0天23时56分32秒</div>
            <div class="footer">
                <div class="show">
                    展开
                    <img src="../assets/images/icon-down-o.png" class="img">
                </div>
                <div class="state" v-if="index===0">
                    <div class="btn">申请延时</div>
                    <div class="btn">上传进度</div>
                </div>
                <div class="state" v-else-if="index===1">
                    当前申请人数：23人
                </div>
                <div class="state" v-else-if="index===2">
                    当前申请已失效
                </div>
                <div class="state" v-else>
                    <div class="btn">申请仲裁</div>
                </div>
            </div>
        </div>
    </div>
    <my-footer :active="2"></my-footer>
</div>
</template>

<script>
export default {
    name: "order",
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

    .nav {
        width: 375px;
        height: 34px;
        background: #F5F5F5;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0;

        .item {
            position: relative;
            width: 120px;
            font-size: 15px;
            font-weight: bold;
            text-align: center;
            color: #666;

            &.line {
                color: #009FE9;
            }

            &.line::after {
                content: "";
                position: absolute;
                width: 120px;
                height: 5px;
                left: 35px;
                bottom: -8px;
                background: url("../assets/images/icon-bottom.png") no-repeat;
                background-size: 50px 3px;
            }
        }
    }

    .item-list {
        .item {
            position: relative;
            width: 360px;
            background-color: #fff;
            border-radius: 5px;
            padding: 10px;
            box-sizing: border-box;
            margin: 10px auto;

            .progress {
                width: 64px;
                height: 26px;
                background-color: #FFA246;
                border-radius: 13px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                line-height: 26px;
                position: absolute;
                right: 5px;

                &.gray {
                    background-color: #999;

                }

                &.red {
                    background-color: #F86B6B;

                }
            }

            .title {
                width: 260px;
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .desc {
                width: 260px;
                font-size: 12px;
                line-height: 20px;
                color: #999999;
            }

            .time {
                margin-top: 10px;
                width: 260px;
                font-size: 12px;
                color: #F86B6B;
            }

            .footer {
                margin-top: 10px;
                border-top: 0.5px dotted #DCDCDC;
                padding-top: 10px;

                .show {
                    font-size: 14px;
                    display: flex;
                    align-items: center;

                    .img {
                        padding-left: 5px;
                        width: 8px;
                        height: 5px;
                    }
                }

                .state {
                    display: flex;
                    justify-content: flex-end;
                    font-size: 14px;

                    .btn {
                        color: #666;
                        text-align: center;
                        line-height: 28px;
                        width: 99px;
                        height: 28px;
                        background: #FFFFFF;
                        border: 1px solid #DCDCDC;
                        border-radius: 14px;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}
</style>
