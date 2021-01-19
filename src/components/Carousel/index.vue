<template>
  <el-carousel :interval="5000" arrow="always" class="carousel">
    <el-carousel-item v-for="(item, index) in wallPaperList" :key="index">
      <img :src="item" alt="wallPaper"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  //组件名
  name: "Carousel",
  //实例的数据对象
  data() {
    return {
      wallPaperList: [
        "/static/images/wallPaper01.jpg",
        "/static/images/wallPaper02.jpg",
        "/static/images/wallPaper03.jpg",
      ]
    }
  },
  //方法
  methods: {
  },
}
</script>

<style lang="less" scoped>
.carousel {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>