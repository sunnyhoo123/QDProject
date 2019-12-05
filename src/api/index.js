import axios from "axios";
// import { logout } from "utils";
// import i18n from "i18n";

// TODO后面这个需要拉配置的, 或者从系统信息中获取设置
const api = axios.create({
  timeout: 8000,
});

const responseSuccess = response => {
  const errorCode = response.data.errorCode;
  if (errorCode === "0") {
    return response.data.data;
  } else {
    return Promise.reject(response);
  }
};

const responseFail = errorMessage => {
  // 请求超时
  if (errorMessage.code === "ECONNABORTED" || errorMessage.message.includes("timeout")) {
    console.log()
  }
  // 登录信息失效
  else if (errorMessage.response && errorMessage.response.status === 401) {
    console.log()
  }
  // 没有功能权限
  else if (errorMessage.response && errorMessage.response.status === 403) {
    console.log()
  }
  // 其他服务器异常等
  else {
    if (errorMessage.response.status === 400 && errorMessage.response.config.url.includes("authorize/userInfo")) {
      // userInfo token失效时，返回异常
    }
    // eslint-disable-next-line
    console.error({
      api: errorMessage.config.url,
      errorMsg: errorMessage.message,
    });
  }
  return Promise.reject(errorMessage);
};

api.interceptors.response.use(responseSuccess, responseFail);

if (window.config) {
  api.defaults.baseURL = config.host;
}

export default api;
