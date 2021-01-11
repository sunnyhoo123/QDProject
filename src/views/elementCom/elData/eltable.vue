<template>
  <div class="eltable">
    <el-button type="primary" @click="seenTable=true">基础表格</el-button>
    <el-button type="primary" @click="getClubPictures">获取壁纸</el-button>
    <div v-show="seenTable" class="table">
      <el-table
        ref="multipleTable"
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        :row-key="getRowKeys"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          :reserve-selection="true"
          type="selection"
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
        :page-size="pagesize"
        :total="tableData.length"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <div v-if="seen" class="wallpaper">
      <el-scrollbar style="height:100%">
        <ul v-for="item in pictures.slice((currPicPage - 1) * pagesize, currPicPage * pagesize)" :key="item.index" class="ul-api">
          <li><img :src="item" width="800" height="600"></li>
        </ul>
      </el-scrollbar>
      <el-pagination
        :page-size="pagesize"
        :total="pictures.length"
        background
        layout="prev, pager, next"
        @current-change="handleCurrPicChange">
      </el-pagination>
    </div>
    <el-divider content-position="left">合并相同行</el-divider>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="用户管理" name="first">
          <el-table
            :data="spanTableData"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
              prop="functionGroupName"
              label="功能组名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="typeDesc"
              label="流程说明">
            </el-table-column>
            <el-table-column
              prop="orderNum"
              label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.row)">编辑1</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <el-table
            :data="spanTableData"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
              prop="functionGroupName"
              label="功能组名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="typeDesc"
              label="流程说明">
            </el-table-column>
            <el-table-column
              prop="orderNum"
              label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.row)">编辑2</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-dialog
        :visible.sync="dialogVisible"
        title="提示"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import apiService from "@/services/API-service.js"
import { tableRowData, tableData } from "./mockData"

export default {
  //组件名
  name: "Eltable",
  //组件
  components: {

  },
  //过滤器
  filters:{

  },
  //数组或对象，用于接收来自父组件的数据
  props: {

  },
  //实例的数据对象
  data() {
    return {
      tableData,
      multipleSelection: [],
      currpage: 1,
      pagesize: 5,
      seen:false,
      pictures:[],
      currPicPage: 1,
      seenTable:false,
      spanTableData: tableRowData,
      cur: "",
      num: 0,
      spanArr: [],
      position: 0,
      activeName: "",
      dialogVisible: false
    }
  },
  created() {
    this.rowSpan();
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
        let { data } = res;
        data.forEach(item => {
          this.pictures.push(item.thumbnail);
        });
      }).catch()
    },
    handleCurrPicChange(cpage) {
      this.currPicPage = cpage;
    },
    handleClickTab(tab, event) {
      // console.log(tab, event);
    },
    rowSpan() {
      this.spanTableData.forEach((item, index) => {
        if (index === 0) {
          this.spanArr.push(1);
          this.position = 0;
        } else {
          if (this.spanTableData[index].functionGroupName === this.spanTableData[index - 1].functionGroupName) {
            this.spanArr[this.position] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.position = index;
          }
        }
      });
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(777)
      if (columnIndex === 0 || columnIndex === 2) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
    handleClick(row) {
      this.dialogVisible = true;
      console.log("编辑",row)
    }
  },
}
</script>


<style lang="less" scoped>
.eltable {
  width: 100%;
  height: 100%;
}
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