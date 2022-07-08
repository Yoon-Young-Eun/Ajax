
var xhrObject;   //XMLHttpRequest 객체를 저장할 변수를 전역 변수로 선언
function createXHR(){ // XMLHttpRequest 객체를 생성하는 메서드
   if(window.ActiveXObject){   //웹 브라우저가 IE5.0, IE6.0인 경우
      xhrObject=new ActiveXObject("Microsoft.XMLHTTP"); // XMLHttpRequest 객체 생성
   }else if(window.XMLHttpRequest){   //웹브라우저가 IE7.0~ 파이어폭스,사파리, 오페라인 경우
      xhrObject=new XMLHttpRequest(); // XMLHttpReuest 객체생성 
   }
}
function startMethod(){ //클라이언트로부터 이벤트가 발생 시 실행 메서드
   createXHR();      // createXHR() 메서드 호출
   xhrObject.onreadystatechange=resultProcess; //응답 결과를 처리 메서드인 resultProcess()메서드로 설정
   xhrObject.open("Get","ajaxEx02.xml","true"); // 서버의 요청 설정
   xhrObject.send(null);
}
function processXML(){
   var xmlDoc=xhrObject.responseXML; // 서버로부터 응답을 XML 문서 객체로 받음
   var subject="";
   var trTag="";
   var tdTag="";
   var arr=new Array();
   var subjects=xmlDoc.getElementsByTagName("subject"); 
   //응답받은 XML 문서 객체에서 subject엘리먼트를 모두 찾아서 배열로 리턴 
   for(var i=0;i<subjects.length;i++){ // Subject엘리먼트 개수만큼 반복
      trTag=document.createElement("tr"); // tr엘리먼트 생성
      subject=subjects.item(i);
      // subject엘리먼트 배열로부터 subject엘리먼트를 하나 받아서 subject 변수에 저장
      var child=subject.childNodes;
      // subject엘리먼트의 자식 엘리먼트를 배열로 리턴 
      for(var a=0;a<child.length;a++){ //subject엘리먼트의 자식 엘리먼트 개수만큼 반복
         if(child.item(a).nodeType==1){
            arr.push(child.item(a).firstChild.nodeValue);
         }
      }
      for(var j=0;j<arr.length;j++){
         tdTag=document.createElement("td"); //td엘리먼트 생성
         var text=document.createTextNode(arr[j]); //텍스트 엘리먼트 text를 생성
         tdTag.appendChild(text);//td 엘리먼트에 엑스트 엘리먼트 text를 자식 엘리먼트로 추가
         trTag.appendChild(tdTag); //tr엘리먼트에 td엘리먼트를 자식 엘리먼트로 추가.
      }
      document.getElementById("resultDisplay").appendChild(trTag);
      //idㅗㄱ성의 값이 "resultDisplay인 엘리먼트에 tr엘리먼트 자식 엘리먼트로 추가."
      arr=new Array();
   }
}
function resultProcess(){ //응답결과가 오면 자동으로 실행
   if(xhrObject.readyState==4){
   //요청 객체의 사애가 모든 데이터를 받을 수 있는 상태로 완료한 경우
      if(xhrObject.status==200){
      //서버로 응답받는 http상태가 정상인 경우 수행
         processXML();
         //XML문서 객체 구조처리 메서드 호출 
      }
   }
}