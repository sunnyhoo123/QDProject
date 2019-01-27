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
			<el-input v-model="msg" placeholder="请输入内容" style="width:100px" 
				@input="inputTest" maxlength="5"></el-input>
			<!-- <h2 v-if="ok">computed：{{reversedMessage}}</h2> -->
		</div>
		
		<!-- <div v-bind:class="[activeClass, errorClass]">使用数组传值</div> -->
		<div>
			<!-- <button @click="getApiData">获取币种</button> -->
		</div>
			<!-- <li>
				请求地址：http://test.admin.broker.hm.com:10010/exchange_api/base/listFiatCurrency
			</li> -->
		<!-- <div id="example-5">
			<select v-model="selected" multiple style="width: 50px;">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div> -->
		<select v-model="selected">
			<!-- 内联对象字面量 -->
			<option value="交易">交易</option>
			<option value="查询">查询</option>
			<option v-bind:value="{ number: 123 }">初始化</option>
		</select>
		<span>select: {{ selected }}</span>
		<span>点击自增，{{count}}会加1</span>

		<template>
			<el-select v-model="value" placeholder="请选择">
				<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.label">
				</el-option>
			</el-select>
		</template>
		<p>
			您选择的是：{{value}}
		</p>
		<el-button type="primary" @click="increment">自增测试</el-button>
		<el-button type="primary" @click="Test1()">方法测试</el-button>
		<el-button type="primary" @click="bg">切换背景</el-button>
		<el-button type="primary" @click="addCont">执行合约</el-button>
		<el-button type="primary" @click="hiddenBG">{{hiddenBg}}</el-button>
		<div class="body">
			<div class="background" ref="element" style="display:block" v-if="seen"></div>
			<div class="execCont"><strong>合约信息</strong>
				<ul v-for="item in contList" :key="item">
					<li >{{item}}</li>
				</ul>
			</div>
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
</template>

<script>
	import axios from 'axios'
	import TestDemo from '@/components/Demo.vue'
	import fsObj from '@/services/fs-service.js'
	import {mapActions,mapGetters} from 'vuex'
	import apiConfig from '@/config/API-config'
	export default {
		name: "Home",
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
				hiddenBg:'显示背景',
				options: [{
					value: '选项0',
					label: '所有'
					}, {
					value: '选项1',
					label: '黄金糕'
					}, {
					value: '选项2',
					label: '双皮奶'
					}, {
					value: '选项3',
					label: '蚵仔煎'
					}, {
					value: '选项4',
					label: '龙须面'
					}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value:''
			};
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
			// getApiData() {
			// 	axios.post(
			// 		"http://test.admin.broker.hm.com:10010/exchange_api/base/listFiatCurrency", {
			// 				id: 2
			// 		}
			// 	).then(function(rep) {
			// 		console.log(rep);
			// 	});
			// },
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
				console.log(apiConfig.NODE.list)
			},
			bg(){
				let r = Math.floor((Math.random()*6)+1)
				console.log(r)
				this.$refs.element.style.background = "url("+require('./images/demo'+r+'.jpg')+ ")no-repeat"
			},
			addCont(){
				this.contList.push(this.selected)
				// this.exec(this.selected)
				
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
					this.hiddenBg = '隐藏背景'
				}else{
					this.hiddenBg = '显示背景'
				}

				
			}
		},
		components: {
			TestDemo
		}
		 
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
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
		width: 400px;
		height: 400px;
		background: url('./images/demo1.jpg') no-repeat
	}
	.body{
		display: flex;
	}
	.up{
		width: 7px;
		height: 7px;
		border-top: 2px solid rgb(129,180,229); 
		border-left: 2px solid rgb(129,180,229);
		transform: rotate(45deg);
	}
	.menu{
		width: 500px;
		height: 100px;
	}
	.icon-wallet{
		width: 20px;
		background: red;
	}

</style>
