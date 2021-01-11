<!-- eslint-disable max-lines -->
<template>
  <div class="confirm-wrap">
    <div @click="show">这里是个confirm</div>
    <transition name="background-fade">
      <div v-show="showFlag" class="confirm-background"></div>
    </transition>
    <transition name="confirm-fade" >
      <div v-show="showFlag" class="confirm" @click="hide">
        <div class="confirm-content" @click.stop>
          <div class="confirm-title">
            <p class="confirm-txt">添加预警信息</p>
            <p class="icon-cuowu" @click="closeChange"></p>
          </div>
          <div class="confirm-input-wrap">
            <div class="confirm-inputs">
              <div class="confirm-item">
                <label for="" style="width:6vw"><span>*</span>告警类型:</label>
                <div class="confirm-input">
                  <el-select v-model="value" :placeholder="placeholder">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="confirm-item">
                <label for=""><span>*</span>目标类型:</label>
                <div class="confirm-input">
                  <el-select v-model="value" :placeholder="placeholder">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="confirm-item confirm-item-big">
                <label for="" style="width:6vw"><span>*</span>目标类型:</label>
                <div class="confirm-input">
                </div>
              </div>
              <div class="confirm-item">
                <label for="" style="width:6vw"><span>*</span>告警名称:</label>
                <div class="confirm-input">
                  <el-select v-model="value" :placeholder="placeholder">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="confirm-item">
                <label for=""><span>*</span>布控区域:</label>
                <div class="confirm-input">
                  <el-select v-model="value" :placeholder="placeholder">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="confirm-item confirm-time">
                <label for="" style="width:6vw"><span>*</span>布控起止时间:</label>
                <div class="confirm-date">
                  <el-date-picker
                    v-model="value1"
                    :picker-options="pickerOptions"
                    align="right"
                    type="datetime"
                    popper-class="police-time"
                  ></el-date-picker>
                </div>
                <div class="confirm-rod">-</div>
                <div class="confirm-date">
                  <el-date-picker
                    v-model="value2"
                    :picker-options="pickerOptions"
                    align="right"
                    type="datetime"
                    popper-class="police-time"
                  ></el-date-picker>
                </div>
              </div>
              <div class="confirm-item confirm-time">
                <label for="" style="width:6vw"><span>*</span>告警时间段:</label>
                <div class="confirm-date">
                  <el-time-select
                    v-model="startTime"
                    :picker-options="{
                      start: '00:00',
                      step: '01:00',
                      end: '24:00',
                      maxTime:endTime
                    }"
                    placeholder="起始时间">
                  </el-time-select>
                </div>
                <div class="confirm-rod">-</div>
                <div class="confirm-date">
                  <el-time-select
                    v-model="endTime"
                    :picker-options="{
                      start: '00:00',
                      step: '01:00',
                      end: '24:00',
                      minTime:startTime
                    }"
                    placeholder="结束时间">
                  </el-time-select>
                </div>
              </div>
              <div class="confirm-item confirm-item-big">
                <label for="" style="width:6vw"><span>*</span>责任人:</label>
                <div class="confirm-input">
                </div>
              </div>
              <div class="confirm-item">
                <label for="" style="width:6vw"><span>*</span>告警方式:</label>
                <div v-for="(item,index) in checkbox" :key="index" class="confirm-checkbox">
                  <input :id="item.name" :value="item.value" type="checkbox" >
                  <label :for="item.name">{{ item.label }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="confirm-footer">
            <button>确定</button>
            <button @click="cancelChange">取消</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
 
</template>
<script>
export default {
  name: "Confirm",
  data(){
    return{
      showFlag:false,
      value:"",
      value1:"",
      value2:"",
      startTime: "",
      endTime: "",
      checkbox:[
        { label:"界面通知",value:0,name:"InterfaceNotice" },
        { label:"短信通知",value:1,name:"messageNotice" },
        { label:"邮箱通知",value:2,name:"mailboxNotice" },
      ],
      options: [{
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }],
      placeholder:"请选择",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
    }
  },
  created() {
    console.log(this.$route.params, "$route.params参数");
  },
  methods:{
    show() {
      this.showFlag = true
    },
    hide() {
      this.showFlag = false
    },
    //点击X关闭
    closeChange(){
      this.showFlag = false
    },
    //点击取消按钮
    cancelChange(){
      this.showFlag = false
    },
    // affirmChange(){
    //   this.$emit('confirm','你点击的确认')
    // }
  }
}
</script>

<style lang="stylus" scoped>
  .confirm-wrap
    .confirm-background
      background-color rgba(0, 0, 0, 0.3)
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index 888
      &.confirm-fade-enter-active
        -webkit-animation background-fade-in .3s
        animation background-fade-in .3s
      // &.confirm-fade-leave-active
      //   -webkit-animation background-fade-out .3s
      //   animation background-fade-out .3s
    .confirm
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index 998
      display flex
      justify-content center
      align-items center
      &.confirm-fade-enter-active
        -webkit-animation confirm-fade-in .3s
        animation confirm-fade-in .3s
      // &.confirm-fade-leave-active
      //   animation confirm-fade-out .3s
      //   -webkit-animation confirm-fade-out .3s
      .confirm-content
        background #fff
        border-radius 2vh
        width 43vw
        height 62.2vh
        padding 0 1vw
        .confirm-title
          display flex   
          justify-content space-between  
          align-items center 
          color #303133
          padding 2.55vh 0 3.7vh
          display flex
          font-size 1.66vh
          .icon-cuowu
            font-size 2.5vh 
        .confirm-input-wrap 
          .confirm-inputs
            display flex
            flex-wrap wrap
            justify-content space-between
            .confirm-item 
              display flex
              align-items center
              margin-bottom 3vh
              .confirm-checkbox
                display flex
                align-items center
                input 
                  height 2vh
                  width 2vw
                  background none
                  border:1px solid #fff
                  color #333
                label 
                  font-size 1.66vh 
                  color #303133
              label 
                color #333
                font-size 1.6vh
                padding-right 0.5vw
                text-align right
                span 
                  color red
              .confirm-input
                width 14vw
                height 3.7vh 
              >>> .el-select
                width 100%
                height 100%
                .el-input 
                  .el-input__inner
                    height 3.7vh
                    line-height 3.7vh
                  .el-input__suffix
                    display flex
                    justify-content center
                    align-items center 
            .confirm-item-big
              display flex
              align-items center
              .confirm-input
                width 31.5vw
                height 3.7vh
                border 1px solid #DCDFE6
                box-sizing border-box
            .confirm-time
              .confirm-rod
                 padding 0 0.5vw
              .confirm-icon
                width 2.5vw
                height 3.7vh
                background red
                border-radius 50%
              .confirm-date
                width 15vw
                height 3.7vh  
              >>> .el-date-editor
                width 100%
                height 100%
                .el-input__inner
                  height 3.7vh
                .el-input__prefix
                  .el-input__icon
                    display flex
                    align-items center
                .el-input__suffix
                  .el-input__suffix-inner
                    .el-input__icon
                      display flex
                      align-items center
        .confirm-footer   
          display flex
          justify-content center
          button
            width 6.25vw
            height 3.7vh
            color #fff
            border-radius 4px
            line-height 3.7vh
            font-size 1.48vh
            border none
            background-color #00a2ff
          button:nth-of-type(1)
            margin-right 0.5vw
                    
  @keyframes confirm-fade-in
    0%
      -webkit-transform translate3d(0,-3vh,0)
      transform translate3d(0,-3vh,0)
      opacity 0 
    100%
      -webkit-transform translate3d(0,0,0)
      transform translate3d(0,0,0)
      opacity 1 
  -webkit-keyframes confirm-fade-in
    0%
      -webkit-transform translate3d(0,-3vh,0)
      transform translate3d(0,-3vh,0)
      opacity 0 
    100%
      -webkit-transform translate3d(0,0,0)
      transform translate3d(0,0,0)
      opacity 1   
  // @keyframes confirm-fade-out
  //   0%
  //     -webkit-transform translate3d(0,0,0)
  //     transform translate3d(0,0,0)
  //     opacity 1
  //   100%
  //     -webkit-transform translate3d(0,-3vh,0)
  //     transform translate3d(0,-3vh,0)
  //     opacity 0
  // -webkit-keyframes confirm-fade-out
  //   0%
  //     -webkit-transform translate3d(0,0,0)
  //     transform translate3d(0,0,0)
  //     opacity 1
  //   100%
  //     -webkit-transform translate3d(0,-3vh,0)
  //     transform translate3d(0,-3vh,0)
  //     opacity 0

  @keyframes background-fade-in
    0%
      opacity 0 
    100%
      opacity 1 
  -webkit-keyframes background-fade-in
    0%
      opacity 0 
    100%
      opacity 1   
  // @keyframes background-fade-out
  //   0%
  //    opacity 1
  //   100%
  //     opacity 0
  // -webkit-keyframes background-fade-out
  //   0%
  //    opacity 1
  //   100%
  //     opacity 0
</style>