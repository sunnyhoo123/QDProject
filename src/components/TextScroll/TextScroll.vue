<template>
  <div class="textBox">
    <span class="remind">**点击滚动条可停止滚动**</span>  
    <transition name="slide">
      <p :key="text.id" class="text" @click="stopScroll">{{ text.val }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {
      textArr: [
        "恭喜 手机号为176****5610 的用户喜获 100元 现金券",
        "恭喜 手机号为150****5210 的用户喜获 100元 现金券",
        "恭喜 手机号为183****1613 的用户喜获 100元 现金券",
        "恭喜 手机号为183****1613 的用户喜获 100元 现券",
        "恭喜 手机号为183****1613 的用户喜获 100元 现券"
      ],
      number: 0,
      Scroll: false
    }
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted() {
    this.startMove()
  },
  methods: {
    startMove() {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else if(this.Scroll) {
        //   this.number += 1;
          return
        } else {
          this.number += 1;
        }
        
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    },
    stopScroll(){
      this.Scroll = !this.Scroll 
    }
  }
}
</script>

<style scoped>
  h2 {
    padding: 20px 0
  }
  .textBox {
    width: 100%;
    height: 19px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(1);
    opacity: 0;
  }
  .remind {
    float: right;
  }
</style>