<template>
  <div class="ele-input">
    <div class="ele-textarea">
      <el-input
        v-model="textarea"
        type="textarea"
        placeholder="请输入内容"
        maxlength="130"
        show-word-limit
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElInputCom",
  data() {
    return {      
      textarea: "",
    }
  },
  computed: {
  },
  methods: {
    focusInput() {
      if (this.$refs.mySelect == document.activeElement) {
        console.log("获取焦点");
      } else {
        console.log("未获取焦点");
      }
    }
  },
}
</script>

<style lang='less' scoped>
	.ele-input {
    .ele-textarea {
      width: 414px;
    }
  }
</style>