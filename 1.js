function Tab(){
	this.btn = document.getElementsByTagName('input');
	this.div = document.getElementsByTagName('div');
}

Tab.prototype.init = function(){
	for(var i=0;i<this.btn.length;i++){
		this.btn[i].addEventListener('click',Click);
		function(){
			
		}
	}
}

Tab.prototype.clear = function(){
	
}
