<template>
    <div class="TwoQuestions_wrap">
        <img src="/static/ly/4.jpg" class="image">
        <div class="title">
            <p>This is a orange pen</p>
            <img src="/static/ly/对.png" alt="">
        </div>
        <div class="record" @tap="record" v-if="isRecord">
            <img src="/static/ly/icon-yuyin.png">
        </div>
        <div v-else class="stopRecord" @tap="stopRecord">
            <img src="/static/ly/icon-yuyin.png">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isRecord: true
    };
  },
  methods: {
    //开始录音
    record() {
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.record"]) {
            console.log("麦克风权限已启用");
          } else {
            wx.authorize({
              scope: "scope.record",
              success() {
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                // wx.startRecord()
                console.log("223");
              }
            });
          }
        }
      });

      const recorderManager = wx.getRecorderManager();
      const options = {
        duration: 10000, //指定录音的时长，单位 ms
        sampleRate: 8000, //采样率
        numberOfChannels: 1, //录音通道数
        encodeBitRate: 48000, //编码码率
        format: "mp3", //音频格式，有效值 aac/mp3
        frameSize: 50 //指定帧大小，单位 KB
      };
      this.isRecord = false;
      recorderManager.onStart(() => {
        console.log("recorder start");
      });
      recorderManager.start();
      //错误回调
      recorderManager.onError(res => {
        console.log(res);
      });
    },
    //停止录音
    stopRecord() {
      const recorderManager = wx.getRecorderManager();
      this.isRecord = true;
      //监听录音结束事件
      recorderManager.onStop(res => {
        console.log("1111", res);
        var tempFilePath = res.tempFilePath; // 文件临时路径
        var temp = tempFilePath.replace(".mp3", "");
      });
      recorderManager.stop();
    }
  }
};
</script>

<style lang="scss" >
.TwoQuestions_wrap {
  width: 100%;
  height: 100%;
}
.image {
  width: 100%;
  height: 430rpx;
}
.title {
  width: 100%;
  margin-top: 100rpx;
  text-align: center;
  position: relative;
  p {
    font-family: ArialMT;
    font-size: 40rpx;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40rpx;
    letter-spacing: 0px;
    color: #606060;
  }
  img {
    width: 50rpx;
    height: 50rpx;
    background-color: #67d42b;
    border-radius: 50%;
    position: absolute;
    right: 108rpx;
    top: 0;
  }
}
.record {
  width: 144rpx;
  height: 144rpx;
  background-color: #ffb400;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -72rpx;
  bottom: 48rpx;

  img {
    width: 52rpx;
    height: 72rpx;
    z-index: 5;
  }
}
.stopRecord {
  width: 144rpx;
  height: 144rpx;
  background-color: skyblue;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -72rpx;
  bottom: 48rpx;

  img {
    width: 52rpx;
    height: 72rpx;
    z-index: 5;
  }
}
</style>
