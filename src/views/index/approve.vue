<template>
<div class="bg">
    <my-header :isBack="true" title="企业认证"></my-header>
    <div class="form-add">
        <div class="row bot">
            <div class="left">公司名称</div>
            <div class="right">
                <input type="text" class="input" placeholder="请输入招标公司">
            </div>
        </div>
        <div class="row between  bot">
            <div class="left">公司地址</div>
            <div class="right gray end">选择工作地点 ></div>
        </div>
        <div class="row mar">
            <input type="text" class="input" placeholder="填写详细地址">
        </div>
        <div class="features">
            <div class="head">营业执照</div>
            <div class="imgs">
                <div class="img-box">
                    <img src="../../assets/images/file-add.png" class="img" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="left">联系方式</div>
            <div class="right">
                <input type="text" class="input" placeholder="请填写正确的联系方式">
            </div>
        </div>
    </div>
    <div class="btn">提交</div>
</div>
</template>

<script>
export default {
    name: "approve",
    data() {
        return {

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

    .form-add {
        .desc {
            text-align: right;
            font-size: 12px;
            color: #3FBAE4;
            margin: 5px 0 10px;
            padding: 0 10px;
        }

        .features,
        .condition {
            background-color: #fff;
            margin-bottom: 20px;

            .head {
                color: #333;
                font-size: 15px;
                font-weight: bold;
                line-height: 50px;
                height: 50px;
                text-align: left;
                padding-left: 20px;
                box-sizing: border-box;
            }

            .text {
                width: 325px;
                margin: auto;
                border: none;
                height: 80px;
                display: block;
                color: #333;
                font-size: 14px;
                padding: 5px;
                line-height: 18px;

                &::placeholder {
                    color: #999999;

                }
            }

            .imgs {
                display: flex;
                // width: 325px;
                margin: 10px auto 0;
                justify-content: flex-start;
                flex-wrap: wrap;

                .img-box {
                    position: relative;
                    margin: 0 0 0 25px;

                    .img {
                        width: 80px;
                        height: 80px;
                    }

                    .img-del {
                        position: absolute;
                        top: -2px;
                        right: -2px;
                        width: 10px;
                        height: 10px;
                    }
                }
            }
        }

        .row {
            display: flex;
            justify-content: space-between;
            background-color: #fff;

            &.bot {
                border-bottom: 1px solid #dcdcdc;
            }

            &.mar {
                margin: 0 0 10px;
            }

            .input {
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: 15px;
                padding: 0 20px;

                &::placeholder {
                    color: #999;
                }
            }

            .left {
                width: 30%;
                color: #333;
                font-size: 15px;
                font-weight: bold;
                line-height: 50px;
                height: 50px;
                text-align: left;
                padding-left: 20px;
                box-sizing: border-box;
            }

            .right {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 75%;
                padding: 0 10px;
                box-sizing: border-box;
                font-size: 15px;
                height: 50px;
                color: #333;

                &.end {
                    justify-content: flex-end;
                }

                &.gray {
                    color: #999;
                }

                .input {
                    padding: 0;
                    width: 80%;
                    height: 50px;
                    line-height: 50px;

                    &::placeholder {
                        color: #999;
                    }
                }
            }
        }
    }

    .btn {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: #009FE9;
        text-align: center;
        line-height: 50px;
        color: #FFFFFF;
        font-size: 16px;
    }
}
</style>
