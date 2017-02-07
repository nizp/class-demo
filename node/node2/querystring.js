const http = require('http');
//专门处理url地址为不带?后面的数据[user=nizp&pass=123]
// const queryStr = require('querystring');
//专门处理接收数据中带?的数据[xxx.com?user=nizp&pass=123]
const queryStr = require('url');
http.createServer(function(req,res){
  //var q = queryStr.parse(req.url.split('?')[1]);
  var q = queryStr.parse(req.url,true); //true代表将字符串转为对象
  //q返回值有2个常用属性
  //1.q.pathname  地址
  //2.q.query   转化的对象
  console.log(q.query);
}).listen(8080);
