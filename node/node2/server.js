const http = require('http');
const fs = require('fs');
const queryStr = require('querystring');
const urlObj = require('url');

http.createServer(function(req,res){
  //get

  var obj = urlObj.parse(req.url,true);
  var url = obj.pathname;
  var get = obj.query;

  //post
  var str = '';
   req.on('data',function(data){
      str+=data;
   });
   req.on('end',function(){
      var post = queryStr.parse(str);
    //  console.log(url,get,post);
   });

   var fname = './node2/www'+url;

   fs.readFile(fname,function(error,data){
      // console.log(error);
      if(error){
          res.write('404');
      }else{
          res.write(data);
      }
      res.end();
   });
}).listen(8080);
