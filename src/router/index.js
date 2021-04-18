import Vue from "vue"
import Router from "vue-router"
import _ from "lodash"
import home from "@/router/map/home.js"
import Redirect from "@/router/map/Redirect.js"
import pageRoute from "./map/page"
Vue.use(Router)

const routes = []
_.map(pageRoute, (item) => {
  routes.push(item)
})

export default new Router({
  mode: "history",
  routes: [
    home, //主页
    ...routes,
    Redirect, //路由重定向(访问不存在的页面时，重定向到这个页面) 放最后面，可以加个404页面
  ]
})
