# 右键菜单

`在rz-image-card上点击右键出现右键菜单 v-menu="{ imageData: { src: 'xxx', smallSrc: 'xxx' } }"`

> author

```html
<template>
  <div class="flex">
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data2: {
          src: "http://n.sinaimg.cn/translate/600/w1920h1080/20180424/6Gzs-fzqvvsa3882201.jpg",
          width: 128,
          height: 160,
          bounding: { start: { x: 508, y: 302 }, end: { x: 608, y: 406 } },
          info: "90%",
        },
      };
    },
    methods: {
      getImageSrc(item) {
        return {
          src: item.src,
          smallSrc: item.src,
        };
      },
      // 右键菜单点击的回调事件
      menuClicked() {
        alert('contextmenu has clicked');
      },
    },
  };
</script>

<!-- <style lang="scss" scoped>
  .flex {
    display: flex;
    justify-content: space-around;
  }
</style> -->
```

## Attributes

| 参数              | 说明                                                                           | 类型   | 可选值 | 默认值  |
| ----------------- | ------------------------------------------------------------------------------ | ------ | ------ | ------- |
| imageData（必选） | { src: '大图src'（没大图则传入小图 src）, smallSrc: '小图src' } 两个字段必传 | object | —      | —       |
| type（可选）      | 模块类型: 情况 A：需传入对应模块简称（例：人脸检索 - FACE)； 情况 B：DEFAULT   | string | —      | DEFAULT |
| menuClicked（可选） | 针对一些组件，比如弹窗之类的点击右键后的一些操作   | function | —      | —      |
