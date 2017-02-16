var jade = require('jade');
const fs = require('fs');
var str = jade.renderFile('./viwe/jade5.js',{pretty:true});
// console.log(str)
fs.writeFile('./bulid/index.html',str,function(err){
  if(!err){
    console.log('成功');
  }else{
    console.log('失败');
  }
});
