webpackJsonp([34],{AATI:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"ElUploadCom",components:{},filters:{},props:{},data:function(){return{textarea:"",uploaded:!0,loginType:"",fileList:[],choose:!0}},computed:{},watch:{},created:function(){},beforeMount:function(){},mounted:function(){},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},readFileTest:function(){this.file=event.target.files,console.log(this.file,123)},parseInput:function(){var e=JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');console.log(e),console.log(this.textarea),console.log(JSON.parse(this.textarea))},changeUp:function(e,t){console.log(e),console.log(t.length),console.log(this.uploaded),t.length>1&&(t.pop(),this.$message.error("已经上传"))},beforeUp:function(){console.log(this.uploaded),0==this.uploaded&&this.$message.error("已经上传")},changeLogWay:function(){this.choose?(this.loginType="username",this.choose=!1):(this.loginType="Email",this.choose=!0)},test:function(){this.fileList=[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"elUploadCom"},[o("el-upload",{staticClass:"upload-demo",attrs:{"on-change":e.changeUp,"before-upload":e.beforeUp,"auto-upload":!1,drag:"",action:"https://jsonplaceholder.typicode.com/posts/"}},[o("i",{staticClass:"el-icon-upload"}),e._v(" "),o("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),o("em",[e._v("点击上传")])]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])]),e._v(" "),o("el-upload",{staticClass:"upload-demo",attrs:{"file-list":e.fileList,action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture"}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.parseInput}},[e._v("解析转换")]),e._v(" "),o("el-input",{attrs:{rows:2,type:"textarea",placeholder:"请输入内容"},on:{change:e.parseInput},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),e._v(" "),o("span",[e._v("输入的内容为"+e._s(e.textarea))]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.changeLogWay}},[e._v("切换登陆")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.test}},[e._v("一键上传")]),e._v(" "),"username"===e.loginType?[o("label",{key:"1"},[e._v("Username")]),e._v(" "),o("input",{key:"username",attrs:{placeholder:"Enter your username"}})]:[o("label",{key:"2"},[e._v("Email")]),e._v(" "),o("input",{key:"Email",attrs:{placeholder:"Enter your email address"}})]],2)},staticRenderFns:[]};var l=o("VU/8")(a,s,!1,function(e){o("Sm3Y")},"data-v-0ea0f4f7",null);t.default=l.exports},Sm3Y:function(e,t){}});
//# sourceMappingURL=34.541f8c860320b6d9da27.js.map