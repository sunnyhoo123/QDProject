<template>
	<div class="home">
		<!-- <div>
			<el-tag>直接使用另一个vue</el-tag>
			<test-demo></test-demo> 
			<Test-demo></Test-demo>
		</div> -->
		<!-- <TestDemo></TestDemo> -->
		<!-- <TestDemo v-for="statu in status" :key="statu" :statu = status>
			<div slot="header">
				<h2>{{statu}}</h2> 
				<p>将父组件的状态{{statu}}传递给子组件header</p>
			</div>
		</TestDemo> -->
		<!-- <TestDemo>
				<span slot-scope="propsqwe">{{propsqwe.text}}</span>
		</TestDemo> -->
		<com-Header></com-Header>
		
		<!-- <div v-bind:class="[activeClass, errorClass]">使用数组传值</div> -->
		<!-- <div id="example-5">
			<select v-model="selected" multiple style="width: 50px;">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div> -->

		<el-button type="primary" @click="increment">自增测试</el-button>
		<el-button type="primary" @click="Test1()">方法测试</el-button>
		<el-button type="primary" @click="changeBg">切换背景</el-button>
		<el-button type="primary" @click="hiddenBG">{{hiddenBg}}</el-button>

		<span>点击自增，{{count}}会加1</span>
		<span>computer后的值{{reversedMessage}}</span>
		<span>{{msg}}</span>

		<div class="modules">
			<div>
				<el-menu class="menu" >
					<template v-for="(item,index) in menu" > 
						<el-menu-item  :index="index + ''" :key="index" v-if="index!=1" >
							<i v-if="item.icon" :class="item.icon"></i> {{item.name}}
						</el-menu-item>
						<template v-else disabled>{{item.name}}</template>
					</template>
       			</el-menu>
			</div>
		</div>
		<div v-if="seen">
			<ul  class="ul-api" v-for="item in getResult" :key="item.index">
				<li><img :src="item" width="800" height="600"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import fsObj from '@/services/fs-service.js'
	import {mapActions,mapGetters} from 'vuex'
	import apiService from '@/services/API-service.js'
	import comHeader from '@/components/header/header.vue';
	export default {
		name: "home",
		data() {
			return {
				msg: "1233",
				seen: false,
				ok: true,
				activeClass: "active",
				errorClass: "text-danger",
				selected: "",
				count:0,
				status: ['info','success','danger'],
				testUrl: '',
				testparams: '',
				textarea: '',
				contList:[],
				menu:[{name:123,icon: 'icon-wallet'},{name:456},{name:789}],
				hiddenBg:'显示图片',
				getResult:[]
			};
		},
		computed: {
			...mapGetters(['contractExecListGetter']),
			reversedMessage: function(){
				return this.msg.split('').reverse().join('')
			}
			// reversedMessage:{
			// 	get:function(){
			// 		return this.msg
			// 	},
			// 	set:function(newValue){
			// 		let names = newValue.split(' ');
			// 		console.log(names)
			// 	}
			// }
		},
		methods: {
			getApiData() {
				// 未封装请求方法
				// axios.post(
				// 	"http://test.admin.broker.hm.com:10010/exchange_api/base/listFiatCurrency", {
				// 			id: 2
				// 	}
				// ).then(function(rep) {
				// 	console.log(rep);
				// });

				// 将参数封装到API-config.js中，将方法封装到API-service.js中
				apiService.TestURL.imgTestURL().then(res=>{
					this.getResult = res.results
				}).catch()
			},
			increment () {
			this.count++
			},
			Test(url, params){
			if(params) {
				// url += encodeParams(params);
				url += params;
			}
			console.log(url)
			return url
			},
			Test1(){
				// this.contList.push(this.selected)
				// console.log(this.contList)
				// var date1=new Date('2016-01-01 00:00:00')Format('yyyy-MM-dd HH:mm:ss'); 
				
				var date1=new Date(1547644771000).Format('yyyy-MM-dd HH:mm:ss'); 
				console.log(new Date('123456'))
				let TOTAL = `${this.API_ROOT}/browser-api/`
				console.log(RegExp.$1.length)
				// console.log(apiConfig.NODE.list)

				let temp = String.raw;
				let tmpl =  `
					<table>
					${this.contList.push(`<div>${this.obj.latitude}</div>`)}
					</table>
					`
				console.log(tmpl)

			},
			changeBg(){
				let r = Math.floor((Math.random()*10))
				console.log(r)
				this.$refs.element.style.background = "url("+require('./images/demo'+r+'.jpg')+ ")no-repeat"
			},
			inputTest(value){
				// let newMsg;
				this.msg = value.replace(/[^\d\.]/g,'');
				console.log(this.msg);

				// debugger
			},
			hiddenBG(){
				this.seen = !this.seen
				if(this.seen){
					this.hiddenBg = '隐藏图片'
				}else{
					this.hiddenBg = '显示图片'
				}
			}
		},
		mounted() {
		},
		components: {
			// TestDemo
			comHeader
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	h1,h2 {
		font-weight: normal;
	}
	/* [title]{
		background: #42b983
	} */
	.ul-cont {
		list-style-type: none;
		padding: 0;
	}

	.li-cont {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.active {
		color: aqua;
	}

	.errorClass {
		color: #f00;
	}
	.background{
		width: 900px;
		height: 700px;
		background: url('./images/demo1.jpg') no-repeat
	}
	.contract{
		display: flex;
	}
	.up{
		width: 7px;
		height: 7px;
		border-top: 2px solid rgb(129,180,229); 
		border-left: 2px solid rgb(129,180,229);
		transform: rotate(45deg);
	}
	.icon-wallet{
		width: 20px;
		background: red;
	}
	.ul-api{
		li{
			float: left;
		}
	}
	.modules{
		display: flex;
	}
</style>
