<template>
  <div class="carousel">
    <el-carousel :interval="9000" type="card" trigger="click" >
      <el-carousel-item v-for="(item, index) in wallPaperList" :key="index">
        <img :src="item" alt="wallPaper" class="img-carousel"/>
      </el-carousel-item>
    </el-carousel>
  </div>
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

<style lang="scss" scoped>
.carousel {
  .img-carousel {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>