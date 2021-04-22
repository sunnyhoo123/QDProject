import axios from "axios";
import { Message } from "element-ui";
import { Store } from "vuex";
import Router from "vue-router"
import { isIE } from "@/utils/common.js";

// import { logout } from "utils";
// import i18n from "i18n";

// let timeOut = 30 * 1000; //超时时间
// TODO后面这个需要拉配置的, 或者从系统信息中获取设置
const service = axios.create({
  timeout: 8000,
  withCredentials: true  //当前请求为跨域类型时是否在请求中协带cookie,要注意domain:访问网站是否和set-cookie中一样，都是域名或者都是ip
});

/** 
* Promise 异步请求
* @param { string } url
* @param { object } data get、post请求都是data参数
* @param { boolean } showLoading 为true时显示全局spin
* @param { object } options
*/

export function http({
  method, data, showLoading = true, showError = false, ...arg
}) {
  // if(showLoading) {Store.commit("setLoading"), true}
  return new Promise((resolve, reject) => {
    console.log(222)
    service({ method, data, showLoading, ...arg }).then(res => {
      console.log(333)
      const { responseCode, responseMsg, success } = res.data;
      if(responseCode === 10001 || success){
        resolve(res.data);
      }else {
        if(showError) {Message.error({ content: responseMsg || "系统异常" })}
        reject(res.data);
      }
    }, error => {
      reject(error)
    }).finally(() => {
      // if(showLoading) {Store.commit("setLoading", false)}
    })
  })
}

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.params = config.params || {};
    if(config.method === "get") {
      config.params = Object.assign({}, config.params, config.data)
    }
    // 解决IE请求数据不更新的问题
    if(isIE && config.method === "get") {config.params._t = new Date().getTime();}
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 添加响应拦截器
false && service.interceptors.response.use(
  response => {
    const loginCode = ["10003", "10005", "-9999"]; // 10003登录超时...
    const errorCode = response.data.responseCode || response.data.errorCode;
    if(loginCode.indexOf(errorCode) === -1 ) {
      Router.replace({ name: "Login" });
    }
    return Promise.reject(response.data);
  },
  error => {
    if(error && error.response) {
      let res = {};
      res.code = error.response.status;
      return Promise.reject(res);
    }
    return Promise.reject(error);
  }
)

if (window.config) {
  service.defaults.baseURL = config.host;
}

export default service;
