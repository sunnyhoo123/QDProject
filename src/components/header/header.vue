<template>
		<div class="header-wrap">
			<div>
				<el-tag title="router-link to">
					<router-link to="/demo">Element UI</router-link>
				</el-tag>
				<el-tag title="router-link to">
					<router-link to="./more">扩展</router-link>
				</el-tag>
				<el-tag title="router-link to">
					<router-link to="./listabout">数组专场</router-link>
				</el-tag>
				<el-tag title="router-link to">
					<router-link to="./numberabout">Number专场</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./fea">Feature</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./func">function</router-link>
				</el-tag>
			</div>
		</div>
</template>

<script>
	import axios from 'axios'
	import {mapActions,mapGetters} from 'vuex'
	export default {
		name: "header-wrap",
		data() {
			return {
			}
		},
		computed: {
			...mapGetters(['contractExecListGetter']),
			// reversedMessage: function(){
			// 	return this.msg.split('').reverse().join('')
			// }
			reversedMessage:{
				get:function(){
					return this.msg
				},
				set:function(newValue){
					let names = newValue.split(' ');
					console.log(names)
				}
			}
		},
		methods: {
			...mapActions(['exec']),
			increment () {
			this.count++
			},
		},
		components: {
			// TestDemo
		}
		 
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	
</style>
