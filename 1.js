function Tab(){
	this.btn = document.getElementsByTagName('input');
	this.div = document.getElementsByTagName('div');
}

Tab.prototype.init = function(){
	var that = this;
	for(var i=0;i<this.btn.length;i++){
		that.btn[i].index = i;
		that.btn[i].addEventListener('click',Click);
		function Click(){
			that.clear(this);
		}
	}
}

Tab.prototype.clear = function(that){
	for(var i=0;i<this.btn.length;i++){
		this.btn[i].className = '';
		this.div[i].className = '';
	}
	that.className = 'active';
	//console.log(index)

}
