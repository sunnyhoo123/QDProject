<template>
  <div class="func">
    <el-button type="primary" @click="paramTest(1)">参数测试</el-button>
    <el-button type="primary" @click="ternary">三目运算</el-button>
    <el-button type="primary" @click="asyncApi">异步执行</el-button>
    <el-button type="primary" @click="CAB">call+apply+bind</el-button>
    <el-button type="primary" @click="ExpreAndDec">函数声明和表达式的区别</el-button>
    <el-button type="primary" @click="varHoisting">变量提升</el-button>
    <el-button type="primary" @click="overload">没有重载</el-button>
    <el-button type="primary" @click="addSelf">对象item自增</el-button>
    <button @click="$event.target.style.display = 'none'">点击消失</button>
  </div>
</template>

<script>
import { queryKuaidi } from "api/freeApi.js"

export default {
  //组件名
  name: "Func",
  //实例的数据对象
  data() {
    return {
      show: true,
      originString: "this is a dog",
      id: 0
    };
  },

  //方法
  methods: {
    paramTest(a, b) {
      console.log(a, b);
    },
    ternary() {
      //如何将这个函数直接作用在一个字符串对象上?如下
      String.prototype.spacify = function() {
        return this.split("").join(" ");
      };
      console.log(this.originString.spacify());
    },
    async asyncApi() {
      await queryKuaidi();
      setTimeout(() => {
        console.log(1);
        Promise.resolve().then(() => {
          console.log(2);
        });
      }, 0);
      setTimeout(() => {
        console.log(3);
      }, 0);
      Promise.resolve().then(() => {
        console.log(4);
      });
      console.log(5);
    },
    CAB() {
      // call+apply+bind的区别：参数有区别，bind返回的是函数
      var obj = {
        name: "小明",
        select: "芝芝芒芒",
        myFun: function(m,n) {
          console.log(
            this.name + "选择" + this.select + "加" + m + "加" + n
          );
        }
      };
      var db = {
        name: "大江",
        select: "杨枝甘露酸奶"
      };
      obj.myFun.apply(db, ["椰果", "珍珠"]);
      obj.myFun.bind(db, "椰果", "珍珠")();
      obj.myFun.bind(db, ["椰果", "珍珠"])();
      obj.myFun.call(db, "椰果", "珍珠");
    },
    spacify(str) {
      return str.split("").join(" ");
    },
    ExpreAndDec() {
      // 用函数声明创建的函数可以在函数解析后调用（解析时进行等逻辑处理）；而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用。
      console.log(funDeclaration("Declaration"));
      function funDeclaration(type) {
        return type === "Declaration";
      }

      try {
        funExpression("Expression");
        let funExpression = function(type) {
          return type === "Expression";
        };
      } catch (error) {
        console.log(error);
      }
    },
    varHoisting() {
      var a = "外部变量"; // eslint-disable-line
      (function() {
        console.log(a1);
        var a1 = "内部变量";
      })();
    },
    overload() {
      function addSomeNumber() {
        return 100;
      }
      // function addSomeNumber(num){
      //   return num+100
      // }
      // function addSomeNumber(num,num1){
      //   return num+100+num1
      // }
      console.log(addSomeNumber(1, 2));
    },
    addSelf() {
      let itemList = [];
      itemList.push([{ caseId: this.id++ }]);
      console.log(itemList, "itemList");
    },
  }
};
</script>

<style lang="less" scoped>
</style>