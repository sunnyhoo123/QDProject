<template>
<div id="echartsView">
  <el-button type="text" @click="selectMap">切换图形</el-button>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div :id="mapType" style="width: 600px;height:400px;"></div>
</div>
</template>
<script>
import echarts from "echarts";
  export default {
    name: 'echartspro',
    data(){
      return{
        mapType:'main'
      }
    },
    methods: {
      selectMap(){
        this.mapType = 'coordmap'
      }
    },
    mounted() {
      let myChart = echarts.init(document.getElementById(this.mapType));
        // 指定图表的配置项和数据
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    created(){
      
    },
  }
</script>
<style lang="less" scope>
#mapView{
  .map{
    width:100%;
    height:800px;
    overflow:hidden;
  }
} 
</style>
