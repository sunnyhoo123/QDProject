<template>
    <div class="parent">
        <el-button type="primary" @click="NotTest">{{parentString}}</el-button>
        <com-child :form-list='formList' @child="getChildData">
            <!-- 父组件在子组件里面插入标签，然后子组件引用slot就可以看到插槽内容 -->
            <span>{{msg}}</span> 可以不用标签

            <!-- 注意：v-slot是新指令，代替slot和slot-scope,版本需要在 2.6.0 以上
            scope在2.5.0中被slot-scope替代，用法：除了scope只可以用于<template>元素，其他和slot-scope都相同 -->
            <template slot=first>
                <div>这是第一个具名插槽</div>
            </template>
            <div slot='second'>这是第二个具名插槽</div>
            <template v-slot:third>
                <p>这是第三个具名插槽</p>
            </template>

            <template slot=itemSlot slot-scope="slotProps">
                <li>{{slotProps.itemid + ' & ' + slotProps.text}}</li>
            </template>
        </com-child>

        <!-- <com-animal></com-animal> -->
    </div>
</template>

<script>
    import comChild from '@/components/child.vue';
    import comAnimal from '@/components/animal.vue';

    export default {
        //组件名
        name: 'parent',
        //实例的数据对象
        data() {
            return {
                num:151,
                parentString:'parent',
                bigNum:12345678900123456789,
                numString:'137',
                // formList:[{name:'kevin'},{age:20}],
                formList:[1,5,6,8],
                msg:'父组件普通插槽'
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
            NotTest(){
                // 按位非 转换类型
                console.log(~~this.numString)
                console.log(typeof(~~this.numString))
                // 按位或 裁剪数字
                console.log(this.num/10|0)
                console.log(this.bigNum/100|0)
            },
            getChildData(txtChild){
                this.parentString = txtChild;
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
            comChild,
            comAnimal
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