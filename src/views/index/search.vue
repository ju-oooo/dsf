<template>
<div class="bg">
    <div class="search">
        <img class="left" src="../../assets/images/back-o.png" @click="()=>{$router.back()}" />
        <div class="center">
            <input type="text" placeholder="热门搜索热门搜" class="input">
            <div class="btn">搜索</div>
        </div>
        <div class="right">取消</div>
    </div>
    <div class="type-nav">
        <div class="nav" @click="navActive=1">
            <span :class="navActive===1?'tit active':'tit'">类型</span>
            <img v-if="navActive===1" src="../../assets/images/icon-up.png" class="img">
            <img v-else src="../../assets/images/icon-down-o.png" class="img">
        </div>
        <div class="nav" @click="navActive=2">
            <span :class="navActive===2?'tit active':'tit'">区域</span>
            <img v-if="navActive===2" src="../../assets/images/icon-up.png" class="img">
            <img v-else src="../../assets/images/icon-down-o.png" class="img">
        </div>
        <div class="nav" @click="navActive=3">
            <span :class="navActive===3?'tit active':'tit'">排序方式</span>
            <img v-if="navActive===3" src="../../assets/images/icon-up.png" class="img">
            <img v-else src="../../assets/images/icon-down-o.png" class="img">
        </div>
    </div>
    <div class="content">
        <div class="type-list" v-if="navActive===1">
            <div class="item">工程分包</div>
            <div class="item active">设备维护维修</div>
            <div class="item">项目招标</div>
            <div class="item">测试</div>
            <div class="item">测试</div>
            <div class="item">测试</div>
            <div class="item">测试</div>
        </div>
        <div class="type-list child" v-if="navActive===2">
            <div class="item-list">
                <div class="item">不限</div>
                <div class="item active">最新</div>
                <div class="item">测试</div>
                <div class="item">测试</div>
                <div class="item">测试</div>
                <div class="item">测试</div>
                <div class="item">测试</div>
            </div>
            <div class="child-list">
                <div class="item pad-0">不限</div>
                <div class="item pad-0 active">最新</div>
                <div class="item pad-0">测试</div>
                <div class="item pad-0">测试</div>
                <div class="item pad-0">测试</div>
                <div class="item pad-0">测试</div>
                <div class="item pad-0">测试</div>
            </div>
        </div>
        <div class="type-list" v-if="navActive===3">
            <div class="item">不限</div>
            <div class="item active">最新</div>
        </div>
        <div class="btn-l" v-if="navActive===2">重置</div>
        <div class="btn">确定</div>
    </div>
</div>
</template>

<script>
export default {
    name: "search",
    data() {
        return {
            navActive: 1,
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

    .search {
        position: fixed;
        width: 100vw;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 18px;
        font-weight: normal;
        background-color: #fff;
        color: #666666;
        z-index: 999;
        display: flex;
        align-items: center;

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

        .center {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 260px;
            height: 35px;
            background: #E6E6E6;
            border-radius: 18px;

            .input {
                background-color: transparent;
                font-size: 14px;
                width: 70%;
                padding: 0 20px;
            }

            .btn {
                width: 30%;
                font-size: 12px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                color: #fff;
                background-color: #009FE9;
                border-radius: 0px 33px 33px 0px;
            }
        }

        .right {
            width: 80px;
            right: 14px;
            text-align: right;
            font-size: 14px;
        }
    }

    .type-nav {
        height: 40px;
        display: flex;
        align-items: center;
        margin-top: 60px;
        font-size: 14px;
        justify-content: space-around;

        .nav {
            margin: 0 10px;

            .tit {
                &.active {
                    color: #009FE9;
                }
            }

            .img {
                padding-left: 5px;
                width: 8px;
            }
        }
    }

    .content {
        background-color: #fff;
        position: relative;
        padding-bottom: 120px;

        .type-list {
            height: 200px;
            overflow-y: scroll;

            &.child {
                display: flex;
                justify-content: space-between;

            }

            .item-list {
                width: 40% !important;
                padding: 0 !important;
            }

            .child-list,
            .item-list {
                width: 50%;
                overflow-y: scroll;
                height: 200px;

                &:first-child {
                    border-right: 1px solid #dcdcdc;
                }
            }

            .pad-0 {
                padding: 0 !important;
            }

            .item {
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                padding-left: 30px;
                font-weight: bold;

                &.active {
                    color: #009FE9;
                }

                &:not(:last-child) {
                    border-bottom: 1px solid #dcdcdc;
                }
            }
        }

        .btn,
        .btn-l {
            width: 151px;
            height: 33px;
            background: #009FE9;
            text-align: center;
            line-height: 33px;
            border-radius: 3px;
            position: absolute;
            bottom: 20px;
            right: 10px;
            font-size: 14px;
            color: #fff;
        }

        .btn-l {
            left: 10px;
            background: #F6F6F6;
            color: #999999;
        }
    }
}
</style>
