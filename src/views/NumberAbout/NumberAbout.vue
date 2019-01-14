<template>
    <div id="numberabout">
       <div>数字专场</div>
       <el-input v-model="original" placeholder="输入要拆分的数字"></el-input>
       <el-button type="primary" @click="PrefixInteger">拆分数字</el-button>
    </div>
</template>

<script>
    export default {
        name: 'numberabout',
        data(){
            return{
                original:0
            }
        },
        methods: {
            PrefixInteger(num,n){
                let originaValue;
                originaValue = String(this.original).split("")
                console.log((Array(9).join(0)+this.original).slice(-9))
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
