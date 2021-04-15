<template>
  <div id="ztree">
    <ul id="treeDemo" class="ztree" @select="zTreeOnClick"></ul>
    <el-button @click="checkAll">全选</el-button>
    <el-button @click="uncheckAll">全不选</el-button>
    <el-button type="primary" icon="el-icon-back" circle @click="getNode"></el-button>
    <el-button type="primary" icon="el-icon-right" circle></el-button>
  </div>
</template>

<script>
import $ from "jquery";
// import "ztree";
// import "ztree/css/zTreeStyle/zTreeStyle.css";
export default {
  //组件名
  name: "Ztree",
  //实例的数据对象
  data() {
    return {
      treeObj: null,
      checkNodes: [],
      nodeData: [
        {
          name: "1",
          open:true,
          children: [
            { name: "1-1" },
            { name: "1-2", isHidden: true },
          ],
        },
        {
          name: "2",
          children: [
            { name: "2-1" },
            { name: "2-2" },
          ],
        }
      ],
      setting:{
        view: {
          showLine: false,
          showIcon: false
        },
        data: {
          key: {
            isHidden: "isHidden",
          },
          simpleData: {
            enable: true
          }
        },
        check: {
          enable: true,
          autoCheckTrigger: true,
          chkStyle: "checkbox",
          chkboxType: { "Y": "ps", "N": "ps" }
        },
        callback: {
          onClick: this.getFileDesc,
          onCheck: this.zTreeOnCheck
        },
      },
    }
  },
  mounted() {
    let nodeData = this.nodeData
    this.treeObj = $.fn.zTree.init($("#treeDemo"), this.setting, nodeData);
    console.log(this.treeObj, 9)
  },
  //方法
  methods: {
    checkAll() {
      this.treeObj.checkAllNodes(true);
    },
    uncheckAll() {
      this.treeObj.checkAllNodes(false);
    },
    getFileDesc(event, treeId, treeNode) {
      console.log(event + ", " + treeId + "," + treeNode, 123)
    },
    zTreeOnCheck(event, treeId, treeNode) {
      this.checkNodes.push(treeNode)
      console.log(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked)
    },
    zTreeOnClick() {
      console.log(1232323);
    },
    getNode() {
      var zTree = $.fn.zTree.getZTreeObj("treeDemo");
      let nodes = zTree.getSelectedNodes();
      let nodes2 = zTree.getNodesByParam("isHidden", true);
      console.log(zTree, nodes, nodes2)
      // zTree.showNodes(nodes2);
      zTree.hideNodes(nodes);
    }
  },
}
</script>

<style lang="scss" scoped>
#ztree {
  border: 1px solid springgreen;
}
</style>