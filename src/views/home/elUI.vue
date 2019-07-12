<template>
    <div class="elUI">
        <!-- <slot name="header">HelloWorld不分发给slot</slot> -->
        <!-- <slot text="作用域插槽">1</slot> -->
        <el-container class="elContainer">
            <!-- <el-aside width="240px">
                <el-col :span="12">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-aside> -->
            <elLH></elLH>
            <el-container>
                <el-header class="headerWrapper">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/elUI' }">elUI页面</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">也是首页</a></el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>
                <div class="body">
                    <!-- <el-button @click="testRouter">返回到上一个Vue</el-button> -->
                    <span>{{message}}</span>
                    <!-- <input type=file @change="readFileTest"> -->
                    <div class="main">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-change="changeUp"
                            :before-upload="beforeUp"
                            :auto-upload="false">
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :file-list="fileList"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
		                <el-button type="primary" @click="parseInput">解析转换</el-button>
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            @change="parseInput"
                            v-model="textarea">
                        </el-input>
                        <span>输入的内容为{{textarea}}</span>
		                <el-button type="primary" @click="changeLogWay">切换登陆</el-button>
		                <el-button type="primary" @click="test">一键上传</el-button>
                        <template v-if="loginType === 'username'">
                            <label key="1">Username</label>
                            <input placeholder="Enter your username" key="username">
                            </template>
                            <template v-else>
                            <label key="2">Email</label>
                            <input placeholder="Enter your email address" key="Email">
                        </template>
                    </div>
                </div>
                <el-footer>footer</el-footer>
            </el-container>
        </el-container>
        <!-- <div class="clear"></div> -->
    </div>
</template>

<script>
    import fsObj from '@/services/fs-service';
    import elLH from '@/components/elLH/elLH.vue';
    
    export default {
        //组件名
        name: 'elUI',
        //实例的数据对象
        
        data() {
            return {
                message: '我是子组件Demo',
                textarea:'',
                uploaded:true,
                loginType:'',
                fileList:[],
                choose:true,
            }
        },
        //数组或对象，用于接收来自父组件的数据
        props: {
            // status
            // :{
            //             type: Array,
            //             default:function(){
            //                 return [];
            //             }
            //         }
        },

        //计算
        computed: {

        },
        //方法
        methods: {
            testRouter(){
                this.$router.push({
                    path:'/'
                })
            },
             handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            readFileTest(){
                this.file = event.target.files
                fsObj.ReadFile(this.file[0].path,'',(err,data)=>{
                    console.log(err.data)
                });
                console.log(this.file,123)
            },
            parseInput(){
                var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
                console.log(obj)
                console.log(this.textarea)
                console.log(JSON.parse(this.textarea))

            },
            changeUp(file,fileList){
                console.log(file)
                console.log(fileList.length)
                console.log(this.uploaded)
                if(fileList.length>1){
                    
                    fileList.pop();
                    this.$message.error('已经上传')
                }
            },
            beforeUp(){
                console.log(this.uploaded)
                if(this.uploaded == false){
                    this.$message.error('已经上传')
                }
            },
            changeLogWay(){
                if(this.choose){
                    this.loginType = 'username'
                    this.choose = false
                }else{
                    this.loginType = 'Email'
                    this.choose = true
                }
            },
            test(){
                this.fileList = [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
                {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
            firstName: function (val) {
                this.fullName = val + ' ' + this.lastName
            },
        },
        //组件
        components: {
            elLH
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
    // .headerWrapper{
    //     background: url("./images/demo9.jpg");
    // }
    .elUI, .elContainer {
        height: 100%;
    }
    .clear{
        clear: both;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
  
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
  
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .main{
        // display: flex;
        // justify-content: flex-start;
        width: auto;
        height: 500px;
    }
    .body{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .div1{
        height: 40px;
        background: #00FF00;
    }
    .p1{
        width: 100px;
        background: #B3C0D1;
    }
    .p2{
        background: #123344;
    }
</style>