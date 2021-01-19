<template>
  <div class="common">
    <el-select v-model="curPage" placeholder="请选择" class="topSelect">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <!-- 绘制铅笔 -->
    <div v-show="isShow('pencil')" class="pencil">
      <span class="taper"></span>
      <span class="barrel">2B</span>
      <span class="eraser"></span>
    </div>
    <!-- 伪类(Pseudo-classes) -->
    <div v-show="isShow('pseudo')" class="pseudos">
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
    <animalCom v-show="isShow('animalCom')"></animalCom>
    <layoutCom v-show="isShow('layoutCom')"></layoutCom>
    <advancedCom v-show="isShow('advancedCom')"></advancedCom>
  </div>
</template>

<script>
import layoutCom from "./components/LayoutCom";
import advancedCom from "./components/advanced";
import animalCom from "./components/animal.vue"

export default {
  //组件名
  name: "Common",
  components: {
    layoutCom,
    animalCom,
    advancedCom,
  },
  //实例的数据对象
  data() {
    return {
      curPage: "pencil",
      options: [
        {
          value: "pencil",
          label: "css画画"
        }, {
          value: "pseudo",
          label: "伪类"
        }, {
          value: "advancedCom",
          label: "技巧"
        }, {
          value: "layoutCom",
          label: "定位"
        }, {
          value: "animalCom",
          label: "动画"
        }
      ],
    };
  },
  methods: {
    isShow(com) {
      return this.curPage === com;
    }
  }
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
  
  .topSelect {
    float: right;
    margin-top: -50px;
    margin-right: 10px;
  }
}

</style>