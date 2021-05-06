<template>
  <div class="el-ui">
    <!-- 左侧选项 -->
    <elLH @showPage="showPage"></elLH>
    <div class="page-component__content">
      <el-header class="headerWrapper">
        <el-page-header :content="details" @back="goBack">
        </el-page-header>
      </el-header>
      <router-view></router-view>
    </div>
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
      details: ""
    }
  },
  //方法
  methods: {
    goBack() {
      this.$router.push({
        path:"/"
      })
    },
    showPage(pageInfo) {
      this.details = pageInfo;
    }
  },
}
</script>

<style lang="less" scoped>
.el-ui {
  .page-component__content {
    margin-left: 200px;
    .headerWrapper {
      display: flex;
      align-items: center;
    }
  }
}
</style>