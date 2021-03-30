<template>
  <header class="header">
    <i :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="toggleSide"></i>
    <el-switch
      v-model="value"
      active-text="默认首页"
      inactive-text="查看上映电影"
      @change="handleChange">
    </el-switch>
    <div class="header-right">
      <langSelect/>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
  </header>
</template>

<script>
import LangSelect from "@/components/LangSelect"
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("app");

export default {
  name: "HeaderWrap",
  components: {
    LangSelect,
  },
  data() {
    return {
      isCollapse: false,
      value: true
    }
  },
  computed: {
    // ...mapGetters(["contractExecListGetter"]),
    ...mapState(["sidebar"]),
    // ...mapState({
    //   sideBar: state => state.app,
    // }),
  },
  created() {

  },
  methods: {
    ...mapActions(["toggleSideBar","closeSideBar","exec","changeSwitch"]),
    toggleSide() {
      this.isCollapse = !this.isCollapse;
      this.toggleSideBar();
    },
    handleChange() {
      this.changeSwitch();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../style/common.less";
// @import "～style/common.less";

.header {
  height: 48px;
  padding: 0 20px;
  line-height: 48px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  transition: background-color 0.3s ease-in-out;
  z-index: 3;
  position: relative;
  .flex-between();
  > i {
    font-size: 32px;
  }
  > * {
    cursor: pointer;
  }
  .header-right {
    * + * {
      margin-left: 8px;
    }
    .flex-between();
  }
}
</style>
