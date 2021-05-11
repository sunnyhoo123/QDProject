<template>
  <div class="weather">
    <a>{{ $t('home.weather') }}</a>
    <el-tag type="danger" effect="dark">1</el-tag>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
import { queryCity, queryWeather } from "api/baiduCloud"
import { queryWea, queryHistory, queryHotSearch } from "api/freeApi"
import { cityList } from "assets/constant"

export default {
  //组件名
  name: "Weather",
  //实例的数据对象
  data() {
    return {
      city: "",
      weather: null,
      options: [],
      weatherMsg: "",
      citys: [],
      state: "",
      timeout:  null
    }
  },
  mounted() {
    this.citys = this.loadAll();
  },
  methods: {
    loadAll() {
      return cityList;
    },
    querySearchAsync(queryString, cb) {
      var citys = this.citys;
      var results = queryString ? citys.filter(this.createStateFilter(queryString)) : citys;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    async handleSelect(item) {
      const res = await queryHotSearch();
      // this.weather = result;
      // this.weatherMsg = msg;
      console.log(res);
    },
    // 百度api
    async getCity() {
      const { result } = await queryCity();
      this.options = result;
    },
    async getWeather() {
      const params = {
        cityid: this.city,
      }
      const { result, msg } = await queryWeather(params);
      this.weather = result;
      this.weatherMsg = msg;
    },
    handleChange() {
      this.getWeather()
    }
  }
}
</script>

<style lang="less" scoped>
.weather {
  > a {
    --fill-color: #198CE6;
    position: relative;
    display: block;
    padding: 4px 0;
    font: 700 3rem Raleway, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-text-stroke: 2px var(--fill-color);
    background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    transition: 0.5s linear;
    &:hover {
      background-size: 100%;
    }
  }
}

</style>