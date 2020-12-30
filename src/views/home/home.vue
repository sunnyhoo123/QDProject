<template>
  <div class="home">
    <comHeader></comHeader>
    <div class="main">
      <sidebar></sidebar>
      <div :class="classObj" class="main-container">
        <!-- <carousel></carousel> -->
        <typeOut></typeOut>
        <!-- <div>
          <section class="grid-4">
            <div>
              <img :src="acgImg">
            </div>
          </section>
        </div> -->
      </div>
      <!-- 每日一言：诗句 -->
      <div class="main-right">
        <weather></weather>
        <poem></poem>
      </div>
    </div>
  </div>
</template>

<script>
// import fsObj from '@/services/fs-service.js'
// import {mapActions, mapGetters} from 'vuex'
import sidebar from "@/components/sidebar"
import weather from "@/components/Weather"
import carousel from "@/components/Carousel"
import comHeader from "@/components/header"
import typeOut from "@/components/TypeOut"
import poem from "@/components/Poem"

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("app");

export default {
  name: "Home",
  components: {
    comHeader,
    carousel,
    sidebar,
    weather,
    typeOut,
    poem
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["sidebar"]),
    classObj() {
      return {
        menuCollapse: !this.sidebar.opened,
      };
    },
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.home {
  .main {
    position: relative;
  }
  .main-container {
    margin: 0 200px 0 160px;
    transition: margin-left .28s;
  }
  .menuCollapse {
    margin-left: 64px;
  }
  .main-right {
    position: absolute;
    top: 8px;
    right: 8px;
    :first-child {
      padding: 8px;
    }
  }
}
  
</style>
