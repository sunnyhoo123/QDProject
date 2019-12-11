
<template>
  <div>
    <input v-model="text" type="text">
    <button @click="send()">发送消息</button>
    <br>
    <button @click="closeWebSocket()">关闭websocket连接</button>
    <br>
    <p v-html="htmlParse">{{ htmlParse }}</p>
    <div v-html="wsData">{{ wsData }}</div>
  </div>
</template>
<script>
export default {
  name: "WebSocket",
  components: {
 
  },
  data() {
    return {
      text: "",
      wsData: "",
      htmlParse: "<span style='color:red'>利用vue添加了插入一个span 元素</span> 标签以外的文字",
      websocket: null
    }
  },
  mounted() {
    if ("WebSocket" in window) {
      this.websocket = new WebSocket("ws://121.40.165.18:8800")
      this.initWebSocket()
    } else {
      this.$message({
        message: this.$t("当前浏览器 Not support websocket"),
        center: true,
        type: "success",
      });
    }
  },
  beforeDestroy() {
    this.onbeforeunload()
  },
  methods: {
    // vue websocket 线上测试地址 http://www.websocket-test.com/
    initWebSocket() {
      // 连接错误
      this.websocket.onerror = this.setErrorMessage
 
      // 连接成功
      this.websocket.onopen = this.setOnopenMessage
 
      // 收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage
 
      //连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage
 
      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },
    setErrorMessage() {
      this.wsData = "WebSocket连接发生错误" + "   状态码：" + this.websocket.readyState;
    },
    setOnopenMessage() {
      this.wsData = "WebSocket连接成功" + "   状态码：" + this.websocket.readyState;
    },
    setOnmessageMessage(event) {
      this.wsData = "服务端返回：" + event.data;
    },
    setOncloseMessage() {
      this.wsData = "WebSocket连接关闭" + "   状态码：" + this.websocket.readyState;
    },
    onbeforeunload() {
      this.closeWebSocket();
    },
 
    //websocket发送消息
    send() {
      this.websocket.send(this.text)
      this.text = ""
    },
    closeWebSocket() {
      this.websocket.close()
    }
  }
}
 
</script>
<style scoped>

</style>