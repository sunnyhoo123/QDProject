<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="文本" name="first">
        <div class="css-plus">
          <div>
            <span class="css-1">文本1</span>
            <span>文本2</span>
          </div>
          <p :class="['css-2', 'css_word-2', 'justify']">{{ msg }}</p>
        </div>
        <div ref="expand" class="expands">选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</div>
        <button @click="isEllipsis">详情</button>
      </el-tab-pane>
      <!-- 三栏布局中耳熟能详的就是圣杯和双飞翼布局。两者都是两边固定宽度，中间自适应，并且主要内容要优先渲染，按照DOM从上至下的加载原则，中间的自适应部分要放在前面 -->
      <el-tab-pane label="圣杯布局" name="second">
        <!-- 核心思想：使用浮动布局，用padding为了左右元素留空间，灵活使用margin的负值和相对定位让元素移动到相应的位置 -->
        <div class="container">
          <div class="center">center</div>
          <div class="left">left</div>
          <div class="right">right</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="双飞翼布局" name="third">
        <!-- 核心思想：前部分与圣杯一样，在给左右两边元素留出位置的思路有区别。圣杯是设置了父元素的padding，之后利用relative。双飞翼则多加了一个div，将中间自适应部分包起来，利用子div的margin来给左右元素留空间 -->
        <div class="container-fly">
          <div class="center-container">
            <div class="center">fly center</div>
          </div>
          <div class="left">left</div>
          <div class="right">right</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const defaultPassage = `Things will come to you as it is planned for you.
The firmer you grip, the easier you lose. We’ve tried and cherished, we have a clear conscience. 
Let the fate take care of the rest. --是你的，就是你的。越是紧握，越容易失去。我们努力了，珍惜了，问心无愧。其他的，交给命运。`

export default {
  //组件名
  name: "Advanced",
  //实例的数据对象
  data() {
    return {
      msg: defaultPassage,
      activeName: "first"
    }
  },
  methods: {
    isEllipsis(){
      // scrollWidth和clientWidth判断是否出现省略号
      const sw = this.$refs.expand.scrollWidth;
      const cw = this.$refs.expand.clientWidth;
      // 如果是多行则可以用scrollHeight判断
      const sh = this.$refs.expand.scrollHeight;
      const ch = this.$refs.expand.clientHeight;
      console.log(sw ,cw, sh, ch )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "style/var.scss";
@import "style/global.scss";
@mixin fontStyle($backgroundColor: #0d0, $fontSize: 14px) {
  color: $font-color;
  font-size: $fontSize;
  // background: rgba(59, 71, 100, 1); 有默认值时可以不传值
}
$font-color: #42b983;
// 文本
.css-plus {
  padding-bottom: 24px;
  // 解决inline-block元素设置overflow: hidden属性导致相邻行内元素向下偏移
  .css-1 {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
  }
  .css-2 {
    width: 200px;
    // @include ellipsis;
    // @include mEps;
  }
  // 不换行
  .css_word-1 {
    white-space: nowrap;
  }
  // 自动换行
  .css_word-2 {
    // word-wrap: break-word;
    // word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 overflow-wrap。
    overflow-wrap: break-word;
    word-break: normal;
  }
  // 强制换行
  .css_word-3 {
    word-break: break-all;
  }
  .justify {
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
    -moz-text-align-last: justify;
    -webkit-text-align-last: justify;
  }
}
.expands {
  width: 300px;
  // @include eps;
  @include mEps;
}
// 圣杯布局
.container {
  padding: 0 200px 0 100px;
  overflow: hidden;
  .center {
    width: 100%;
    background: #94E8FF;
  }
  .left {
    width: 100px;
    background: #FFB5BF;
    margin-left: -100%;
    position: relative;
    left: -100px;
  }
  .right {
    width: 200px;
    background: #8990D5;
    margin-left: -200px;
    position: relative;
    right: -200px;
  }
  .center, .left, .right {
    height: 150px;
    float: left;
  }
}

// 双飞翼布局
.container-fly {
  overflow: hidden;
  .center-container {
    width: 100%;
    float: left;
    .center {
      background: #94E8FF;
      height: 150px;
      margin-left: 100px;
      margin-right: 200px;
    }
  }
  .left {
    width: 100px;
    height: 150px;

    background: #FFB5BF;
    margin-left: -100%;
  }
  .right {
    width: 200px;
    height: 150px;
    background: #8990D5;
    margin-left: -200px;
  }
  .center-container, .left, .right {
    float: left;
  }
}
</style>