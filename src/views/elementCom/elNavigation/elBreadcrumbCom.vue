<template>
  <div>
    <el-breadcrumb separator="=>">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/elUI' }">elUI页面</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">a链接跳转至首页</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "ElBreadcrumbCom",
  data() {
    return {
     
    };
  },
  created() {
    
  },
  methods: {
   
  },
};
</script>

<style lang='less' scoped>

</style>