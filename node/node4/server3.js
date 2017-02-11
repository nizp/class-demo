const express = require('express');
const exStaic = require('express-static');
var server = express();
var json = {"nizp":123456};
server.listen(8080);
//post有坑
server.get('/login',function(req,res){
  var user = req.query['user'];
  var pass = req.query['pass'];
  if(!json[user]){
    res.send({"code":0,"msg":"用户名不存在!"});
  }else{
    if(json[user] != pass){
      res.send({"code":0,"msg":"用户名或密码错误"});
    }else{
      res.send({"code":1,"msg":"登录成功!"});
    }
  }
});
server.get('/reg',function(req,res){
  var user = req.query['user'];
  var pass = req.query['pass'];
  console.log(json)
  if(!json[user]){
    json[user] = pass;
    res.send({"code":1,"msg":"注册成功!"});
  }else{
    res.send({"code":0,"msg":"用户名已被占用"});
  }
});
server.use(exStaic('./www'));
