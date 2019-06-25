<template>
    <div class="eltable">
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
</template>

<script>
    //import  from ''

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
                    pagesize: 5
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

</style>