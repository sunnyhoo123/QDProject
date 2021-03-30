
<template>
  <el-dropdown trigger="hover" class="international" @command="handleSetLanguage">
    <div>
      {{ $t('home.switchLang') }}
      <!-- <svg-icon class-name="international-icon" icon-class="language" /> -->
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapActions } from "vuex"

export default {
  //组件名
  name: "LangSelect",
  //实例的数据对象
  data() {
    return {

    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  //方法
  methods: {
    ...mapActions(["setLanguage"]),
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.setLanguage(lang)
      // this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: "Switch Language Success",
        type: "success"
      })
    }
  },
}
</script>

<style lang="less" scoped>
.lang-select {
  
}
</style>