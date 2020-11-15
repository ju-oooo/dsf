<template>
<div class="bg">
  <my-header :isBack="true" title="发布"></my-header>
  <div class="nav">
    <div :class="navActive===1?'item line':'item'" @click="navActive=1">设备维护维修</div>
    <div :class="navActive===2?'item line':'item'" @click="navActive=2">工程分包</div>
    <div :class="navActive===3?'item line':'item'" @click="navActive=3">新设备招标</div>
  </div>
  <div class="form-add" v-if="navActive===1||navActive===2">
    <div class="row bot">
      <div class="left">任务描述</div>
      <div class="right">
        <input type="text" class="input" placeholder="一句话描述任务">
      </div>
    </div>
    <div class="row bot">
      <div class="left">任务赏金</div>
      <div class="right">
        <input type="text" class="input" placeholder="任务赏金1-99999">元
      </div>
    </div>
    <div class="row bot">
      <div class="left">任务周期</div>
      <div class="right">
        <input type="text" class="input" placeholder="请填写1-999之间的数字">小时
      </div>
    </div>
    <div class="row between  bot">
      <div class="left">任务地点</div>
      <div class="right gray end">选择任务地点 ></div>
    </div>
    <div class="row mar">
      <input type="text" class="input" placeholder="填写详细地址">
    </div>
    <div class="row">
      <div class="left">任务有效期</div>
      <div class="right">
        <div class="times">
          <span class="time">2020-12-12</span>
          <img src="../../assets/images/icon-down-o.png" class="img" />
        </div>
        至
        <div class="times">
          <span class="time">2020-12-12</span>
          <img src="../../assets/images/icon-down-o.png" class="img" />
        </div>
      </div>
    </div>
    <div class="desc">*任务周期内无人接单将会退还赏金*</div>
    <div class="features">
      <div class="head">设备功能描述</div>
      <div class="body">
        <textarea class="text" placeholder="添加设备功能描述添加设备功能/故障描述，请尽量
描述详细，方便任务接单人员更快完成任务。"></textarea>
        <div class="imgs">
          <div class="img-box">
            <img src="../../assets/images/def-file.png" class="img" />
            <img src="../../assets/images/icon-delete.png" class="img-del" />
          </div>
          <div class="img-box">
            <img src="../../assets/images/file-add.png" class="img" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="left">联系方式</div>
      <div class="right">
        <input type="text" class="input" placeholder="请填写正确的联系方式">
      </div>
    </div>
    <div class="desc">*填写正确的手机号码，仅任务执行人和后台可见*</div>
  </div>
  <div class="form-add" v-if="navActive===3">
    <div class="row bot">
      <div class="left">招标公司</div>
      <div class="right">
        <input type="text" class="input" placeholder="请输入招标公司">
      </div>
    </div>
    <div class="row bot">
      <div class="left">任务描述</div>
      <div class="right">
        <input type="text" class="input" placeholder="一句话描述任务">
      </div>
    </div>
    <div class="row bot">
      <div class="left">投标时间</div>
      <div class="right">
        <input type="text" class="input" placeholder="请填写1-999之间的数字">小时
      </div>
    </div>
    <div class="row bot">
      <div class="left">项目预算</div>
      <div class="right">
        <input type="text" class="input" placeholder="任务赏金1-99999">元
      </div>
    </div>
    <div class="row mar">
      <div class="left">中标人数</div>
      <div class="right">
        <input type="text" class="input" placeholder="请输入中标人数">人
      </div>
    </div>
    <div class="condition">
      <div class="head">达成条件</div>
      <textarea class="text" placeholder="项目的效率、节拍、成功率、大小、重量等"></textarea>
    </div>
    <div class="condition">
      <div class="head">招标条件</div>
      <textarea class="text" placeholder="公司的资质规模等"></textarea>
    </div>
    <div class="condition">
      <div class="head">场地条件</div>
      <textarea class="text" placeholder="气压、电压、场地环境等"></textarea>
    </div>
    <div class="features">
      <div class="head">设备功能描述</div>
      <div class="body">
        <textarea class="text" placeholder="添加设备功能描述添加设备功能/故障描述，请尽量
描述详细，方便任务接单人员更快完成任务。"></textarea>
        <div class="imgs">
          <div class="img-box">
            <img src="../../assets/images/def-file.png" class="img" />
            <img src="../../assets/images/icon-delete.png" class="img-del" />
          </div>
          <div class="img-box">
            <img src="../../assets/images/file-add.png" class="img" />
          </div>
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
  <div class="btn" @click="dialogOpen=true">确认发布</div>
  <my-dialog v-if="dialogOpen" type="qyrz" @confirm="confirm" @cancel="cancel"></my-dialog>
</div>
</template>

<script>
export default {
  name: "release",
  data() {
    return {
      navActive: 1,
      dialogOpen: false
    };
  },
  methods: {
    confirm() {
      this.dialogOpen = false;
    },
    cancel() {
      this.dialogOpen = false;
    },
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
    margin-top: 10px;

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

        .times {
          display: flex;
          font-size: 0;
          align-items: center;

          margin: 0 10px;

          .time {
            padding-right: 5px;
            font-size: 14px;
            color: #999;
          }

          .img {
            width: 8px;
          }
        }

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

  .nav {
    width: 100%;
    height: 34px;
    background: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;

    .item {
      position: relative;
      width: 33%;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      color: #666;

      &.line {
        color: #009FE9;
      }

      &.line::after {
        content: "";
        position: absolute;
        width: 120px;
        height: 5px;
        left: 35px;
        bottom: -8px;
        background: url("../../assets/images/icon-bottom.png") no-repeat;
        background-size: 50px 3px;
      }
    }
  }
}
</style>
