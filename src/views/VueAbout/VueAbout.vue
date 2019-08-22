<template>
  <div class="vue-about">
    <div :class="[activeClass, errorClass,'class-array']">绑定HTML Class</div>
    <router-link to="/vueabout/parent">parent</router-link>
    <div class="child">
      <router-view></router-view>
    </div>
    <!-- 事件处理 -->
    <div @click="alert(1)">123
      <a href="/#" @click.self.prevent="alert(2)">456
        <div @click="alert(3)">789</div>
      </a>
    </div>
    <div @click="alert(1)">123
      <a href="/#" @click.prevent.self="alert(2)">456
        <div @click="alert(3)">789</div>
      </a>
    </div>

  </div>
</template>

<script>
// import comChild from "@/components/child.vue"
export default {
  // 组件名
  name: "Vueabout",
  // 组件
  components: {

  },
  // 过滤器
  filters: {

  },
  // 数组或对象，用于接收来自父组件的数据
  props: {

  },
  // 实例的数据对象
  data() {
    return {
      activeClass: "active",
      errorClass: "text-danger"
    }
  },
  // 计算
  computed: {

  },
  // 监视
  watch: {

  },
  // 生命周期函数
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  // 方法
  methods: {
    alert(val) {
      console.log("%c%s","color: red; background: yellow; font-size: 24px;", val);
    }
  },
  // 自定义指令
  directive: {

  }
}
</script>

<!--
	作者：hoo790692170@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>
    .active {
		color: aqua;
	}
	.text-danger {
		width: 200px;
	}
	.class-array {
		height: 30px;
	}
</style>
