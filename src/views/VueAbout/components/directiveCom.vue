<template>
  <div class="next-tick">
    <!-- Vue nextTick -->
    <!-- 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中 -->
    <!-- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中 -->
    <div ref="msgDiv">{{ msg }}</div>
    <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
    <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
    <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
    <el-button @click="changeMsg">Change the Message</el-button>
  </div>
</template>

<script>

export default {
  // 组件名
  name: "NextTickCom",
  // 实例的数据对象
  data() {
    return {
      msg: "test nextTick",
      msg1: "",
      
      msg2: "",
      msg3: "",
    }
  },
  // 方法
  methods: {
    changeMsg() {
      this.msg = "chang";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    },
  },
}
</script>

<style lang="less" scoped>

</style>
