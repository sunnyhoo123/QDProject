<template>
  <!-- 左侧栏 -->
  <div class="elLH-wrap">
    <el-scrollbar style="height:100%">
      <div class="side-nav">
        <div v-for="i in navList" :key="i.title" class="nav-group">
          <div class="nav-group__title">{{ i.title }}</div>
          <ul class="pure-menu-list" style="height: auto">
            <li v-for="(value, name) in i.elComs" :key="name" class="nav-item">
              <a :class="{active: name === curName}" @click="linkTo(i.path, name)">{{ value }}</a>
            </li>
          </ul>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { navList } from "@/assets/constant.js"

export default {
  name: "ElLHWrap",
  data() {
    return {
      curName: "",
      navList: navList
    };
  },
  created() {
    this.linkTo("/elementCom/elBasic/","elContainerCom")
  },
  methods: {
    linkTo(path, name) {
      this.curName = name;
      this.$router.push({ path: `${path}${name}` });
      this.$emit("showPage", name)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.elLH-wrap {
  width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  transition: padding-top .3s;
  .nav-item a {
    display: block;
    height: 40px;
    // color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    cursor: pointer;
    &:hover{
      color: #409eff;
    }
  }
  .active {
    color: #409eff;
  }
}
.side-nav {
  padding-left: 50px;
  text-align: left;
  .nav-group__title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }
}
</style>

<style lang="less">
// 防止scrollbar出现横滚动条
// .el-scrollbar__wrap {
//   overflow-x: hidden;
// }
</style>