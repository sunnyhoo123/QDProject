<template>
  <div class="vue-router">
    <el-button >
      <router-link to="/vueabout">回到主页</router-link>
    </el-button>
    <section>
      动态路由匹配
      <!-- 使用通配符：要注意路由顺序 -->
      <router-link to="/vueRouter/parent/user-link">通配某个单词</router-link>
      <router-link to="/vueRouter/child/other-link/*!">通配路径</router-link>
      <!-- 多段参数: 分别对应路由字段 -->
      <router-link to="/vueRouter/kevin/post/4883">多段参数</router-link>
      <!-- 使用路由参数，原来的组件实例被复用，可以用watch或者路由钩子beforeRouteUpdate监听变化 -->
      <router-link to="/vueRouter/copy">继续跳此路由</router-link>
    </section>
    
    <section>
      嵌套路由
      <!-- home路径为空，父路径匹配成功后自动显示空的home，跳到profile后会替换home -->
      <router-link to="/vueRouter/copy/profile">跳到profile</router-link>
    </section>

    <section>
      编程式导航
      <el-button @click="routerPush">使用push跳转</el-button>
    </section>
    <!-- <router-view></router-view> -->

    <section>
      命名路由
      <!-- 注意：使用name时，子路由不会显示 -->
      <router-link :to="{ name: 'vueRouter', params: { id: 123 }}">routerLink传对象</router-link>
      <el-button @click="namePush">使用push+name跳转</el-button>
    </section>

    <section>
      命名视图
      <ul>
        <li>
          <router-link to="/view">命名视图路由</router-link>
        </li>
        <li>
          <router-link to="/other">/other</router-link>
        </li>
      </ul>
    </section >

    <section>
      重定向和别名
      <!-- redirectRouter没有component -->
      <router-link :to="{ path: '/redirectRouter'}">redirectRouter重定向到default</router-link>
      <router-link :to="{ path: '/rp'}">routerProfile别名为 alias: "/rp"</router-link>
    </section>

    <section>
      路由组件传参
      <!-- 使用 props 将组件和路由解耦 -->
      <span>{{ this.id }}</span>
      <!-- 如果 props 被设置为 true，route.params 将会被设置为组件属性 -->
      <span>与{{ $route.params.id }}相同</span>
    </section>

    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>

export default {
  //组件名
  name: "VueRouter",
  props: ["id"],
  //实例的数据对象
  data() {
    return {

    }
  },
  //监视
  watch: {
    "$route"(to, from) {
      console.log(to,from,"watch");
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //   // react to route changes...
  //   // don't forget to call next()
  //   console.log(to,from,next,"beforeRouteUpdate");
  // },
  //生命周期函数
  created() {
    // console.log(this.$route.params, "$route.params参数");
  },
  //方法
  methods: {
    // 编程式导航
    routerPush() {
      this.$router.push({
        path: "/vueRouter/copy/profile",
        query: {
          name: "kevin",
          sex: "male"
        }
      });
    },
    namePush() {
      this.$router.push({
        name: "vueRouter",
        params: {
          id: "ken",
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>

</style>