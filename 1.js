function Tab(){
	this.btn = document.getElementsByTagName('input');
	this.div = document.getElementsByTagName('div');
}

Tab.prototype.init = function(){
	var that = this;
	for(var i=0;i<this.btn.length;i++){
		(function(index){
			that.btn[i].addEventListener('click',Click);
			function Click(){
				that.clear(index);
			}
		})(i);
	}
}

Tab.prototype.clear = function(){
	
}
