<template>
<div class="bg">
    <my-header :isBack="true" title="赠股说明"></my-header>
    <div class="item-list">
        <div class="item" v-for="(item,index) in dataList" :key="index">
            <span class="index">{{index+1}}</span>{{item.value}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "description",
    data() {
        return {
            dataList: [{
                    value: "D类股票锁定期限为三年,D类股票在三年锁定期内,公司可以保本价1元/股无条件回购持有人的D类股票,锁定期满后,持有人可要求公司以官方估值或保本价1元/股回购其持有的D类股票,若持有人持有超过5年以上,则视为投资人放弃享有以上权利."
                },
                {
                    value: "当投资人要求公司回购其持有的D类股票的同时,公司即享有可按照官方估值回购投资人持有的部分或全部D类股票的权利.(但回购价不得低于保本价1元/股) "
                },
                {
                    value: " 公司IPO后,持有人的D类股票自动以官方估值转换成等值数量的流通股，不足1股的部分则转换成现金发放."
                },
            ],

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
        padding: 5px;
        box-sizing: border-box;

        .item {
            font-size: 14px;
            text-align: justify;
            line-height: 18px;
            padding: 10px;
            box-sizing: border-box;

            .index {
                margin-right: 5px;
                display: inline-block;
                width: 14px;
                font-size: 12px;
                text-align: center;
                line-height: 15px;
                vertical-align: middle;
                height: 14px;
                background-color: #009FE9;
                color: #fff;
            }
        }
    }
}
</style>
