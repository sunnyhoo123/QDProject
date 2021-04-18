<template>
  <div class="elDialogCom">
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
    <el-dialog :visible.sync="dialogTableVisible" title="收货地址">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      <div class="remTest">123</div>
    </el-dialog>
  </div>
</template>

<script>
import { gridData } from "./mock.js"

export default {
  name: "ElDialogCom",
  data() {
    return {
      gridData,
      dialogTableVisible: false,
      num: 1,
      screenWidth: document.body.clientWidth, // 屏幕宽度
    };
  },
  created() {
    
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
        console.log(this.screenWidth);
      })()
    }
    this.$nextTick(()=>{
      this.watchWidth();
      window.onresize = function() {
      // 动态设置HTML元素的font-size代码:
        var html = document.documentElement; //获取到html元素
        var hWidth = html.getBoundingClientRect().width;//获取到html的宽度
        if(hWidth > 640) hWidth = 640; // 当hWidth大于640时，则物理分辨率大于1280（这就看设备的devicePixelRatio这个值了），应该去访问pc网站了
        html.style.fontSize = hWidth/7.5 + "px"; //设置HTML的字体大小 font-size = 50px，1rem = 50px
      }});
  },
  methods: {
    watchWidth() {
      let a =this.num++;
      console.log(a)
    }
  },
};
</script>

<style>
  .remTest {
    width: 5rem;
  }
</style>