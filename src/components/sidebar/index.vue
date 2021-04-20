
<template>
  <el-scrollbar class="sidebar">
    <!-- router: 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      :show-timeout="200"
      :collapse="isCollapse"
      class="menu-vertical"
      router
    >
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <sideItem v-for="route in menuList" :key="route.routerLink" :item="route"></sideItem>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import sideItem from "./sideItem.vue";
const { mapState } = createNamespacedHelpers("app");
export default {
  //组件名
  name: "Sidebar",
  components: { sideItem },
  //实例的数据对象
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created() {
    // 在钩子函数created中定义一个变量来使用常量
    this.menuList = [
      { routerLink: "elUI", title: "Element UI", iconClass: "el-icon-eleme" },
      { routerLink: "./baseType", title: "值类型", iconClass: "el-icon-document"  },
      { routerLink: "./listabout", title: "Array", iconClass: "el-icon-bell"  },
      { routerLink: "./fea", title: "Feature", iconClass: "el-icon-menu"  },
      { routerLink: "./func", title: "Function", iconClass: "el-icon-reading"  },
      { routerLink: "./map", title: "地图", iconClass: "el-icon-location"  },
      { routerLink: "./more", title: "ES6等", iconClass: "el-icon-sugar"  },
      { routerLink: "./vueabout", title: "Vue", iconClass: "el-icon-attract"  },
      { routerLink: "./demo", title: "MD文件预览", iconClass: "el-icon-setting"  },
    ]
  },
  //方法
  methods: {
  },
}
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  top: 50px;
  bottom: 0;
  .menu-vertical:not(.el-menu--collapse) {
    width: 160px;
  }
}
</style>

<style lang="less">
.menu-vertical {
  .el-menu-item {
    text-align: left;
  }
}
</style>