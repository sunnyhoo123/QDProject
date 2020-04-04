<template>
  <div class="header">
    <el-tag title="Element UI">
      <router-link to="/elUI">Element UI</router-link>
    </el-tag>
    <el-tag >
      <router-link to="./listabout">Array专场</router-link>
    </el-tag>
    <el-tag >
      <router-link to="./numberabout">Number专场</router-link>
    </el-tag>
    <el-tag >
      <router-link to="./fea">Feature专场</router-link>
    </el-tag>
    <el-tag >
      <router-link to="./func">Function专场</router-link>
    </el-tag>
    <el-tag >跳转到
      <router-link to="./map">Map</router-link>
    </el-tag>
    <el-tag >more
      <router-link to="./more">ES6等扩展</router-link>
    </el-tag>
    <el-tag >
      <router-link to="./vueabout">Vue扩展</router-link>
    </el-tag>
    <!-- <el-link @click="toModule('/demo')">
      mdDemo组件
    </el-link> -->
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex"
	
export default {
  name: "HeaderWrap",
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
    toModule(path) {
      this.$router.push({ path });
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.header{
  height: 48px;
  line-height: 48px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  transition: background-color 0.3s ease-in-out;
}
</style>
