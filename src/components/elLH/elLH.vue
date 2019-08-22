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
						<li class="nav-item" v-for="(value,name) in elFormComponent" :key="name">
							<a @click="linkToForm(name)">{{value}}</a>
						</li>
					</ul>
				</div>
				<div class="nav-group">
					<div class="nav-group__title">Data</div>
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item" v-for="(value,name) in elDataComponent" :key="name">
							<a @click="linkToData(name)">{{value}}</a>
						</li>
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
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item" v-for="(value,name) in elOthersComponent" :key="name">
							<a @click="linkToOthers(name)">{{value}}</a>
						</li>
					</ul>
				</div>
				<div class="nav-group">
					<div class="nav-group__title">custom</div>
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item" v-for="(value,name) in CustomComponent" :key="name">
							<a @click="linkToCustom(name)">{{value}}</a>
						</li>
					</ul>
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
				elFormComponent: {
					elSelectCom: 'Select 选择器',
					elUploadCom: 'Upload 上传',
					elFormCom: 'Form 表单',
				},
				elDataComponent: {
					elTableCom: 'Table表格',
					elTagCom:'Tag标签',
				},
				elOthersComponent: {
					elPopoverCom: 'Popover 弹出框',
				},
				CustomComponent: {
					birdCom: '愤怒的小鸟',
				}
			}
		},
		computed: {
		},
		methods: {
			linkToForm (name){
				this.$router.push({ path: '/elementCom/elForm/' + name });
			},
			linkToData (name){
				this.$router.push({ path: '/elementCom/elData/' + name });
			},
			linkToOthers (name){
				this.$router.push({ path: '/elementCom/elOthers/' + name });
			},
			linkToCustom (name){
				this.$router.push({ path: '/elementCom/custom/' + name });
			},
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
			cursor: pointer;
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