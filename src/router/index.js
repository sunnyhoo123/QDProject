import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/Home/home'
// import Demo from '@/components/Demo'
// import ListAbout from '@/views/ListAbout/ListAbout'
// import NumberAbout from '@/views/NumberAbout/NumberAbout'
// import More from '@/views/More/More'
import home from '@/router/map/home.js'
import Redirect from '@/router/map/Redirect.js'
import {demoCom,listCom,numberCom,moreCom} from './map/JsAbout'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        home, //主页
        demoCom,
        listCom,
        numberCom,
        moreCom,
        Redirect, //路由重定向(访问不存在的页面时，重定向到这个页面) 放最后面
    ]
})
