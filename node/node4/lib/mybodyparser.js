const queryS = require('querystring');
var str = '';
module.exports = function(req,res,next){
  req.on('data',function(data){
      str+=data;
  });
  req.on('end',function(err){
    req.body = queryS.parse(str);
    next();
  });
};
