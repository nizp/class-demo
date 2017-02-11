const express = require('express');
const expressStatic = require('express-static');
var json = {};
var server = express();
server.listen(8080);
server.get('/login',function(req,res){
  var user = req.query['user'];
  var pass = req.query['pass'];
  if(!json[user]){
    res.send({"code":0,"msg":"用户名不存在!"});
  }else{
    if(json[user] != pass){
      res.send({"code":0,"msg":"密码错误"});
    }else{
      res.send({"code":1,"msg":"成功"});
    }
  }
});
server.get('/reg',function(req,res){
  var user = req.query['user'];
  var pass = req.query['pass'];
  if(!json[user]){
    json[user] = pass;
    res.send({"code":1,"msg":"注册成功"});
  }else{
    res.send({"code":0,"msg":"注册失败"});
  }
});
server.use(expressStatic('./www'));
