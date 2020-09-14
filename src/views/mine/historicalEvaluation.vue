<template>
<div class="bg">
    <my-header :isBack="true" title="历史评价"></my-header>

    <div class="item-list">
        <div class="item" v-for="index in dataList" :key="index">
            <div class="title">项目类型：设备招标 2020-12-12</div>
            <div class="row">
                <span class="tit">发包方：</span>安徽光亚科技有限公司
            </div>
            <div class="row">
                <span class="tit">评价：</span>一次愉快的合作，效率高质量过关！
            </div>
            <div class="pics">
                <div v-for="index in 5" :key="index">
                    <img src="../../assets/images/star-o.png" class="img" v-if="index<=count" @click="count= index" />
                    <img src="../../assets/images/star.png" class="img" v-else @click="count= index" />
                </div>
                <span class="count">{{count}}分</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "historicalEvaluation",
    data() {
        return {
            count: 4,
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
            margin-top: 20px;
            background-color: #fff;
            padding: 20px;
            box-sizing: border-box;

            .title {
                font-weight: bold;
                font-size: 15px;
                color: #009FE9;
                margin-bottom: 20px;
            }

            .row {
                color: #666;
                font-size: 14px;
                margin-bottom: 10px;

                .tit {
                    font-weight: bold;
                    color: #333;
                }
            }

            .pics {
                margin-top: 20px;

                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 0;

                .img {
                    margin-right: 10px;
                    width: 14px;
                    object-fit: contain;
                }

                .count {
                    font-size: 12px;
                    color: #FF6900;
                }
            }
        }
    }
}
</style>
