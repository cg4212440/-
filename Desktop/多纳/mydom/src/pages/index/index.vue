<template>
  <div class="container">
    <div class="portrait_top">
      <div class="portrait">
        <img src="/static/home/u72.png">
        <span>起英文名</span>
      </div>
      <b>已有 65237人购买</b>
    </div>
    <div class="title">
      <p class="start">Level1 Hello</p>
      <img src="/static/home/u112.png" alt="">
    </div>
     <ul class="ul">
      <li>
        <a href="">听:学生能讨论关于物品的单词及短语</a>
      </li>
      <li>
        <a href="">读:学生能讨论关于物品的单词及短语</a>
      </li>
      <li>
        <a href="">认识:学生能讨论关于物品的单词及短语</a>
      </li>
      <li>
        <a href="">拼写:学生能讨论关于物品的单词及短语</a>
      </li>
    </ul>
    <div class="os">
      <ul>
        <li @tap="prepare">
          <img class="img" src="/static/home/u872.png" alt="">
          <h4>课前预习</h4>
          <b>正确率100%</b>
          <div class="ellipse">
            <img class="ellipses" src="/static/home/u869.png" alt="">
            <img class="check" src="/static/home/u871.png">
          </div>
        </li>
        <li>
          <img class="img" src="/static/home/u872.png" alt="">
          <h4>课后作业</h4>
          <b>正确率100%</b>
          <div class="ellipse">
            <img class="ellipses" src="/static/home/u882.png" alt="">
            <img class="check" src="/static/home/u871.png">
          </div>
        </li>
        <li>
          <img class="img" src="/static/home/u872.png" alt="">
          <h4>课堂回放</h4>
          <b>正确率100%</b>
          <div class="ellipse">
            <img class="ellipses" src="/static/home/u876.png" alt="">
            <img class="check" src="/static/home/u871.png">
          </div>
        </li>
        <div class="apply">
          <p>早鸟报名礼</p>
          <span>限时</span>
          <img src="/static/home/u58.png" alt="">
        </div>
        <li>
          <img class="img" src="/static/home/u872.png" alt="">
          <h4>图书馆</h4>
          <b>正确率100%</b>
          <div class="ellipse">
            <img class="ellipses" src="/static/home/u882.png" alt="">
            <img class="check" src="/static/home/u871.png">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    prepare() {
      wx.reLaunch({
        url: "/pages/prepare/main"
      });
    }
  },

  created() {}
};
</script>

<style  lang="scss" scoped>
.container {
  width: 100%;
  font-size: 30rpx;
}
.portrait_top {
  width: 100%;
  margin: 30rpx 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20rpx;
  b {
    //padding-right: 20rpx;
  }
}
.portrait {
  display: flex;
  margin-left: 20rpx;
  img {
    width: 50rpx;
    height: 50rpx;
  }
  span {
    width: 121;
    height: 49rpx;
    line-height: 49rpx;
    text-align: center;
    color: #fff;
    background: #ffcc00;
    display: block;
    border-radius: 50rpx;
    padding: 0 10rpx;
  }
}
.title {
  width: 100%;
  height: 44rpx;
  background: #ffcc00;
  color: #fff;
  text-align: center;
  position: relative;
  img {
    width: 37rpx;
    height: 21rpx;
    position: absolute;
    left: 35rpx;
    bottom: -18rpx;
  }
}
.ul {
  width: 90%;
  height: auto;
  margin: 20rpx auto;
  text-align: center;
  position: relative;
  li {
    border-bottom: 1px dashed #ccc;
    height: 62rpx;
    position: relative;
    display: flex;
    justify-content: center;

    a {
      position: absolute;
      bottom: 0px;
      padding: 0px;
      margin: 0px;
    }
  }
}
.os {
  flex: 1;
 
  ul {
    box-sizing: border-box;
    padding:27rpx 0 ;
    background: #eee;
  }
  ul li:nth-child(1) {
    border: 1px solid rgba(255, 204, 0, 1);
    b {
      color: rgba(255, 204, 0, 1);
    }
  }
  ul li:nth-child(2) {
    border: 1px solid rgba(0, 204, 0, 1);
  }
  ul li:nth-child(3) {
    border: 1px solid rgba(255, 102, 0, 1);
  }
  ul li:nth-child(4) {
    border: 1px solid rgba(0, 153, 255, 1);
  }
  ul li {
    margin: 0 auto;
    width: 552rpx;
    height: 128rpx;
    border-radius: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20rpx;
    margin-bottom: 54rpx;
    .img {
      width: 127rpx;
      height: 91rpx;
    }
  }
}
.ellipse {
  width: 81rpx;
  height: 71rpx;
  position: relative;
  .ellipses {
    width: 100%;
    height: 100%;
  }
  .check {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 37rpx;
    height: 28rpx;
  }
}
.apply {
  width: 100%;
  height: 104rpx;
  background: rgb(255, 102, 51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 19rpx;
    height: 33rpx;
    position: absolute;
    right: 35rpx;
  }
  p {
    font-family: "Arial Negreta", "Arial Normal", "Arial";
    font-weight: 700;
    font-style: normal;
    font-size: 28prx;
    color: #ffffff;
  }

  span {
    width: 64rpx;
    height: 31rpx;
    font-size: 25rpx;
    font-family: "Arial Normal", "Arial";
    font-weight: 500;
    font-style: normal;
    text-align: center;
    line-height: normal;
    display: block;
    background: #ffcc00;
    border-radius: 30rpx;

    color: #ff6600;
  }
}
</style>
