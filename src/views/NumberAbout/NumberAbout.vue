<template>
    <div id="numberabout">
       <div>数字专场</div>
       <el-input class="input-num" v-model.number="original" placeholder="输入要拆分的数字" type="number"></el-input>
       <el-input type="number" :value="original" @input="typeTest"></el-input>
       <el-button type="primary" @click="PrefixInteger">拆分数字</el-button>
       <el-button type="primary" @click="precisionTest">精度测试</el-button>
       <el-button type="primary" @click="typeTest">类型判断</el-button>
       <span>{{rewardRatio*10000/100}}</span>
    </div>
</template>

<script>
    export default {
        name: 'numberabout',
        data(){
            return{
                original:0,
                rewardRatio:0.5566889988
            }
        },
        methods: {
            PrefixInteger(num,n){
                let originaValue;
                originaValue = String(this.original).split("")
                console.log((Array(9).join(0)+this.original).slice(-9))
            },
            precisionTest(){
                // 不使用toPrecision，则value为7.000000000000001
                console.log(parseFloat((0.07*100).toPrecision(12)))
            },
            typeTest(){
                this.original = event.target.value
            }
           
        }
    }
</script>

<style lang='less' scope>
.input-num{
    width: 200px
}
</style>
