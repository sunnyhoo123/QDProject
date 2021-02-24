const actions = {
  increment({ commit }) {
    commit("INCREMENT");
  },
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
}

export default actions