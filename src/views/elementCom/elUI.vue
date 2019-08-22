<template>
  <div class="elUI">
    <!-- <slot name="header">HelloWorld不分发给slot</slot> -->
    <!-- <slot text="作用域插槽">1</slot> -->
    <el-container class="elContainer">
      <!-- <el-aside width="240px">
                <el-col :span="12">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-aside> -->
      <!-- 左侧使用elLH子组件代替el-aside -->
      <elLH></elLH>
      <el-container>
        <el-header class="headerWrapper">
          <el-breadcrumb separator="=>">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/elUI' }">elUI页面</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">a链接跳转至首页</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-button type="text" @click="testRouter">返回到上一个Vue</el-button>
        </el-header>
        <div class="body">
          <div class="main">
          </div>
          <router-view></router-view>
        </div>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import fsObj from "@/services/fs-service";
import elLH from "@/components/elLH/elLH.vue";
    
export default {
  //组件名
  name: "ElUI",
  //组件
  components: {
    elLH
  },
  //过滤器
  filters:{

  },
  //数组或对象，用于接收来自父组件的数据
  props: {
    // status
    // :{
    //             type: Array,
    //             default:function(){
    //                 return [];
    //             }
    //         }
  },
  //实例的数据对象
        
  data() {
    return {
      message: "我是子组件",
    }
  },

  //计算
  computed: {

  },
  //监视
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName
    },
  },
  //生命周期函数
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  //方法
  methods: {
    testRouter(){
      this.$router.push({
        path:"/"
      })
    },
  },
  //自定义指令
  directive:{

  }
}
</script>

<!--
	作者：liangyanxiangde@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>
    // .headerWrapper{
    //     background: url("./images/demo9.jpg");
    // }
    .elUI, .elContainer {
        height: 100%;
    }
    .clear{
        clear: both;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        // text-align: center;
        // line-height: 60px;
    }
  
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
  
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .main{
        // display: flex;
        // justify-content: flex-start;
        width: auto;
    }
    .body{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .div1{
        height: 40px;
        background: #00FF00;
    }
    .p1{
        width: 100px;
        background: #B3C0D1;
    }
    .p2{
        background: #123344;
    }
</style>