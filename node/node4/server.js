const express = require('express');
var server = express();
server.get('/',function(req,res){
  console.log('get');
});
server.post('/',function(req,res){
  console.log('post');
});

server.use('/',function(req,res){
  console.log('123');
});
server.listen(8080);
