<template>
  <div class="home">
    <comHeader></comHeader>
    <div class="main">
      <sidebar></sidebar>
      <div :class="classObj" class="main-container">
        <!-- 走马灯 -->
        <!-- <carousel></carousel> -->
        <movie v-if="movie.opened"></movie>
        <typeOut v-else></typeOut>
      </div>
      <div class="main-right">
        <!-- 天气预报 -->
        <!-- <weather></weather> -->
        <hotSearch></hotSearch>
        <!-- 每日一言：诗句 -->
        <poem></poem>
        <div id="pic"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import fsObj from '@/services/fs-service.js'
// import {mapActions, mapGetters} from 'vuex'
import movie from "@/components/Movie"
import sidebar from "@/components/sidebar"
import hotSearch from "@/components/HotSearch"
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
    poem,
    movie,
    sidebar,
    weather,
    typeOut,
    carousel,
    comHeader,
    hotSearch
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["sidebar", "movie"]),
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
    margin: 0 280px 0 160px;
    transition: margin-left .28s;
  }
  .menuCollapse {
    margin-left: 64px;
  }
  .main-right {
    position: absolute;
    top: 8px;
    right: 0;
    > div {
      max-width: 270px;
    }
    > :first-child {
      padding: 8px;
    }
    // 下图参考 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
    #pic {
      position: fixed;
      bottom: 1em;
      right: 7em;
      height: 90px;
      width: 65px;
      background-position: -40px -44px;
      background-image: url("https://static.runoob.com/images/mix/space-to-top.png");
      animation: .6s go steps(7) infinite;
    }

    @keyframes go {
      0% {
        background-position-x: -40px;
      }
      100% {
        background-position-x: -1040px;
      }
    }
  }
}
</style>
