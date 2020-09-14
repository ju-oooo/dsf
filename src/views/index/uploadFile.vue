<template>
<div class="bg">
    <my-header :isBack="true" title="上传文件"></my-header>
    <div class="content">
        <div class="head">
            添加文件
        </div>
        <div class="body">
            <img src="../../assets/images/file-add.png" class="img">
        </div>
    </div>
    <div class="btn">提交</div>
</div>
</template>

<script>
export default {
    name: "uploadFile",
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

    .btn {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #009FE9;
        color: #fff;
        text-align: center;
        font-size: 16px;
        position: fixed;
        bottom: 0;
        left: 0;
    }

    .content {
        background-color: #fff;
        padding: 10px 20px;
        margin: 10px 0;

        .head {
            font-size: 15px;
            color: #333;
            font-weight: bold;
        }

        .body {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;

            .img {
                width: 80px;
                height: 80px;
            }
        }
    }
}
</style>
