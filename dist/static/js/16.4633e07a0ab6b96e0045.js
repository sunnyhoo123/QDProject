webpackJsonp([16],{LWGb:function(t,n){},dBDM:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("Xxa5"),o=e.n(r),a=e("//Fk"),c=e.n(a),i=e("exGp"),s=e.n(i),u=e("hXIX"),l={name:"Func",data:function(){return{show:!0,originString:"this is a dog",id:0}},methods:{paramTest:function(t,n){console.log(t,n)},ternary:function(){String.prototype.spacify=function(){return this.split("").join(" ")},console.log(this.originString.spacify())},asyncApi:function(){var t=this;return s()(o.a.mark(function n(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)();case 2:setTimeout(function(){console.log(1),c.a.resolve().then(function(){console.log(2)})},0),setTimeout(function(){console.log(3)},0),c.a.resolve().then(function(){console.log(4)}),console.log(5);case 6:case"end":return t.stop()}},n,t)}))()},CAB:function(){var t={name:"小明",select:"芝芝芒芒",myFun:function(t,n){console.log(this.name+"选择"+this.select+"加"+t+"加"+n)}},n={name:"大江",select:"杨枝甘露酸奶"};t.myFun.apply(n,["椰果","珍珠"]),t.myFun.bind(n,"椰果","珍珠")(),t.myFun.bind(n,["椰果","珍珠"])(),t.myFun.call(n,"椰果","珍珠")},spacify:function(t){return t.split("").join(" ")},ExpreAndDec:function(){console.log("Declaration"==="Declaration");try{t("Expression");var t=function(t){return"Expression"===t}}catch(t){console.log(t)}},varHoisting:function(){!function(){console.log(t);var t="内部变量"}()},overload:function(){console.log(100)},addSelf:function(){var t=[];t.push([{caseId:this.id++}]),console.log(t,"itemList")}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"func"},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.paramTest(1)}}},[t._v("参数测试")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.ternary}},[t._v("三目运算")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.asyncApi}},[t._v("异步执行")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.CAB}},[t._v("call+apply+bind")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.ExpreAndDec}},[t._v("函数声明和表达式的区别")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.varHoisting}},[t._v("变量提升")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.overload}},[t._v("没有重载")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.addSelf}},[t._v("对象item自增")]),t._v(" "),e("button",{on:{click:function(t){t.target.style.display="none"}}},[t._v("点击消失")])],1)},staticRenderFns:[]};var f=e("VU/8")(l,p,!1,function(t){e("LWGb")},"data-v-1269a99c",null);n.default=f.exports},hXIX:function(t,n,e){"use strict";e.d(n,"a",function(){return v}),e.d(n,"b",function(){return y});var r,o,a,c=e("Xxa5"),i=e.n(c),s=e("exGp"),u=e.n(s),l=e("mtWM"),p=e.n(l),f=this,v=(r=u()(i.a.mark(function t(n,e,r){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=p.a.get("http://www.kuaidi100.com/query?type=yuantong&postid=122333232"),t.abrupt("return",o);case 2:case"end":return t.stop()}},t,f)})),function(t,n,e){return r.apply(this,arguments)}),y=(o=u()(i.a.mark(function t(n,e,r){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://www.meiriyiyan.com/api/v1/");case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}},t,f)})),function(t,n,e){return o.apply(this,arguments)});a=u()(i.a.mark(function t(n,e,r){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://v1.alapi.cn/api/acg");case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}},t,f)}))}});
//# sourceMappingURL=16.4633e07a0ab6b96e0045.js.map