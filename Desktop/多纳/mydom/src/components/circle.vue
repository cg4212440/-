<template>
    <div class="container" @tap="add">
        <div class="progress_box">
            <canvas class="progress_bg" canvas-id="canvasProgressbg"></canvas>
            <canvas class="progress_canvas" canvas-id="canvasProgress"></canvas>
            <div class="progress_text">
                <div class="progress_dot"></div>
                <text class="progress_info">{{progress_txt}}</text>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      num: "123",
      count: 0, // 设置 计数器 初始为0
      countTimer: null, // 设置 定时器 初始为null
      canvasWidth: "",
      canvasHeight: ""
    };
  },
  methods: {
    add() {
      console.log(this.num);
    },
    
    drawProgressbg() {
      // 使用 wx.createContext 获取绘图上下文 context
      var ctx = wx.createCanvasContext("canvasProgressbg");
      ctx.setLineWidth(4); // 设置圆环的宽度
      ctx.setStrokeStyle("#20183b"); // 设置圆环的颜色
      ctx.setLineCap("round"); // 设置圆环端点的形状
      ctx.beginPath(); //开始一个新的路径
      ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
      //设置一个原点(100,100)，半径为90的圆的路径到当前路径
      ctx.stroke(); //对当前路径进行描边
      ctx.draw();
    },
    drawCircle(step) {
      var context = wx.createCanvasContext("canvasProgress");
      // 设置渐变
      var gradient = context.createLinearGradient(200, 100, 100, 200);
      context.setLineWidth(10);
      context.setStrokeStyle("#fff");
      context.setLineCap("round");
      context.beginPath();
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(
        110,
        110,
        100,
        -Math.PI / 2,
        step * Math.PI - Math.PI / 2,
        false
      );
      context.stroke();
      context.draw();
    },
    countInterval() {
      // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
      this.countTimer = setInterval(() => {
        if (this.count <= 60) {
          /* 绘制彩色圆环进度条  
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
          this.drawCircle(this.count / (60 / 2));
          this.count++;
        } else {
          this.progress_txt = "匹配成功";
          clearInterval(this.countTimer);
        }
      }, 100);
    },
    
  },

  onReady: function() {
    this.drawProgressbg();
    //this.drawCircle(1.5);
    this.countInterval()
    
  },
  
};
</script>

<style>
.progress_box {
  position: relative;
  width: 120px;
  height: 120px;
  /* 这里的宽高是必须大于等于canvas圆环的直径 否则绘制到盒子外面就看不见了
一开始设置 width:440rpx; height:440rpx; 发现 在360X640分辨率的设备，下绘制的圆环跑盒子外去了
 小程序使用rpx单位适配 ，但是canvas绘制的是px单位的。所以只能用px单位绘制的圆环在盒子内显示*/
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
}
.progress_bg {
  position: absolute;
  width: 120px;
  height: 120px;
}
.progress_canvas {
  width: 120px;
  height: 120px;
}
.progress_text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress_info {
  font-size: 36rpx;
  padding-left: 16rpx;
  letter-spacing: 2rpx;
}
.progress_dot {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background-color: #fb9126;
}
</style>
