const express = require('express');
const bodyParser = require('body-parser');//解析post的
const expressStatic = require('express-static');//从哪个文件下找
const server = express();
server.listen(8080);
//过度解析post
//urlencoded({extend:true(扩展),imit:1024(大小)})
server.use(bodyParser.urlencoded({}));//过度解析post

server.use('/',function(req,res,next){
  console.log(req.body);
  next();//让下个程序执行
});
server.use(expressStatic('./www'));
