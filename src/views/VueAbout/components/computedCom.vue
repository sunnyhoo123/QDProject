<template>
  <div class="computed">
    <el-input v-model="message" placeholder="请输入要翻转的文字" class="input-width"></el-input>
    <span>reversedMessage：{{ '' + reversedMessage + ~~now }}</span>
    <!-- 计算属性缓存 vs 方法: 不同的是计算属性是基于它们的响应式依赖进行缓存的 -->
    <div>相当于表达式：{{ reversedMessageM() }}</div>
    <!-- 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter -->
    <div>getter: {{ fullName }}</div>
    <div @click="setName">setter: {{ firstName + '&' + lastName }}</div>
    <!-- 当需要在数据变化时执行异步或开销较大的操作时,使用侦听器watch -->
    <div>
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  // 组件名
  name: "ComputedCom",
  props: {
    cusData: ""
  },
  // 实例的数据对象
  data() {
    return {
      message: "",
      firstName: "foo",
      lastName: "Bar",
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    }
  },
  computed: {
    // ...mapGetters(['contractExecListGetter']),
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    now() {
      return Date.now();
    },
    fullName:{
      get:function(){
        return `${this.firstName} ${this.lastName}`
      },
      set:function(newValue){
        let names = newValue.split(" ");
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing..."
      this.debouncedGetAnswer()
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    console.log(this.cusData,9090)
  },
  // 方法
  methods: {
    reversedMessageM() {
      return this.message.split("").reverse().join("");
    },
    setName() {
      this.fullName = "wa haha"
    },
    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)"
        return
      }
      this.answer = "Thinking..."
      var vm = this
      axios.get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error
        })
    }
  },
}
</script>

<style lang="less" scoped>

</style>
