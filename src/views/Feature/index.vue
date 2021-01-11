<template>
  <div class="feature">
    <text-scroll></text-scroll>
    <el-button @click="linkToKCD">S+D键实现删除功能</el-button>
    <el-button @click="linkToPC">模拟个人中心</el-button>
    <el-button type="primary" @click="getMockData">mock数据</el-button>
    <el-button type="primary" @click="getApiData">API数据</el-button>

    <span>请输入整数：</span>
    <!-- 使用懒加载，输入后点击其他地方才会显示 -->
    <input v-model.lazy="content" type="number">
    <span>过滤结果为： {{ content|unit }}</span>
        
    <div @click="getCurrentTime">获取当前时间：{{ this.currentTime }}</div>
    <el-button type="primary" @click="GetParameter">获取浏览器URL中的参数</el-button>
    <el-button type="primary" @click="outPut">0~n之和</el-button>
    <el-button type="primary" @click="fetchIp">获取本机ip</el-button>

    <el-button @click="closeMenu">关闭右键功能</el-button>
    <el-button type="primary" @contextmenu.prevent.native="openMenu($event)">{{ rightClick }}</el-button>
    <input type="button" value="原生右键" @contextmenu.prevent="openMenu($event)">
    <!-- 右键菜单 -->
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li>上移一层</li>
      <li>下移一层</li>
    </ul>

    <el-alert :description="showValue" title="异常时的经纬度信息" type="info" show-icon></el-alert>
    <div>
      <ul v-for="item in getResult" :key="item.index" class="ul-api">
        <li><img :src="item" width="800" height="600"></li>
      </ul>
    </div>
    <el-button type="primary" @click="addCont">执行合约</el-button>
    <div>
      <select v-model="selected">
        <!-- 内联对象字面量 -->
        <option :value="$t('home.valueType')">{{ $t("home.valueType") }}</option>
        <option value="查询">查询</option>
        <option :value="{ number: 123 }">初始化</option>
      </select>
      <span>select: {{ selected }}</span>
    </div>
    <div class="contract">
      <div class="execCont"><strong>合约信息</strong>
        <ul v-for="(item,index) in contList" :key="index" class="ul-cont">
          <li class="li-cont">{{ item }}</li>
        </ul>
      </div>
    </div>
    <el-slider v-model="value1" class="block1" @input="onSlider"></el-slider>
    <!-- images中的图片 -->
    <el-button type="primary" @click="changeBg">{{ $t("home.switch") }}</el-button>
    <el-button type="primary" @click="hiddenBG">{{ hiddenBg }}</el-button>
    <div v-if="seen" ref="element" class="background" style="display:block"></div>
    <section>
      <img src="./images/demo0.jpg" hide="image1.jpg">
      <img src="./images/demo1.jpg" hide="image2.jpg">
      <p class="special"></p>
      <div id="myId" @click="cusEvent">myId</div>
    </section>
    <router-link to="/fea/confirm">confirm</router-link>
    <router-link to="/fea/upload">upload</router-link>
    <router-view></router-view>
    <el-button @click="snippet">snippet</el-button>
  </div>
</template>

<script>
import api from "api"
import { cloneDeep } from "lodash";
import TextScroll from "@/components/TextScroll/TextScroll.vue"
import { mapActions } from "vuex"
import {
  Debounce, hide, hasClass, getScrollPosition, getImages, detectDeviceType, getURLParameters,
  elementContains, elementIsVisibleInViewport, getDeep, triggerEvent, getDaysDiffBetweenDates,
  isBrowserTabFocused, scrollToTop
} from "@/utils/codes.js"
import apiService from "@/services/API-service.js"
import { tableData } from "./mock.js"

export default {
  //组件名
  name: "Feature",
  components: {
    TextScroll
  },
  //过滤器
  filters:{
    //加入过滤器
    capitalize(value){
      //首字母大写
      return value.charAt(0).toUpperCase()+value.slice(1)
    },
    unit(value){
      //超过1k,以K为单位，超过1000K，单位M，小数点2位
      if ( (value) < 1000){
        return value
      }else if(1000 < (value) && (value) < 1000000){
        return (value/1000).toFixed(2)+"K"
      }else if((value) >1000000 ){
        return (value/1000000).toFixed(2)+"M"
      }
    }
  },
  props: {

  },
  //实例的数据对象
  data() {
    return {
      value1: 0,
      content:"",
      showCurrentTime:false,
      currentTime:"",
      urlTest:"http://www.runoob.com/try/try.php?filename=tryjs_datatypes_string&screen=sA313DD06E91551843259431&name=23",
      showValue:"",
      selected: "",
      contList:[],
      seen: false,
      hiddenBg: "显示图片",
      responseData: null,
      rightClick: "鼠标右键",
      visible: false,
      top: 0,
      left: 0,
      getResult: [],
      tempList: [],
      tempBoolean: false,
      tempObj: null,
      tempNum: 0,
    }
  },
  
  //计算
  computed: {

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
  //方法
  methods: {
    ...mapActions(["exec"]),
    GetParameter(){
      //方法1
      let args = this.urlTest.split("?")
      let arr = args[1].split("&")
      for(let i=0;i<arr.length;i++){
        let arg= arr[i].split("=")
        let obj = {}
        obj[arg[0]]= arg[1] //将分离的参数保存到对象中
        console.log(obj)
      }

      //方法2
      let _this = this
      function getQueryString(name) {
        // var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        var result = _this.urlTest.match(new RegExp("[?&]" + name + "=([^&]+)", "i"));
        if (result == null || result.length < 1) {
          return "";
        }
        return result[1];
      }
      console.log(getQueryString("screen"),"getQueryString") //输入参数名得到参数值
    },
    outPut(){
      let param = {
        "longitude": "longitude",//经度
        "latitude": "latitude",//纬度
        "locationMessage": "locationMessage" //位置信息
      };
      let error = "数据库异常"
      sessionStorage.setItem("latitude","");
      this.showValue=error+sessionStorage.getItem("latitude")+"经纬度参数"+JSON.stringify(param);
    },
    addCont(){
      if (this.selected){
        this.contList.push(this.selected)
      } else{
        this.$message({
          message: "请选择合约类型",
          duration: 1000,
          type: "error"
        })
      }
      // this.exec(this.selected)
    },
    getCurrentTime(){
      var date = new Date(); 
      date.getYear(); //获取当前年份(2位) 
      date.getFullYear(); //获取完整的年份(4位,2014) 
      date.getMonth(); //获取当前月份(0-11,0代表1月) 
      date.getDate(); //获取当前日(1-31)
      date.getDay(); //获取当前星期X(0-6,0代表星期天) 
      date.getTime(); //获取当前时间(从1970.1.1开始的毫秒数) 
      date.getHours(); //获取当前小时数(0-23) 
      date.getMinutes(); //获取当前分钟数(0-59) 
      date.getSeconds(); //获取当前秒数(0-59) 
      date.getMilliseconds(); //获取当前毫秒数(0-999) 
      date.toLocaleDateString(); //获取当前日期 如 2019/7/12 
      date.toLocaleTimeString(); //获取当前时间 如 下午4:45:06 
      date.toLocaleString(); //获取日期与时间 如 2019/7/12 下午4:45:06
                
      // tip
      // 获取当前时间的时间戳 ~new Date();

      let today = new Date();
      let dateString = today.toLocaleDateString(); 
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      // 在 numbers<10 的数字前加上 0
      m = checkTime(m);
      s = checkTime(s);

      this.currentTime = `${dateString} ${h}:${m}:${s}`;
      // 定时执行该方法
      setTimeout(() => { this.getCurrentTime() }, 500)
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    },
    linkToKCD(){
      // this.$message('这是一条消息提示');
      this.$router.push({ path: "/KeyCodeDel" })
    },
    linkToPC() {
      this.$router.push({ path: "/PersonalCenter" })
    },
    onSlider:Debounce(function(){
      this.$message({
        showClose: true,
        message: "这是一条消息提示"
      });
    },1000),
    fetchIp() {
      let conn = new RTCPeerConnection({
        iceServers: []
      })
      let noop = function(){}
      conn.onicecandidate = function(ice){
        if (ice.candidate){
          let ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
          let windowIp = ip_regex.exec(ice.candidate.candidate)[1];
          console.log(windowIp, "windowIp");
          conn.onicecandidate = noop
        }
      }
      conn.createDataChannel("dog")
      conn.createOffer(conn.setLocalDescription.bind(conn),noop)
    },
    changeBg() {
      let r = Math.floor((Math.random() * 10))
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
    getMockData() {
      // axios.get("http://localhost:8080/static/mock/alarmList.json").then(res => {
      api.get("/static/mock/alarmList.json").then(res => {
        this.responseData = cloneDeep(res)
        this.responseData.image.url = "www"
        console.log(res, "res"); // 使用cloneDeep，赋值后res不会随之改变
        console.log(this.responseData, "responseData");
      });
    },
    async getApiData() {
      // 未封装请求方法
      // axios.post('http://test.admin.broker.hm.com:10010/exchange_api/base/listFiatCurrency', {id: 2}
      // ).then(function (rep) {
      // console.log(rep)
      // })

      // 将参数封装到API-config.js中，将方法封装到API-service.js中
      // apiService.TestURL.imgTestURL().then(res => {
      //   this.getResult = res.results
      // }).catch()

      apiService.TestURL.kuaidi().then(res => {
        // this.getResult = res.results
      }).catch();
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
    snippet() {
      // 隐藏页面上所有的<img/> 元素
      hide(document.querySelectorAll("img"));
      this.tempBoolean = hasClass(document.querySelector("p.special"), "special"); // true
      this.tempObj = getScrollPosition();
      // 平滑置顶
      // scrollToTop();
      // 注意： querySelector() 方法只返回匹配指定选择器的第一个元素。如果你要返回所有匹配元素，请使用 querySelectorAll() 方法替代
      let a = elementContains(document.querySelector("section"), document.querySelector("img"));  // true  
      let a1 = elementContains(document.querySelector("section"), document.querySelector("section")); // false
      const el = document.querySelector("input[type]");
      let b = elementIsVisibleInViewport(el); // (不完全可见) 
      let b1 = elementIsVisibleInViewport(el, true); // (部分可见)
      let c = getImages(document, true)
      let c1 = getImages(document, false)
      let d = detectDeviceType(); // "Mobile" or "Desktop"
      let e = getURLParameters(this.urlTest)
      const obj = { selector: { to: { val: "val to select" } }, target: [1, 2, { a: "test" }] }; 
      let f = getDeep(obj, "selector.to.val", "target[0]", "target[2].a"); // ["val to select", 1, "test"]
      
      // triggerEvent(document.getElementById( "myId" ), "click"); 
      // dispatchEvent可以直接触发点击事件：cusEvent，并将参数传人detail中
      triggerEvent(document.getElementById("myId"), "click", { username: "bob" });
      
      let g = getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")); // 9

      setInterval(() => {
        console.log(isBrowserTabFocused())
      }, 3000)
      
      console.log(a, a1, b, b1, c, c1, d, e, f, g);
    },
    cusEvent(e) {
      console.log(e)
    }
  },
  
}
</script>

<style lang="less" scoped>
.feature {
  .background{
    // width: 900px;
    height: 200px;
    background: url('./images/demo1.jpg') no-repeat
  }
  .block1{
    width:500px
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
}
</style>