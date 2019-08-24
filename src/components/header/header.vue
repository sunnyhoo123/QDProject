<template>
  <div class="header-wrap">
    <text-scroll></text-scroll>
    <div class="head-top">
      <el-tag title="router-link to">
        <router-link to="/elUI">Element UI</router-link>
      </el-tag>
      <el-tag title="router-link to">
        <router-link to="./listabout">Array专场</router-link>
      </el-tag>
      <el-tag title="router-link to">
        <router-link to="./numberabout">Number专场</router-link>
      </el-tag>
      <el-tag title="router-link to">跳转到
        <router-link to="./fea">Feature</router-link>
      </el-tag>
      <el-tag title="router-link to">跳转到
        <router-link to="./func">Function</router-link>
      </el-tag>
      <el-tag title="router-link to">跳转到
        <router-link to="./map">Map</router-link>
      </el-tag>
      <el-tag title="router-link to">
        <router-link to="./more">ES6等扩展</router-link>
      </el-tag>
      <el-tag title="router-link to">
        <router-link to="./vueabout">Vue扩展</router-link>
      </el-tag>
    </div>
  </div>
</template>

<script>
import TextScroll from "@/components/TextScroll/TextScroll.vue"
import { mapActions,mapGetters } from "vuex"
	
export default {
  name: "HeaderWrap",
  components: {
    TextScroll
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["contractExecListGetter"]),
    // reversedMessage: function(){
    // 	return this.msg.split('').reverse().join('')
    // }
    reversedMessage:{
      get:function(){
        return this.msg
      },
      set:function(newValue){
        let names = newValue.split(" ");
        console.log(names)
      }
    }
  },
  methods: {
    ...mapActions(["exec"]),
    increment() {
      this.count++
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	.head-top{
		background-color: #fff;
    	height: 40px;
		// padding: 10px 60px;
		position: relative;
		z-index: 100;
		box-shadow: 0 0 1px rgba(0,0,0,0.25);
    	transition: background-color 0.3s ease-in-out;
	}
</style>
