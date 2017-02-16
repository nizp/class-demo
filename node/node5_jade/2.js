var jade = require('jade');
console.log(jade.renderFile('./viwe/jade4.js',{pretty:true,
  obj:{
    width:'200px',
    height:'100px',
    background:'red'
  },
  arr:['active','abc','red']
}));
