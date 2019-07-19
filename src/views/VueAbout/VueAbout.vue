<template>
    <div class="vue-about">
		<div v-bind:class="[activeClass, errorClass,'class-array']">绑定HTML Class</div>
        <router-link to="/vueabout/parent">parent</router-link>
        <div class="child">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import comChild from '@/components/child.vue';
    export default {
        //组件名
        name: 'vueabout',
        //实例的数据对象
        data() {
            return {
                activeClass: "active",
				errorClass: "text-danger",
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
    .active {
		color: aqua;
	}
	.text-danger {
		width: 200px;
	}
	.class-array {
		height: 30px;
	}
</style>