<template>
  <div class="personal-center">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="任务列表" name="first"></el-tab-pane>
      <el-tab-pane label="个人收藏" name="second">个人收藏</el-tab-pane>
      <el-tab-pane label="个人信息" name="third">个人信息</el-tab-pane>
    </el-tabs>
    <component :is="flag"></component>
  </div>
</template>

<script>
import favorite from "./components/favorite";
import personInfo from "./components/personInfo";
import taskList from "./components/taskList";
export default {
  name: "PersonalCenter",
  components: {
    favorite,
    personInfo,
    taskList
  },
  data() {
    return {
      activeName: "first",
      flag: ""
    }
  },
  mounted() {
    // 读配置
    if (!this.canDeleteAlarm) { return; }
    this.keyDown();
    this.keyUp();
  },
  methods: {
    handleClick(tab, event) {
      switch (tab.name) {
      case "first":
        this.flag = "favorite";
        break;
      case "second":
        this.flag = "personInfo";
        break;
      case "third":
        this.flag = "taskList";
        break;
      default:
        break;
      }
      console.log(tab.name);
    }
  }
}
</script>
<style scoped lang="less">
</style>
