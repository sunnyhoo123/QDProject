const demoComponent = resolve => require(['@/views/home/Demo.vue'], resolve)
const listComponent = resolve => require(['@/views/ListAbout/ListAbout.vue'], resolve)
const numberComponent = resolve => require(['@/views/NumberAbout/NumberAbout.vue'], resolve)
const moreComponent = resolve => require(['@/views/More/More.vue'], resolve)

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
}