<template>
    <div class="eltable">
		<el-button type="primary" @click="seenTable=true">查看表格</el-button>
		<el-button type="primary" @click="getClubPictures">获取壁纸</el-button>
        <div class="table" v-show="seenTable">
            <el-table
                :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
                ref="multipleTable"
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                :row-key="getRowKeys"
                style="width: 100%">
                <el-table-column
                    type="selection"
                    :reserve-selection="true"
                    width="55">
                </el-table-column>
                <el-table-column
                    label="日期"
                    width="120"
                    property="dataid">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                :page-size='pagesize'
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="tableData.length">
            </el-pagination>
        </div>
        <div v-if="seen" class="wallpaper">
            <el-scrollbar style="height:100%">
                <ul  class="ul-api" v-for="item in pictures.slice((currPicPage - 1) * pagesize, currPicPage * pagesize)" :key="item.index">
                    <li><img :src="item" width="800" height="600"></li>
                </ul>
            </el-scrollbar>
            <el-pagination
                background
                :page-size='pagesize'
                layout="prev, pager, next"
                @current-change="handleCurrPicChange"
                :total="pictures.length">
            </el-pagination>
		</div>
        <router-link to="/elForm/elSelect">parent</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    //import  from ''
	import apiService from '@/services/API-service.js'

    export default {
        //组件名
        name: 'eltable',
        //实例的数据对象
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: [],
                currpage: 1,
                pagesize: 5,
                seen:false,
                pictures:[],
                currPicPage: 1,
                seenTable:false,
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
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleCurrentChange(cpage) {
                this.currpage = cpage;
            },
            getRowKeys(row) {
                return row.date;
            },
            getClubPictures() {
				this.seen = !this.seen
				apiService.TestURL.acgclubURL().then(res=>{
					let {data} = res;
					data.forEach(item => {
						this.pictures.push(item.thumbnail);
					});
				}).catch()
            },
            handleCurrPicChange(cpage) {
                this.currPicPage = cpage;
            },
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

        },
        //自定义指令
        directive:{

        }
    }
</script>

<!--
	作者：hoo790692170@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>
    .wallpaper{
        width: 820px;
        height: 600px;
    }
</style>

<style lang="less">
    // 防止scrollbar出现横滚动条
    .el-scrollbar__wrap{
        overflow-x:hidden;
    }
</style>