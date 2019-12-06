<template>
  <div>
    <form action name="upload">
      <div class="upload-box">
        <div
          v-for="(item,index) of imgList"
          v-show="imgList.length!=0"
          :key="index"
          class="img-list"
        >
          <img v-if="item.file.type.indexOf('image') !== -1" :src="item.file.src">
          <div class="upload-icon" @click="fileDel">×</div>
        </div>
        <!-- @click="fileClick"  img-add的点击事件-->
        <div v-show="addState" class="img-add">
          <span>十</span>
          <input
            id="inpu"
            ref="file"
            name="files"
            type="file"
            accept="image/*"
            @change="fileChange($event)"
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
      addState: true,
      size:0
    };
  },
  watch: {
    imgList() {
      if (this.imgList.length == 9) {
        this.addState = false;
      } else {
        this.addState = true;
      }
    }
  },
  methods: {
    //css opacity：0  代替 这个函数
    fileClick() {
    //   document.getElementById("inpu").click();
    },
    fileChange(el) {
      console.log(el)
      const list = this.$refs.file.files; // eslint-disable-line
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      //总大小
      this.size = this.size + file.size;
      let reader = new FileReader();
      console.log(this.size,file, "333")
      reader.vue = this;
      reader.readAsDataURL(file);
      reader.onload = function() {
        file.src = this.result;
        this.vue.imgList.push({
          file
        });
      };
    },
    fileDel(index) {
      this.imgList.splice(index, 1);
    },
    bytesToSize(bytes) {
      if (bytes === 0) return "0 B";
      let k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    uploadImage: function() {
      var form = document.forms.namedItem("upload");
      var formData = new FormData(form);
      for (var i = 0; i < this.imgList.length; i++) {
        formData.append("file" + [i + 1], this.imgList[i].file);
        console.log(this.imgList);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.upload-box 
  width 100%
  display flex
  flex-wrap wrap
  .img-list 
    position relative
    width: 80px
    height: 80px
    padding 0 5px
    img 
      width 100%
      height 100%
      border-radius 5px
    .upload-icon 
      position absolute
      width 20px
      height 20px
      background red
      border-radius 25px
      top 0px
      right 5px
      text-align center
      line-height 20px
      font-size 12px
      color #777777
  .img-add 
    width 80px
    height 80px
    line-height 80px
    text-align center
    font-size 30px
    color #777777
    border 1px solid #cccccc
    border-radius 5px
    position relative
    z-index 1
    input
      position absolute
      left 0
      right 0
      z-index 9
      width 80px
      height 80px
      background #ccc
      opacity 0
</style>