<template>
	<div class="elLH-wrap">
		<el-scrollbar style="height:100%">
			<div class="side-nav">
				<div class="nav-group">
					<div class="nav-group__title">Basic</div>
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item"></li>
					</ul>
				</div>
				<div class="nav-group">
					<div class="nav-group__title">Form</div>
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item">
							<!-- <router-link to="./elementCom/elForm">Upload 上传</router-link> -->
							<a @click="linkto">Upload 上传</a>
						</li>
					</ul>
				</div>
				<div class="nav-group">
					<div class="nav-group__title">Data</div>
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item">
							<!-- <router-link to="./elementCom/elData">Table 表格</router-link> -->
							<a @click="linkto1">Table 表格</a>
						</li>
						<!-- <li class="nav-item"><router-link to="./elementCom/elData">Tag 标签</router-link></li> -->
					</ul>
				</div>
				<div class="nav-group">
					<div class="nav-group__title">Notice</div>

				</div>
				<div class="nav-group">
					<div class="nav-group__title">Navigation</div>
				</div>
				<div class="nav-group">
					<div class="nav-group__title">Others</div>
				</div>
			</div>
		</el-scrollbar>
	</div>
</template>

<script>
	export default {
		name: "elLH-wrap",
		data() {
			return {
			}
		},
		computed: {
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
			increment () {
				this.count++
			},
			linkto (){
				this.$router.push({ path: '/elementCom/elForm' });
			},
			linkto1 () {
				this.$router.push({ path: '/elementCom/elData' });
			}
		},
		components: {
			// TestDemo
		}
		 
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	.elLH-wrap{
		width: 200px;
		// height: 100px;
		// position: fixed;
		.nav-item a{
			display: block;
			height: 40px;
			color: #444;
			line-height: 40px;
			font-size: 14px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-weight: 400;
		}
	}
	.side-nav{
		padding-left: 50px;
		text-align: left;
		.nav-group__title{
			font-size: 12px;
			color: #999;
			line-height: 26px;
			margin-top: 15px;
		}
	} 
</style>

<style lang="less">
    // 防止scrollbar出现横滚动条
    .el-scrollbar__wrap{
        overflow-x:hidden;
    }
</style>