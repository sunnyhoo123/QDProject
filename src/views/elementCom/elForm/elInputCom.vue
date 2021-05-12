<template>
  <div class="ele-input">
    <el-input
      v-model="textarea"
      :data-num="`${textarea.length}/50`"
      type="textarea"
      class="ele-textarea"
      placeholder="请输入内容"
      maxlength="130"
      show-word-limit
    >
    </el-input>
    <!-- 原生input,无法加before或者after -->
    <input class="list-input" @input="inputChange"/>
    <textarea maxlength="50" class="list-textarea" rows="10" cols="30">
      我是一个文本框。
    </textarea>
  </div>
</template>

<script>
export default {
  name: "ElInputCom",
  data() {
    return {      
      textarea: "",
      inputData: ""
    }
  },
  computed: {
  },
  methods: {
    inputChange(e) {
      this.inputData = e.target.value;
    }
  },
}
</script>

<style lang='less' scoped>
.ele-input {
  .ele-textarea {
    width: 414px;
    &::after {
      content: attr(data-num);
      width: 50px;
      height: 50px;
      position: absolute;
      display: inline-block;
      right: 2px;
      top: 50px;
    }
  }
  .list-input {
    margin: 10px;
    caret-color: tomato;
    outline-color: greenyellow;
  }
}
</style>