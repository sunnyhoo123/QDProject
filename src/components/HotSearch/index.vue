<template>
  <div class="hot-search">
    <el-tooltip effect="light" content="点击刷新" placement="top">
      <a @click="getHotList">微博热搜</a>
    </el-tooltip>
    <p v-for="(title, index) in hotList" :key="index" class="hot-item">
      <span :style="{ backgroundColor: getColor(index) }">{{ index + 1 }}</span>
      <a :href="title.url">{{ title.name }}</a>
    </p>
  </div>
</template>

<script>
import { queryHotSearch } from "api/freeApi"

export default {
  //组件名
  name: "HotSearch",
  //实例的数据对象
  data() {
    return {
      hotList: []
    }
  },
  mounted() {
    const hotSearchData = sessionStorage.getItem("hotSearch");
    !hotSearchData ? this.getHotList() : this.hotList = JSON.parse(hotSearchData);
  },
  methods: {
    // 百度api
    async getHotList() {
      const { list } = await queryHotSearch();
      this.hotList = list;
      sessionStorage.setItem("hotSearch", JSON.stringify(this.hotList));
    },
    getColor(num) {
      const colors = {
        "0": "#FF5722",
        "1": "#1E9FFF",
        "2": "#FFB800",
      }
      return colors[num];
    }
  }
}
</script>

<style lang="less" scoped>
.hot-search {
  > a {
    --fill-color: #198CE6;
    position: relative;
    display: block;
    padding: 4px 0;
    font: 700 3rem Raleway, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-text-stroke: 2px var(--fill-color);
    background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    transition: 0.5s linear;
    &:hover {
      background-size: 100%;
    }
  }
  .hot-item {
    padding: 4px 0;
    text-align: left;
    span {
      position: relative;
      display: inline-block;
      padding: 0 6px;
      font-size: 12px;
      text-align: center;
      background-color: #eee;
      color: #fff;
      border-radius: 2px;
      height: 18px;
      line-height: 18px;
      padding: 0px 5px;
    }
    a {
      color: #333;
    }
  }
}
</style>