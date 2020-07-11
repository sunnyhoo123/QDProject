<template>
  <div class="more">
    <router-link to="/">回到首页</router-link>
    <router-link to="/more/tips">tips小技巧</router-link>
    <router-link to="/more/webSocket">webSocket</router-link>
    <!-- “Lambda 表达式”(lambda expression)是匿名函数的别称 -->
    <div v-show="vShow">ES6Lambda</div>
    <div class="regexp">
      <input v-focus>
      <el-input v-focus v-model="original" :autofocus="true" placeholder="测试正则表达式"></el-input>
      <el-button type="primary" @click="regExp(original)">正则表达</el-button>
    </div>
    <div class="el-btn">
      <el-button type="primary" @click="ES6Test">ES6 参数解构</el-button>
      <el-button type="primary" @click="VueRoot">Vue root</el-button>
      <el-button type="primary" @click="JsonDraw">解构提取Json数据</el-button>
      <el-button type="primary" @click="IteratorStr">字符串的遍历</el-button>
      <el-button type="primary" @click="ES6">调用Promise</el-button>
      <el-button type="primary" @click="ES6async">调用Async</el-button>
      <el-button type="primary" @click="ES6Arrow">箭头函数</el-button>
      <el-button type="primary" @click="switchNet">switchNet</el-button>
      <el-button type="primary" @click="testMoment">时间插件moment</el-button>
      <el-button type="primary" @click="testLodash">工具插件lodash</el-button>
    </div>
    <div class="child">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import lodash from "lodash";

const count = /^\d+$/;

export default {
  name: "More",
  data(){
    return{
      original: 0,
      vShow: false,
      capitalFn: function(value){
        if(count.test(value)){
          return { valid:true }
        }else{
          return { valid:false, msg:"请输入数字" }
        }
      },
    }
  },
  methods: {
    regExp(val){
      var r= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; //正则表达式 匹配出生日期(简单匹配)  
      var r2= /^\d{1,2}/; //正则表达式 匹配出生日期(简单匹配)    
      // var IDcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
      var passport = /^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/; //护照
      var eight = /^[0-9]{8}$/; //8位数
      var letter = /^[a-zA-Z]{1}$/; //1个字母
      // 正则校验是否中文名称组成 [\u4E00-\u9FA5]{2,4}
      r.exec("1985-10-15");
      console.log(r2.exec("-10-15"))
      console.log(RegExp.$1)
      console.log(count.test(123456))
      // let capitalFn = this.capitalFn('123456')
      console.log(letter.test(this.original)&&eight.test(this.original));
      console.log(this.original==0 ? "number" : passport);
      var re = /(\w+)\s(\w+)/; 
      var str = "zara ali"; 
      var newstr = str.replace(re, "$2, $1, $1, $3"); // $1,$2...是表示的小括号里的内容
      console.log(newstr); // ali, zara, zara, $3
      let newMsg = val.replace(/[^\d\.]/g, "") // eslint-disable-line
      console.log(newMsg)
    },
    ES6(){
      //前面捕获异常
      this.ES6Promise().then((value)=>{
        console.log(value,"执行成功")
      });

      //由reject抛出异常
      this.ES6Promise1().then((value)=>{
        console.log(value,"执行成功")
      }).catch(e => {
        console.log(e,"执行失败!")
      });
    },
    async ES6async(){
      console.log("async开始执行")
      const p1 = await this.ES6Promise();
      const p2 = await this.ES6Promise1();
      console.log(p1);
      console.log(p2);
      console.log("async执行完毕");
    },
    // Arrow Function（箭头函数）
    ES6Arrow(){
      //箭头函数的表达式和默认return
      let testObject = {
        arrowF: num => 2 * num,
        arrowF1: () => 2 * this.original, // 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
        arrowF2: () => { if(!this.original) return 2 }, // 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
        arrowF3: num => ({ num: num }), // 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
      }
      console.log(testObject.arrowF(3)) // 6
      console.log(testObject.arrowF1()) // 0
      console.log(testObject.arrowF2()) // 2
      console.log(testObject.arrowF3(3)) // {num: 3}

      const full = ({ first, last }) => first + " " + last; // 箭头函数可以与变量解构结合使用。
      // 等同于
      // function full(person) {
      //   return person.first + " " + person.last;
      // }
      console.log(full({ first: "kevin", last: "hoo" })) // kevin hoo
    },
    ES6Test(){
      // const person = { name: 'Scott', attractiveness: 8.5 }

      //函数参数的解构可以使用默认值。
      const Attributes1 = ({ name="jerry", attractiveness=0 } = {}) => {
        return [name,attractiveness]
      }
      console.log(Attributes1())
      //为函数的参数指定默认值，而不是为变量name和attractiveness指定默认值，所以会得到与前一种写法不同的结果
      const Attributes2 = ({ name, attractiveness } = { name:"jerry", attractiveness:0 }) => {
        return [name,attractiveness]
      }
      console.log(Attributes2({ name:"eom" }))
      console.log(Attributes2())
    },
    VueRoot(){
      //根实例可以通过 $root 属性进行访问
      // this.vShow = false;
      console.log(this.$root)
    },
    JsonDraw(){
      // 解构赋值对提取 JSON 对象中的数据，尤其有用
      let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
      };
      let { id, status, data:number } = jsonData;
      console.log(id, status, number);
    },
    IteratorStr(){
      for(let codePoint of "hoo"){
        console.log(codePoint)
      }
    },
    ES6Promise(){
      return new Promise((resolve,reject)=>{
        if(!this.vShow){
          resolve(3)
        }else{
          reject(4)
          // try{
                            
          // }catch(e){
          //     console.log(4)
          //     reject(4)
          // }
        }
      }).catch((e)=>{
        console.log(e,"reason")
      });
    },
    ES6Promise1(){
      return new Promise((resolve,reject)=>{
        if(!this.vShow){
          resolve(3)
        }else{
          reject(new Error("Could not load"));
        }
      })
    },
    switchNet() {
      let TestNet = { 1:"/a-api",203:"/b-api" }
      console.log(TestNet[1])
      console.log(TestNet[203])
    },
    testMoment() {
      // moment常见用法
      console.log(moment().format("YYYY-MM-DD HH:mm:ss")); // 当前时间，注意：HH为24小时
      console.log(moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")); // 计算时间段，当前时间的前一天
      console.log(moment(moment()).diff(moment().subtract(1, "days"), "hours")); // 24 计算时间范围小时数

      console.log(new Date(1547644771000).Format("yyyy-MM-dd HH:mm:ss")) // 当前时间
    },
    testLodash() {
      console.log(lodash.isEmpty(null)); 
    }
  }
}
</script>

<style lang="scss" scoped>
.more {
  .el-input {
    width: 130px;
  }
  .el-btn {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
