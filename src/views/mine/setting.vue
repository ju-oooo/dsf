<template>
<div class="bg">
    <my-header :isBack="true" title="设置"></my-header>
    <div class="row bot">
        <div class="left">1773****4568</div>
        <img src="../../assets/images/icon-checked.png" class="img">
    </div>
    <div class="row">
        <div class="left">换个新账号登录</div>
        <img src="../../assets/images/icon-lt.png" class="img">
    </div>
</div>
</template>

<script>
export default {
    name: "setting",
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

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        font-size: 0;
        color: #333;
        font-weight: bold;
        height: 48px;

        .left {
            font-size: 14px;
        }

        .img {
            width: 15px;
        }
    }

    .bot {
        border-bottom: 1px solid #dcdcdc;
    }


}
</style>
