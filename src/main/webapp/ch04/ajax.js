var ajax = {};
ajax.xhr={}; //ajax.xhr 패키지 지정
ajax.xhr.Request = function(url, params, callback, method){
	this.url = url;
	this.params = params;
	this.callback = callback;
	this.method=method;
	this.send();//Request 클래스 생성자, 생성과 동시에 send() 호출
}

ajax.xhr.Request.prototype = {  // ajax.xhr.Request.prototype.getXMLHttpRequest(key갑) =function(){(밸류)
	getXMLHttpRequest: function(){
		if(window.ActiveXObject){
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e){
				try{
					return new ActiveXObject("Microsoft.XMLHTTP");
				}catch(el){return null;}
			}
		}else if (window.XMLHttpRequest){
			return new XMLHttpRequest();
		}else {
			return null;
		}
	},
	send:function(){
		this.req = this.getXMLHttpRequest();
		//req 프로퍼티에 XMLHttpRequest 객체를 저장
		var httpMethod = this.method ? this.method : 'get';
		if(httpMethod != 'get'&& httpMethod != 'post'){
			httpMethod = 'get';
		}
		var httpParams = (this.params == null || this.params == '')?
		    null : this.params;
        var httpUrl = this.url;
        if(httpMethod == 'get' && httpParams != null){
	           httpUrl = httpUrl + "?" + httpParams;
       }
       this.req.open(httpMethod, httpUrl, true);
       this.req.setRequestHeader(
	    'Content-Type', 'application/x-www-form-urlencoded'); //속이는, 
       var request = this; //XMLHttpRequest 객체의 readyState 값이 
       this.req.onreadystatechange = function(){ //바뀔 때 이객체의
               request.onStateChange.call(request); // <-함수 호출
       }
       this.req.send(httpMethod == 'post'? httpParams : null);
	},
	onStateChange:function(){//이 객체의 callback 프로퍼티에 할당된 
	this.callback(this.req);//함수를 호출한다.
	}
}