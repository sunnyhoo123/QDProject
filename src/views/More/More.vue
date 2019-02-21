<template>
    <div id="more">
       <div>ES6</div>
       <!-- <el-input v-model="original" placeholder="输入要拆分的数字"></el-input> -->
       <el-button type="primary" @click="regExp">正则表达</el-button>
       <el-button type="primary" @click="ES6Test">ES6 explosion</el-button>
    </div>
</template>

<script>
    export default {
        name: 'more',
        data(){
            return{
                original:0
            }
        },
        methods: {
            regExp(){
                let originaValue;
                var r= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; //正则表达式 匹配出生日期(简单匹配)  
                var r2= /^\d{1,2}/; //正则表达式 匹配出生日期(简单匹配)     
                // r.exec('1985-10-15');
                console.log(r2.exec('-10-15'))
                console.log(RegExp.$1)
            },
            ES6(){
                const addOne = (num => num+1)
                console.log(addOne(1))
            },
            ES6Test(){
                // const person = { name: 'Scott', attractiveness: 8.5 }

                //ES6解构
                const consoleLogAttributes = ({ name='jerry', attractiveness=0 } = {}) => {
                return [name,attractiveness]
                }

                // const newParam =Object.assign({name:'jerry'},param,{

                // })
                consoleLogAttributes({name:'eom'})
                console.log(name, attractiveness)

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
