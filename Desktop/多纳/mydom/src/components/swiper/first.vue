<template>
  <!-- 第一题 -->
  <div class="first_wrap">
    <div
      v-for="(item,index) in imgUrl"
      :key="index"
      :class="[item.className,'contioner_wrap']"
      @animationend="finish(index)"
      :animation="animationData"
    >
      <img :src="item.url" @tap="isShake(item.code, index)" class="imge">
      <img v-if="item.isCorrect" src="/static/ly/对.png" class="correctName">
    </div>
    <!-- 喇叭 -->
    <div :class="['trumpet', isPlay?'animation_trumpet':'add']" @tap="playTrumpet">
      <img src="/static/ly/1.png" class="img1">
      <img src="/static/ly/2.png" class="img2">
      <img src="/static/ly/3.png" class="img3">
    </div>
  </div>
</template>
<script>
import { randomArr } from "../../utils/array.js";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      imgUrl: [
        { url: "/static/ly/1.jpg", code: 0, className: "", isCorrect: false },
        { url: "/static/ly/2.jpg", code: 1, className: "", isCorrect: false },
        { url: "/static/ly/1.jpg", code: 0, className: "", isCorrect: false },
        { url: "/static/ly/2.jpg", code: 0, className: "", isCorrect: false }
      ],
      isPlay: false, //喇叭动画
      className: "", //抖动name

      isPlaying: true //防止点击多次重复播放
    };
  },
  methods: {
    //封装的播放函数
    playBackgroundAudio() {
      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.src = "http://mp3.9ku.com/hot/2012/06-07/467717.mp3";
      innerAudioContext.autoplay = true;
      let that = this;
      innerAudioContext.onPlay(() => {
        console.log("录音播放中");
        that.isPlaying = false;
      });
      //
      innerAudioContext.onEnded(function() {
        that.isPlay = false;
        that.isPlaying = true;
        innerAudioContext.destroy();
        console.log("已执行destory()");
      });
    },
    //播放
    playTrumpet() {
      this.isPlay = true;
      if (this.isPlaying) {
        this.playBackgroundAudio();
      }
      console.log("点击", this.isPlay);
      const innerAudioContext = wx.createInnerAudioContext();
    },
    isShake(code, index) {
      if (!this.imgUrl[index].code) {
        //加抖动
        this.imgUrl[index].className = "shake-little";
        //随机数
        let newImgurl = randomArr(this.imgUrl);
        let that = this
        //2秒之后执行换位
        setTimeout(function() {
          console.log(1111)
          that.imgUrl = newImgurl;
        }, 2000);
      } else {
        this.imgUrl[index].className = "contioner_border";
        this.imgUrl[index].isCorrect = true;
      }
    },
    //抖动动画结束
    finish(index) {
      this.imgUrl[index].className = "";
      const animation = wx.createAnimation({
        duration: 1000,
        timingFunction: "ease"
      });
    },
    stopTouchMove: function() {
      return;
    }
  },
  //进入页面播放一次
  mounted() {
    this.isPlay = true;
    this.playBackgroundAudio();
  }
};
</script>

<style lang="scss" scoped>
.first_wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contioner_wrap {
  width: 262rpx;
  height: 262rpx;
  background-color: #ffffff;
  box-shadow: 0rpx 8rpx 10rpx 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .imge {
    width: 230rpx;
    height: 230rpx;
    background-color: #00a0e9;
    border-radius: 10rpx;
  }
}
.contioner_wrap:nth-child(3) {
  margin-top: 40rpx;
}
.contioner_wrap:nth-child(4) {
  margin-top: 40rpx;
}
.contioner_wrap {
  //margin-top: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.contioner_border {
  background-color: #ffffff;
  box-shadow: 0px 8rpx 8rpx 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  border: solid 4rpx #ffb400;
}
.trumpet,
.animation_trumpet {
  width: 144rpx;
  height: 144rpx;
  background-color: #ffb400;
  box-shadow: 0px 6rpx 6rpx 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 48rpx;
  left: 50%;
  margin-left: -77rpx;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.trumpet img {
  width: 60rpx;
  height: 50rpx;
  position: absolute;
}
.contioner .correctName {
  width: 50rpx;
  height: 50rpx;
  position: absolute;
  bottom: -25rpx;
  left: 115rpx;
  background-color: #67d42b;
  border-radius: 50%;
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
    /*初始状态 透明度为0*/
  }

  100% {
    opacity: 1;
    /*结尾状态 透明度为1*/
  }
}
.animation_trumpet .img1 {
  animation: fadeInOut 1s 3 0.2s;
}
.animation_trumpet .img2 {
  animation: fadeInOut 1s 3 0.4s;
}
.animation_trumpet .img3 {
  animation: fadeInOut 1s 3 0.6s;
}
</style>
