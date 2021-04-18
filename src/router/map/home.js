// export default: import的模块可以起任何变量名，且不需要用大括号包含
// const home = resolve => require(["@/views/home/home.vue"], resolve)
export default {
  path: "/",
  // component: home,
  component: () => import("@/views/home"),
  name: "home",
}