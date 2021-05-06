import { http } from "./service"

export default {
  /**
   * 获取接口数据
   * @param {Object} data
   */
  queryList(data){
    return http({
      url: "https://result.eolinker.com/2wXUu3wf3a34424118f2139a38fee7e0969f6078dbc9650?uri=/planList",
      method: "get",
      data
    });
  },
  // 下载
  download(data){
    return http({
      url: "https://result.eolinker.com/2wXUu3wf3a34424118f2139a38fee7e0969f6078dbc9650?uri=/planList",
      method: "get",
      responseType: "blob"
    });
  }
}