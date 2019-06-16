<template>
<div id="mapView">
  map
  <div  ref="BDmap"  class="map"></div>
</div>
</template>
<script>
// import BMap from 'BMap'
import {loadMap} from '@/services/map.js'
export default {
    name: 'BDmap',
    data(){
      return{
      
      }
    },
      mounted() {
      },
      created(){
        
      },
      mounted(){
        this._intMap()
      },
      methods: {
        _intMap (){
          loadMap().then((res)=>{
            console.log(res)
          })
          // 百度地图API功能
        //  var map = new BMap.Map(this.$refs.BDmap);    // 创建Map实例
        //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //   //添加地图类型控件
        //   map.addControl(new BMap.MapTypeControl({
        //     mapTypes:[
        //             BMAP_NORMAL_MAP,
        //             BMAP_HYBRID_MAP
        //         ]}));	  
        //   map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        //   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        //   console.log(BMap)
        }
        
    }
}
</script>
<style lang="less" scope>
#mapView{
  .map{
    width:100%;
    height:500px;
    overflow:hidden;
  }
}
  
    
</style>
