<template>
  <div id="observe-list">
    <div class="wrap">
      <ul>
        <li v-for="(item,index) in items" :key="index" @click="handle(index)">
          <!-- <span>{{item}}</span> -->
          <span>{{ item.name }}</span>
          <span>{{ numbers[index] }}</span>
        </li>
      </ul>
      <div>
        {{ arr }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Observelist",
  data() {
    return {
      numbers: [1,2,3],
      test: { a:3 },
      items: [{ name: "tom" }, { name: "jerry" }, { name: "zara" }],
      arr: [],
    };
  },
  mounted() {
    // console.log(this.$data);
    console.log(this.numbers);
    console.log(this);
  },
  methods: {
    handle: function(index) {
      // WHY: 更新数据，view层未渲染，console这个数组可以发现数据确实更新了
      // if (typeof(this.numbers[index]) === "undefined" ) {
      //     this.numbers[index] = 1;
      // } else {
      //     console.log('这里有个index:%i', index);
      //     this.numbers[index]++;
      // }
      this.items[index] = { name: "kate" };
      // this.items[index].name += " good";

      // Vue.set(this.$data,arr,'arr出现了');
    //   this.$set(this.items, index, { name: "kate" });

    //   Vue.set(this.items, index, { name: "kate" });
    //   this.arr[index] = {name: 'kate'};
    //   this.arr.concat(this.items);
    //   this.arr = this.items.map((item)=>{
    //       return item.name;
    //   });
    //   this.numbers = [...this.items];
    //   this.arr=this.items;
    //   this.arr[index].name += " good";
    }
  },
};
</script>

<style>
</style>
