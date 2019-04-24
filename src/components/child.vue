<template>
    <div class="child">
        <el-button type="primary" @click="NotTest">child</el-button>
        <span>{{formList}}</span>
    </div>
</template>

<script>
    //import  from ''

    export default {
        //组件名
        name: 'child',
        //实例的数据对象
        data() {
            return {
                num:151,
                bigNum:12345678900123456789,
                numString:'137'
            }
        },
        //数组或对象，用于接收来自父组件的数据
        props: {
            formList:{
                type:Array,
                default:()=>{},
                // deep:true
            }
        },
        //计算
        computed: {

        },
        //方法
        methods: {
            NotTest(){
                // 按位非 转换类型
                console.log(~~this.numString)
                console.log(typeof(~~this.numString))
                // 按位或 裁剪数字
                console.log(this.num/10|0)
                console.log(this.bigNum/100|0)
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

        },
        //自定义指令
        directive:{

        }
    }
</script>

<!--
	作者：hoo790692170@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>

</style>
