function Tab(){
	this.btn = document.getElementsByTagName('input');
	this.div = document.getElementsByTagName('div');
}

Tab.prototype.init = function(){
<<<<<<< HEAD
	var that = this;
	for(var i=0;i<this.btn.length;i++){
		(function(index){
			that.btn[i].addEventListener('click',Click);
			function Click(){
				that.clear(index);
=======
	var _this = this;
	for(var i=0;i<this.btn.length;i++){
		(function(index){
			_this.btn[i].addEventListener('click',Click);
			function Click(){
				_this.clear(index);
>>>>>>> origin/master
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
