<template>
    <div class="feature">
        <!-- 使用懒加载，输入后点击其他地方才会显示 -->
        <input v-model.lazy="content"> 
        <span>输入的内容为 {{content|unit}}</span>
        <div v-html="content"></div>
        <div>{{new Date(detailInfo.joinTime?detailInfo.joinTime:new Date().getTime()).Format('yyyy-MM-dd HH:mm:ss')}}</div>
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
                }
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