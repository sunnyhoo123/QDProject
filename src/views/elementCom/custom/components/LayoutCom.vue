<template>
  <div class="layout-com">
    <!-- skill-1 固定底部内容: 使用flex；如果使用fixed定位，内容高于窗口高度的话，会挡住内容 -->
    <nav>
      <h1>头部内容</h1>
    </nav>
    <main :class="{dark: isDark}" @click="changeClass">
      <p>可以添加更多内容看底部的变化</p>
      <!-- skill-1 悬停放大图片 -->
      <div class="img-wrapper">
        <img :src="require('assets/image/home/demo1.jpg')">
      </div>
    </main>
    <footer>
      <h1>底部内容</h1>
    </footer>
  </div>
</template>

<script>
export default {
  //组件名
  name: "PositionCom",
  //实例的数据对象
  data() {
    return {
      isDark: false
    };
  },
  methods: {
    changeClass() {
      console.log(123)
      this.isDark = !this.isDark;
    }
  }
};
</script>

<style lang="less" scoped>
.layout-com {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #202020;
  nav footer {
    background-color: #494949;
    display: flex;
    justify-content: center;
  }
  main {
    color: #bdbdbd;
    flex: auto;
  }
  footer {
    flex-shrink: 0;
  }
  .img-wrapper {
    width: 200px;
    height: 200px;
    overflow: hidden; // 让图片放大时不会超过div的宽高
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    display: inline-block;
    box-sizing: border-box;
    border: 3px solid #000;
    img {
      height: 200px;
      -webkit-transition: 0.3s linear;
      transition: .3s linear;
      &:hover {
        transform: scale(1.1)
      }
    }
  }
  .dark {
    background: #FFF;
    // skill-3 filter: invert =》 可以把页面从白变成黑，也可以从黑变成白
    // hue-rotate =》 用于改变你元素的颜色，同时或多或少保持原本相同的颜色
    // 这2个会影响图片颜色，可以使用Darkmode.js =》瞬间实现黑暗模式
    filter: invert(1) hue-rotate(270deg);
  }
}
</style>