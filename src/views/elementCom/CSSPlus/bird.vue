<template>
  <div class="bird">
    <div class="black-bomb">
      <span class="head"></span>
      <span class="eyes"></span>
      <span class="eyebrows"></span>
      <span class="mouth"></span>
      <span class="hair"></span>
    </div>
  </div>
</template>

<script>
  //import  from ''
  export default {
    //组件名
    name: 'bird',
    //实例的数据对象
    data() {
      return {

      }
    },
    //数组或对象，用于接收来自父组件的数据
    props: {

    },
    //计算
    computed: {

    },
    //方法
    methods: {

    },
    //生命周期函数
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    //监视
    watch: {

    },
    //组件
    components: {

    },
    //过滤器
    filters:{

    },
    //自定义指令
    directive:{

    }
  }
</script>

<!--
	作者：hoo790692170@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>
  .bird {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #48C0D8;
  }
  .black-bomb {
    width: 13em;
    height: 13em;
    font-size: 16px;
    position: relative;
    margin-top: 3em;
  }
  .black-bomb *::before, .black-bomb *::after {
    content: '';
    position: absolute;
  }
  .head {
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: #D80030;
    // border-radius: 45% 55% 45% 55%;
    border-radius: 55% 50% 50% 45%;
    overflow: hidden;
    box-shadow:  inset -1em 0.5em 1.5em -0.5em #D8C0A8;
    &::before {
      width: inherit;
      height: inherit;
      background-color: #D8C0A8;
      border-radius: inherit;
      top: 76%;
      left: 12%;
    }
  }
  .eyes::before, .eyes::after{
    width: 3.4em;
    height: 3.4em;
    background-color: #D8C0A8;
    border-radius: 50%;
    background-image: radial-gradient(circle at var(--left3) 1.7em,white 0.1em,transparent 0.1em),
    radial-gradient(circle at var(--left2) 1.6em,black 0.6em,transparent 0.6em),
    radial-gradient(circle at var(--left1) 1.4em,white 1em,transparent 1em)
  }
  .eyes::before{
    top: 2.7em;
    left: 21%;
    --left1: 2em;
    --left2: 2.3em;
    --left3: 2.4em;
  }
  .eyes::after{
    top: 2.5em;
    right: 7%;
    --left1: 1.2em;
    --left2: 0.9em;
    --left3: 0.8em;
  }
  .eyebrows::before,
.eyebrows::after {
    width: 5.3em;
    height: 0.8em;
    background: #cb3c1a;
}
 
.eyebrows::before {
    top: 2.3em;
    left: 1em;
    transform: rotate(10deg);
}
 
.eyebrows::after {
    top: 2.2em;
    right: -0.6em;
    transform: rotate(-10deg);
}
  .mouth {
    position: absolute;
    width: 3.6em;
    height: 3.6em;
    background-color: #fca90d;
    top: 4em;
    left: 6.4em;
    border-radius: 80% 0 30% 20%;
    transform: rotate(34deg);
    border: 0.1em solid black;
}
.mouth::before {
    width: 2.6em;
    height: 5.7em;
    border: 0.2em solid;
    border-radius: 80% 0 0 16%;
    transform: rotate(35deg);
    top: -1.1em;
    left: 1.4em;
    border-color: transparent transparent transparent black;
}
.head {
  overflow: hidden;
  left: 13px;
}
 
.head::before {
  width: inherit;
  height: inherit;
  background-color: #474642;
  border-radius: inherit;
  top: 76%;
  left: 12%;
}
.hair {
position: absolute;
width: 1.4em;
height: 5em;
background-color: #0f1110;
top: -3.8em;
left: 20%;
border-radius: 0 0 40% 40% / 0 0 100% 100%;
}
 
.hair::before {
width: 80%;
height: 1em;
background-color: #ffc000;
top: 0.3em;
left: 10%;
}
.hair {
  transform: rotate(-28deg) skewX(10deg) skewY(-50deg);
}
</style>