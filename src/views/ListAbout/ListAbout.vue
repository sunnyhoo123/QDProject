<template>
    <div id="listabout">
        <div>Array数组专场</div>
		<el-button type="primary" @click="filterFun">filterFun</el-button>
        <div>{{example2}}</div>
    </div>
</template>

<script>
    export default {
        name: 'listabout',
        data(){
            return{
                example1:{
                    items:{
                        messages:23,
                        messages:123,
                        messages:3333,
                    }
                },
                example2:['123','324','323','34242','3232']
                
            };
        },
        methods: {
            filterFun(){
                this.example2 = this.example2.filter(function(value){
                    return value.match('123')
                })
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
