
const app = {
  // 添加命名空间
  namespaced: true,
  state: {
    sidebar: {
      opened: true,
      withoutAnimation: false
    },
    movie: {
      opened: false,
    }
    // language: Cookies.get('language') || 'en',
    // size: Cookies.get('size') || 'medium'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    CHANGE_SWITCH: state => {
      state.movie.opened = !state.movie.opened
    },
    // TOGGLE_DEVICE: (state, device) => {
    //   state.device = device
    // },
    // SET_LANGUAGE: (state, language) => {
    //   state.language = language
    //   Cookies.set('language', language)
    // },
    // SET_SIZE: (state, size) => {
    //   state.size = size
    //   Cookies.set('size', size)
    // }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit("TOGGLE_SIDEBAR")
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit("CLOSE_SIDEBAR", withoutAnimation)
    },
    changeSwitch({ commit }) {
      commit("CHANGE_SWITCH")
    },
    
    // toggleDevice({ commit }, device) {
    //   commit('TOGGLE_DEVICE', device)
    // },
    // setLanguage({ commit }, language) {
    //   commit('SET_LANGUAGE', language)
    // },
    // setSize({ commit }, size) {
    //   commit('SET_SIZE', size)
    // }
  }
}

export default app
