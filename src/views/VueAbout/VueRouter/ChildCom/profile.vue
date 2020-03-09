<template>
  <div class="profile-router">
    vue嵌套路由profile
  </div>
</template>

<script>

export default {
  //组件名
  name: "ProfileRouter",
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
  //生命周期函数
  created() {
    console.log(this.$route.params, "$route.params参数");
  },
  //方法
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>