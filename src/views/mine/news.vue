<template>
<div class="bg">
    <my-header :isBack="true" title="消息"></my-header>
    <div class="item-list">
        <div class="item" v-for="(item,index) in dataList" :key="index">
            <div class="head">
                <img src="../../assets/images/mine-news.png" class="img">
                <span class="type">系统消息</span>
                <span class="time">2020-12-12</span>
            </div>
            <div class="content">提现到账通知提现到账通知提现到账通知提现到账通知提现到账通知提现到账通知</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "news",
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

    .item-list {
        .item {
            background-color: #fff;
            width: 100%;
            // margin: 10px auto;
            border-bottom: 1px solid #dcdcdc;
            padding: 10px 0;

            .head {
                display: flex;
                align-items: center;
                width: 360px;
                margin: auto;

                .img {
                    width: 20px;
                    height: 20px;
                    border-radius: 3px;

                }

                .type,
                .time {
                    padding-left: 10px;
                    font-size: 14px;
                    color: #666;
                }
            }

            .content {
                margin: 10px auto 0;
                width: 360px;
                height: 42px;
                font-size: 14px;
                line-height: 20px;
                color: #333333;
            }
        }
    }
}
</style>
