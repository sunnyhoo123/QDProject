<template>
  <div class="expand">
    <div class="expands">选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</div>
    <button>展开</button>
  </div>
</template>

<script>
export default {
  //组件名
  name: "Expand",
  //实例的数据对象
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.expands {
  width: 300px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>