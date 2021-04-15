<template>
  <div>
    <el-input v-model="inputText" @input="filterTree"></el-input>
    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>

<script>
import _ from "lodash";
import $ from "jquery"
import "@ztree/ztree_v3/js/jquery.ztree.core.js"
import "@ztree/ztree_v3/js/jquery.ztree.excheck.js"
import "@ztree/ztree_v3/css/zTreeStyle/zTreeStyle.css"
import { zTreeNodes } from "../mock"
// import { filterTree } from  "@/utils/Filter/treeFilter.js"
export default {
  name: "Ztree",
  data() {
    return {
      inputText: "",
      setting: {
        check: {
          autoCheckTrigger: true,
          enable: true
        }
      },
      treeObj: {},
      filterTreeList: []
    }
  },
  mounted() {
    this.treeObj = $.fn.zTree.init($("#treeDemo"), this.setting, zTreeNodes);
    this.treeObj.expandAll(true);
    let a = this.treeObj.getNodes();
    console.log(a);
  },
  methods: {
    filterTree() {
      console.log( 88);
      // this.filterTreeList = _.cloneDeep(this.treeObj.transformToArray(this.treeObj.getNodes()));
      // console.log(this.filterTreeList, 88);
      // const reg = new RegExp(`(${this.inputText.replace(/([/*.\\])/g, "\\$1")})`, "ig");
      // const matcher = (str) => reg.test(str);
      // const highlight = (str) => str.replace(reg, `<span style="color:#fc652f;margin:0">$1</span>`);
      // const filter = (nodes) => {
      //   nodes.forEach(node => {
      //     const { main, sub, name, code, children } = node;
      //     // let main = main;
      //     // let sub = sub;
      //     if(matcher(name) || matcher(sub)) {
      //       // if(!node.isHidden) {
      //       //   this.setVisible(node.getPath(), true);
      //       // }
      //       this.setVisible(node.getPath(), true);
      //     }else {
      //       this.setVisible([node], false);
      //     }
      //     // node.fullName = `${highlight(main)}`;
      //     node.name = `${highlight(name)}`;
      //     this.treeObj.updateNode(node, false);
      //     if(children && children.length) {
      //       filter(node.children);
      //     }
      //   })
      // }
      // // filter(this.treeObj.transformToZtreeNodes(this.filterTreeList.filter(i => i.isHidden === false)));
      // console.log(this.treeObj, 900)
      // filter(this.treeObj.transformTozTreeNodes(this.filterTreeList));
      // this.treeObj.expendAll(true);
    }
  }
}
</script>

<style>

</style>