<template>
  <div class="tips">
    <el-button type="primary" @click="NotTest">按位运算符</el-button>
    <el-button type="primary" @click.native="showNotification">PC右下角通知</el-button>
  </div>
</template>

<script>
import logoImage from "assets/image/cat.jpg"
export default {
  //组件名
  name: "Tips",
  //实例的数据对象
  data() {
    return {
      num:151,
      bigNum:12345678900123456789,
      numString:"137",
    }
  },
  //方法
  methods: {
    NotTest(){
      console.log(333)
      // 按位非 转换类型
      console.log(typeof(~~this.numString))
      // 使用占位符，使打印的字体变颜色
      console.log("%c%s","color: red; background: yellow; font-size: 24px;","这里是文字被%s占住");
      // 按位或 裁剪数字
      console.log(this.num/10|0)
      console.log(this.bigNum/100|0)
      // 类型转换
      console.log(typeof(+this.numString))
      // 浮点数转为整数（Float to Integer）
      console.log(~~6.95); // 6
      console.log(6.95 >> 0); // 6
      console.log(6.95 << 0); // 6
      console.log(6.95 | 0); // 6
      // >>>不可对负数取整
      console.log(6.95>>>0); // 6
      console.log(222); // 6
    },
    showNotification() {
      // callback的方式已经废弃
      // Notification.requestPermission(prem => {
      //   prem == "granted" // 同意
      //   prem == "denied" // 拒绝
      // })

      // 先检查浏览器是否支持发送通知
      if(!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
      }
      
      // 请求发送通知
      Notification.requestPermission().then(function(result) {
        if (result === "denied") {
          console.log("Permission wasn't granted. Allow a retry.");
          return;
        }
        if (result === "default") {
          console.log("The permission request was dismissed.");
          return;
        }
        // Do something with the granted permission.
        const notice = new Notification("前端宇宙情报局", {
          body: "这20个不常用的Web API真的有用吗?，别问，问就是有用🈶",
          icon: logoImage,
          data: {
            url: "https://juejin.im/post/5d5df391e51d453b1e478ad0"
          }
        });
        // 点击回调
        notice.onclick = () => {
          window.open(notice.data.url); // 当用户点击通知时，在浏览器打开百度网站
        }
      });
    }
  },
}
</script>

<style lang="less" scoped>

</style>