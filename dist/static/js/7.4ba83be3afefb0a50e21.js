webpackJsonp([7,14],{2754:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-carousel",{staticClass:"carousel",attrs:{interval:5e3,arrow:"always"}},this._l(this.wallPaperList,function(t,n){return e("el-carousel-item",{key:n},[e("img",{attrs:{src:t,alt:"wallPaper"}})])}),1)},staticRenderFns:[]};var s=n("VU/8")({name:"Carousel",data:function(){return{wallPaperList:["/static/images/wallPaper01.jpg","/static/images/wallPaper02.jpg","/static/images/wallPaper03.jpg"]}},methods:{}},a,!1,function(t){n("tKFr")},"data-v-5f5fda9c",null);e.a=s.exports},"3nhz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("pFYg"),s=n.n(a),r={name:"ComChild",props:{formList:{type:[Array,Object],required:!0,default:function(){return{message:"hello"}}},propData:{default:100,validator:function(t){return-1!==["success","warning","danger"].indexOf(t)}},label:{},value:{},height:{type:Number,default:54}},data:function(){return{num:111,bigNum:0xab54a98ca8e4d800,childrenString:"child",items:[{id:1,text:"第1段"},{id:2,text:"第2段"},{id:3,text:"第3段"}]}},computed:{styleVar:function(){return{"--box-height":this.height+"px"}}},methods:{testEmit:function(){this.$emit("child",this.childrenString)},changeChildData:function(){this.PropData="warning",this.$emit("update:propData",this.PropData)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"child"},[n("el-button",{attrs:{type:"primary"},on:{click:t.testEmit}},[t._v("child传值给parent")]),t._v(" "),n("div",{staticClass:"box",style:t.styleVar},[t._v(t._s(t.formList))]),t._v(" "),n("span",{on:{click:t.changeChildData}},[t._v(t._s(t.propData))]),t._v(" "),t._t("default",[t._v("父组件没有在子组件插入内容时，此内容会显示，否则会被父组件插入的内容覆盖")]),t._v(" "),t._t("first",[t._v("first")]),t._v(" "),t._t("second",[t._v("second")]),t._v(" "),t._t("third",[t._v("third")]),t._v(" "),t._l(t.items,function(e){return t._t("itemSlot",[t._v("默认值")],{text:e.text,itemid:e.id})}),t._v(" "),n("div",[t._v("attrs: "+t._s(t.$attrs.gender))]),t._v(" "),n("label",[t._v("\n    "+t._s(t.label)+"\n    "),n("input",t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("update:value",e.target.value)}}},"input",t.$attrs,!1))])],2)},staticRenderFns:[]};var o={name:"SlotCom",components:{comChild:n("VU/8")(r,i,!1,function(t){n("rDQ3")},"data-v-e7e88ee4",null).exports},data:function(){return{num:151,parentString:"parent",bigNum:0xab54a98ca8e4d800,numString:"137",formList:[1,5,6,8],msg:"普通父组件",post:{id:1,title:"My Journey with Vue"},customValidator:"success"}},created:function(){var t=this;console.log(this.$route.params,"pathMatch参数"),setTimeout(function(){t.parentString="异步更新"},3e3)},methods:{NotTest:function(){console.log(~~this.numString),console.log(s()(~~this.numString)),console.log(this.num/10|0),console.log(this.bigNum/10|0),this.formList.push("100")},getChildData:function(t){this.parentString=t},handleEmit:function(t){console.log(t,"emit")}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parent"},[n("el-button",{attrs:{type:"primary"},on:{click:t.NotTest}},[t._v(t._s(t.parentString))]),t._v(" "),n("com-child",{staticClass:"parentClass",attrs:{"form-list":t.formList,"prop-data":t.customValidator,label:t.msg,value:t.parentString,gender:t.customValidator,height:33},on:{"update:propData":function(e){t.customValidator=e},"update:prop-data":function(e){t.customValidator=e},"update:value":function(e){t.parentString=e},child:t.handleEmit},scopedSlots:t._u([{key:"third",fn:function(){return[n("p",[t._v("这是第三个具名插槽")])]},proxy:!0},{key:"itemSlot",fn:function(e){return[n("li",[t._v(t._s(e.itemid+" & "+e.text))])]}}])},[n("span",[t._v(t._s(t.msg))]),t._v(" 可以不用标签\n\n    "),t._v(" "),n("template",{slot:"first"},[n("div",[t._v("这是第一个具名插槽")])]),t._v(" "),n("div",{attrs:{slot:"second"},slot:"second"},[t._v("这是第二个具名插槽")])],2),t._v(" "),n("com-child",{attrs:{"form-list":t.post}})],1)},staticRenderFns:[]};var c=n("VU/8")(o,l,!1,function(t){n("i8c6")},"data-v-4d3e9798",null);e.default=c.exports},"6rkg":function(t,e){},"D+nB":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Gu7T"),s=n.n(a),r=n("Dd8w"),i=n.n(r),o=n("NYxO"),l={components:{carousel:n("2754").a},props:{cusData:""},data:function(){return{activeClass:!0,errorClass:"text-danger",classObject:{active:!0,"text-danger":!1},isActive:!0,error:null,activeColor:"red",fontSize:30,styleObject:{color:"red",fontSize:"13px"},overridingStyles:{margin:"10px"},formData:{name:"",sex:0}}},computed:{claObject:function(){return{active:this.isActive&&!this.error,"text-danger":this.error&&"fatal"===this.error.type}}},created:function(){console.log(this.cusData,777)},methods:{}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bind-class"},[n("div",{class:{activeClass:t.activeClass,ac:t.activeClass,"text-size":!0,"text-color":!1,errorClass:t.errorClass}},[t._v("对象语法")]),t._v(" "),n("div",{class:t.classObject},[t._v("绑定的数据对象不必内联定义在模板里")]),t._v(" "),n("a",{class:t.claObject},[t._v("使用计算属性")]),t._v(" "),n("div",{class:[t.activeClass,t.errorClass,"class-array"]},[t._v("数组语法")]),t._v(" "),n("carousel",{staticClass:"baz"},[t._v("用在组件上")]),t._v(" "),n("div",{style:{color:t.activeColor,fontSize:t.fontSize+"px"}},[t._v("内联-对象")]),t._v(" "),n("div",{style:t.styleObject},[t._v("直接绑定到一个样式对象")]),t._v(" "),n("div",{style:[t.styleObject,t.overridingStyles]},[t._v("内联-数组")]),t._v(" "),n("div",{style:{display:["-webkit-box","-ms-flexbox","flex"]}},[t._v("多重值")]),t._v(" "),n("span",{attrs:{title:"整数"}},[t._v("选择器")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData['name']"}],domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("6rkg")},"data-v-48a29c7a",null).exports,v=n("3nhz"),d=n("M4fF"),m=n.n(d),f=n("mtWM"),h=n.n(f),p={name:"ComputedCom",props:{cusData:""},data:function(){return{message:"",firstName:"foo",lastName:"Bar",question:"",answer:"I cannot give you an answer until you ask a question!"}},computed:{reversedMessage:function(){return this.message.split("").reverse().join("")},now:function(){return Date.now()},fullName:{get:function(){return this.firstName+" "+this.lastName},set:function(t){var e=t.split(" ");this.firstName=e[0],this.lastName=e[e.length-1]}}},watch:{question:function(t,e){this.answer="Waiting for you to stop typing...",this.debouncedGetAnswer()}},created:function(){this.debouncedGetAnswer=m.a.debounce(this.getAnswer,500),console.log(this.cusData,9090)},methods:{reversedMessageM:function(){return this.message.split("").reverse().join("")},setName:function(){this.fullName="wa haha"},getAnswer:function(){if(-1!==this.question.indexOf("?")){this.answer="Thinking...";var t=this;h.a.get("https://yesno.wtf/api").then(function(e){t.answer=m.a.capitalize(e.data.answer)}).catch(function(e){t.answer="Error! Could not reach the API. "+e})}else this.answer="Questions usually contain a question mark. ;-)"}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"computed"},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入要翻转的文字"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("span",[t._v("reversedMessage："+t._s(""+t.reversedMessage+~~t.now))]),t._v(" "),n("div",[t._v("相当于表达式："+t._s(t.reversedMessageM()))]),t._v(" "),n("div",[t._v("getter: "+t._s(t.fullName))]),t._v(" "),n("div",{on:{click:t.setName}},[t._v("setter: "+t._s(t.firstName+"&"+t.lastName))]),t._v(" "),n("div",[n("p",[t._v("\n      Ask a yes/no question:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),t._v(" "),n("p",[t._v(t._s(t.answer))])])],1)},staticRenderFns:[]};var g=n("VU/8")(p,_,!1,function(t){n("duRg")},"data-v-5e0567fe",null).exports,y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"next-tick"},[n("div",{ref:"msgDiv"},[t._v(t._s(t.msg))]),t._v(" "),t.msg1?n("div",[t._v("Message got outside $nextTick: "+t._s(t.msg1))]):t._e(),t._v(" "),t.msg2?n("div",[t._v("Message got inside $nextTick: "+t._s(t.msg2))]):t._e(),t._v(" "),t.msg3?n("div",[t._v("Message got outside $nextTick: "+t._s(t.msg3))]):t._e(),t._v(" "),n("el-button",{on:{click:t.changeMsg}},[t._v("Change the Message")])],1)},staticRenderFns:[]};var C=n("VU/8")({name:"NextTickCom",data:function(){return{msg:"test nextTick",msg1:"",msg2:"",msg3:""}},methods:{changeMsg:function(){var t=this;this.msg="chang",this.msg1=this.$refs.msgDiv.innerHTML,this.$nextTick(function(){t.msg2=t.$refs.msgDiv.innerHTML}),this.msg3=this.$refs.msgDiv.innerHTML}}},y,!1,function(t){n("cq8V")},"data-v-0fc49b3a",null).exports,x={name:"EventCom",data:function(){return{msg:"test nextTick",msg1:"",msg2:"",msg3:""}},methods:{alert:function(t){console.log("%c%s","color: red; background: yellow; font-size: 24px;",t)}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{on:{click:function(e){return t.alert(1)}}},[t._v("\n    123\n    "),n("a",{attrs:{href:"/#"},on:{click:function(e){return e.target!==e.currentTarget?null:(e.preventDefault(),t.alert(2))}}},[t._v("\n      456\n      "),n("div",{on:{click:function(e){return t.alert(3)}}},[t._v("789")])])]),t._v(" "),n("div",{on:{click:function(e){return t.alert(1)}}},[t._v("\n    123\n    "),n("a",{attrs:{href:"/#"},on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.alert(2)}}},[t._v("\n      456\n      "),n("div",{on:{click:function(e){return t.alert(3)}}},[t._v("789")])])])])},staticRenderFns:[]};var k=n("VU/8")(x,b,!1,function(t){n("cV5l")},"data-v-70fb68b2",null).exports,w={name:"Vueabout",components:{bindClass:u,slotCom:v.default,eventCom:k,computedCom:g,nextTickCom:C},data:function(){return{toCalc:"",activeAnchor:0,curComponent:"computedCom"}},mounted:function(){},created:function(){this.menuList=[{title:"计算属性和侦听器",dataScroll:"sdf",type:"level2",value:"computedCom"},{title:"class与Style绑定",dataScroll:"eee",type:"level2",value:"bindClass"},{title:"条件渲染",dataScroll:"eee",type:"level2"},{title:"列表渲染",dataScroll:"eee",type:"level2"},{title:"事件处理",dataScroll:"eee",type:"level2",value:"eventCom"},{title:"表单输入绑定",dataScroll:"eee",type:"level2"},{title:"nextTick",dataScroll:"eee",type:"level2",value:"nextTickCom"},{title:"深入了解组件",dataScroll:"eee",type:"level1"},{title:"插槽",dataScroll:"eee",type:"level2",value:"slotCom"},{title:"规模化",dataScroll:"eee",type:"level1"},{title:"路由",dataScroll:"eee",type:"level2"},{title:"状态管理",dataScroll:"eee",type:"level2"}],this.article=["anchor-0","anchor-1","anchor-2","anchor-3","anchor-4","anchor-5","anchor-6","anchor-7"]},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:i()({},Object(o.c)(["increment"]),{goBack:function(){this.$router.push({path:"/"})},handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=[];[].concat(s()(document.getElementsByTagName("h3"))).forEach(function(t){e.push(t.offsetTop)});for(var n=e.length,a=document.documentElement.clientHeight-50,r=0;r<n;r++)e[r]<t+a&&t+a<e[r+1]?this.activeAnchor=r:t+a>e[n-1]&&(this.activeAnchor=n-1);0===t&&(this.activeAnchor=0),console.log(t)},goAnchor:function(t,e,n){this.curComponent=n.value,this.activeAnchor=e,document.documentElement.scrollTop=0}})},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-about"},[n("div",{staticClass:"headerWrap"},[n("el-page-header",{attrs:{content:"Vue介绍"},on:{back:t.goBack}})],1),t._v(" "),n("div",{staticClass:"sideBar"},[n("ul",t._l(t.menuList,function(e,a){return n("li",{key:e.title,attrs:{"data-scroll":e.dataScroll}},["level1"===e.type?n("h3",[t._v(t._s(e.title))]):n("a",{class:{active:a===t.activeAnchor},on:{click:function(n){return t.goAnchor("#anchor-"+a,a,e)}}},[t._v(t._s(e.title))])])}),0)]),t._v(" "),n("div",{staticClass:"content"},[n("keep-alive",[n(t.curComponent,{tag:"component",attrs:{cusData:"cusparams"}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:10===t.activeAnchor,expression:"activeAnchor === 10"}]},[n("el-tag",[n("router-link",{attrs:{to:"/vueRouter/foo"}},[t._v("foo")])],1),t._v(" "),n("el-link",{attrs:{type:"primary"}},[n("router-link",{attrs:{to:"/vueRouter/bar"}},[t._v("动态路径参数(dynamic segment)")])],1)],1),t._v(" "),n("div",{staticClass:"child"},[n("router-view")],1)],1)])},staticRenderFns:[]};var D=n("VU/8")(w,S,!1,function(t){n("nWc9")},"data-v-0ce2825d",null);e.default=D.exports},Gu7T:function(t,e,n){"use strict";e.__esModule=!0;var a,s=n("c/Tr"),r=(a=s)&&a.__esModule?a:{default:a};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},cV5l:function(t,e){},cq8V:function(t,e){},duRg:function(t,e){},i8c6:function(t,e){},nWc9:function(t,e){},rDQ3:function(t,e){},tKFr:function(t,e){}});
//# sourceMappingURL=7.4ba83be3afefb0a50e21.js.map