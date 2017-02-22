const express = require('express');
const fs = require('fs');
const pathLib = require('path'); //可以将文件路径分段切成 www/a.txt -> www/   a  .txt
const multer = require('multer');//上传大数据的中间件
var server = express();
var objMulter = multer({dest:'./www/upload/'});//指定路径

// server.use(objMulter.any());
server.use(objMulter.any());//所有都能传

server.post('/',function(req,res){
  //重命名文件扩展名（带路径）
  var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

  //修改文件名：使用fs.rename(原文件名,要修改的名字,回调)
  fs.rename(req.files[0].path,newName,function(err){
      if(err){
        res.send('失败');
      }else{
        res.send('成功');
      }
  });
});

server.listen('8080');
