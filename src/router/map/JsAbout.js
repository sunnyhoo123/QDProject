const listComponent = resolve => require(["@/views/ListAbout/ListAbout.vue"], resolve)
const observeListComponent = resolve => require(["@/views/ListAbout/ObserveList.vue"], resolve)
const numberComponent = resolve => require(["@/views/NumberAbout/NumberAbout.vue"], resolve)
// more
const moreComponent = resolve => require(["@/views/More/More.vue"], resolve)
const webSocketComponent = resolve => require(["@/views/More/WebSocket/index.vue"], resolve)

const feaComponent = resolve => require(["@/views/Feature/Feature.vue"], resolve)
const KeyCodeDelComponent = resolve => require(["@/views/Feature/KeyCodeDel.vue"], resolve)

const funcComponent = resolve => require(["@/views/func/func.vue"], resolve)
const tipsComponent = resolve => require(["@/views/more/tips.vue"], resolve)
const mapComponent = resolve => require(["@/views/map/mapView.vue"], resolve)
const echartsproComponent = resolve => require(["@/views/map/echartsView.vue"], resolve)

// Vue相关
const vueComponent = resolve => require(["@/views/VueAbout/VueAbout.vue"], resolve)
const parentComponent = resolve => require(["@/views/VueAbout/parent.vue"], resolve)
const confirmComponent = resolve => require(["@/views/VueAbout/Example/confirm.vue"], resolve)
const uploadComponent = resolve => require(["@/views/VueAbout/Example/upload.vue"], resolve)

// elementUI组件
const elUIComponent = resolve => require(["@/views/elementCom/elUI.vue"], resolve)
const elTableComponent = resolve => require(["@/views/elementCom/elData/eltable.vue"], resolve)
const elTagComponent = resolve => require(["@/views/elementCom/elData/elTagCom.vue"], resolve)
const elUploadComponent = resolve => require(["@/views/elementCom/elForm/elUploadCom.vue"], resolve)
const elSelectComponent = resolve => require(["@/views/elementCom/elForm/elSelect.vue"], resolve)
const elFormComponent = resolve => require(["@/views/elementCom/elForm/elFormCom.vue"], resolve)
const elPopoverComponent = resolve => require(["@/views/elementCom/elOther/elPopoverCom.vue"], resolve)
const elDialogComponent = resolve => require(["@/views/elementCom/elOther/elDialogCom.vue"], resolve)

export const elUICom ={
  path:"/elUI",
  component:elUIComponent,
  name:"elUI",
  children:[
    // Data
    {
      path:"/elementCom/elData/elTableCom",
      component:elTableComponent,
    },
    {
      path:"/elementCom/elData/elTagCom",
      component:elTagComponent,
    },
    // Form
    {
      path:"/elementCom/elForm/elUploadCom",
      component:elUploadComponent,
    },
    {
      path:"/elementCom/elForm/elSelectCom",
      component:elSelectComponent,
    },
    {
      path:"/elementCom/elForm/elFormCom",
      component:elFormComponent,
    },
    // Others
    {
      path:"/elementCom/elOthers/elPopoverCom",
      component:elPopoverComponent,
    },
    {
      path:"/elementCom/elOthers/elDialogCom",
      component:elDialogComponent,
    },
  ]
}
export const listCom ={
  path:"/listabout",
  component:listComponent,
  name:"ListAbout",
}
export const numberCom ={
  path:"/numberabout",
  component:numberComponent,
  name:"NumberAbout",
}
export const moreCom ={
  path:"/more",
  component:moreComponent,
  name:"More",
  children:[
    {
      path:"/more/tips",
      component:tipsComponent,
    },
    {
      path: "/more/webSocket",
      component: webSocketComponent,
    },
  ]
}
export const funcCom ={
  path:"/func",
  component:funcComponent,
  name:"func",
}
export const feaCom ={
  path:"/fea",
  component:feaComponent,
  name:"fea",
}
export const KeyCodeDelCom ={
  path:"/KeyCodeDel",
  component:KeyCodeDelComponent,
  name:"KeyCodeDel",
}
export const mapCom ={
  path:"/map",
  component:mapComponent,
  name:"BDmap",
}
export const observeListCom ={
  path:"/observelist",
  component:observeListComponent,
  name:"observelist",
}
export const echartsproCom ={
  path:"/echartspro",
  component:echartsproComponent,
  name:"echartspro",
}
export const vueCom ={
  path:"/vueabout",
  component:vueComponent,
  name:"vueabout",
  children:[
    {
      path:"/vueabout/parent",
      component:parentComponent,
    },
    {
      path:"/vueabout/confirm",
      component:confirmComponent,
    },
    {
      path:"/vueabout/upload",
      component:uploadComponent,
    },
  ]
}
