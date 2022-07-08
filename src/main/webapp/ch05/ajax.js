//모듈 작성

var ajax={};
ajax.xhr={};
ajax.xhr.Request =function(url, params, callback, method){
	this.url = url;
	this.params = params;
	this.callback= callback;
	this.method = method;
	this.send();
}
function log(msg){
	var console = document.getElementById("debugConsole");
	if(console != null){
		console.innerHTML += msg +"<br/>";
	}
}

var req = null;
ajax.xhr.Request.prototype={
	getXMLHttpRequest:function(){
		if(window.ActiveXObject){
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e){
				try{
					return new ActiveXObject("Microsoft.XMLDOM");
				}catch(el){return null;}
			}
		}else if(window.XMLHttpRequest){
			return new XMLHttpRequest();
		}else{
			return null;
		}
	},
	send: function(){
		this.req=this.getXMLHttpRequest();
		var httpMethod = this.method ? this.method : 'get';
		if(httpMethod != 'get' && httpMethod != 'post'){
			httpMethod = 'get';
		}
		var httpParams = (this.params == null || this.params =='')? null : this.params;
		var httpUrl = this.url;
		if(httpMethod =='get' && httpParams != null){
			httpUrl = httpUrl +"?"+httpParams;
		}
		this.req.open(httpMethod, httpUrl, true);
		this.req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var request = this;
		this.req.onreadystatechange = function(){
			request.onStateChange.call(request);
		}
		this.req.send(httpMethod =='post' ? httpParams : null);
	},
	onStateChange:function(){
		this.callback(this.req);
	}
}