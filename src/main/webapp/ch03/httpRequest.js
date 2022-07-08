function getXMLHttpRequest(){
	 if(window.ActiveXObject){
		try{
			return new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				return new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e1){return null;}
		}
	}else if (window.getXMLHttpRequest) {
		return new XMLHttpRequest();
	}else {
		return null;
	}
}
var httpRequest = null;

function sendRequest(url, params, callback, method){
	httpRequest = getXMLHttpRequest();
	var httpMethod = method?method : 'get';
	if(httpMethod != 'get' && httpMethod !=' post'){  //default 값 설정
		httpMethod = 'get';
	}
	var httpParams = (params == null || params =='')? null : params;
	var httpUrl = url;
	if(httpMethod =='get' && httpParams != null) { //get방식에 param이 null이 아니면
		httpUrl = httpUrl+"?"+ httpParams;
	}
	httpRequest.open(httpMethod, httpUrl, true);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = callback;
	httpRequest.send(httpMethod=='post'?httpParams : null);
	}
