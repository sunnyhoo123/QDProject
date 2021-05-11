import axios from "axios";

// 物流接口
// http://www.kuaidi100.com/query?type=快递公司代号&postid=快递单号
// ps:快递公司编码:申通=”shentong” EMS=”ems” 顺丰=”shunfeng” 圆通=”yuantong” 中通=”zhongtong” 韵达=”yunda” 天天=”tiantian” 汇通=”huitongkuaidi” 全峰=”quanfengkuaidi” 德邦=”debangwuliu” 宅急送=”zhaijisong”
export const queryKuaidi = async(params, callback, options) => {
  const res = axios.get("http://www.kuaidi100.com/query?type=yuantong&postid=122333232");
  return res;
}

// 获取诗词
export const queryPoems = async(params, callback, options) => {
  const res = await axios.get("https://www.meiriyiyan.com/api/v1/");
  return res.data;
}

// 获取诗词
export const queryPoem = async(params, callback, options) => {
  const res = await axios.get("https://tenapi.cn/yiyan/");
  return res.data;
}

// 获取背景图片
export const queryAcgImg = async(params, callback, options) => {
  const res = await axios({
    params: {
      format: "json"
    },
    method: "post",
    url: "https://v1.alapi.cn/api/acg",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return res.data
}

// 获取头像
export const queryAvatar = async(params, callback, options) => {
  const res = await axios({
    params,
    method: "post",
    url: "https://v1.alapi.cn/api/avatar",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    responseType: "blob"  //下载文件，转换为blob时，接口需要添加responseType
  });
  return res.data
}

// 获取诗词
export const getyiyan = async( params ) => {
  const res = await axios({
    params,
    method: "get",
    url: "https://tenapi.cn/yiyan"
  });
  return res.data;
}

// 历史事件
export const queryHistory = async( params ) => {
  const res = await axios({
    params,
    method: "get",
    url: "https://tenapi.cn/lishi"
  });
  return res.data;
}

// 热搜
export const queryHotSearch = async( params ) => {
  const res = await axios({
    params,
    method: "get",
    url: "https://tenapi.cn/resou"
  });
  return res.data;
}
