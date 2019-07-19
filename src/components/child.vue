<template>
    <div class="child">
        <el-button type="primary" @click="testEmit">child传值给parent</el-button>
        <span>{{formList}}</span>
        <!-- 默认/default插槽 -->
        <slot>父组件没有在子组件插入内容时，此内容会显示，否则会被父组件插入的内容覆盖</slot>
        <!-- 具名插槽 -->
        <slot name='first'>first</slot>
        <slot name='second'>second</slot>
        <slot name='third'>third</slot>
        <!-- 作用域插槽 -->
        <slot name="itemSlot" v-for="item in items" :text="item.text" :itemid="item.id">默认值</slot>
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
                num:111,
                bigNum:12345678900123456789,
                childrenString:'child',
                items:[
                    {id:1,text:'第1段'},
                    {id:2,text:'第2段'},
                    {id:3,text:'第3段'},
                ]
            }
        },
        //数组或对象，用于接收来自父组件的数据
        props: {
            // 子组件通过props接收值
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
            testEmit(){
                this.$emit('child',this.childrenString);
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
