# Table 操作列

适用于 `rz-table` 组件中的操作列。操作项默认超过 3 个时，超过的操作项隐藏。

> 饶青彪

```html
<template>
  <rz-table :data="table">
    <rz-table-column label="姓名" prop="name"></rz-table-column>
    <rz-table-column label="年龄" prop="age"></rz-table-column>
    <rz-table-column label="操作" width="380">
      <template slot-scope="scope">
        <TableOperations
          :row="scope.row" 
          :operations="tableOperations(scope.row)" 
          @click="handleTableOperationsClick"
        />
      </template>
    </rz-table-column>
  </rz-table>
</template>

<script>
  import TableOperations from "#/TableOperations";

  export default {
    name: "TableOperationsDemo",
    components: {
      TableOperations,
    },
    data() {
      return {
        table: [
          { name: "张一", age: 17, type: 1 },
          { name: "张二", age: 18, type: 2 },
          { name: "张三", age: 19, type: 3 },
          { name: "张四", age: 20, type: 4 },
          { name: "张五", age: 21, type: 5 },
        ]
      };
    },
    methods: {
      tableOperations(row) {
        const operations = [
          { type: 1, show: true, disabled: true, disabledDescription: "特征库不支持进行人像管理", text: "操作一" },
          { type: 2, show: true, disabled: false, text: "操作二" },
          { type: 3, show: true, disabled: false, text: "操作三" },
          { type: 4, show: true, disabled: false, text: "操作四" },
          { type: 5, show: true, disabled: false, text: "操作五" },
          { type: 6, show: true, disabled: false, text: "操作六" },
        ];

        return operations.map(item => {
          const disabledOperation = (row.type === 2 || row.type === 3) && (item.type ===1 || item.type === 5);
          const disabledDescription = disabledOperation ? "特征库不支持进行人像管理" : "";
          const disabled = disabledOperation;
          return {...item, disabledDescription, disabled}
        })
      },
      handleTableOperationsClick(row, type) {
        switch (type) {
          case 1: this.handleOperation1(row, type); break;
          case 2: this.handleOperation2(row, type); break;
          case 3: this.handleOperation3(row, type); break;
          case 4: this.handleOperation4(row, type); break;
          case 5: this.handleOperation5(row, type); break;
          case 6: this.handleOperation6(row, type); break; 
          default: break;
        }
      },
      handleOperation1(row, type) {
        this.$message.success(`操作一，${row.name}`);
      },
      handleOperation2(row, type) {
        this.$message.success(`操作二，${row.name}`);
      },
      handleOperation3(row, type) {
        this.$message.success(`操作三，${row.name}`);
      },
      handleOperation4(row, type) {
        this.$message.success(`操作四，${row.name}`);
      },
      handleOperation5(row, type) {
        this.$message.success(`操作五，${row.name}`);
      },
      handleOperation6(row, type) {
        this.$message.success(`操作六，${row.name}`);
      },
    },
  };
</script>
```

## TableOperations Attributes

| 参数  | 说明 | 类型  | 可选值 | 默认值 |
| :---- | :--- | :---- | :-----: | :-----: |
| row  | table 中当前行的数据 | Object  | - | - |
| operations | 操作项的具体数据，包括名称，类型，是否显示 | operations[] | - | - |
| visibleSize | 操作项最大显示个数，超出省略 | Number  | - | 3 |

```ts
interface operations {
  type: 1,
  show: true,
  text: "操作一"
}
```

## TableOperations Events

| 事件名称 | 说明 | 回调参数  | 
| :---- | :--- | :---- |
| click  | 点击具体的操作项时触发 | Function(row, type) |