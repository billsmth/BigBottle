<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
        <%@ include file="../common.jsp" %>

        <title>进货单列表</title>
        <script type="text/javascript" src="../resources/js/jinhuo/jinhuo.js"></script>
		<script type="text/javascript">
		<%
			HttpSession ses=request.getSession();
			String group= (String)ses.getAttribute("Group") ;
		%>
		var group=<%=group%>;
		</script>
    </head>
    <body>
    </body>
</html>