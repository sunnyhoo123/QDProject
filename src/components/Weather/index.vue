<template>
  <!-- 天气预报 -->
  <div class="weather">
    <el-tooltip effect="light" content="点击获取城市" placement="top">
      <a @click="getCity">{{ $t('home.weather') }}</a>
    </el-tooltip>
    <el-select v-model="city" filterable placeholder="请选择城市" @change="handleChange">
      <el-option
        v-for="item in options"
        :key="item.cityid"
        :label="item.city"
        :value="item.cityid">
      </el-option>
    </el-select>
    <div v-if="weather">
      <div>{{ weather.week }} / {{ weather.date }}</div>
      <i :style="{fontSize: '48px'}" class="el-icon-sunny"></i>
      <h1>{{ weather.weather }}</h1>
      <h1>{{ weather.temp }} °C</h1>
      <div>{{ weather.templow }} °C ~ {{ weather.temphigh }} °C</div>
      <div>{{ weather.winddirect }} : {{ weather.windpower }}</div>
    </div>
  </div>
</template>

<script>
import { queryCity, queryWeather } from "@/api/baiduCloud"

export default {
  //组件名
  name: "Weather",
  //实例的数据对象
  data() {
    return {
      city: "",
      weather: null,
      options: []
    }
  },
  methods: {
    async getCity() {
      const { result } = await queryCity();
      this.options = result;
    },
    async getWeather() {
      const params = {
        cityid: this.city,
      }
      const { result } = await queryWeather(params);
      this.weather = result;
    },
    handleChange() {
      this.getWeather()
    }
  }
}
</script>

<style lang="less" scoped>
.weather {
  a {
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