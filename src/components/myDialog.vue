<template>
<div class="dialog-box">
    <!-- 支付保证金 -->
    <div v-if="type==='bzj'" class="dialog-margin">
        <div class="header">提示</div>
        <div class="body">申请需支付保证金 <span class="price">￥4000</span>，是否申请？</div>
        <div class="footer">
            <div class="btn confirm" @click="$emit('confirm')">确定</div>
            <div class="btn" @click="$emit('cancel')">取消</div>
        </div>
    </div>
    <!-- 申请延时 -->
    <div v-else-if="type==='sqys'" class="dialog-delay">
        <div class="header">项目截止剩余：0天23小时23秒</div>
        <div class="body">申请延长时间：<input type="Number" v-model="time" class="input" />天</div>
        <div class="footer">
            <div class="btn confirm" @click="$emit('confirm',time)">确定</div>
            <div class="btn" @click="$emit('cancel')">取消</div>
        </div>
    </div>
    <!-- 确认申请人 -->
    <div v-if="type==='qrtg'" class="dialog-margin">
        <div class="header">提示</div>
        <div class="body">确认通过申请人吗？</div>
        <div class="footer">
            <div class="btn confirm" @click="$emit('confirm')">确定</div>
            <div class="btn" @click="$emit('cancel')">取消</div>
        </div>
    </div>
    <!-- 审核失败 -->
    <div v-if="type==='shsb'" class="dialog-margin">
        <div class="header red">审核失败</div>
        <div class="body"><textarea class="textarea" cols="30" rows="10" v-model="content" placeholder="简要描述原因"></textarea></div>
        <div class="footer">
            <div class="btn confirm" @click="$emit('confirm',content)">确定</div>
            <div class="btn" @click="$emit('cancel')">取消</div>
        </div>
    </div>
    <!-- 企业认证 -->
    <div v-if="type==='qyrz'" class="dialog-margin">
        <div class="header">提示</div>
        <div class="body">该项目需要认证企业用户，是否立即认证？</div>
        <div class="footer">
            <div class="btn confirm" @click="$emit('confirm',content)">确定</div>
            <div class="btn" @click="$emit('cancel')">取消</div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "MyDialog",
    props: {
        type: {
            type: String,
            default: "bzj"
        }
    },
    data() {
        return {
            time: 1,
            content: "",
        }
    },
};
</script>

<style lang="scss" scoped>
.dialog-box {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
}

.dialog-margin,
.dialog-delay {
    width: 333px;
    height: 184px;
    background-size: 100% 100%;
    background-color: #FFF;
    border-radius: 6px;

    .header {
        font-size: 18px;
        color: #009FE9;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #DCDCDC;

        &.red {
            color: #F86B6B;
        }
    }

    .body {
        width: 250px;
        height: 60px;
        overflow: hidden;
        line-height: 60px;
        border-radius: 5px;
        font-size: 14px;
        padding: 0 20px;
        color: #666666;
        margin: 10px auto 15px;
        text-align: center;

        .price {
            color: #FF4848;
        }

        .input {
            text-align: center;
            margin: 0 10px;
            width: 100px;
            height: 35px;
            border: 1px solid #DCDCDC;
        }

        .textarea {
            box-sizing: border-box;
            width: 260px;
            margin: auto;
            font-size: 14px;
            color: #333;
            padding: 5px;
            height: 60px;
            border: none;

            &::placeholder {
                color: #666;
            }
        }
    }

    .footer {
        display: flex;
        justify-content: space-around;

        .btn {
            width: 73px;
            height: 25px;
            line-height: 25px;
            color: #FFF;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-radius: 2px;
            background-color: #999999;

            &.confirm {
                background-color: #009FE9;
            }
        }

    }
}
</style>
