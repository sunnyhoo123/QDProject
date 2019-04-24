const demoComponent = resolve => require(['@/views/home/Demo.vue'], resolve)
const listComponent = resolve => require(['@/views/ListAbout/ListAbout.vue'], resolve)
const numberComponent = resolve => require(['@/views/NumberAbout/NumberAbout.vue'], resolve)
const moreComponent = resolve => require(['@/views/More/More.vue'], resolve)
const feaComponent = resolve => require(['@/views/Feature/Feature.vue'], resolve)
const funcComponent = resolve => require(['@/views/func/func.vue'], resolve)
const tipsComponent = resolve => require(['@/views/more/tips.vue'], resolve)
const parentComponent = resolve => require(['@/views/more/parent.vue'], resolve)

export const demoCom ={
    path:'/demo',
    component:demoComponent,
    name:'demo',
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
// export const tipsCom ={
//     path:'/tips',
//     component:tipsComponent,
//     name:'tips',
// }