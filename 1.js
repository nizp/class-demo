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

Tab.prototype.clear = function(index){
	for(var i=0;i<this.btn.length;i++){
		this.btn[i].className = '';
		this.div[i].className = '';
	}
	this.btn[index].className = 'active';
	//console.log(index)

}
