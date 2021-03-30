import axios from "axios";

// 物流接口
// http://www.kuaidi100.com/query?type=快递公司代号&postid=快递单号
// ps:快递公司编码:申通=”shentong” EMS=”ems” 顺丰=”shunfeng” 圆通=”yuantong” 中通=”zhongtong” 韵达=”yunda” 天天=”tiantian” 汇通=”huitongkuaidi” 全峰=”quanfengkuaidi” 德邦=”debangwuliu” 宅急送=”zhaijisong”
export const queryKuaidi = async(params, callback, options) => {
  const res = axios.get("http://www.kuaidi100.com/query?type=yuantong&postid=122333232");
  return res;
}

export const queryPoem = async(params, callback, options) => {
  // https://www.meiriyiyan.com/api/v1/one.svg (svg格式)
  const res = await axios.get("https://www.meiriyiyan.com/api/v1/");
  return res.data;
}

export const queryAcgImg = async(params, callback, options) => {
  const res = await axios.get("https://v1.alapi.cn/api/acg");
  return res;
}