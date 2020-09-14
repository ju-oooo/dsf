<template>
<div class="bg">
    <my-header :isBack="true" title="详情"></my-header>
    <div class="title">文章标题文章标题</div>
    <div class="head">
        <div class="left">
            <img src="../../assets/images/mine.jpeg" class="img">
            <div class="desc">
                <div class="up">安徽新闻网</div>
                <div class="down">01/12 21:00</div>
            </div>
        </div>
        <div class="right">√ 已关注</div>
    </div>
    <div class="content">
        <p>迪士尼</p>
        <p class="row">
            迪斯尼证实达成了一项协议，在休假期间维持健康保险和其他福利，此举将于4月19日开始生效。
        </p>
        <p class="row">
            迪士尼发言人在一份声明中说：“迪士尼已经与几个工会针对按小时付薪水的员工们达成了协议，这些员工将在4月19日生效的临时休假期间保有自己的健康保险福利、教育支持和其他员工援助计划。”
        </p>
        <p class="row">
            在乐园关闭期间，一小群不到200名员工将继续工作。
        </p>
        <p class="row">
            此前几周，迪士尼已宣布计划在其设在美国的主题公园临时解雇一些非工会员工，并停止收取其年度公园通行证的费用。整个迪斯尼乐园、体验和产品部门有大约177，000名演员，其中包括在其主题公园和迪斯尼商店等零售地点工作的人。（完）
        </p>
    </div>
    <div class="comment-list">
        <div class="comment" v-for="(item,index) in dataList" :key="index">
            <img src="../../assets/images/mine.jpeg" alt="" class="img">
            <div class="right">
                <div class="up">
                    <span class="name">用户名用户名</span>
                    <span class="time">2020-12-12</span>
                </div>
                <div class="down">很好的教程。jason文件改成json文件。以上。</div>
            </div>
        </div>
    </div>
    <div class="foot">
        <div class="inp">
            <img src="../../assets/images/icon-edit.png" class="img">
            <div class="tit">发表评论</div>
        </div>
        <div class="btn">
            <img src="../../assets/images/icon-send.png" class="img">
            <div class="down">发送</div>
        </div>
        <div class="btn">
            <img src="../../assets/images/fo-o-3.png" class="img">
            <div class="down active">233</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "article",
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

    .foot {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 375px;
        height: 60px;
        background: #FFFFFF;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        justify-content: flex-start;

        .inp {
            width: 242px;
            height: 40px;
            background: #F2F2F2;
            border-radius: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999999;
            font-size: 14px;

            .img {
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
        }

        .btn {
            width: 40px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #999;
            font-size: 0;

            .img {
                width: 20px;
                height: 20px;
            }

            .down {
                font-size: 14px;
                margin-top: 3px;

                &.active {
                    color: #009FE9;
                }
            }
        }
    }

    .title {

        font-weight: bold;
        line-height: 22px;
        height: 22px;
        font-size: 16px;
        color: #666666;
        margin: 10px;
    }

    .head {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;

        .left {
            display: flex;
            font-size: 12px;

            .img {
                object-fit: cover;
                width: 27px;
                height: 27px;
                border-radius: 50%;
                margin-right: 10px;
            }

            .desc {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: #666;

                .down {
                    color: #999999;
                }
            }
        }

        .right {
            width: 67px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            align-items: center;
            font-size: 14px;
            color: #009FE9;
            border: 1px solid #009FE9;
            border-radius: 6px;
        }
    }

    .content {
        background-color: #fff;
        font-size: 14px;
        color: #333333;
        padding: 20px 10px;

        .row {
            text-align: justify;
            line-height: 20px;
            margin-bottom: 20px;
        }
    }

    .comment-list {
        margin-top: 10px;
        padding: 0 10px;
        background-color: #FFFFFF;

        .comment {
            padding: 10px 0;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px dotted #dcdcdc;

            .img {
                margin-left: 20px;
                width: 37px;
                height: 37px;
                border-radius: 50%;
                object-fit: cover;
            }

            .right {
                font-size: 14px;
                color: #999;

                .down {
                    margin-top: 5px;
                    color: #333;
                }
            }
        }
    }
}
</style>
