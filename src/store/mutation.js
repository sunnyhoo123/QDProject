const mutations = {
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  ["INCREMENT"](state) {
    state.count++
  }
}

export default mutations;