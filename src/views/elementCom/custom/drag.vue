<template>
  <div class="drag">
    <!-- tip: a标签和img标签默认是启用该属性的 -->
    <!-- 目标容器 -->
    <div
      id="dropIn"
      draggable="false"
      foo
      @dragenter="dragenter"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    ></div>
    <!-- 拖动元素 -->
    <img
      id="dropImg"
      src="/static/images/cat.jpg"
      @dragstart="startFun"
      @drag="ondragFun"
      @dragend="ondragedFun"
    />
  </div>
</template>

<script>
export default {
  //组件名
  name: "Drag",
  //实例的数据对象
  data() {
    return {};
  },
  methods: {
    //拖动的元素方法
    startFun(ev) {
      let draggID = ev.target.id;
      ev.dataTransfer.setData("Text", draggID);
      console.log(ev);
    },
    ondragFun() {
      console.log("ondragFun");
    },
    ondragedFun() {
      console.log("ondragedFun");
    },
    //目标容器方法
    dragenter(e) {
      e.preventDefault();
      console.log("dragenter");
    },
    dragover(e) {
      e.preventDefault();
      console.log("dragover");
    },
    dragleave() {
      console.log("dragleave");
    },
    drop(ev) {
      ev.preventDefault();
      let data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
      console.log("drop");
    }
  }
};
</script>

<style lang="less" scoped>
div[foo] {
  width: 600px;
  height: 200px;
  background: #dcffff;
}
</style>