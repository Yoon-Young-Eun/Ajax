<%@ page contentType="text/plain; charset=UTF-8"%>
<%@ page import ="java.util.List" %>
<%!
   String[] keywords ={   //검색어 목록 실제로는 DB에 저장되어 있을 것임
		   "AJAX",
		   "AJAX 실전 프로그래밍",
		   "자바",
		   "자바 프로그래밍",
		   "자바 서버 페이지",
		   "자바스터디",
		   "자바서비스",
		   "자바깡통"};

  public List search(String keyword){  //keyword를 사용해서 제시어 목록을 추출해주는 메서드(함수)
	  if(keyword == null || keyword.equals(""))
		  return java.util.Collections.EMPTY_LIST;
	  keyword = keyword.toUpperCase();
	  List result = new java.util.ArrayList(8);
	  for(int i = 0; i<keywords.length; i++){
		  if(((String)keywords[i]).startsWith(keyword)){ //startsWith 탐색할 문자열이 있으면 True반환
			  result.add(keywords[i]);
		  }
	  }
	  return result;
  }
%>
<% 
   request.setCharacterEncoding("utf-8");
   String keyword = request.getParameter("keyword");
   List keywordList = search(keyword);
   out.print(keywordList.size()); //제시어 개수 출력
   out.print("|");
   for(int i=0; i<keywordList.size();i++){
	   String key = (String)keywordList.get(i);
	   out.print(key);
	   if(i<keywordList.size()-1){
		   out.print(","); //제시어 목록을 CSV 양식으로 출력해 줌
	   }
   }
%>


