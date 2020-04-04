<template>
  <div class="home">
    <com-Header></com-Header>
    <Carousel></Carousel>
    <el-button type="primary" @click="changeBg">切换图片</el-button>
    <el-button type="primary" @click="getMockdata">mock数据</el-button>
    <el-button type="primary" @click="hiddenBG">{{ hiddenBg }}</el-button>
    <el-button type="primary" @contextmenu.prevent.native="openMenu($event)">{{ rightClick }}</el-button>
    <input type="button" value="原生右键" @contextmenu.prevent="openMenu($event)">
    <div v-if="seen">
      <ul v-for="item in getResult" :key="item.index" class="ul-api">
        <li><img :src="item" width="800" height="600"></li>
      </ul>
    </div>
    <!-- images中的图片 -->
    <div v-if="seen" ref="element" class="background" style="display:block"></div>
    <!-- 右键菜单 -->
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li>上移一层</li>
      <li>下移一层</li>
    </ul>
  </div>
</template>

<script>
// import fsObj from '@/services/fs-service.js'
import api from "api"
import { cloneDeep } from "lodash";
// import {mapActions, mapGetters} from 'vuex'
import apiService from "@/services/API-service.js"
import comHeader from "@/components/header/header.vue"
import Carousel from "@/components/Carousel/index.vue"

export default {
  name: "Home",
  components: {
    comHeader,
    Carousel
  },
  data() {
    return {
      seen: true,
      hiddenBg: "隐藏图片",
      getResult: [],
      rightClick: "鼠标右键",
      visible: false,
      top: 0,
      left: 0,
      responseData: null,
    }
  },
  watch: {
    visible: {
      handler(value) {
        if(value) {
          document.body.addEventListener("click", this.closeMenu)
        }else {
          document.body.removeEventListener("click", this.closeMenu)
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    getApiData() {
      // 未封装请求方法
      // axios.post('http://test.admin.broker.hm.com:10010/exchange_api/base/listFiatCurrency', {id: 2}
      // ).then(function (rep) {
      // console.log(rep)
      // })

      // 将参数封装到API-config.js中，将方法封装到API-service.js中
      apiService.TestURL.imgTestURL().then(res => {
        this.getResult = res.results
      }).catch()
    },
    getMockdata() {
      // axios.get("http://localhost:8080/static/mock/alarmList.json").then(res => {
      api.get("/static/mock/alarmList.json").then(res => {
        this.responseData = cloneDeep(res)
        this.responseData.image.url = "www"
        console.log(res, "res"); // 使用cloneDeep，赋值后res不会随之改变
        console.log(this.responseData, "responseData");
      });
    },
    changeBg() {
      let r = Math.floor((Math.random() * 10))
      console.log(r)
      if(this.seen) {
        this.$refs.element.style.background = "url(" + require("./images/demo" + r + ".jpg") + ")no-repeat"
      }
    },
    hiddenBG() {
      this.seen = !this.seen
      if (this.seen) {
        this.hiddenBg = "隐藏图片"
      } else {
        this.hiddenBg = "显示图片"
      }
    },
    openMenu(e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft // 15: margin right
      
      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY - 60 // fix 位置bug
      this.visible = true
    },
    closeMenu() {
      this.visible = false
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  h1,h2 {
    font-weight: normal;
  }
  /* [title]{
    background: #42b983
  } */
  .ul-cont {
    list-style-type: none;
    padding: 0;
  }

  .li-cont {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .background{
    width: 900px;
    height: 500px;
    background: url('./images/demo1.jpg') no-repeat
  }
  .contract{
    display: flex;
  }
  .up{
    width: 7px;
    height: 7px;
    border-top: 2px solid rgb(129,180,229);
    border-left: 2px solid rgb(129,180,229);
    transform: rotate(45deg);
  }
  .icon-wallet{
    width: 20px;
    background: red;
  }
  .ul-api{
    li{
      float: left;
    }
  }
  .modules{
    display: flex;
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
