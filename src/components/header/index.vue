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
      <div @click="showDialog">
        <el-avatar :src="avatarImg" icon="el-icon-user-solid"></el-avatar>
      </div>
    </div>
    <LoginDialog :loginVisible="loginVisible" @closeDialog="closeDialog"></LoginDialog>
  </header>
</template>

<script>
import { queryAvatar } from "api/freeApi.js"
import LangSelect from "@/components/LangSelect"
import LoginDialog from "@/views/elementCom/elOthers/components/LoginDialog.vue"
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("app");

export default {
  name: "HeaderWrap",
  components: {
    LangSelect,
    LoginDialog
  },
  data() {
    return {
      isCollapse: false,
      value: true,
      avatarImg: "",
      loginVisible: false
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
    const avatarImg = sessionStorage.getItem("avatarImg");
    this.avatarImg = avatarImg;
  },
  methods: {
    ...mapActions(["toggleSideBar","closeSideBar","exec","changeSwitch"]),
    toggleSide() {
      this.isCollapse = !this.isCollapse;
      this.toggleSideBar();
    },
    handleChange() {
      this.changeSwitch();
    },
    async getAvatar(account) {
      const params = {
        email: account,
      }
      const res = await queryAvatar(params);
      this.avatarImg = window.URL.createObjectURL(res)//这里也是关键,调用window的这个方法URL方法
      sessionStorage.setItem("avatarImg", this.avatarImg);
    },
    showDialog() {
      this.loginVisible = true;
    },
    closeDialog(visible, account) {
      this.loginVisible = false;
      account && this.getAvatar(account);
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
      .flex-between();
    }
    .flex-between();
  }
}
</style>
