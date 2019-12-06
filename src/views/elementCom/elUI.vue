<template>
  <div class="el-ui">
    <el-container class="elContainer">
      <!-- 左侧栏 -->
      <elLH></elLH>
      <!-- 右侧栏 -->
      <el-container>
        <!-- 页眉 -->
        <el-header class="headerWrapper">
          <el-breadcrumb separator="=>">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/elUI' }">elUI页面</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">a链接跳转至首页</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-button type="text" @click="testRouter">返回到上一个Vue</el-button>
        </el-header>
        <div class="body">
          <div class="main">
          </div>
          <router-view></router-view>
        </div>
        <!-- 页脚 -->
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import elLH from "@/components/elLH/elLH.vue";

export default {
  //组件名
  name: "ElUI",
  //组件
  components: {
    elLH
  },
  data() {
    return {
    }
  },
  //方法
  methods: {
    testRouter(){
      this.$router.push({
        path:"/"
      })
    },
  },
}
</script>

<style lang="less" scoped>
.el-ui {
  height: 100%;
  .elContainer {
    height: 100%;
  }
  .clear{
    clear: both;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .main{
    width: auto;
  }
  .body{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .div1{
    height: 40px;
    background: #00FF00;
  }
  .p1{
    width: 100px;
    background: #B3C0D1;
  }
  .p2{
    background: #123344;
  }
}
</style>