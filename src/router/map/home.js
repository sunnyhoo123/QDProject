const home = resolve => require(["@/views/home/home.vue"], resolve)
export default {
  path: "/",
  component: home,
  name: "home",
}