<template>
  <div class="bind-class">
    <!-- 绑定HTML Class-->
    <div :class="{
      activeClass,
      ac: activeClass,
      'text-size': true,
      'text-color': false,
      errorClass }"
    >对象语法</div>
    <div :class="classObject">绑定的数据对象不必内联定义在模板里</div>
    <a :class="claObject">使用计算属性</a>
    <div :class="[activeClass, errorClass, 'class-array']">数组语法</div>
    <!-- 当在一个自定义组件上使用 class property 时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖 -->
    <carousel class="baz">用在组件上</carousel>
    <!-- 绑定内联样式 -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">内联-对象</div>
    <div :style="styleObject">直接绑定到一个样式对象</div>
    <div :style="[styleObject, overridingStyles]">内联-数组</div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">多重值</div>
    <span title="整数">选择器</span>
    <input v-model="formData['name']" />
  </div>
</template>

<script>
import carousel from "@/components/Carousel"

export default {
  components: {
    carousel,
  },
  data() {
    return {
      activeClass: true,
      errorClass: "text-danger",
      classObject: {
        active: true,
        "text-danger": false
      },
      isActive: true,
      error: null,
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px"
      },
      overridingStyles: {
        margin: "10px"
      },
      formData: {
        name: "",
        sex: 0
      },
    };
  },
  computed: {
    claObject(){
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      }
    }
  },
  methods: {
    
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

.bind-class {
  padding-top: 48px;
  a:hover {
    color: #0d0;
  }
  h3 {
    font-weight: 600;
    color: #273849;
  }
  [title]{
    background: #42b983
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