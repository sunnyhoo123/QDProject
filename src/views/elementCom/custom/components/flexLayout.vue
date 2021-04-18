<template>
  <div class="flex-layout">
    <div class="container">
      <div v-for="(i, index) in list" :key="index" class="item">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //组件名
  name: "FlexLayout",
  //实例的数据对象
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = new Array(7).fill("子内容")
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.flex-layout {
  .container {
    display: flex;
    // .item {
    //   flex: 1;
    // }
  }
}
</style>