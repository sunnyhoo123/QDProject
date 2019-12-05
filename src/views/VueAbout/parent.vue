<template>
  <div class="parent">
    <el-button type="primary" @click="NotTest">{{ parentString }}</el-button>
    <!-- 当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。例如：child-class -->
    <!-- .sync其实就是在父组件定义了一update:val方法，来监听子组件修改值的事件。
    针对value, 加上.sync, 则可以去掉：@input="getChildData",
    并且要在子组件中将$emit('input', $event.target.value)改为$emit('update:value', $event.target.value) -->
    <com-child 
      :form-list="formList"
      :prop-data.sync="customValidator"
      :label="msg"
      :value.sync="parentString"  
      :gender="customValidator"
      class="parentClass"
    >
      <!-- 父组件在子组件里面插入标签，然后子组件引用slot就可以看到插槽内容 -->
      <span>{{ msg }}</span> 可以不用标签

      <!-- 注意：v-slot是新指令，代替slot和slot-scope,版本需要在 2.6.0 以上
      scope在2.5.0中被slot-scope替代，用法：除了scope只可以用于<template>元素，其他和slot-scope都相同 -->
      <template slot="first">
        <div>这是第一个具名插槽</div>
      </template>
      <div slot="second">这是第二个具名插槽</div>
      <template v-slot:third>
        <p>这是第三个具名插槽</p>
      </template>

      <template slot="itemSlot" slot-scope="slotProps">
        <li>{{ slotProps.itemid + ' & ' + slotProps.text }}</li>
      </template>
    </com-child>
    <!-- 传入一个对象给子组件 -->
    <!-- <com-child :form-list='post'></com-child> -->
    <!-- <com-animal></com-animal> -->
  </div>
</template>

<script>
import comChild from "@/components/child.vue"
import comAnimal from "@/components/animal.vue"

export default {
  // 组件名
  name: "Parent",
  // 组件
  components: {
    comChild,
    comAnimal
  },
  // 实例的数据对象
  data() {
    return {
      num: 151,
      parentString: "parent",
      bigNum: 12345678900123456789,
      numString: "137",
      // formList:[{name:'kevin'},{age:20}],
      formList: [1, 5, 6, 8],
      msg: "普通父组件",
      post: {
        id: 1,
        title: "My Journey with Vue"
      },
      customValidator: "success"
    }
  },
  // 方法
  methods: {
    NotTest() {
      // 按位非 转换类型:string变为number
      console.log(~~this.numString)
      console.log(typeof (~~this.numString))
      // 按位或 裁剪数字
      console.log(this.num / 10 | 0)
      console.log(this.bigNum / 10 | 0)
      this.formList.push("100")
    },
    getChildData(txtChild) {
      this.parentString = txtChild
    },
    getValue(val) {
      console.log(val)
    }
  },
}
</script>

<style lang="less" scoped>

</style>
