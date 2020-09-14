<template>
<div class="bg">
    <img src="../../assets/images/fri-bg.png" class="bg-img">
    <img class="left" src="../../assets/images/back.png" @click="()=>{$router.back()}" />
    <img src="../../assets/images/fri-yqhy.png" class="img1">
    <img src="../../assets/images/fri-zjf.png" class="img2">

    <div class="foot">
        <div class="btn">立刻分享好友</div>
        <div class="bottom">
            <div class="ids">我的ID:23568968</div>
            <div class="right">复制</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "inviteFriends",
    data() {
        return {

        };
    }
};
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;

    .left {
        position: absolute;
        height: 60px;
        line-height: 60px;
        left: 14px;
        top: 20px;
        width: 10px;
        height: 17px;
    }

    .bg-img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: relative;

    }

    .img1 {
        width: 149px;
        object-fit: contain;
        position: absolute;
        top: 52px;
        left: 54px;
        z-index: 333;
    }

    .img2 {
        width: 137px;
        object-fit: contain;
        position: absolute;
        top: 82px;
        left: 176px;
    }

    .foot {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 10vh;
        height: 100px;
        width: 266px;

        .btn {
            width: 266px;
            height: 48px;
            text-align: center;
            line-height: 48px;
            border-radius: 33px;
            background: linear-gradient(180deg, #FFA246 0%, #FF6900 100%);
            color: #fff;
            font-size: 22px;
        }

        .bottom {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 18px;
            margin-top: 10px;
            color: #fff;

            .ids {
                padding-left: 20px;
                margin-right: 20px;
            }

            .right {
                width: 53px;
                height: 18px;
                border-radius: 9px;
                text-align: center;
                font-size: 14px;
                line-height: 18px;
                background-color: #41A5F0;
            }
        }
    }
}
</style>
