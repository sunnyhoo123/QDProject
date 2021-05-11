<template>
  <div>
    <div v-if="false">
      <el-tooltip effect="light" content="点击刷新" placement="top">
        <el-button type="text" @click="getPoem">每日一首</el-button>
      </el-tooltip>
      <div v-if="poem" class="poem-wrap" @click="handleClick(poem.url)">
        <div>{{ poem.title }}</div>
        <div>
          <span>{{ poem.chaodai || '未知朝代' }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{ poem.zuozhe || '佚名' }}</span>
        </div>
        <div>
          <span>出自《 {{ poem.chuzi || '未知' }} 》</span>
        </div>
      </div>
    </div>
    <div>
      <!-- <el-button type="text" @click="getWord">每日一言</el-button> -->
      <el-button type="text" @click="getHistory">每日历史</el-button>
      <div>{{ word }}</div>
      <div>{{ history }}</div>
    </div>
  </div>
</template>
<script>
import { queryPoem, queryHistory, getyiyan } from "api/freeApi.js"

export default {
  //组件名
  name: "Poem",
  //实例的数据对象
  data() {
    return {
      poem: null,
      word: "",
      history: ""
    }
  },
  mounted() {
    const poemData = sessionStorage.getItem("hitory");
    !poemData ? this.getHistory() : this.history = poemData;
  },
  methods: {
    async getPoem() {
      this.poem = await queryPoem();
      sessionStorage.setItem("poem", JSON.stringify(this.poem));
    },
    async getWord() {
      this.word = await getyiyan();
    },
    async getHistory() {
      this.history = await queryHistory();
      sessionStorage.setItem("history", this.history);
    },
    handleClick(url) {
      window.open(url)
    }
  }
}
</script>
<style lang="less" scoped>
.poem-wrap {
  > * {
    padding: 8px;
  }
}
</style>