const express = require('express');
const expressStatic = require('express-static');//从哪个文件下找
const bodyParser = require('./lib/mybodyparser');
const server = express();
server.listen(8080);
/*
  使用多个use()，每个完成，还要执行下面的命令，加next();
*/
server.use(bodyParser);
server.use(function(req,res,next){
  console.log(req.body);
  next();
});
server.use(expressStatic('./www'));
