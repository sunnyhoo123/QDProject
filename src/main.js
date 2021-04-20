// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "api";

import Vue from "vue"
import App from "./App"
import router from "./router"
import ElementUI from "element-ui"
import i18n from "./i18n";
// import IView from 'iview'
import store from "./store"
import "./directive";

// css
import "../static/css/reset.css"
// import "../static/css/element-ui.css"
import "../static/css/iconfont.css"
// import 'iview/dist/styles/iview.css'
import "element-ui/lib/theme-chalk/index.css"

import $ from "jquery"
window.jQuery = $;

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
// Vue.use(IView)

/* eslint-disable no-new */
new Vue({
  i18n,
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store
})
