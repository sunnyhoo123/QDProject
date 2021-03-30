import Vue from "vue"
import Vuex from "vuex"
import app from "./modules/app"
import actions from "./action"
import mutations from "./mutation"
import getters from "./getter"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
  },
  actions,
  mutations,
  getters,
  state: {
    count: 0
  },
  // namespaced: true,
})

export default store;