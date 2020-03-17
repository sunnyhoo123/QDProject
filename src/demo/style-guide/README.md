# 风格指南

## components, features

### 文件名必须为多个单词，index.vue 为入口，且大驼峰

不允许 **components, features 下任何组件与 vuex 交换数据**

组件名应该始终是**多个单词**的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。

这样做可以避免跟现有的以及未来的 HTML 元素[相冲突]，因为所有的 HTML 元素名称都是单个单词的。

### components 命名

名词 + 名词 or 形容词 + 名词

`Good`

Login Side Counter

`Bad`

CaptureChart EmptyImage ExportDialog

### features 命名，以功能命名

AssignAuthority VideoSourcesSelector

### 组件使用为大驼峰

`Good`

```js
import AssignAuthority from "#/AssignAuthority";

export default {
  components: {
    AssignAuthority,
  },
};
```

```html
<template>
  <div>
    <AssignAuthority :treeData="dataTree" showType="edit" :userIds="[]" />
    <article class="markdown github" v-html="readme"></article>
  </div>
</template>
```

## 组件数据

**组件的 `data` 必须是一个函数。**

当在组件中使用 `data` 属性的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数。

当 `data` 的值是一个对象时，它会在这个组件的所有实例之间共享。想象一下，假如一个 `TodoList` 组件的数据是这样的：

```js
data: {
  listTitle: '',
  todos: []
}
```

我们可能希望重用这个组件，允许用户维护多个列表 (比如分为购物、心愿单、日常事务等)。这时就会产生问题。因为每个组件的实例都引用了相同的数据对象，更改其中一个列表的标题就会改变其它每一个列表的标题。增删改一个待办事项的时候也是如此。

取而代之的是，我们希望每个组件实例都管理其自己的数据。为了做到这一点，每个实例必须生成一个独立的数据对象。在 JavaScript 中，在一个函数中返回这个对象就可以了：

`好例子`

```js
Vue.component("some-comp", {
  data: function() {
    return {
      foo: "bar",
    };
  },
});
```

```js
// In a .vue file
export default {
  data() {
    return {
      foo: "bar",
    };
  },
};
```

```js
// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data: {
    foo: "bar",
  },
});
```

## Prop 定义

### Prop 命名

**Prop 采用小驼峰，定义应该尽量详细。**

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

细致的 [prop 定义]有两个好处：

- 它们写明了组件的 API，所以很容易看懂组件的用法；
- 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。

</details>

`反例`

```js
// 这样做只有开发原型系统时可以接受
props: ["status"];
```

`好例子`

```js
props: {
  status: String;
}
```

```js
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

## 为 `v-for` 设置键值

**总是用 `key` 配合 `v-for`。**

在组件上*总是*必须用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的[对象固化 (object constancy)](https://bost.ocks.org/mike/constancy/)，也是一种好的做法。

假设你有一个待办事项列表：

```js
data: function () {
  return {
    todos: [
      {
        id: 1,
        text: '学习使用 v-for'
      },
      {
        id: 2,
        text: '学习使用 key'
      }
    ]
  }
}
```

然后你把它们按照字母顺序排序。在更新 DOM 的时候，Vue 将会优化渲染把可能的 DOM 变动降到最低。即可能删掉第一个待办事项元素，然后把它重新加回到列表的最末尾。

这里的问题在于，不要删除仍然会留在 DOM 中的元素。比如你想使用 `<transition-group>` 给列表加过渡动画，或想在被渲染元素是 `<input>` 时保持聚焦。在这些情况下，为每一个项目添加一个唯一的键值 (比如 `:key="todo.id"`) 将会让 Vue 知道如何使行为更容易预测。

根据我们的经验，最好*始终*添加一个唯一的键值，以便你和你的团队永远不必担心这些极端情况。也在少数对性能有严格要求的情况下，为了避免对象固化，你可以刻意做一些非常规的处理。

</details>

`反例`

```html
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

`好例子`

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

## 避免 `v-if` 和 `v-for` 用在一起

**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**
一般我们在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。
- 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 `ul`, `ol`)。

当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级，所以这个模板：

```html
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

将会经过如下运算：

```js
this.users.map(function(user) {
  if (user.isActive) {
    return user.name;
  }
});
```

因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。

通过将其更换为在如下的一个计算属性上遍历：

```js
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```

```html
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

我们将会获得如下好处：

- 过滤后的列表*只*会在 `users` 数组发生相关变化时才被重新运算，过滤更高效。
- 使用 `v-for="user in activeUsers"` 之后，我们在渲染的时候*只*遍历活跃用户，渲染更高效。
- 解藕渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。

为了获得同样的好处，我们也可以把：

```html
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

更新为：

```html
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

通过将 `v-if` 移动到容器元素，我们不会再对列表中的*每个*用户检查 `shouldShowUsers`。取而代之的是，我们只检查它一次，且不会在 `shouldShowUsers` 为否的时候运算 `v-for`。

</details>

`反例`

```html
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

```html
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

`好例子`

```html
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

```html
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

## 为组件样式设置作用域

**对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。**

**不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 `scoped` 特性。**

这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。

class 名称格式统一为 kebab-case

## vue 属性顺序排布

```js
export default {
  mixins: [], // 禁用
  components: {},
  props: {},
  data() {},
  inject: [],
  provide: {},
  computed: {}
  watch: {}
  directives: {}
  created() {},
  mounted() {},
  //... 生命周期函数
  filters: {}
  methods: {}
}
```

## 国际化使用规则

可自行添加文案，但切记不能有重复的 key 和 value

1. 全局文案（src/i18n/lang.ts）, src/components src/feature 以及各模块通用的文案存放在全局文案中，不同用途的文案放置到不同的对象中， 公共组件文案可以以组件名进行区分，如下面的 videoSelector

```js
export default {
  moduleName: {
    SC0001: "首页",
    SC0002: "检索",
  },
  base: {
    all: "不限",
    max: "最大",
    min: "最小",
  },
  videoSelector: {
    title: "视频源选择",
    number: "已选视频源个数",
  },
};
```

2.局部文案(各自模块维护各自文案), 每个 module 下都有一个 lang.ts 文件,以 src/modules/dashboard 为例， 按照模块名称进行命名空间的限制

```js
export default {
  dashboard： {
    title： "首页"
  }
};
```

```html
<template>
  <div>
    <h1>dashboard</h1>
    <h1>测试国际化</h1>
    <p>模块内部文案: {{$t('dashboard.title')}}</p>
    <p>全局文案: {{$t('operation.confirm')}}</p>
  </div>
</template>
```
