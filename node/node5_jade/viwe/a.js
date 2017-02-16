window.onload = function(){
  var str = 'djsah3213213riehdmsldas';
  var arr = [];
  for(var i=0;i<str.length;i++){
    if(!isNaN(str[i])){
      arr.push(str[i]);
    }
  }
  console.log(arr);
}
