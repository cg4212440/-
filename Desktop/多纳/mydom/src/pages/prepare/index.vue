<template>
  <div class="prepare_wrap">
    <div class="progress_head">
      <img src="/static/yx/u463.png" @tap="close">
      <progress percent="20" activeColor="#ff7e00" border-radius="10rpx"/>
      <p>10/10</p>
    </div>
    <div class="main">
      <div class="contioner">
        <swiper :current="currentTab">
          <!-- 第一题 -->
          <swiper-item class="pme">
            <first/>
          </swiper-item>
          <!-- 第二题 -->
          <swiper-item>
            <Twoquestions/>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <div class="footer">
      <p @tap="goNext">下一题</p>
    </div>
  </div>
</template>

<script>
import first from "../../components/swiper/first";
import Twoquestions from "../../components/swiper/TwoQuestions";
export default {
  data() {
    return {
      currentTab: 0 //下一题
    };
  },
  components: {
    first,
    Twoquestions
  },
  methods: {
    close() {
      wx.reLaunch({
        url: "/pages/index/main"
      });
    },
    goNext() {
      this.currentTab++;
      console.log(this.currentTab);
    }
  }
};
</script> 

<style lang="scss" scoped >
@import url("../../css/csshake-little.css");
.prepare_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.progress_head {
  width: 100%;
  height: 70rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  img {
    width: 26rpx;
    height: 26rpx;
    line-height: 26rpx;
  }
  p {
    width: 78rpx;
    height: 70rpx;
    font-family: PingFangSC-Regular;
    font-size: 30rpx;
    font-weight: normal;
    font-stretch: normal;
    line-height: 70rpx;
    letter-spacing: 0px;
    color: #878787;
  }
}
._progress {
  width: 480rpx;
  height: 14rpx;
}
.main {
  flex: 1;
  background-color: #f1f1f1;
}
.footer {
  height: 100rpx;
  background-color: #ffb400;
  p {
    height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PingFangSC-Medium;
    font-size: 30rpx;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
.contioner {
  width: 100%;
  height: 100%;
}
._swiper {
  height: 100%;
}
._swiper .pme {
  padding: 60rpx 70rpx;
  box-sizing: border-box;
}
._swiper-item {
  //height: auto !important;
}
</style>
