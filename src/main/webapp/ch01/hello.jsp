<%@ page contentType ="text/plain; charset=utf-8" %>
<% 
   request.setCharacterEncoding("utf-8");
   String name = request.getParameter("name");
%>
환영합니다 <%= name%>!