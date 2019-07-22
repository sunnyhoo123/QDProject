<template>
    <div class="feature">
        <el-button @click="linkToKCD">S+D键实现删除功能</el-button>
        <!-- 使用懒加载，输入后点击其他地方才会显示 -->
        <span>请输入整数：</span>
        <input v-model.lazy="content" type="number">
        <span>过滤结果为： {{content|unit}}</span>
        
        <div v-html="content"></div>
        <div @click="getCurrentTime">获取当前时间：{{this.currentTime}}</div>
        <el-button type="primary" @click="GetParameter">获取浏览器URL中的参数</el-button>
        <el-button type="primary" @click="outPut">0~n之和</el-button>
        <el-alert title="异常时的经纬度信息" type="info" :description=showValue show-icon></el-alert>

		<el-button type="primary" @click="addCont">执行合约</el-button>
        <div>
            <select v-model="selected">
                <!-- 内联对象字面量 -->
                <option value="交易">交易</option>
                <option value="查询">查询</option>
                <option v-bind:value="{ number: 123 }">初始化</option>
            </select>
            <span>select: {{ selected }}</span>
        </div>
        <div class="contract">
			<div class="background" ref="element" style="display:block"></div>
			<div class="execCont"><strong>合约信息</strong>
				<ul class="ul-cont" v-for="(item,index) in contList" :key="index">
					<li class="li-cont">{{item}}</li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex'
    import dayjs from 'dayjs';
    export default {
        //组件名
        name: 'feature',
        //实例的数据对象
        data() {
            return {
                content:'',
                showCurrentTime:false,
                currentTime:'',
                urlTest:'http://www.runoob.com/try/try.php?filename=tryjs_datatypes_string&screen=sA313DD06E91551843259431&name=23',
                showValue:'',
                selected: "",
				contList:[],
            }
        },
        //数组或对象，用于接收来自父组件的数据
        props: {

        },
        //计算
        computed: {

        },
        //方法
        methods: {
			...mapActions(['exec']),
            GetParameter(){
                //方法1
                let args = this.urlTest.split('?')
                let arr = args[1].split('&')
                for(let i=0;i<arr.length;i++){
                    let arg= arr[i].split('=')
                    let obj = {}
                    obj[arg[0]]= arg[1] //将分离的参数保存到对象中
                    console.log(obj)
                }

                //方法2
                let _this = this
                function getQueryString(name) {
                    // var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
                    var result = _this.urlTest.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
                    if (result == null || result.length < 1) {
                        return "";
                    }
                    return result[1];
                }
                console.log(getQueryString('screen')) //输入参数名得到参数值
            },
            outPut(){
                let param = {
                    "longitude": 'longitude',//经度
                    "latitude": 'latitude',//纬度
                    "locationMessage": 'locationMessage' //位置信息
                };
                let error = '数据库异常'
                sessionStorage.setItem('latitude','');
                this.showValue=error+sessionStorage.getItem('latitude')+'经纬度参数'+JSON.stringify(param);
            },
            addCont(){
				if (this.selected){
					this.contList.push(this.selected)
				} else{
					this.$message({
						message: '请选择合约类型',
						duration: 1000,
						type: 'error'
					})
				}
				// this.exec(this.selected)
            },
            getCurrentTime(){
                // var date = new Date(); 
                // date.getYear(); //获取当前年份(2位) 
                // date.getFullYear(); //获取完整的年份(4位,2014) 
                // date.getMonth(); //获取当前月份(0-11,0代表1月) 
                // date.getDate(); //获取当前日(1-31)
                // date.getDay(); //获取当前星期X(0-6,0代表星期天) 
                // date.getTime(); //获取当前时间(从1970.1.1开始的毫秒数) 
                // date.getHours(); //获取当前小时数(0-23) 
                // date.getMinutes(); //获取当前分钟数(0-59) 
                // date.getSeconds(); //获取当前秒数(0-59) 
                // date.getMilliseconds(); //获取当前毫秒数(0-999) 
                // date.toLocaleDateString(); //获取当前日期 如 2019/7/12 
                // date.toLocaleTimeString(); //获取当前时间 如 下午4:45:06 
                // date.toLocaleString(); //获取日期与时间 如 2019/7/12 下午4:45:06
                
                // tip
                // 获取当前时间的时间戳 ~new Date();

                let today = new Date();
                let date = today.toLocaleDateString(); 
                let h = today.getHours();
                let m = today.getMinutes();
                let s = today.getSeconds();
                // 在 numbers<10 的数字前加上 0
                m = checkTime(m);
                s = checkTime(s);

                this.currentTime = `${date} ${h}:${m}:${s}`;
                // 定时执行该方法
                setTimeout(() => { this.getCurrentTime() }, 500)
                function checkTime(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                }
            },
            linkToKCD(){
                this.$router.push({ path: '/KeyCodeDel'})
            }
        },
        //生命周期函数
        created() {

        },
        beforeMount() {

        },
        mounted() {

        },
        //监视
        watch: {

        },
        //组件
        components: {

        },
        //过滤器
        filters:{
            //加入过滤器
            capitalize(value){
                //首字母大写
                return value.charAt(0).toUpperCase()+value.slice(1)
            },
            unit(value){
                //超过1k,以K为单位，超过1000K，单位M，小数点2位
                if ( (value) < 1000){
                    return value
                }else if(1000 < (value) && (value) < 1000000){
                    return (value/1000).toFixed(2)+'K'
                }else if((value) >1000000 ){
                    return (value/1000000).toFixed(2)+'M'
                }
            }
            
        },
        //自定义指令
        directive:{

        }
    }
</script>

<!--
	作者：liangyanxiangde@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>

</style>