<template>
  <div class="TextEffects">
    <div ref="expand" class="expands">选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</div>
    <button @click="isEllipsis">展开</button>
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
}
</style>