const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');
var server = express();

var objMulter = multer({dest:'./www/upload/'}); //dest:'./www/upload/'指定上传到哪里
server.use(objMulter.any());
// single('f1') 为表单元素的name 只接受一个文件
// any() 所有文件都接收。
// console.log(objMulter.any())
server.post('/',function(req,res){
  //原来文件的名字 req.files[0].path
  //新名字 pathLib.parse(req.files[0].originalname).ext
 var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

 fs.rename(req.files[0].path,newName,function(err){
   if(err){
     res.send('失败');
   }else{
     res.send('成功');
   }
 });

  console.log(newName);
});

server.listen('8080');
