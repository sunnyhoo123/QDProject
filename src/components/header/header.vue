<template>
		<div class="header-wrap">
			<div>
				<el-tag title="router-link to">跳转到
					<router-link to="/demo">Demo</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./more">More</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./listabout">list</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./numberabout">number</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./fea">fea</router-link>
				</el-tag>
				<el-tag title="router-link to">跳转到
					<router-link to="./func">func</router-link>
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
