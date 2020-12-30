<template>
  <div class="type-out">
    <h1 class="glowIn">The first step is as good as half over</h1>
    <p class="glowIn">Things will come to you as it is planned for you. 
    The firmer you grip, the easier you lose. We’ve tried and cherished, we have a clear conscience. Let the fate take care of the rest.
    --是你的，就是你的。越是紧握，越容易失去。我们努力了，珍惜了，问心无愧。其他的，交给命运。
    </p>
    <!-- <p class="glowIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Mattis pellentesque id nibh tortor. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. A lacus vestibulum sed arcu.
    </p> -->
  </div>
</template>
<script>
//import  from ''

export default {
  //组件名
  name: "TypeOut",
  //实例的数据对象
  data() {
    return {

    }
  },
  created() {
    this.startType();
  },
  methods:{
    startType() {
      this.$nextTick(() => {
        // this.msg2 = this.$refs.msgDiv.innerHTML;
        let glowInTexts = document.querySelectorAll(".glowIn");
        glowInTexts.forEach(glowInText => {
          let letters = glowInText.textContent.split("");
          glowInText.textContent = "";
          letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            glowInText.append(span);
          });
        });
      });
    }
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

.type-out {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)
    ),
    url(https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg);
  background-size: cover;
  p {
    margin: 0em 5em 4em 5em;
  }

  h1, p {
    text-align: left;
    line-height: 1.8;
    font-family: Lora, serif;
  }

  .glowIn {
    color: white;
    span {
      animation: glow-in 0.8s both;
    }
  }

  @keyframes glow-in {
    from {
      opacity: 0;
    }
    65% {
      opacity: 1;
      text-shadow: 0 0 25px white;
    }
    75% {
      opacity: 1;
    }
    to {
      opacity: 0.7;
    }
  }
}
</style>