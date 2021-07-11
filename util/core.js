import qs from "qs";
//判断对象是否为json格式
export function isJson(obj) {
  var isjson =
    typeof obj == "object" &&
    Object.prototype.toString.call(obj).toLowerCase() == "[object object]" &&
    !obj.length;
  return isjson;
}
//参数序列化
export function urlParams(params) {
  return qs.stringify(params);
}
//日期格式化
export function formDate(date, format) {
  var args = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var i in args) {
    var n = args[i];
    if (new RegExp("(" + i + ")").test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length)
      );
  }
  return format;
}
//获取token值
export function token() {
  return sessionStorage.getItem("TOKEN");
}
//下载文件
export function dowandFile(res, fileName) {
  var blob = new Blob([res]);
  if ("download" in document.createElement("a")) {
    var a = window.document.createElement("a");
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  } else {
    navigator.msSaveBlob(blob, fileName);
  }
}
//判断是否属于微信内置浏览器
export function is_weixin() {
  let ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
