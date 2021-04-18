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
        },
        data: {
          key: {
            name: "fullName",
          },
        },
        view: {
          nameIsHTML: true,
          showIcon: false
        },
        simpleData: {
          enable: true
        }
      },
      treeObj: {},
      filterTreeList: []
    }
  },
  mounted() {
    this.initTree();
  },
  methods: {
    initTree() {
      const formatName = (nodes) => {
        nodes.forEach(node => {
          const { name, children } = node;
          node.fullName = `${name}`
          if(children && children.length) {
            formatName(children);
          }
        })
      }
      formatName(zTreeNodes);
      console.log(zTreeNodes);
      this.treeObj = $.fn.zTree.init($("#treeDemo"), this.setting, zTreeNodes);
      let allNodes = this.treeObj.getNodes();
      console.log(allNodes);
      this.treeObj.expandAll(true);
    },
    filterTree() {
      this.filterTreeList = _.cloneDeep(this.treeObj.transformToArray(this.treeObj.getNodes()));
      console.log(this.filterTreeList, 88);
      const reg = new RegExp(`(${this.inputText.replace(/([/*.\\])/g, "\\$1")})`, "ig");
      const matcher = (str) => reg.test(str);
      const highlight = (str) => str.replace(reg, `<span style="color:#fc652f;margin:0">$1</span>`);
      const filter = (nodes) => {
        nodes.forEach(node => {
          const { main, fullName, sub, name, code, children } = node;
          // let main = main;
          // let sub = sub;
          if(matcher(fullName)) {
            // if(!node.isHidden) {
            //   this.setVisible(node.getPath(), true);
            // }
            this.setVisible(node.getPath(), true);
          }else {
            this.setVisible([node], false);
          }
          // node.fullName = `${highlight(main)}`;
          node.fullName = `${highlight(fullName)}`;
          this.treeObj.updateNode(node, false);
          if(children && children.length) {
            filter(node.children);
          }
        })
      }
      // filter(this.treeObj.transformToZtreeNodes(this.filterTreeList.filter(i => i.isHidden === false)));
      const treeNodes = this.treeObj.transformTozTreeNodes(this.filterTreeList);
      console.log(treeNodes, 900);
      filter(treeNodes);
      this.treeObj.expandAll(true);
    },
    setVisible(nodes, visible) {
      nodes.forEach(node => {
        const dom = $(`#${node.tId}`);
        node.isHidden = !visible;
        if(visible) {
          dom.show();
        } else {
          dom.hide();
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.fullName {
  color: red;
}
</style>