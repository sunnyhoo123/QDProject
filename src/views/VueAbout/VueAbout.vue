<template>
  <div class="vue-about">
    <!-- <div class="headerWrap">
      <el-page-header content="详情页面" @back="goBack"></el-page-header>
    </div> -->
    <div class="sideBar">
      <ul>
        <li v-for="(item, index) in menuList" :key="item.title" :data-scroll="item.dataScroll">
          <!-- <h4 v-if="item.type === 'level1'">{{ item.title }}</h4> -->
          <a :class="{ active: index === activeAnchor }" @click="goAnchor(`#anchor-${index}`, index)" >{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div :class="[activeClass, errorClass, 'class-array', 'flex']">绑定HTML Class</div>
      <router-link to="/vueabout/parent">parent</router-link>
      <router-link to="/vueabout/confirm">confirm</router-link>
      <router-link to="/vueabout/upload">upload</router-link>
      <!-- 动态路由 -->
      <el-tag>
        <router-link to="/vueRouter/foo">foo</router-link>
        <router-link to="/vueRouter/bar">动态路径参数(dynamic segment)</router-link>
      </el-tag>

      <div class="child">
        <router-view></router-view>
      </div>
      <!-- Vue computed -->
      <div class="computed">
        <el-input v-model="toCalc" placeholder="请输入要翻转的文字" class="input-width"></el-input>
        <span>computed后的值：{{ reversedMessage }}</span>
      </div>
      <!-- Vue 事件处理 -->
      <!-- v-on:click.self.prevent 会阻止对元素自身的点击，点击div3，会alert3,alert1,跳转到/#。只阻止了alert(2)。 -->
      <div @click="alert(1)">
        123
        <a href="/#" @click.self.prevent="alert(2)">
          456
          <div @click="alert(3)">789</div>
        </a>
      </div>
      <!-- v-on:click.prevent.self 会阻止所有的点击，点击div3，会alert3,alert1。不但阻止了alert(2)，还阻止了a的默认跳转 -->
      <div @click="alert(1)">
        123
        <a href="/#" @click.prevent.self="alert(2)">
          456
          <div @click="alert(3)">789</div>
        </a>
      </div>
      <!-- Vue nextTick -->
      <!-- 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中 -->
      <!-- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中 -->
      <div ref="msgDiv">{{ msg }}</div>
      <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
      <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
      <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
      <el-button @click="changeMsg">Change the Message</el-button>
      <input v-model="formData['name']" />
      <el-button @click="changeFormData">123</el-button>
      <div>{{ now }}</div>
      <div class="article-wrap">
        <h3 v-for="(id, index) in article" :key="id" :id="id">来{{ index }}篇文章查看超长</h3>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  // 组件名
  name: "Vueabout",
  // 实例的数据对象
  data() {
    return {
      toCalc: "",
      msg: "test nextTick",
      msg1: "",
      msg2: "",
      msg3: "",
      activeClass: "active",
      errorClass: "text-danger",
      formData: {
        name: "",
        sex: 0
      },
      activeAnchor: 0
    };
  },
  computed: {
    // ...mapGetters(['contractExecListGetter']),
    reversedMessage() {
      return this.toCalc
        .split("")
        .reverse()
        .join("");
    },
    now() {
      return Date.now();
    }
    // reversedMessage:{
    //   get:function(){
    //     return this.msg
    //   },
    //   set:function(newValue){
    //     let names = newValue.split(' ');
    //     console.log(names)
    //   }
    // }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  created() {
    this.menuList = [
      { title: "计算属性和侦听器", dataScroll: "sdf", type: "level2" },
      { title: "class与Style绑定", dataScroll: "eee", type: "level2" },
      { title: "条件渲染", dataScroll: "eee", type: "level2" },
      { title: "列表渲染", dataScroll: "eee", type: "level2" },
      { title: "事件处理", dataScroll: "eee", type: "level2" },
      { title: "表单输入绑定", dataScroll: "eee", type: "level2" },
      // { title: "深入", dataScroll: "eee", type: "level1" },
      { title: "插槽", dataScroll: "eee", type: "level2" },
      // { title: "规模化", dataScroll: "eee", type: "level1" },
      { title: "路由", dataScroll: "eee", type: "level2" },
      // { title: "状态管理", dataScroll: "eee", type: "level2" },
    ]
    this.article = [
      "anchor-0",
      "anchor-1",
      "anchor-2",
      "anchor-3",
      "anchor-4",
      "anchor-5",
      "anchor-6",
      "anchor-7",
    ]
    // console.log(this.$route.params.id);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },

  // 方法
  methods: {
    ...mapActions(["increment"]),
    // ...mapMutations(['increment']),
    goBack() {
      this.$router.push({
        path: "/"
      });
    },
    alert(val) {
      console.log(
        "%c%s",
        "color: red; background: yellow; font-size: 24px;",
        val
      );
    },
    changeFormData() {
      console.log(this.formData);
    },
    changeMsg() {
      this.msg = "chang";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
      this.increment();
    },
    // 滚动时联动菜单
    handleScroll() {
      //获取鼠标滚动距离
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      let heightArr = [];
      // Array.from 或 扩展运算符（...）可以将某些数据结构转为数组
      let alldom = [...document.getElementsByTagName("h3")];
      alldom.forEach(arr => {
        heightArr.push(arr.offsetTop);
      });
      //循环遍历数组，将鼠标移动距离与各dom距顶部距离进行比较，给activeAnchor赋值
      let len = heightArr.length;
      let topHeight = document.documentElement.clientHeight - 50;
      for (var i = 0; i < len; i++) {
        if (heightArr[i] < scrolled + topHeight && scrolled + topHeight < heightArr[i + 1]) {
          this.activeAnchor = i;
        }else if(scrolled + topHeight > heightArr[len -1]) {
          this.activeAnchor = len -1
        }
      }
      if(scrolled === 0) {
        this.activeAnchor = 0;
      }
      console.log(scrolled)
    },
    //锚点跳转
    goAnchor(selector, index) {
      this.activeAnchor = index;
      window.removeEventListener("scroll", this.handleScroll)
      let scrollLength = 300 + index * 50;
      // document.querySelector(selector).scrollIntoView();
      document.documentElement.scrollTop = scrollLength;
      setTimeout(() => {
        window.addEventListener("scroll", this.handleScroll)
      }, 500)
    }
  }
};
</script>

<style scoped lang="scss">
// scss语法
@import "style/var.scss";
@import "style/global.scss";
@mixin fontStyle($backgroundColor: #0d0, $fontSize: 14px) {
  color: $font-color;
  font-size: $fontSize;
  // background: rgba(59, 71, 100, 1); 有默认值时可以不传值
}
$font-color: #42b983;

.vue-about {
  padding-top: 48px;
  .headerWrap {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 12px;
    z-index: 20;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    transition: background-color 0.3s ease-in-out;
  }
  a:hover {
    color: #0d0;
  }
  h4 {
    font-weight: 600;
    color: #273849;
  }
  .sideBar {
    position: fixed;
    z-index: 10;
    top: 61px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .article-wrap {
    h3 {
      height: 50px;
      font-weight: 600;
      color: #273849;
    }
  }
  .content {
    position: relative;
    padding: 35px 0;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 50px;
  }
  .active {
    font-weight: bold;
    color: $font-color;
    
  }
  .text-danger {
    font-size: 20px;
  }
  .class-array {
    height: 30px;
  }
  .child {
    @include fontStyle($fontSize: 16px);
  }
  .flex {
    align-items: center;
    @extend .display-flex;
  }
  .computed {
    @extend .flex;
    .input-width {
      width: 300px;
    }
  }
}
</style>
