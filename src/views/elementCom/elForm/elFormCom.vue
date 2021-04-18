<template>
  <div class="elFormCom">
    <el-form inline>
      <el-form-item label="表单+子组件（popover+input+tree）：">
        <select-tree :options="options" v-model="selected" :treeProps="defaultProps" @selected="selectedTest"></select-tree>
      </el-form-item>
    </el-form>
    <neomorphicForm></neomorphicForm>
  </div>
</template>

<script>
import selectTree from "@/components/elSelectTree/elSelectTree.vue" 
import neomorphicForm from "./components/NeomorphicForm" 

export default {
  //组件名
  name: "ElFormCom",
  //组件
  components: {
    selectTree,
    neomorphicForm
  },
  //过滤器
  filters:{

  },
  //数组或对象，用于接收来自父组件的数据
  props: {

  },
  //实例的数据对象
  data() {
    return {
      // 默认选中值
      selected: "A",
      // 数据默认字段
      defaultProps: {
        parent: "parentId",   // 父级唯一标识
        value: "id",          // 唯一标识
        label: "label",       // 标签显示
        children: "children", // 子级
      },
      // 数据列表
      options: [
        {
          parentId:"0",
          id:"A",
          label: "label-A",
          children: [
            {
              parentId: "A",
              id: "A-1",
              label: "label-A-1",
            },
          ],
        },
        {   
          parentId:"1",
          id:"B",
          label: "label-B",
          children: [
            {
              parentId: "B",
              id: "B-1",
              label: "label-B-1",
            },
          ],
        },
      ],
    }
  },
  //计算
  computed: {

  },
  //监视
  watch: {

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
    selectedTest(args){
      console.log(args,"123");
    }
  },
}
</script>


<style lang="less" scoped>

</style>