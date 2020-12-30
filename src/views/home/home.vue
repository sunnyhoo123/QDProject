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
<<<<<<< HEAD
    
=======
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
        this.$refs.element.style.background = "url(" + require("@/assets/image/home/demo" + r + ".jpg") + ")no-repeat"
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
    // change() {
    //   this.isCollapse = !this.isCollapse;
    // }
>>>>>>> eaab615206ff0feaff1926eabf399601eb0829e7
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
<<<<<<< HEAD
  .main-right {
=======
}
.test {
  height: 100vh
}
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
    background: url('~@/assets/image/home/demo1.jpg') no-repeat
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
>>>>>>> eaab615206ff0feaff1926eabf399601eb0829e7
    position: absolute;
    top: 8px;
    right: 8px;
    :first-child {
      padding: 8px;
    }
  }
}
  
</style>
