<template>
  <div>
    <!-- Vue 事件处理 -->
    <!-- v-on:click.self.prevent 会阻止对元素自身的点击，点击div3，会alert3,alert1,跳转到/#。只阻止了alert(2)。 -->
    <div @click="alert(1)">
      123
      <a href="/#" @click.self.prevent="alert(2)">
        456
        <div @click="alert(3)">789</div>
      </a>
    </div>
    <!-- v-on:click.prevent.self 会阻止所有的点击，点击div3，会alert3,alert1。不但阻止了alert(2)，还阻止了a的默认跳转 -->
    <div @click="alert(1)">
      123
      <a href="/#" @click.prevent.self="alert(2)">
        456
        <div @click="alert(3)">789</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  // 组件名
  name: "EventCom",
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
    alert(val) {
      console.log(
        "%c%s",
        "color: red; background: yellow; font-size: 24px;",
        val
      );
    },
  },
}
</script>

<style lang="less" scoped>

</style>
