
<template>
  <el-menu-item :index="item.routerLink" :disabled="item.routerLink === './demo'">
    <i :class="item.iconClass"></i>
    <span slot="title">{{ item.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "SideItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
