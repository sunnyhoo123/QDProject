import axios from "axios";

// 天气
export const queryCity = async( params, callback, options ) => {
  const res = await axios({
    params,
    method: "get",
    // 原地址：http://jisuweather.api.bdymkt.com/weather/city
    url: `/bdapi/weather/city`,
    headers: {
      "X-Bce-Signature": "AppCode/83e644e49bcd423392d8ab865c6ca3bb"
    },
  });
  return res.data;
}

export const queryWeather = async( params, callback, options ) => {
  const res = await axios({
    params,
    method: "get",
    url: "/bdapi/weather/query",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "X-Bce-Signature": "AppCode/83e644e49bcd423392d8ab865c6ca3bb"
    },
  });
  return res.data;
}

// 电影
export const queryMovieOn = async( params, callback, options ) => {
  const res = await axios({
    params,
    method: "post",
    url: "/mApi/movie/on",
    headers: {
      "X-Bce-Signature": "AppCode/83e644e49bcd423392d8ab865c6ca3bb"
    },
  });
  return res.data;
}

export const queryMovieDetail = async( params, callback, options ) => {
  const res = await axios({
    params,
    method: "post",
    url: "/mApi/movie/detail",
    headers: {
      "X-Bce-Signature": "AppCode/83e644e49bcd423392d8ab865c6ca3bb"
    },
  });
  return res.data;
}

// 示例
// export const queryWeather = async(params, callback, options) => {
//   const res = await axios.get("http://jisuweather.api.bdymkt.com/weather/query", {
//     params
//   });
//   return res;
// }

// 示例
// export const queryWeather = async(params, callback, options) => {
//   const res = await axios.get(`http://jisuweather.api.bdymkt.com/weather/query?id=${params.id}`, {
//     params
//   });
//   return res;
// }
