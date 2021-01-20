<template>
  <el-popover
    placement="left"
    width="420"
    trigger="click">
    <div v-if="poem" class="poem-wrap" @click="handleClick(poem.url)">
      <div>{{ poem.title }}</div>
      <div>
        <span>{{ poem.chaodai || '未知' }}</span>
        <el-divider direction="vertical"></el-divider>
        <span>{{ poem.zuozhe || '佚名' }}</span>
        <el-divider direction="vertical"></el-divider>
        <span>出自《 {{ poem.chuzi || '未知' }} 》</span>
      </div>
    </div>
    <el-button slot="reference" type="text" @click="getPoem">每日一言</el-button>
  </el-popover>
</template>
<script>
import { queryPoem } from "@/api/freeApi.js"

export default {
  //组件名
  name: "Poem",
  //实例的数据对象
  data() {
    return {
      poem: null,
    }
  },
  methods:{
    async getPoem() {
      this.poem = await queryPoem();
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