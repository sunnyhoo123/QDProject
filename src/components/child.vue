<template>
  <div class="child">
    <el-button type="primary" @click="testEmit">child传值给parent</el-button>

    <!-- props, 在样式中使用组件中接收的参数 -->
    <div :style="styleVar" class="box">{{ formList }}</div>
    <span @click="changeChildData">{{ propData }}</span>

    <!-- 默认/default插槽 -->
    <slot>父组件没有在子组件插入内容时，此内容会显示，否则会被父组件插入的内容覆盖</slot>
    <!-- 具名插槽 -->
    <slot name="first">first</slot>
    <slot name="second">second</slot>
    <slot name="third">third</slot>
    <!-- 作用域插槽 -->
    <slot v-for="item in items" :text="item.text" :itemid="item.id" name="itemSlot">默认值</slot>

    <!-- props中没有gender，但是可以用$attrs得到父组件的值 -->
    <div>attrs: {{ $attrs['gender'] }}</div>
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      >
    </label>

  </div>
</template>

<script>
// import  from ''

export default {
  // 组件名
  name: "ComChild",
  // inheritAttrs: false,
  // 用于接收来自父组件的数据
  // 注意：那些 prop 会在一个组件实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
  props: {
    // 子组件通过props接收值
    formList: {
      type: [Array, Object], // 检测类型为数组和对象
      required: true, // 必填的
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return { message: "hello" }
      }
    },
    propData: {
      default: 100, // 当父组件没传值（传空值也算传了），则用默认值
      // 自定义验证函数
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1
      }
    },
    label: {
    },
    value: {
    },
    height: {
      type: Number,
      default: 54,
    },
  },
  // 实例的数据对象
  data() {
    return {
      num: 111,
      bigNum: 12345678900123456789,
      childrenString: "child",
      items: [
        { id: 1, text: "第1段" },
        { id: 2, text: "第2段" },
        { id: 3, text: "第3段" }
      ]
    }
  },
  computed: {
    styleVar() {
      return {
        "--box-height": this.height + "px"
      }
    }
  },
  // 方法
  methods: {
    testEmit() {
      this.$emit("child", this.childrenString)
    },
    changeChildData() {
      this.PropData = "warning"
      this.$emit("update:propData", this.PropData)
    }
  },
}
</script>

<style scoped>
.box {
  height: var(--box-height);
}
</style>
