<template>
    <div id="observe-list">
        <div class="wrap">
            <ul>
                <li v-for="(item,index) in items" v-on:click="handle(index)" :key='index'>
                    <!-- <span>{{item}}</span> -->
                    <span>{{item.name}}</span>
                    <span>{{numbers[index]}}</span>
                </li>
            </ul>
            <div>
                {{arr?arr[0]:'没有该数组'}}
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'observelist',
        data(){
            return{
                numbers: [],
                items: [
                {name: 'tom'},
                {name: 'jerry'},
                {name: 'zara'},
                ],
            };
        },
        methods: {
            handle: function (index) {
                // WHY: 更新数据，view层未渲染，console这个数组可以发现数据确实更新了
                // if (typeof(this.numbers[index]) === "undefined" ) {
                //     this.numbers[index] = 1;
                // } else {
                //     console.log('这里有个index:%i', index);
                //     this.numbers[index]++;
                // }
                // this.items[index] = {name: 'kate'};
                // this.items[index].name += " good";

                // 区别：1.Vue.set 可以设置实例创建之后添加的属性，如age，而this.$set只能设置实例创建后存在的属性。
                // this.$set(this.items,index,{name: 'kate'});
                Vue.set(data,arr,'arr出现了');

                // Vue.set(this.items,index,{name: 'kate'});
                // Vue.set(this.items,index,{name: 'kate'});
            }
        }
    }
</script>

<style>

</style>
