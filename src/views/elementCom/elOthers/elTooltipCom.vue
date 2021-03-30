<template>
  <div class="elTooltipCom">
    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <span slot="content">多行信息</span>
      <el-button>上右</el-button>
    </el-tooltip>
    <!-- 手写tooltip：HTML5规范允许使用：data-* 属性来嵌入自定义数据 -->
    <p class="text">
      请你打开电视看看，多少人为生命在努力勇敢的走下去 ——
      <span class="tooltip" data-tip="《稻香》">周杰伦</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ElTooltipCom",
  data() {
    return {
     
    };
  },
  created() {
    
  },
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
.text {
  font-size: 16px;
  text-align: center;
  .tooltip {
    position: relative;
    font-size: 14px;
    cursor: default;
    &::before {
      content: attr(data-tip); /* 注意data-tip不加引号 */
      position: absolute;
      top: -37px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      padding: 4px 8px;
      background-color: #303133;
      color: #FFF;
      font-size: 12px;
      white-space: nowrap; // 防止父元素宽度不够，文字换行
      border-radius: 4px;
    }
    &::after {
      content: '';
      position: absolute;
      top: -18px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      display: none;
      width: 10px;
      height: 10px;
      background-color: #303133;
      border-radius: 2px;
    }
    &:hover::before,
    &:hover::after {
      display: block;
    }
  }
}
</style>