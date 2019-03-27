<template>
    <div class="feature">
        <!-- 使用懒加载，输入后点击其他地方才会显示 -->
        <input v-model.lazy="content"> 
        <span>输入的内容为 {{content|unit}}</span>
        <div v-html="content"></div>
        <div>{{new Date(detailInfo.joinTime?detailInfo.joinTime:new Date().getTime()).Format('yyyy-MM-dd HH:mm:ss')}}</div>
        <el-button type="primary" @click="GetParameter">获取浏览器URL中的参数</el-button>
        <el-button type="primary" @click="outPut">0~n之和</el-button>
        <toast >{{showValue}}</toast>
    </div>
</template>

<script>
    //import  from ''

    export default {
        //组件名
        name: 'feature',
        //实例的数据对象
        data() {
            return {
                content:'',
                detailInfo:{
                    joinTime:null
                },
                urlTest:'http://www.runoob.com/try/try.php?filename=tryjs_datatypes_string&screen=sA313DD06E91551843259431&name=23',
                showValue:''
            }
        },
        //数组或对象，用于接收来自父组件的数据
        props: {

        },
        //计算
        computed: {

        },
        //方法
        methods: {
            TestToPrecision(){
                console.log()
            },
            GetParameter(){
                //方法1
                let args = this.urlTest.split('?')
                let arr = args[1].split('&')
                for(let i=0;i<arr.length;i++){
                    let arg= arr[i].split('=')
                    let obj = {}
                    obj[arg[0]]= arg[1] //将分离的参数保存到对象中
                    console.log(obj)
                }

                //方法2
                let _this = this
                function getQueryString(name) {
                    // var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
                    var result = _this.urlTest.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
                    if (result == null || result.length < 1) {
                        return "";
                    }
                    return result[1];
                }
                console.log(getQueryString('screen')) //输入参数名得到参数值
            },
            outPut(){
                let param = {
                    "longitude": 'longitude',//经度
                    "latitude": 'latitude',//纬度
                    "locationMessage": 'locationMessage' //位置信息
                };
                let error = '数据库异常'
                sessionStorage.setItem('latitude','');
                this.showValue=error+sessionStorage.getItem('latitude')+'经纬度参数'+JSON.stringify(param);
            }
        },
        //生命周期函数
        created() {

        },
        beforeMount() {

        },
        mounted() {

        },
        //监视
        watch: {

        },
        //组件
        components: {

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
                    return (value/1000).toFixed(2)+'K'
                }else if((value) >1000000 ){
                    return (value/1000000).toFixed(2)+'M'
                }
            }
            
        },
        //自定义指令
        directive:{

        }
    }
</script>

<!--
	作者：liangyanxiangde@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>

</style>