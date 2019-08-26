// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "api";

import Vue from "vue"
import App from "./App"
import router from "./router"
import ElementUI from "element-ui"
import i18n from "./i18n";
// import IView from 'iview'
import store from "./vuex/store"

// css

import "../static/css/reset.css"
import "../static/css/element-ui.css"
import "../static/css/iconfont.css"
// import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(IView)

/* eslint-disable no-new */
new Vue({
  i18n,
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
})
