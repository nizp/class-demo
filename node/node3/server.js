const http = require('http');
const fs = require('fs');
// const queryStr = require('querystring');
const urlObj = require('url');
var data = {};
var str = '';
const server = http.createServer(function(req,res){
  req.on('data',function(data){
      str += data;
  });
  req.on('end',function(){
    var querys = urlObj.parse(req.url,true);
    var url = querys.pathname;
    var get = querys.query;
    if(url == '/user'){
      switch(get.act){
        case 'reg':
          if(!data[get.user]){
            data[get.user] = get.pass;
            res.write('{"ok":true,"msg":"成功！！"}');
          }else{
            res.write('{"ok":false,"msg":"用户名已占用!"}');
          }
        break;
        case 'login':
          if(!data[get.user]){
            res.write('{"ok":false,"msg":"未注册!"}');
          }else{
            if(data[get.user] === get.pass){
              res.write('{"ok":true,"msg":"登录成功！！"}');
            }else{
              res.write('{"ok":false,"msg":"登录失败！！!"}');
            }
          }
        break;
        default:
            res.write('{"ok":false,"msg":"格式错误!"}');
        break;
      }
      res.end();
    }else{
      var fnName = './www'+url;
      fs.readFile(fnName,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
      });
    }
  });
});
server.listen(8080);
