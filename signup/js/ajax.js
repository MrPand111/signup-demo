const ajax = ({
  url = "",
  method = "get",
  params = {},
  data = {},
  headers = {},
  success = () => {},
  error = () => {}
}) => {
  let xhr;
  // 创建对象
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // 设置get参数
  if (method === "get" && JSON.stringify(params) !== "{}") {
    url += "?";
    for (let i in params) {
      url += `${i}=${params[i]}&`;
    }
    url = url.slice(0, url.length - 1);
  }
  // 规定请求
  xhr.open(method, url, true);
  // 设置请求头
  for (let i in headers) {
    xhr.setRequestHeader(i, headers[i]);
  }
  // 发送请求
  if (method === 'post') {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
  // 响应事件
  xhr.onreadystatechange = () => {
    // 判断是否请求已完成，且响应就绪
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 0) {
        const result = xhr.responseText;
        success(JSON.parse(result));
      }
    }
  }
  xhr.onerror = (err) => {
    error(err);
  }
}