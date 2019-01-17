<template>
  <div id="app">
    <router-view/>
    <!-- <qee>
      <p>父组件插槽</p>
    </qee> -->
     <!-- <p>父组件插槽</p> -->
  </div>
</template>

<script>
import qee from './components/Hello/home.vue'
export default {
  name: 'App',
  components: {
            qee
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
