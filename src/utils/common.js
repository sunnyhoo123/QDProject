

/**
 * @description: 在本地dev下默认拿url，如果是线上环境拿当前的host
 * @param {String} downloadUrl 
 * @param {String} fileName 
 * @returns {type}
 */
const userAgent = navigator.userAgent;
const isIE = (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) || (userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1)

/**
 * @description: 在本地dev下默认拿url，如果是线上环境拿当前的host
 * @param {String} downloadUrl 
 * @param {String} fileName 
 * @returns {type}
 */

const BASE_URL = ""

function download(downloadUrl, fileName) {
  const down = document.createElement("a");
  let host ="";
  if(BASE_URL) {
    host = BASE_URL;
  } else {
    host = window.location.origin;
  }
  down.href = `${downloadUrl.indexOf("http://") === 0 ? "" : host}${downloadUrl}}`;
  down.download = fileName;
  document.body.appendChild(down);
  down.click();
  setTimeout(() => {
    down.remove();
  }, 200);
}

function downloadGetFile(url) {
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  iframe.onload = () => {
    document.body.removeChild(iframe);
  }
}
// 下载blob文件
const downloadFile = function(blob, fileName, that) {
  // 文件下载错误信息
  if(blob.type === "jsonString") {
    let reader = new FileReader();
    reader.readAsText(blob.data, "utf-8");
    let resJson = {};
    reader.onload = e => {
      if(e.target.readyState === 2) {
        resJson = JSON.parse(e.target.result);
        that.error(resJson.responseMsg);
      } 
    };
  }else {
    if(window.navigator.msSaveOrOpenBlob) { //IE10
      navigator.msSaveBlob(blob, fileName);
    }else {
      let $body = document.body;
      let link = document.createElement("a");
      link.style.display = "none";
      $body.appendChild(link);
      link.href = URL.createObjectURL(blob);  // 创建一个指向该参数对象的URL
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);  // 释放通过URL.createObjectURL()创建的URL
      $body.removeChild(link);
      link = null;
    }
  }
}

export {
  download,
  downloadGetFile,
  downloadFile,
  isIE
}