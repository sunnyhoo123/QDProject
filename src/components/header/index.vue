<template>
  <header class="header">
    <el-button :icon="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="toggleSide">
      {{ collapseText }}
    </el-button>
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("app");

export default {
  name: "HeaderWrap",
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    // ...mapGetters(["contractExecListGetter"]),
    ...mapState(["sidebar"]),
    // ...mapState({
    //   sideBar: state => state.app,
    // }),
    collapseText() {
      return this.isCollapse ? "展开" : "收起"
    },
  },
  created() {

  },
  methods: {
    ...mapActions(["toggleSideBar","closeSideBar","exec"]),
    toggleSide() {
      this.isCollapse = !this.isCollapse;
      this.toggleSideBar();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.header{
  height: 48px;
  line-height: 48px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  transition: background-color 0.3s ease-in-out;
}
</style>
