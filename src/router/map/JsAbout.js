const listComponent = resolve => require(["@/views/ListAbout/ListAbout.vue"], resolve)
const observeListComponent = resolve => require(["@/views/ListAbout/ObserveList.vue"], resolve)
const numberComponent = resolve => require(["@/views/NumberAbout/NumberAbout.vue"], resolve)
// more
const moreComponent = resolve => require(["@/views/More/More.vue"], resolve)
const webSocketComponent = resolve => require(["@/views/More/WebSocket/index.vue"], resolve)

const feaComponent = resolve => require(["@/views/Feature"], resolve)
const KeyCodeDelComponent = resolve => require(["@/views/Feature/KeyCodeDel.vue"], resolve)
const PersonalCenterComponent = resolve => require(["@/views/Feature/PersonalCenter/index.vue"], resolve)

const funcComponent = resolve => require(["@/views/func/func.vue"], resolve)
const tipsComponent = resolve => require(["@/views/more/tips.vue"], resolve)
const mapComponent = resolve => require(["@/views/map/mapView.vue"], resolve)
const echartsproComponent = resolve => require(["@/views/map/echartsView.vue"], resolve)
const echartsLineComponent = resolve => require(["@/views/map/echartsLine.vue"], resolve)

// Vue相关
const vueComponent = resolve => require(["@/views/VueAbout"], resolve)
const parentComponent = resolve => require(["@/views/VueAbout/components/slotCom.vue"], resolve)
const confirmComponent = resolve => require(["@/views/Feature/components/Example/confirm.vue"], resolve)
const uploadComponent = resolve => require(["@/views/Feature/components/Example/upload.vue"], resolve)
// router
const routerComponent = resolve => require(["@/views/VueAbout/components/VueRouter/index.vue"], resolve)
const RouterProfile = resolve => require(["@/views/VueAbout/components/VueRouter/ChildCom/profile.vue"], resolve)
const RouterHome = resolve => require(["@/views/VueAbout/components/VueRouter/ChildCom/home.vue"], resolve)
const RouterDefault = resolve => require(["@/views/VueAbout/components/VueRouter/ChildCom/default.vue"], resolve)

// elementUI组件
const elUIComponent = resolve => require(["@/views/elementCom"], resolve)
const elTableComponent = resolve => require(["@/views/elementCom/elData/eltable.vue"], resolve)
const elTagComponent = resolve => require(["@/views/elementCom/elData/elTagCom.vue"], resolve)
const elUploadComponent = resolve => require(["@/views/elementCom/elForm/elUploadCom.vue"], resolve)
const elSelectComponent = resolve => require(["@/views/elementCom/elForm/elSelect.vue"], resolve)
const elFormComponent = resolve => require(["@/views/elementCom/elForm/elFormCom.vue"], resolve)
const elPopoverComponent = resolve => require(["@/views/elementCom/elOther/elPopoverCom.vue"], resolve)
const elTooltipComponent = resolve => require(["@/views/elementCom/elOther/elTooltipCom.vue"], resolve)

// 定制组件
const customBirdComponent = resolve => require(["@/views/elementCom/CSSPlus/bird.vue"], resolve)
const customDragComponent = resolve => require(["@/views/elementCom/CSSPlus/drag.vue"], resolve)
const customTextEffectsComponent = resolve => require(["@/views/elementCom/CSSPlus/TextEffects.vue"], resolve)

// demo
const demoComponent = resolve => require(["@/demo"], resolve)

export const elUICom = {
  path: "/elUI",
  component: elUIComponent,
  name: "elUI",
  children: [
    // basic
    {
      path: "/elementCom/elBasic/elContainerCom",
      component: () => import("@/views/elementCom/elBasic/elContainerCom.vue"),
    },
    // Data
    {
      path: "/elementCom/elData/elTableCom",
      component: elTableComponent,
    },
    {
      path: "/elementCom/elData/elTagCom",
      component: elTagComponent,
    },
    // Form
    {
      path: "/elementCom/elForm/elUploadCom",
      component: elUploadComponent,
    },
    {
      path: "/elementCom/elForm/elSelectCom",
      component: elSelectComponent,
    },
    {
      path: "/elementCom/elForm/elFormCom",
      component: elFormComponent,
    },
    // Notice
    {
      path: "/elementCom/elNotice/elMessageCom",
      component: () => import("@/views/elementCom/elNotice/elMessageCom.vue"),
    },
    // Navigation
    {
      path: "/elementCom/elNavigation/elBreadcrumbCom",
      component: () => import("@/views/elementCom/elNavigation/elBreadcrumbCom.vue"),
    },
    // Others
    {
      path: "/elementCom/elOthers/elPopoverCom",
      component: elPopoverComponent,
    },
    {
      path: "/elementCom/elOthers/elTooltipCom",
      component: elTooltipComponent,
    },
    // custom
    {
      path: "/elementCom/custom/birdCom",
      component: customBirdComponent,
    },
    {
      path: "/elementCom/custom/dragCom",
      component: customDragComponent,
    },
    {
      path: "/elementCom/custom/textEffectsCom",
      component: customTextEffectsComponent,
    },
  ]
}
export const listCom = {
  path: "/listabout",
  component: listComponent,
  name: "ListAbout",
}
export const numberCom = {
  path: "/numberabout",
  component: numberComponent,
  name: "NumberAbout",
}
export const moreCom = {
  path: "/more",
  component: moreComponent,
  name: "More",
  children: [{
    path: "/more/tips",
    component: tipsComponent,
  },
  {
    path: "/more/webSocket",
    component: webSocketComponent,
  },
  ]
}
export const funcCom = {
  path: "/func",
  component: funcComponent,
  name: "func",
}
export const feaCom = {
  path: "/fea",
  component: feaComponent,
  name: "fea",
  children: [
    {
      path: "/fea/confirm",
      component: confirmComponent,
    },
    {
      path: "/fea/upload",
      component: uploadComponent,
    },
  ]
}
export const KeyCodeDelCom = {
  path: "/KeyCodeDel",
  component: KeyCodeDelComponent,
  name: "KeyCodeDel",
}
export const PersonalCenterCom = {
  path: "/PersonalCenter",
  component: PersonalCenterComponent,
  name: "PersonalCenter",
}

export const mapCom = {
  path: "/map",
  component: mapComponent,
  name: "BDmap",
}
export const observeListCom = {
  path: "/observelist",
  component: observeListComponent,
  name: "observelist",
}
export const echartsproCom = {
  path: "/echartspro",
  component: echartsproComponent,
  name: "echartspro",
}
export const echartsLineCom = {
  path: "/echartsLine",
  component: echartsLineComponent,
  name: "echartsLine",
}
export const vueCom = {
  path: "/vueabout",
  component: vueComponent,
  name: "vueabout",
  children: [{
    path: "/vueabout/parent",
    component: parentComponent,
  },
  ]
}
// 动态路由
export const routerCom = {
  path: "/vueRouter/:id",
  component: routerComponent,
  name: "vueRouter",
  props: true,
  children: [{
    // 如果想匹配任意路径，我们可以使用通配符 (*)
    path: "/vueRouter/parent/user-*",
    component: parentComponent,
  },
  {
    path: "/vueRouter/child/*",
    component: parentComponent,
  },
  {
    // 多段“路径参数
    path: "/VueRouter/:username/post/:post_id",
    component: confirmComponent,
  },
  {
    // 当 /router/:id/profile 匹配成功，
    // RouterProfile 会被渲染在 User 的 <router-view> 中
    path: "profile",
    component: RouterProfile
  },
  {
    // 使用空的子路由，当 /user/:id 匹配成功，
    // UserHome 会被渲染在 User 的 <router-view> 中
    path: "",
    component: RouterHome
  }
  ]
}
// 命名视图
export const nameCom = {
  path: "/view",
  components: {
    default: RouterDefault,
    a: RouterHome,
    b: RouterProfile,
  }
}
export const nameComTwo = {
  path: "/other",
  components: {
    default: RouterHome,
    a: RouterDefault,
    b: RouterProfile,
  }
}
// 重定向和别名
export const redirectRouter = {
  path: "/redirectRouter",
  redirect: "RouterDefault/"
}
export const defaultCom = {
  path: "/routerDefault",
  component: RouterDefault,
}
export const profileCom = {
  path: "/routerProfile",
  component: RouterProfile,
  alias: "/rp"
}
