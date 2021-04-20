<template>
  <div id="baseType">
    <div>数字专场</div>
    <el-input v-model.number="original" class="input-num" placeholder="输入要拆分的数字" type="number"></el-input>
    <el-input :value="original" class="input-num" type="number" @input="typeTest"></el-input>
    <el-button type="primary" @click="PrefixInteger">拆分数字</el-button>
    <el-button type="primary" @click="precisionTest">精度测试</el-button>
    <el-button type="primary" @click="typeTest">类型判断</el-button>
    <span>{{ rewardRatio*10000/100 }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseType",
  data(){
    return{
      original:0,
      rewardRatio:0.5566889988
    }
  },
  methods: {
    PrefixInteger(){
      let originaValue = String(this.original).split("")
      console.log((Array(9).join(0)+this.original).slice(-9), originaValue)
    },
    precisionTest(){
      // 解决精度问题，toPrecision：把数字格式化为指定的长度
      // 不使用toPrecision，则value为7.000000000000001 小数点为15位
      console.log(parseFloat((0.07*100).toPrecision(12)))
    },
    typeTest(){
      //实现v-model
      this.original = event.target.value
    }
           
  }
}
</script>

<style lang='less' scope>
.input-num{
    width: 200px
}
</style>
