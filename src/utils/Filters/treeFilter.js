import _ from "lodash";

export const filterTree = () => {
  this.filterTree = _.cloneDeep(this.treeObj.transformToArray(this.treeObj.getNodes()));
  const reg = new RegExp(`(${this.inputText.replace(/([/*.\\])/g, "\\$1")})`, "ig");
  const matcher = (str) => reg.test(str);
  const highlight = (str) => str.replace(reg, `<span style="color:#fc652f;margin:0">$1</span>`);
  const filter = (nodes) => {
    nodes.forEach(node => {
      const { main, sub, name, code, children } = node;
      // let main = main;
      // let sub = sub;
      if(matcher(name) || matcher(sub)) {
        if(!node.isHidden) {
          this.setVisible(node.getPath(), true);
        }
      }else {
        this.setVisible([node], false);
      }
      node.fullName = `${highlight(main)}`;
      this.treeObj.updateNode(node, false);
      if(children && children.length) {
        filter(node.children);
      }
    })
  }
  filter(this.treeObj.transformToZtreeNodes(this.filterTree.filter(i => i.isHidden === false)));
  this.treeObj.expendAll(true);
}

// export {
//   filterTree
// }