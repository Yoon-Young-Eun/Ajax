<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>jQuery 테스트 페이지</title>
<style type="text/css">
div#displayArea{
	width: 332px;
	height: 332px;
	border: 5px double #6699FF;
}
</style>
<script src="../js/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function(){ //$(selector).action() 선택한 엘리먼트에 어떤 동작을 수행 / selector : HTML 엘리먼트
	  $("button").click(function(){  //$ :jquery에서 정의 및 접근에 사용 / action() 해당 엘리먼트에서 수행할 동작
		  $("#displayArea").html("<img src='hamsik.gif' border='0'/>");
	  });
  });
</script>
</head>
<body>
    <div id="displayArea">이곳의 내용이 변경</div>
    <button>표시</button>
</body>
</html>