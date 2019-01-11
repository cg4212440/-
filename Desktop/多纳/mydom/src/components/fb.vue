<template>
  <div class="prepare_wrap">
    <div class="progress">
      <div class="close" @tap="goBack">
        <img src="/static/yx/u463.png" alt="">
      </div>
      <div class="progress_">
        <progress :percent="pagination" stroke-width="12"/>
      </div>
      <div class="number">{{current+1}}/2</div>
    </div>
    <div id="select">
      <swiper :current="current">
        <swiper-item catchtouchmove="catchTouchMove">
          <div class="div_img">
            <img
              v-for="(item, index) in msg"
              :key="index"
              :class="[position[index],'shake-little']"
              @click="stylecss(item.animation,index)"
              :src="item.img"
            >
          </div>
        </swiper-item>
        <swiper-item>2
          <div>
            <img src="/static/zy/men.jpg">
            <img src="/static/zy/yi.jpg" alt="">
            <img src="/static/zy/men.jpg" alt="">
            <img src="/static/zy/men.jpg" alt="">
          </div>
        </swiper-item>
      </swiper>
      <div class="voice">
        123
        <img src="/static/ly/u4071.png" alt="">
      </div>
    </div>
    <div class="bottom" @tap="add">下一题</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      current: 0,
      pagination: 50,
      flag: false,
      msg: [
        {
          img: "/static/zy/men.jpg",
          animation: false
        },
        {
          img: "/static/zy/yi.jpg",
          animation: true
        }
      ],
      position: ["left", "right"]
    };
  },
  
  beforeMount() {},
  methods: {
    goBack() {
      console.log(1111);
      wx.reLaunch({
        url: "/pages/index/main"
      });
    },
    //点击下一题
    add() {
      this.current++;
      //进度条
      this.pagination = (this.current + 1) * 50;
      if (this.current > 1) {
        this.current = 0;
        this.pagination = 50;
      }
    },
    //禁止swiper手指滑动
    catchTouchMove() {
      return false;
    },
    //点错误 抖动
     stylecss(isShow,index) {
       console.log(index)
      this.flag = isShow
    }
  }
};
</script>

<style lang="scss" >
@import url("../../css/csshake-little.css");
.prepare_wrap {
  width: 100%;
  height: 100%;
  // background: red;
  display: flex;
  flex-direction: column;
  background: rgb(248, 248, 248);
  overflow: hidden;
}
.progress {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24rpx;
  box-sizing: border-box;
  padding: 0 20rpx;
  position: relative;
  top: 140rpx;
}
.progress_ {
  flex: 1;
  padding: 0 20rpx;
}

.close {
  display: flex;
  align-items: center;
  z-index: 99;
}
.close img {
  width: 22rpx;
  height: 22rpx;
  vertical-align: middle;
}

.number {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 28rpx;
  color: #666666;
}
.bottom {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: rgb(254, 192, 81);
  text-align: center;
  height: 82rpx;
  line-height: 82rpx;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  color: #ffffff;
  z-index: 99;
}
#select {
  width: 100%;
  flex: 1;
  // left: 0;
}
._swiper {
  width: 100%;
  height: 100%;
  margin-top: 200rpx;
}
._swiper .div_img {
  width: 100%;
  height: 100%;
  position: relative;
}
.div_img img {
  width: 300rpx;
  height: 400rpx;
}
.div_img .left {
  position: absolute;
  top: 0;
  left: 10rpx;
}
.div_img .right {
  position: absolute;
  top: 0;
  right: 20rpx;
}
.voice {
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  bottom: 180rpx;
  left: 50%;
  margin-left: -40rpx;
}
.voice img {
  width: 80rpx;
  height: 80rpx;
}
</style>
