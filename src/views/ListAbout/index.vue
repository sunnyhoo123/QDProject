<template>
  <div id="list-about">
    <el-page-header content="详情页面" @back="goBack">
    </el-page-header>
    <div>Array数组专场</div>
    <el-button type="primary" @click="findFun">find方法</el-button>
    <el-button type="primary" @click="filterFun">filter方法</el-button>
    <el-button type="primary" @click="forEachFun">forEach方法</el-button>
    <el-button type="primary" @click="fromFun">from方法</el-button>
    <el-button type="primary" @click="mapFun">map方法</el-button>
    <el-button type="primary" @click="sortFun">sort方法</el-button>
    <el-button type="primary" @click="reverseFun">reverse方法</el-button>
    <el-button type="primary" @click="testSet">响应更改数据</el-button>
    <el-button type="primary" @click="unique">数组去重</el-button>
    <el-button type="primary" @click="extension">常用技巧</el-button>
    <div>{{ example2 }}</div>
    <template v-for="(item,index) of example2">
      <span :key="index">{{ item }},</span>
    </template>
    <router-link to="./observelist">观察数组</router-link>
  </div>
</template>

<script>
export default {
  name: "Listabout",
  data(){
    return{
      tempArray:[],
      example1:{
        items:{
          messages:23,
          messages1:123,
          messages2:3333,
        }
      },
      example2:["123","324","323","34242","12345"],
      example3:[{ latitude:1,longitude:32 },{ latitude:2 },{ latitude:3 },{ latitude:4 },{ latitude:5 }],
      example4:[2,0,1,15,3,7],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    findFun(){
      //find只查出第一个符合条件的结果,且结果为数组中的value类型，而filter的结果是数组
      let findResult = this.example4.find((value)=>{
        return value > 1
      })
      console.log(findResult) // 15
    },
    filterFun(){
      // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      // 注意： filter() 不会对空数组进行检测。
      // 注意： filter() 不会改变原始数组。
      let filterResult = this.example4.filter(function(value){ // eslint-disable-line
        return value >= 1
      })

      // 返回的是指定的值，而不是指定值在字符串中的位置
      let filterResult1 = this.example2.filter(function(value){
        return value.match("123")
      })

      // 从数组中删除虚值
      const mixedArr = [ 0, "blue", "", NaN, 9, true, undefined, "white", false];
      const trueArr = mixedArr.filter(Boolean);

      console.log(filterResult, filterResult1, trueArr)
    },
    mapFun(){
      // map与filter的区别是：map会对每个元素进行处理，并返回每个元素，而filter只会返回符合条件的元素
      this.tempArray = this.example3.map((item)=>{
        return {
          ...item,   //map这样写不影响原有对象
          latitude:item.latitude + 0.1
        }
      })
      console.log(this.tempArray)
    },
    forEachFun(){
      this.example3.forEach(function(item, index){ // eslint-disable-line
        item.latitude = item.latitude +0.1
      })
      console.log(this.example3,"temp")
    },
    fromFun(){
      // from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
      // 如果对象是数组返回 true，否则返回 false
      const arr = Array.from([1, 2, 3], x => x * 10);
      console.log(arr)  //[10, 20, 30]
    },
    sortFun(){
      this.example4.sort((a,b)=>(
        a-b
      ))
      console.log(this.example4) //改变了原来的数组
      // 冒泡排序
      for(let i=0;i<this.example4.length-1;i++) {
        for(let y=0;y<this.example4.length-1-i;y++) {
          let a = this.example4[y];
          let b = this.example4[y+1];
          if(a > b) {
            this.example4[y] = this.example4[y+1];
            this.example4[y+1] = a;
          }
        }
      }
      console.log(this.example4) //改变了原来的数组
    },
    testSet(){
      // v-for 列表渲染，数组无法检测：当你利用索引直接设置一个项时；当你修改数组的长度时
      // this.$set(this.example2,2,'222')
      this.example2.length = 3;
      this.example2[1]="666"
      console.log(this.example2)
    },
    reverseFun(){
      // reverse() 方法用于颠倒数组中元素的顺序。
      console.log(this.example4.reverse())  // [7, 3, 15, 1, 0]

      // 反转字符串
      let s1,s = "hello 123"
      s1 = Array.prototype.map.call(s,(x)=>{
        return x
      }).reverse().join("")
                
      console.log(s1)  // 321 olleh
    },
    unique(){
      Array.prototype.uniq = function() {
        var arr = [];
        var flag = true;
        console.log(this, "this")
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
      let originArray = [false, true, undefined, null, NaN, 0, 1, {}, {},[],[], "a", "a", NaN];
      console.log(this.unique1(originArray))
      console.log(originArray.uniq());
    },
    unique1(arr) {
      if(!Array.isArray(arr)){
        console.log("type errow!");
        return;
      }
      return Array.from(new Set(arr));
    },
    extension() {
      // 数组转化位对象（Array to Object）
      const arr = [1,2,12];
      const obj = { ...arr };
      console.log(obj)
    }
  }
}
</script>

<style>

</style>
