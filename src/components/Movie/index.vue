<template>
  <div class="movie">
    <el-button @click="getMovieOn">查看当前城市上映的电影，默认为北京</el-button>
    <section class="container">
      <div v-for="i in movieList" :key="i.movieid" class="card">
        <img :src="i.pic" class="card-img-top">
        <div class="card-body">
          <div class="card-title">{{ i.moviename }}</div>
          <!-- <div class="card-text">{{ i.enname }}</div>
          <div class="card-text">上映日期：{{ i.releasedate }}</div>
          <div>类型：{{ i.class }}</div>
          <div class="card-text">
            导演：
            <span v-html="i.director"></span>
          </div> -->
          <a class="btn" @click="getMovieDetail(i.movieid)">More</a>
        </div>
      </div>
    </section>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div v-if="movieDetail" class="card-body">
        <div class="card-title">{{ movieDetail.moviename }}</div>
        <div class="card-text">{{ movieDetail.enname }}</div>
        <div class="card-text">上映日期：{{ movieDetail.releasedate }}</div>
        <div>类型：{{ movieDetail.class }}</div>
        <div class="card-text">
          导演：
          <span v-html="movieDetail.director"></span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { queryMovieOn, queryMovieDetail } from "@/api/baiduCloud"

export default {
  //组件名
  name: "Movie",
  //实例的数据对象
  data() {
    return {
      movieDetail: null,
      acgImg: "",
      movieList: [],
      movieid: 10,
      dialogVisible: false
    }
  },
  methods:{
    async getMovieOn() {
      const params = {
        cityid: 1,
        city: "",
        date: 2010,
      }
      const { result } = await queryMovieOn(params);
      this.movieList = result.list;
    },
    async getMovieDetail(movieid) {
      const params = {
        movieid,
      }
      const { result } = await queryMovieDetail(params);
      this.movieDetail = result;
      this.dialogVisible = true
    },
  }
}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);

.movie {
  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  img {
    width: 270px;
    height: 405px;
  }

.container {
  // width: 1000px;
  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // card style heavily inspired from bootstrap card
  .card {
    // margin: 1em;
    margin-top: -15em;
    margin-bottom: 2em;
    .card-img-top {
      position: relative;
      z-index: 2;
      // width: 302px;
      // height: 222px;
      transform: translateY(52%);
      transition: 0.5s;
    }
    .card-body {
      z-index: 1;
      box-sizing: border-box;
      padding: 1.25em;
      height: 220px;
      background: white;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.056),
        0 6.7px 5.3px rgba(0, 0, 0, 0.081), 0 12.5px 10px rgba(0, 0, 0, 0.1),
        0 22.3px 17.9px rgba(0, 0, 0, 0.119),
        0 41.8px 33.4px rgba(0, 0, 0, 0.144), 0 100px 80px rgba(0, 0, 0, 0.2);
      transform: translateY(-50%);
      transition: 0.5s;

      .card-title {
        margin: 0 0 0.75em 0;
        font-size: 1.25em;
        font-weight: bold;
        line-height: 1.2;
      }

      .card-text {
        margin: 0 0 1em 0;
      }

      .btn {
        padding: 0.375em 0.75em;
        color: black;
        text-decoration: none;
        line-height: 1.5;
        border: 1px solid black;
        border-radius: 0.25em;
        transition: 0.5s;

        &:hover {
          color: white;
          background: black;
        }
      }
    }

    &:hover {
      .card-img-top {
        transform: translateY(2%);
      }

      .card-body {
        transform: translateY(0);
      }
    }
  }
}
}
</style>