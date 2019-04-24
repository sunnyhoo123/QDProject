<template>
    <div id="more">
        <div v-show="vShow">ES6</div>
        <el-input v-model="original" placeholder="输入要拆分的数字"></el-input>
        <el-button type="primary" @click="regExp">正则表达</el-button>
        <el-button type="primary" @click="ES6Test">ES6 参数解构</el-button>
        <el-button type="primary" @click="VueRoot">Vue root</el-button>
        <el-button type="primary" @click="JsonDraw">解构提取Json数据</el-button>
        <el-button type="primary" @click="IteratorStr">字符串的遍历</el-button>
        <el-button type="primary" @click="ES6Promise">Promise</el-button>
        <el-button type="primary" @click="ES6">调用本地函数</el-button>
        <el-button type="primary" @click="switchNet">switchNet</el-button>
        <router-link to="/">回到首页</router-link>
        <router-link to="/more/tips">tips小技巧</router-link>
        <router-link to="/more/parent">parent</router-link>
        <div class="child">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
const count = /^\d+$/;
    export default {
        name: 'more',
        data(){
            return{
                original:0,
                vShow:true,
                capitalFn:function(value){
                    if(count.test(value)){
                        return {valid:true}
                    }else{
                        return {valid:false, msg:'请输入数字'}
                    }
                },
            }
        },
        methods: {
            regExp(value){
                let originaValue;
                var r= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; //正则表达式 匹配出生日期(简单匹配)  
                var r2= /^\d{1,2}/; //正则表达式 匹配出生日期(简单匹配)    
                var IDcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
                var passport = /^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/; //护照
                var eight = /^[0-9]{8}$/; //8位数
                var letter = /^[a-zA-Z]{1}$/; //1个字母
                // 正则校验是否中文名称组成 [\u4E00-\u9FA5]{2,4}
                // r.exec('1985-10-15');
                // console.log(r2.exec('-10-15'))
                // console.log(RegExp.$1)
                // console.log(count.test(123456))
                // let capitalFn = this.capitalFn('123456')
                console.log(letter.test(this.original)&&eight.test(this.original));
                // console.log(this.original==0?'number':'passport');
                var re = /(\w+)\s(\w+)/; 
                var str = "zara ali"; 
                var newstr = str.replace(re, "$2, $1, $1, $3"); 
                console.log(newstr); // ali, zara, zara, $3
                
            },
            ES6(){
                const addOne = (num => num+1)
                console.log(addOne(1))
                this.ES6Promise().then((value)=>{
                    console.log(value)
                }).catch((err)=>{
                    console.log(err)
                });
            },
            ES6Lambda(){
                //箭头函数的表达式和默认return
                let testObject = {
                    a:1,
                    custormElm: () => 2,
                    custormElm2: () => {return 2},
                }
                let testF = resolve => this.
                console.log(testObject.custormElm())
                console.log(testObject.custormElm2())

            },
            ES6Test(){
                // const person = { name: 'Scott', attractiveness: 8.5 }

                //函数参数的解构可以使用默认值。
                const Attributes1 = ({ name='jerry', attractiveness=0 } = {}) => {
                    return [name,attractiveness]
                }

                //为函数的参数指定默认值，而不是为变量name和attractiveness指定默认值，所以会得到与前一种写法不同的结果
                const Attributes2 = ({ name, attractiveness} = {name:'jerry', attractiveness:0}) => {
                    return [name,attractiveness]
                }
                console.log(Attributes2({name:'eom'}))
                console.log(Attributes2())
            },
            VueRoot(){
                //根实例可以通过 $root 属性进行访问
                // this.vShow = false;
                console.log(this.$root)
            },
            JsonDraw(){
                // 解构赋值对提取 JSON 对象中的数据，尤其有用
                let jsonData = {
                    id: 42,
                    status: "OK",
                    data: [867, 5309]
                };
                let { id, status, data:number} = jsonData;
                console.log(id, status, number);
            },
            IteratorStr(){
                for(let codePoint of 'hoo'){
                    console.log(typeof(codePoint))
                }
            },
            ES6Promise(){
                console.log(1)
                return new Promise((resolve,reject)=>{
                    console.log(2)
                    if(false){
                        resolve(3)
                    }else{
                        reject(4)
                        // try{
                            
                        // }catch(e){
                        //     console.log(4)
                        //     reject(4)
                        // }
                    }
                })
            },
            switchNet(){
                let TestNet = {1:"/a-api",203:"/b-api"}
                console.log(TestNet[1])
                console.log(TestNet[203])
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
