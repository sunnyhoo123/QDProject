<template>
  <div class="TextEffects">
    <div ref="expand" class="expands">选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</div>
    <button @click="isEllipsis">展开</button>
    <!-- HTML5规范允许使用：data-* 属性来嵌入自定义数据 -->
    <p class="text">
      请你打开电视看看，多少人为生命在努力勇敢的走下去 ——
      <span class="tooltip" data-tip="《稻香》">周杰伦</span>
    </p>
  </div>
</template>

<script>
export default {
  //组件名
  name: "TextEffects",
  //实例的数据对象
  data() {
    return {};
  },
  methods: {
    isEllipsis(){
      // scrollWidth和clientWidth判断是否出现省略号
      const sw = this.$refs.expand.scrollWidth;
      const cw = this.$refs.expand.clientWidth;
      // 如果是多行则可以用scrollHeight判断
      const sh = this.$refs.expand.scrollHeight;
      const ch = this.$refs.expand.clientHeight;
      console.log(sw ,cw, sh, ch )
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style/var.scss";

.TextEffects {
  .expands {
    width: 300px;
    // @include eps;
    @include mEps;
  }
  .text {
    font-size: 16px;
    text-align: center;
  }
  .tooltip {
    position: relative;
    font-size: 14px;
    cursor: default;
  }
  .tooltip:before {
    content: attr(data-tip); /* 注意data-tip不加引号 */
    position: absolute;
    top: -37px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    padding: 4px 8px;
    background-color: #303133;
    color: #FFF;
    font-size: 12px;
    white-space: nowrap; // 防止父元素宽度不够，文字换行
    border-radius: 4px;
  }
  .tooltip::after {
    content: '';
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    display: none;
    width: 10px;
    height: 10px;
    background-color: #303133;
    border-radius: 2px;
  }
  .tooltip:hover::before,
  .tooltip:hover::after {
    display: block;
  }
}
</style>