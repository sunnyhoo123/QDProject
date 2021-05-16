<template>
  <div id="list-about">
    <el-button v-for="item in btnObj['es5']" :key="item.methodName" type="text" @click="item.func">{{ item.methodName }}</el-button>
    <fieldset>
      <legend>JavaScript 版本:ECMAScript 6</legend>
      <!-- ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组、它们都返回一个遍历器对象 -->
      <el-button v-for="item in btnObj['es6']" :key="item.methodName" type="text" @click="item.func">{{ item.methodName }}</el-button>
    </fieldset>
    <el-button type="primary" @click="testSet">响应更改数据</el-button>
    <el-button type="primary" @click="unique">数组去重</el-button>
    <el-button type="primary" @click="extension">常用技巧</el-button>
    <el-button type="primary" @click="queryApi">接口获取数组</el-button>
    <div>{{ stringList }}</div>
    <template v-for="(item,index) of stringList">
      <span :key="index">{{ item }},</span>
    </template>
    <router-link to="./observelist">观察数组</router-link>
  </div>
</template>

<script>
import api from "api/eolinker.js"
import { downloadFile } from "utils/common.js"
const originArray = [false, true, undefined, null, NaN, 0, 1, {}, {},[],[], "a", "a", NaN, { name: 1 },{ name:1 }];

export default {
  name: "Listabout",
  data(){
    return{
      numList: [2,0,1,15,3,7],
      fruits: ["Banana", "Apple", "Orange", "Mango", "Apple"],
      stringList: ["123","324","323","34242","12345"],
      objectList:[
        { latitude:1, longitude:32 },
        { latitude:2 },{ latitude:3 },{ latitude:4 },{ latitude:5 }
      ],
      apiData: [],
      btnObj:{
        es5: [
          { methodName: "concat", func: this.concatFun },
          { methodName: "every", func: this.everyFun },
          { methodName: "filter", func: this.filterFun },
          { methodName: "forEach", func: this.forEachFun },
          { methodName: "map", func: this.mapFun },
          { methodName: "indexOf", func: this.indexOfFun },
          { methodName: "lastIndexOf", func: this.lastIndexOfFun },
          { methodName: "join", func: this.joinFun },
          { methodName: "reverse", func: this.reverseFun },
          { methodName: "isArray", func: this.isArrayFun },
          { methodName: "pop", func: this.popFun },
          { methodName: "push", func: this.pushFun },
          { methodName: "shift", func: this.shiftFun },
          { methodName: "unshift", func: this.unshiftFun },
          { methodName: "reduce", func: this.reduceFun },
          { methodName: "reduceRight", func: this.reduceRightFun },
          { methodName: "slice", func: this.sliceFun },
          { methodName: "some", func: this.someFun },
          { methodName: "sort", func: this.sortFun },
          { methodName: "splice", func: this.spliceFun },
          { methodName: "toString-", func: this.toStringFun },
          { methodName: "valueOf-", func: this.valueOfFun },
        ],
        es6: [
          { methodName: "entries", func: this.entriesFun },
          { methodName: "keys", func: this.keysFun },
          { methodName: "values", func: this.valuesFun },
          { methodName: "find", func: this.filterFun },
          { methodName: "findIndex", func: this.findIndexFun },
          { methodName: "fill", func: this.fillFun },
          { methodName: "from", func: this.fromFun },
          { methodName: "includes", func: this.includesFun },
        ]
      } 
    };
  },
  methods: {
    concatFun(){
      // 一道面试题：传递两个参数m，n，返回长度为m，所有元素都为n的数组，要求不能用循环
      const fn = (m, n) => {
        return m ? fn(m - 1, n).concat(n) : [];
      }
      console.log(fn(3, 6));
    },
    everyFun() {
      const checkAdult = this.numList.every(i => i > 3);
      console.log(checkAdult);
    },
    entriesFun() {
      console.log(this.fruits.entries());
      for (let [index, elem] of this.fruits.entries()) {
        console.log(index, elem);
      }
      let entries = this.fruits.entries();
      console.log(entries.next().value);
    },
    valuesFun(){
      for (let elem of ["a", "b"].values()) {
        console.log(elem);
      }
    },
    keysFun(){
      for (let elem of ["a", "b"].keys()) {
        console.log(elem);
      }
    },
    fillFun() {
      const newL = this.fruits.fill("Runoob");
      const newLi = this.numList.fill("Runoob", 2, 4);
      console.log(newL, newLi);
    },
    findFun(){
      //find只查出第一个符合条件的结果,且结果为数组中的value类型，而filter的结果是数组
      let findResult = this.numList.find((value)=>{
        return value > 1
      })
      console.log(findResult) // 15
    },
    // 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数. 没有符合条件的元素返回 -1
    // findIndex() 并没有改变数组的原始值, 对于空数组，函数是不会执行的
    findIndexFun() {
      const newLi = this.numList.findIndex(i => i > 4);
      console.log(newLi);
    },
    filterFun(){
      // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      // 注意： filter() 不会对空数组进行检测。
      // 注意： filter() 不会改变原始数组。
      let filterResult = this.numList.filter(function(value){ // eslint-disable-line
        return value >= 1
      })

      // 返回的是指定的值，而不是指定值在字符串中的位置
      let filterResult1 = this.stringList.filter(function(value){
        return value.match("123")
      })

      // 从数组中删除虚值
      const mixedArr = [ 0, "blue", "", NaN, 9, true, undefined, "white", false];
      const trueArr = mixedArr.filter(Boolean);

      console.log(filterResult, filterResult1, trueArr)
    },
    includesFun() {
      [1, 2, NaN].includes(NaN); // true
      // 如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索
      // computed index 是 fruits的长度5 + (-100) = -95
      this.fruits.includes("Banana", -100); // true
    },
    isArrayFun() {
      console.log(Array.isArray(this.fruits));
    },
    joinFun() {
      const energy = this.fruits.join(" and ");
      console.log(energy)
    },
    mapFun(){
      // map与filter的区别是：map会对每个元素进行处理，并返回每个元素，而filter只会返回符合条件的元素
      const tempArray = this.objectList.map((item)=>{
        return {
          ...item,   //map这样写不影响原有对象
          latitude:item.latitude + 0.1
        }
      })
      console.log(tempArray)
    },
    forEachFun(){
      this.objectList.forEach(function(item, index){ 
        item.latitude = item.latitude + index
      })
      console.log(this.objectList,"temp")
    },
    fromFun(){
      // from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
      // 如果对象是数组返回 true，否则返回 false
      const arr = Array.from([1, 2, 3], x => x * 10);
      console.log(arr)  //[10, 20, 30]
    },
    indexOfFun() {
      const num = this.fruits.indexOf("Apple", 2);
      console.log(num);
    },
    lastIndexOfFun() {
      var a = this.fruits.lastIndexOf("Apple", 3);
      console.log(a);
    },
    // 注意返回值：删除数组的最后一个元素并返回删除的元素
    popFun() {
      var a = this.fruits.pop();
      console.log(a, this.fruits);
    },
    shiftFun() {
      var a = this.fruits.shift();
      console.log(a, this.fruits);
    },
    // 注意返回值：末尾添加一个或多个元素，并返回新的长度
    pushFun() {
      var a = this.fruits.push("Kiwi","Lemon","Pineapple");
      console.log(a, this.fruits);
    },
    unshiftFun() {
      var a = this.fruits.unshift("Kiwi","Lemon","Pineapple");
      console.log(a, this.fruits);
    },
    // 对于空数组是不会执行回调函数的
    reduceFun() {
      const count = this.numList.reduce((total, currentValue) => {
        return total + currentValue
      })
      console.log(count);
    },
    // 对于空数组是不会执行回调函数的
    reduceRightFun() {
      const count = this.numList.reduceRight((total, currentValue) => {
        return total - currentValue
      })
      console.log(count);
    },
    // 注意： slice() 方法不会改变原始数组
    sliceFun() {
      var citrus = this.fruits.slice(1,3)
      // 截取倒数第三个（包含）到倒数第一个（不包含）的两个元素
      let myBest = this.fruits.slice(-3,-1);
      // 截取最后三个元素
      let myBest1 = this.fruits.slice(-3);
      console.log(citrus, myBest, myBest1)
    },
    someFun() {
      this.numList.some(i => i > 5); // true
    },
    sortFun(){
      this.numList.sort((a,b)=>(
        a-b
      ))
      console.log(this.numList) //改变了原来的数组
      // 冒泡排序
      for(let i=0;i<this.numList.length-1;i++) {
        for(let y=0;y<this.numList.length-1-i;y++) {
          let a = this.numList[y];
          let b = this.numList[y+1];
          if(a > b) {
            this.numList[y] = this.numList[y+1];
            this.numList[y+1] = a;
          }
        }
      }
      console.log(this.numList) //改变了原来的数组
    },
    spliceFun() {
      var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
      fruits1.splice(2,1,"Lemon","Kiwi");
      var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
      fruits2.splice(2,2);
      var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
      fruits3.splice(2);
      console.log(fruits1, fruits2, fruits3);
    },
    toStringFun() {
      const a = this.fruits.toString();
      console.log(a);
    },
    valueOfFun() {
      const a = this.fruits.valueOf();
      console.log(a);
    },
    testSet(){
      // v-for 列表渲染，数组无法检测：当你利用索引直接设置一个项时；当你修改数组的长度时
      // this.$set(this.stringList,2,'222')
      this.stringList.length = 3;
      this.stringList[1]="666"
      console.log(this.stringList)
    },
    reverseFun(){
      // reverse() 方法用于颠倒数组中元素的顺序。
      console.log(this.numList.reverse())  // [7, 3, 15, 1, 0]

      // 反转字符串
      let s1,s = "hello 123"
      s1 = Array.prototype.map.call(s,(x)=>{
        return x
      }).reverse().join("")
                
      console.log(s1)  // 321 olleh
    },
    unique(){
      // 对象无法去重
      Array.prototype.uniq = function() {
        var arr = [];
        var flag = true;
        console.log(this, "this is a list")
        this.forEach(function(item) {
        // 排除 NaN (重要！！！)
          if (item != item) {
            flag && arr.indexOf(item) === -1 ? arr.push(item) : "";
            flag = false;
          } else {
            arr.indexOf(item) === -1 ? arr.push(item) : ""
          }
        });
        return arr;
      };
      console.log(this.unique1(originArray))
      console.log(this.unique2(originArray))
      console.log(originArray.uniq());
    },
    unique1(arr) {
      if(!Array.isArray(arr)){
        console.log("type errow!");
        return;
      }
      // 对象无法去重
      return Array.from(new Set(arr));
    },
    unique2(arr) {
      var obj = {};
      return arr.filter((item) => {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
      });
    },
    extension() {
      // 数组转化位对象（Array to Object）
      const arr = [1,2,12];
      const obj = { ...arr };
      console.log(obj)
    },
    async queryApi() {
      const { data } = await api.queryList();
      const params = {
        id: 23
      }
      api.queryList({ ...params }).then(res => {
        console.log(res);
      }).catch(() => {
        this.$message.error("系统异常");
      });
      this.apiData = data.plan;
      api.download({ id: 23 }).then(res => {
        let blob = new Blob([res], { type: "application/octet-stream" });
        downloadFile(blob, "12.xlsx", this.$message);
      })
    }
  }
}
</script>

<style>

</style>
