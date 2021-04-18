<template>
  <el-dialog
    :visible="loginVisible"
    :modal-append-to-body="false"
    title="登陆获取头像"
    width="30%"
    center
    @close="closeDialog"
  >
    <el-input v-model="account" placeholder="请输入QQ邮箱(可以是QQ号)"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="closeDialog">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  props: {
    loginVisible: false
  },
  data() {
    return {
      account: ""
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false, this.account)
    }
  },
};
</script>

<style>
  
</style>