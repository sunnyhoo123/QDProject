<template>
  <div class="elUploadCom">
    <el-upload
      :on-change="changeUp"
      :before-upload="beforeUp"
      :auto-upload="false"
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-upload
      :file-list="fileList"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button type="primary" @click="parseInput">解析转换</el-button>
    <el-input
      :rows="2"
      v-model="textarea"
      type="textarea"
      placeholder="请输入内容"
      @change="parseInput">
    </el-input>
    <span>输入的内容为{{ textarea }}</span>
    <el-button type="primary" @click="changeLogWay">切换登陆</el-button>
    <el-button type="primary" @click="test">一键上传</el-button>
    <template v-if="loginType === 'username'">
      <label key="1">Username</label>
      <input key="username" placeholder="Enter your username">
    </template>
    <template v-else>
      <label key="2">Email</label>
      <input key="Email" placeholder="Enter your email address">
    </template>
  </div>
</template>

<script>
//import  from ''

export default {
  //组件名
  name: "ElUploadCom",
  //组件
  components: {

  },
  //过滤器
  filters:{

  },
  //数组或对象，用于接收来自父组件的数据
  props: {

  },
  //实例的数据对象
  data() {
    return {
      textarea:"",
      uploaded:true,
      loginType:"",
      fileList:[],
      choose:true,
    }
  },
  //计算
  computed: {

  },
  //监视
  watch: {

  },
  //生命周期函数
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  //方法
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    readFileTest(){
      this.file = event.target.files
      // fsObj.ReadFile(this.file[0].path,"",(err,data)=>{
      //   console.log(err.data)
      // });
      console.log(this.file,123)
    },
    parseInput(){
      var obj = JSON.parse("{ \"name\":\"runoob\", \"alexa\":10000, \"site\":\"www.runoob.com\" }");
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
        this.$message.error("已经上传")
      }
    },
    beforeUp(){
      console.log(this.uploaded)
      if(this.uploaded == false){
        this.$message.error("已经上传")
      }
    },
    changeLogWay(){
      if(this.choose){
        this.loginType = "username"
        this.choose = false
      }else{
        this.loginType = "Email"
        this.choose = true
      }
    },
    test(){
      this.fileList = [{ name: "food.jpeg", url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" }, 
        { name: "food2.jpeg", url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" }]
    }
  },
  //自定义指令
  directive:{

  }
}
</script>


<style lang="less" scoped>

</style>