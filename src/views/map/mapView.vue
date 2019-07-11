<template>
<div id="mapView">
  <el-button type="text" disabled>在index中引入map</el-button>
  <el-button type="text">
    <router-link to="./echartspro">echartsView</router-link>
  </el-button>
  <div  ref="BDmap"  class="map"></div>
</div>
</template>
<script>
  // import BMap from 'BMap'  改为在index.html中导入script的方式
  // import {loadMap} from '@/services/map.js'
  export default {
    name: 'BDmap',
    data(){
      return{
      
      }
    },
    methods: {
      _intMap (){
        // loadMap().then((res)=>{
        //   console.log(res)
        // })
        // 百度地图API功能
        var map = new BMap.Map(this.$refs.BDmap);    // 创建Map实例
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
                  BMAP_NORMAL_MAP,
                  BMAP_HYBRID_MAP
              ]
        }));  //右上角地图+混合
        // map.addControl(new BMap.MapTypeControl());   //地图类型控件,地图+卫星+三维,默认位于地图右上方
        map.addControl(new BMap.NavigationControl());   //地图平移缩放控件，PC 端默认位于地图左上方，它包含控制地图的平移和缩放的
        map.addControl(new BMap.ScaleControl());        //比例尺控件，默认位于地图左下方，显示地图的比例关系
        map.addControl(new BMap.OverviewMapControl());  //缩略地图控件，默认位于地图右下方，是一个可折叠的缩略地图
        // map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.centerAndZoom('武汉')   //通过这个可以只输入地名获得坐标位置
        // console.log(map.centerAndZoom('武汉'))   //这个方法放在console里面竟然也有效果
      }
    },
    created(){
    },
    mounted(){
      this._intMap()
    },
  }
</script>
<style lang="less" scope>
#mapView{
  .summary{
    height: 50px;
  }
  .map{
    width:100%;
    height:800px;
    overflow:hidden;
  }
}

</style>
