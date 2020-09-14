<template>
<div class="header-box">
    <div class="header">
        <img v-if="isBack" class="left" src="../assets/images/back.png" @click="()=>{$router.back()}" />
        {{title}}
        <div class="right">
            <img v-if="iconRight" @click="()=>{this.$router.push({name:this.navigate})}" :src="iconRight" class="img" />
            <div v-else-if="rightTextClick" @click="$emit('rightClick')" class="right-box">
                <span class="tit">{{rightTextClick}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "MyHeader",
    props: {
        title: {
            type: String,
            default: ""
        },
        navigate: {
            type: String,
            default: ""
        },
        iconRight: {
            type: [Boolean, String],
            default: false
        },
        rightText: {
            type: [Boolean, String],
            default: false
        },
        rightClickText: {
            type: [Boolean, String],
            default: false
        },
        rightTextClick: {
            type: [Boolean, String],
            default: false
        },
        isBack: {
            type: Boolean,
            default: false
        },

    }
};
</script>

<style lang="scss" scoped>
.header-box {
    height: 60px;
    position: relative;
}

.header {
    position: fixed;
    width: 100vw;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: normal;
    background-color: #009FE9;
    color: #fff;
    z-index: 999;

    .left,
    .right {

        position: absolute;
        height: 60px;
        line-height: 60px;
        top: 0;
    }

    .left {
        left: 14px;
        top: 20px;
        width: 10px;
        height: 17px;

    }

    .right {
        width: 100px;
        right: 14px;
        text-align: right;
        font-size: 0;

        .img {
            margin-top: 20px;
            width: 18px;
        }

        .right-box {
            .img {
                width: 12px
            }
        }

        .tit {
            font-size: 14px;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 3px;

        }
    }
}
</style>
