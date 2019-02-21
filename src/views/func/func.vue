<template>
    <div class="func">
        <el-button type="primary" @click="paramTest(1)">参数测试</el-button>
        <el-button type="primary" @click="ternary">三目运算</el-button>
        <el-button type="primary" @click="async">异步执行</el-button>
    </div>
</template>

<script>
    //import  from ''

    export default {
        //组件名
        name: 'func',
        //实例的数据对象
        data() {
            return {
                show:true
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
            paramTest(a,b){
                console.log(a,b)
            },
            ternary(){
                console.log(1?'0':'-')
            },
            async(){
                setTimeout(() => {
                    console.log(1);
                    Promise.resolve().then(()=>{
                        console.log(2);
                    })
                }, 0);
                setTimeout(()=>{
                    console.log(3);
                },0)
                Promise.resolve().then(()=>{
                    console.log(4);
                })
                console.log(5);
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
	作者：liangyanxiangde@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>

</style>