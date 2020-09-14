<template>
<div class="bg">
    <my-header :isBack="true" title="项目评价"></my-header>
    <div class="content">
        <div class="pics">
            <div v-for="index in 5" :key="index">
                <img src="../../assets/images/star-o.png" class="img" v-if="index<=count" @click="count= index" />
                <img src="../../assets/images/star.png" class="img" v-else @click="count= index" />
            </div>
        </div>
        <div class="count">{{count}}分</div>
        <textarea class="text" cols="30" rows="10" placeholder="写下你对本次任务的评价"></textarea>
    </div>
    <div class="btn">确认提交</div>
</div>
</template>

<script>
export default {
    name: "appraisal",
    data() {
        return {
            count: 9,
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

    .btn {
        margin: 80px auto 0;
        width: 315px;
        height: 46px;
        background: #009FE9;
        border-radius: 5px;
        font-size: 16px;
        line-height: 46px;
        color: #FFFFFF;
        text-align: center;
    }

    .content {
        width: 359px;
        margin: 30px auto 0;
        padding: 20px 0 30px;
        background-color: #fff;

        .pics {
            width: 180px;
            margin: auto;
            display: flex;
            justify-content: space-around;

            .img {
                width: 22px;
                object-fit: contain;
            }
        }

        .count {
            font-size: 14px;
            text-align: center;
        }

        .text {
            margin: 20px auto 0;
            padding: 10px 20px;
            font-size: 12px;
            color: #333;
            box-sizing: border-box;
            border: none;
            display: block;
            width: 307px;
            height: 125px;
            background: #F1F1F1;
            border-radius: 3px;

            &::placeholder {
                color: #666;
            }
        }
    }
}
</style>
