<template>
  <div class="elPopoverCom">
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>
    <el-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </el-popover>
    <el-button v-popover:popover>focus 激活</el-button>
    <el-popover
      v-model="visible"
      placement="top"
      width="160">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
      </div>
      <el-button slot="reference">删除</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "ElPopoverCom",
  data() {
    return {
      visible: false
    };
  },
  created() {
    
  },
  methods: {
   
  },
};
</script>

<style>

</style>