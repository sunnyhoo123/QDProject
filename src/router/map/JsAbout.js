const demoComponent = resolve => require(['@/views/home/elUI.vue'], resolve)
const listComponent = resolve => require(['@/views/ListAbout/ListAbout.vue'], resolve)
const observeListComponent = resolve => require(['@/views/ListAbout/ObserveList.vue'], resolve)
const numberComponent = resolve => require(['@/views/NumberAbout/NumberAbout.vue'], resolve)
const moreComponent = resolve => require(['@/views/More/More.vue'], resolve)
const feaComponent = resolve => require(['@/views/Feature/Feature.vue'], resolve)
const funcComponent = resolve => require(['@/views/func/func.vue'], resolve)
const tipsComponent = resolve => require(['@/views/more/tips.vue'], resolve)
const parentComponent = resolve => require(['@/views/more/parent.vue'], resolve)
const mapComponent = resolve => require(['@/views/map/mapView.vue'], resolve)
const echartsproComponent = resolve => require(['@/views/map/echartsView.vue'], resolve)
const elTabComponent = resolve => require(['@/views/elementCom/eltable.vue'], resolve)

export const demoCom ={
    path:'/elUI',
    component:demoComponent,
    name:'elUI',
}
export const listCom ={
    path:'/listabout',
    component:listComponent,
    name:'ListAbout',
}
export const numberCom ={
    path:'/numberabout',
    component:numberComponent,
    name:'NumberAbout',
}
export const moreCom ={
    path:'/more',
    component:moreComponent,
    name:'More',
    children:[
        {
            path:'/more/tips',
            component:tipsComponent,
        },
        {
            path:'/more/parent',
            component:parentComponent,
        },
      ]
}
export const funcCom ={
    path:'/func',
    component:funcComponent,
    name:'func',
}
export const feaCom ={
    path:'/fea',
    component:feaComponent,
    name:'fea',
}
export const mapCom ={
    path:'/map',
    component:mapComponent,
    name:'BDmap',
}
export const elTabCom ={
    path:'/eltab',
    component:elTabComponent,
    name:'eltable',
}
export const observeListCom ={
    path:'/observelist',
    component:observeListComponent,
    name:'observelist',
}
export const echartsproCom ={
    path:'/echartspro',
    component:echartsproComponent,
    name:'echartspro',
}