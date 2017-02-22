const fs = require('fs');
//修改文件名：使用fs.rename(原文件名,要修改的名字,回调)
fs.rename('a.txt','b.txt',function(err){
  if(err){
    console.log(err);
  }
});
