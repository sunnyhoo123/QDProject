<template>
  <div class="favorite">
    favorite
  </div>
</template>

<script>
export default {
  name: "Favorite",
  data() {
    return {
      alarmRecord:["告警记录1","告警记录2"],
      sKeyDown: false,
      dKeyDown: false,
      canDeleteAlarm: true,
    }
  },
  mounted() {
    // 读配置
    if (!this.canDeleteAlarm) { return; }
    this.keyDown();
    this.keyUp();
  },
  methods: {
    on(element,event,handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    },

    off(element,event,handler) {
      if (element && event && handler) {
        element.removeEventListener(event, handler, false);
      }
    },

    keyDown() {
      this.off(document.body, "keydown", this.keyDownHandle);
      this.on(document.body, "keydown", this.keyDownHandle);
    },

    keyUp() {
      this.off(document.body, "keyup", this.keyUpHandle);
      this.on(document.body, "keyup", this.keyUpHandle);
    },

    keyDownHandle(ev) {
      const { keyCode } = ev;
      // S键位
      if (keyCode === 83) {
        this.dKeyDown = true;
      }
      // D键位
      if (keyCode === 68) {
        this.sKeyDown = true;
      }
      if (this.sKeyDown && this.dKeyDown) {
        this.alarmRecord.splice(0,1);
      }
    },

    keyUpHandle(event) {
      const { keyCode } = event;
      if (keyCode !== 83 && keyCode !== 68) {
        this.sKeyDown = false;
        this.dKeyDown = false;
      }
      if (keyCode === 68) { // D键位
        this.sKeyDown = false;
      } else if (keyCode === 83) { // S键位
        this.dKeyDown = false;
      }
    },

    removeKeyEvent() {
      this.off(document.body, "keydown", this.keyDownHandle);
      this.off(document.body, "keyup", this.keyUpHandle);
    },

    destroyed() {
      this.removeKeyEvent();
    }
  }
}
</script>
<style scoped lang="less">
</style>
