<template>
  <div id="echartsView">
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div :id="mapType" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "EchartsLine",
  data() {
    return {
      mapType: "main"
    };
  },
  mounted() {
    let myChart = echarts.init(document.getElementById(this.mapType));
    // 指定图表的配置项和数据
    let option = {
      title: {
        text: "Awesome Chart"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} %"
        }
      },
      series: [
        {
          name: "广告",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  created() {},
  methods: {
    selectMap() {
      this.mapType = "coordmap";
    }
  }
};
</script>
<style lang="less" scope>
#mapView {
  .map {
    width: 100%;
    height: 800px;
    overflow: hidden;
  }
}
</style>
