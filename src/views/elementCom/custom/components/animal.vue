<template>
  <div class="animal-wrap">
    <div v-for="v in 4" :key="v" :style="`--line-index: ${v}`" :class="`item${v}`">{{ v }}</div>
  </div>
</template>
<script>

export default {
  //组件名
  name: "Animal",
  //实例的数据对象
  data() {
    return {

    }
  },
}
</script>
<style lang="less" scoped>
.animal-wrap {
  display: flex;
  // --time: var(--line-index) * 1;
  div {
    width:20px;
    height: 40px;
    border: 1px solid #000;
    animation: gradientChange 4s infinite alternate;
    animation-delay: calc(var(--line-index) * 1s);
  }
}
.animal-wrap .item1{
  background :red;
}

.animal-wrap .item2{
  background: #ffc700;
}

.animal-wrap .item3{
  background: blue;
}

.animal-wrap .item4{
  background: green;
}

@keyframes gradientChange {
  0% {opacity:0.2;}
  100% {opacity:1;}
}

</style>