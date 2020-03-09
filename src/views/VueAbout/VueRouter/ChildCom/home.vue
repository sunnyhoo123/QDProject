<template>
  <div class="home-router">
    vue嵌套路由home
  </div>
</template>

<script>

export default {
  //组件名
  name: "HomeRouter",
  //组件
  components: {

  },
  
  //实例的数据对象
  data() {
    return {

    }
  },
  //监视
  watch: {
    "$route"(to, from) {
      console.log(to,from,"watch");
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //   // react to route changes...
  //   // don't forget to call next()
  //   console.log(to,from,next,"beforeRouteUpdate");
  // },
  //生命周期函数
  created() {
    // console.log(this.$route.params, "$route.params参数");
  },
  //方法
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>