<template>
  <div class="demo-markdown markdown">
    <el-tabs v-model="activeTab" lazy="true">
      <el-tab-pane v-for="(name, key) in allTabs" :key="name + key" :label="name" :name="name" />
    </el-tabs>
    <el-select v-model="activeComponent" placeholder="请选择">
      <el-option
        v-for="item in activeComponentsArrNames"
        :key="item.key"
        :value="item.key"
        :label="item.componentName"
      />
    </el-select>
    <hr />
    <component v-if="activeComponent" :is="activeComponent" class="github readme demo-component" />
  </div>
</template>

<script>

const allTabs = ["components", "features", "directive"];
const activeTab = "developer";

const dirtContext = require.context("../directive", true, /README\.md$/);

const CONTEXTS = [dirtContext];

const components = {};

const createComponent = (component, componentName, activeTab) => {
  console.log(component,"123");
  component.componentName = componentName;
  const key = activeTab + "-" + componentName;
  component.key = key;
  components[key] = component;
};

CONTEXTS.forEach((context, index) => {
  console.log(context,"666");
  context.keys().forEach(url => {
    console.log(url,"url");
    console.log(context,"context");
    console.log(context(url),"contexturl");
    createComponent(context(url).default, `${url.replace(/^\.\/|\/README.md$/g, "").replace(/\//g, "-")}`, allTabs[index]);
  });
});

allTabs.unshift(activeTab);

export default {
  name: "Demo",
  components,
  data() {
    return {
      activeTab: activeTab,
      activeComponent: null,
    };
  },
  watch: {
    activeTab() {
      this.calc();
    },
  },
  created() {
    this.allTabs = allTabs;
    this.calc();
  },
  methods: {
    calc() {
      this.activeComponentsArrNames = Object.keys(components)
        .filter(name => {
          return name.includes(this.activeTab);
        })
        .map(name => components[name]);
      if (this.activeComponentsArrNames.length) {
        this.activeComponent = this.activeComponentsArrNames[0].key;
      } else {
        this.activeComponent = null;
      }
    },
  },
};
</script>

<style scoped>
@import "./styles/github.css";
@import "./styles/markdown.css";

.demo-markdown {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.demo-markdown >>> h1,
.demo-markdown >>> h2,
.demo-markdown >>> h3,
.demo-markdown >>> h4,
.demo-markdown >>> h5,
.demo-markdown >>> h6 {
  color: #121;
}

.demo-markdown >>> .demo-template {
  border: 1px solid #cccccc;
  overflow: auto;
  padding: 0.5em;
  margin: 24px 0;
}
.demo-markdown >>> pre:not(:last-child) {
  margin-bottom: 24px;
}

.demo-component {
  overflow-y: scroll;
}
</style>
