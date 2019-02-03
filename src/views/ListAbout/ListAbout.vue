<template>
    <div id="listabout">
        <div>Array数组专场</div>
		<el-button type="primary" @click="filterFun">filterFun</el-button>
		<el-button type="primary" @click="mapA">mapA</el-button>
		<el-button type="primary" @click="forEachA">forEachA</el-button>
		<el-button type="primary" @click="sortA">排序</el-button>
		<el-button type="primary" @click="testSet">响应更改数据</el-button>
        <div>{{example2}}</div>
        <template v-for="(item,index) of example2">
            <span :key="index">{{item}},</span>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'listabout',
        data(){
            return{
                tempArray:[],
                example1:{
                    items:{
                        messages:23,
                        messages:123,
                        messages:3333,
                    }
                },
                example2:['123','324','323','34242','3232'],
                example3:[{latitude:1,longitude:32},{latitude:2},{latitude:3},{latitude:4},{latitude:5}],
                example4:[0,1,15,3,7],
            };
        },
        methods: {
            filterFun(){
                this.example2 = this.example2.filter(function(value){
                    return value.match('123')
                })
            },
            mapA(){
                this.tempArray = this.example3.map((item)=>{
                    return {
                        ...item,   //map这样写不影响原有对象
                        latitude:item.latitude + 0.1
                    }
                })
                console.log(this.tempArray)
            },
            forEachA(){
                this.example3.forEach(function(item,index){
                    item.latitude = item.latitude +0.1
                })
                console.log(this.example3,'temp')
            },
            sortA(){
                this.example4.sort((a,b)=>(
                    a-b
                ))
                console.log(this.example4) //改变了原来的数组
            },
            testSet(){
                // this.$set(this.example2,2,'222')
                this.example2.length = 3;
                this.example2[1]='666'
                console.log(this.example2)
            }
        }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
