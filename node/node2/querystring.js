const http = require('http');
// const queryStr = require('querystring');
const queryStr = require('url');
http.createServer(function(req,res){
  //var q = queryStr.parse(req.url.split('?')[1]);
  var q = queryStr.parse(req.url,true);
  console.log(q.query);
}).listen(8080);
