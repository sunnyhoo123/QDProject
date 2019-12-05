<template>
  <div class="animal-wrap">
    <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
  </div>
</template>
<script>
//import  from ''

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
  display:flex;
  div{
  animation: gradientChange 4s infinite alternate;
  }
}
.animal-wrap .item1{
  width:20px;
  height: 40px;
  border: 1px solid #000;
  background :red;
  margin: 0 10px;
  animation-delay: 1s;
}

.animal-wrap .item2{
  width: 20px;
  height :40px;
  border: 1px solid #000;
  background: #ffc700;
  margin: 0 10px;
  animation-delay: 2s;
}

.animal-wrap .item3{
  width: 20px;
  height: 40px;
  border: 1px solid #000;
  background: blue;
  margin: 0 10px;
  animation-delay: 3s;
}

.animal-wrap .item4{
  width: 20px;
  height: 40px;
  border: 1px solid #000;
  background: green;
  margin: 0 10px;
  animation-delay: 4s;
}

@keyframes gradientChange {
  0% {opacity:0.2;}
  100% {opacity:1;}
}

</style>