<template>
  <div id="echartsView">
    <el-button type="text" @click="selectMap">切换图形</el-button>
    <el-button type="text">
      <router-link to="./echartsLine">折线图</router-link>
    </el-button>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div :id="mapType" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "Echartspro",
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
        text: "时间坐标折线图",
        subtext: "dataZoom支持"
      },
      tooltip: {
        trigger: "items"
        // formatter: function() {
        //   var date = new Date(params.value[0]);
        //   data = date.getHours() + ":" + date.getMinutes();
        //   return (
        //     data +
        //     "<br/>" + // eslint-disable-line
        //     params.value[1] +
        //     ", " + // eslint-disable-line
        //     params.value[2]
        //   ); // eslint-disable-line
        // }
      },
      legend: {
        data: ["series1"]
      },
      // 最下方滑动条
      // dataZoom: {
      //   show: true,
      //   start : 70
      // },
      grid: {
        y2: 80
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      // calculable : true,
      xAxis: [
        {
          type: "time",
          // boundaryGap: false,
          // data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          // axisLabel:{
          //    //X轴刻度配置
          //    interval:0 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
          // },
          // splitArea:true
          splitNumber: 10
        }
      ],
      yAxis: [
        {
          type: "value"
          // splitArea : {show : true}
        }
      ],
      series: [
        {
          name: "series1",
          type: "line",
          showAllSymbol: true,
          symbolSize: function(value) {
            // 轴线上，点的大小
            return Math.round(value[2] / 10) + 2;
          },
          data: (function() {
            var d = [];
            var len = 0;
            var now = new Date(); // eslint-disable-line
            var value; // eslint-disable-line
            while (len++ < 13) {
              d.push([
                new Date(2019, 7, 25, 10000 * len),
                (Math.random() * 30).toFixed(2) - 0,
                (Math.random() * 100).toFixed(2) - 0
              ]);
            }
            return d;
          })()
        }
        // {type:'line',data:[90, 100, 55, 66, 77, 88,99, 145, 59 , 134, 90, 68, 91, 50,100]},
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
