<template>
  <div class="vue-about">
    <div :class="[activeClass, errorClass, 'class-array', 'flex']">绑定HTML Class</div>
    <router-link to="/vueabout/parent">parent</router-link>
    <router-link to="/vueabout/confirm">confirm</router-link>
    <router-link to="/vueabout/upload">upload</router-link>
    <div class="child">
      <router-view></router-view>
    </div>
    <!-- Vue 事件处理 -->
    <!-- v-on:click.self.prevent 会阻止对元素自身的点击，点击div3，会alert3,alert1,跳转到/#。只阻止了alert(2)。 -->
    <div @click="alert(1)">123
      <a href="/#" @click.self.prevent="alert(2)">456
        <div @click="alert(3)">789</div>
      </a>
    </div>
    <!-- v-on:click.prevent.self 会阻止所有的点击，点击div3，会alert3,alert1。不但阻止了alert(2)，还阻止了a的默认跳转 -->
    <div @click="alert(1)">123
      <a href="/#" @click.prevent.self="alert(2)">456
        <div @click="alert(3)">789</div>
      </a>
    </div>
    <!-- Vue nextTick -->
    <div ref="msgDiv">{{ msg }}</div>
    <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
    <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
    <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
    <el-button @click="changeMsg">
      Change the Message
    </el-button>

    <input v-model="formData['name']">
    <el-button @click="changeFormData">123</el-button>
  </div>
</template>

<script>
// import comChild from "@/components/child.vue"
export default {
  // 组件名
  name: "Vueabout",
  // 实例的数据对象
  data() {
    return {
      msg: "test nextTick",
      msg1: "",
      msg2: "",
      msg3: "",
      activeClass: "active",
      errorClass: "text-danger",
      formData: {
        name: "",
        sex: 0
      },
    }
  },
  // 方法
  methods: {
    alert(val) {
      console.log("%c%s","color: red; background: yellow; font-size: 24px;", val);
    },
    changeFormData() {
      console.log(this.formData);
    },
    changeMsg() {
      this.msg = "chang";
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  },
}
</script>

<style scoped lang="scss">
@import "style/var.scss";
@import "style/global.scss";
@mixin fontStyle($backgroundColor: #0d0, $fontSize: 14px) {
  color: $font-color;
  font-size: $fontSize;
  // background: rgba(59, 71, 100, 1); 有默认值时可以不传值
}
$font-color: #919bb2;

.vue-about {
  .active {
    color: $font-color;
    &:hover {
      color: #0d0;
    }
	}
	.text-danger {
		font-size: 20px;
	}
	.class-array {
    height: 30px;
  }
  .child {
    @include fontStyle($fontSize: 16px)
  }
  .flex {
    @extend .display-flex
  }
}
</style>
