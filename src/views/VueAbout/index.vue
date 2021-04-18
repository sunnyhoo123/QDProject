<template>
  <div class="vue-about">
    <div class="headerWrap">
      <el-page-header content="Vue介绍" @back="goBack"></el-page-header>
    </div>
    <div class="sideBar">
      <ul>
        <li v-for="(item, index) in menuList" :key="item.title" :data-scroll="item.dataScroll">
          <h3 v-if="item.type === 'level1'">{{ item.title }}</h3>
          <a v-else :class="{ active: index === activeAnchor }" @click="goAnchor(`#anchor-${index}`, index, item)" >{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <keep-alive>
        <component :is="curComponent" cusData="cusparams"></component>
      </keep-alive>
      
      <!-- 动态路由：/vueRouter/foo 和 /vueRouter/bar 都将映射到相同的路由 -->
      <div v-show="activeAnchor === 10">
        <el-tag>
          <router-link to="/vueRouter/foo">foo</router-link>
        </el-tag>
        <el-link type="primary">
          <router-link to="/vueRouter/bar">动态路径参数(dynamic segment)</router-link>
        </el-link>
      </div>
      

      <div class="child">
        <router-view></router-view>
      </div>
      <!-- <div class="article-wrap">
        <h3 v-for="(id, index) in article" :key="id" :id="id">来{{ index }}篇文章查看超长</h3>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import bindClass from "./components/bindClass";
import slotCom from "./components/slotCom";
import computedCom from "./components/computedCom";
import nextTickCom from "./components/nextTickCom";
import eventCom from "./components/eventCom";

export default {
  // 组件名
  name: "Vueabout",
  // 实例的数据对象
  components: {
    bindClass,
    slotCom,
    eventCom,
    computedCom,
    nextTickCom
  },
  data() {
    return {
      toCalc: "",
      activeAnchor: 0,
      curComponent: "computedCom"
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll)
  },
  created() {
    this.menuList = [
      { title: "计算属性和侦听器", dataScroll: "sdf", type: "level2", value: "computedCom" },
      { title: "class与Style绑定", dataScroll: "eee", type: "level2", value: "bindClass" },
      { title: "条件渲染", dataScroll: "eee", type: "level2" },
      { title: "列表渲染", dataScroll: "eee", type: "level2" },
      { title: "事件处理", dataScroll: "eee", type: "level2", value: "eventCom" },
      { title: "表单输入绑定", dataScroll: "eee", type: "level2" },
      { title: "nextTick", dataScroll: "eee", type: "level2", value: "nextTickCom" },
      { title: "深入了解组件", dataScroll: "eee", type: "level1" },
      { title: "插槽", dataScroll: "eee", type: "level2", value: "slotCom" },
      { title: "规模化", dataScroll: "eee", type: "level1" },
      { title: "路由", dataScroll: "eee", type: "level2" },
      { title: "状态管理", dataScroll: "eee", type: "level2" },
    ]
    this.article = [
      "anchor-0",
      "anchor-1",
      "anchor-2",
      "anchor-3",
      "anchor-4",
      "anchor-5",
      "anchor-6",
      "anchor-7",
    ]
    // console.log(this.$route.params.id);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },

  // 方法
  methods: {
    ...mapActions(["increment"]),
    // ...mapMutations(['increment']),
    goBack() {
      this.$router.push({
        path: "/"
      });
    },
    // 滚动时联动菜单
    handleScroll() {
      //获取鼠标滚动距离
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      let heightArr = [];
      // Array.from 或 扩展运算符（...）可以将某些数据结构转为数组
      let alldom = [...document.getElementsByTagName("h3")];
      alldom.forEach(arr => {
        heightArr.push(arr.offsetTop);
      });
      //循环遍历数组，将鼠标移动距离与各dom距顶部距离进行比较，给activeAnchor赋值
      let len = heightArr.length;
      let topHeight = document.documentElement.clientHeight - 50;
      for (var i = 0; i < len; i++) {
        if (heightArr[i] < scrolled + topHeight && scrolled + topHeight < heightArr[i + 1]) {
          this.activeAnchor = i;
        }else if(scrolled + topHeight > heightArr[len -1]) {
          this.activeAnchor = len -1
        }
      }
      if(scrolled === 0) {
        this.activeAnchor = 0;
      }
      console.log(scrolled)
    },
    //锚点跳转
    goAnchor(selector, index, v) {
      this.curComponent = v.value;
      this.activeAnchor = index;
      // window.removeEventListener("scroll", this.handleScroll)
      // let scrollLength = 300 + index * 50;
      // document.querySelector(selector).scrollIntoView();
      // document.documentElement.scrollTop = scrollLength;
      // 回到顶部
      document.documentElement.scrollTop = 0;
      // setTimeout(() => {
      //   window.addEventListener("scroll", this.handleScroll)
      // }, 500)
    }
  }
};
</script>

<style scoped lang="less">
@font-color: #42b983;

.vue-about {
  padding-top: 48px;
  .headerWrap {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 12px;
    z-index: 20;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    transition: background-color 0.3s ease-in-out;
  }
  a:hover {
    color: #0d0;
  }
  h3 {
    font-weight: 600;
    color: #273849;
  }
  .sideBar {
    position: fixed;
    z-index: 10;
    top: 61px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .content {
    position: relative;
    padding: 35px 0;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 50px;
  }
  .active {
    font-weight: bold;
    color: @font-color;
  }
}
</style>
