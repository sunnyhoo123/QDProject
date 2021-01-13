<template>
  <div class="common">
    <!-- 绘制铅笔 -->
    <div class="pencil">
      <span class="taper"></span>
      <span class="barrel">2B</span>
      <span class="eraser"></span>
    </div>
    <!-- 伪类(Pseudo-classes) -->
    <div class="pseudos">
      <p class="first">
        伪类可以看作以选中元素为基准点，此元素的一些状态或属性。
        chrome消除 div 滚动条的宽度，通过箭头键直接控制滚动
      </p>
      <div class="onlyChid">
        <div>
          <p>段落A</p>
        </div>
        <div class="not">
          <p>段落1</p>
          <p>段落2</p>
          <span>span1</span>
        </div>
      </div>
      <div></div>
    </div>
    <div class="css-plus">
      <div>
        <span class="css-1">文本1</span>
        <span>文本2</span>
      </div>
      <p :class="['css-2', 'css_word-2', 'justify']">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
const defaultPassage = `Things will come to you as it is planned for you.
The firmer you grip, the easier you lose. We’ve tried and cherished, we have a clear conscience. 
Let the fate take care of the rest. --是你的，就是你的。越是紧握，越容易失去。我们努力了，珍惜了，问心无愧。其他的，交给命运。`

export default {
  //组件名
  name: "Common",
  //实例的数据对象
  data() {
    return {
      msg: defaultPassage
    };
  },
  methods: {}
};
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
.common {
  .pseudos {
    .first::first-line {
      color: lightcoral;
    }
    p::first-letter {
      color: lightgreen;
    }
    ::selection {
      background: red;
    }
    >:empty {
      border: 2px solid orange;
    }
    .onlyChid :only-child {
      background: palevioletred;
    }
    .not :not(span) {
      color: purple;
    }
  }
  .pencil {
    position: relative;
    display: flex;
    width: 50em;
    height: 3.5em;
    transform-origin: 150% center;
    .taper {
      width: 4em;
      // background: #000;
      &::before, &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: calc(3.5em / 2) 4em calc(3.5em / 2) 0;
        border-color: transparent;
        left: 0;
      }
      &::before {
        border-right-color: burlywood;
      }
      &::after {
        border-right-color: #111;
        transform-origin: left;
        transform: scale(0.3)
      }
    }
    .barrel {
      width: 40em;
      background-color: rgb(7, 150, 7);
      border-top: 1em solid rgb(9, 179, 9);
      border-bottom: 1em solid rgb(0, 128, 0);
      color: silver;
      line-height: 1.5em;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .eraser {
      position: relative;
      width: 6em;
      background: pink;
      border-top: 1em solid pink;
      border-bottom: 1em solid lightcoral;
      border-radius: 0 0.5em 0.5em 0;
      &::before {
        content: '';
        position: absolute;
        top: -1em;
        left: 0;
        width: 1.5em;
        height: 1.5em;
        background-color: silver;
        border-top: 1em solid lightgray;
        border-bottom: 1em solid gray;
      }
    }
  }
  .css-plus {
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
  
}

</style>