<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.opinion.IssueOpinion" %>
<%@page import="java.util.List" %>

<%
	List<IssueOpinion> issueOpinionList = (List<IssueOpinion>)request.getAttribute("ZJ_OPINION_HISTORY");
	
  
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>我的历史意见</title>
<style>
td{height:27px;line-height:27px;font-size:13px;}
</style>
</head>

<body>
<div style="width:900px; margin:0 auto;">
<table width="900" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="26" background="head_03.gif" style="font-size:14px;font-weight:bold;color:#0d3ea4">
		<% if(issueOpinionList.size()!=0){%>我的历史意见 <%}%></td>
  </tr>
</table>
<table width="900" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <% if(issueOpinionList.size()==0){%>
      	<tr>
    		<td align="center" style="font-size:32px;font-weight:bold;color:#0d3ea4">暂时还没有任何历史意见......</td>
    	</tr>
      <%}%>
      <% for(IssueOpinion io:issueOpinionList){ %>
      <tr>
    	<td align="center">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #99bce8;margin-bottom:3px">
      <tr style="background:#1798c4">
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>时间:</strong><%=io.getCreateTime().subSequence(0, 16) %></td>
        </tr>
		<tr>
		    <td align="left" style="padding:0px 7px 0px 7px"><strong>审查结论总意见:</strong>
		    <%if(io.getIssueWpLast().equals("0")){%>修改后<%} else if(io.getIssueWpLast().equals("1")){%>同意<%}else{%>不同意<%}%>签订合同
		    </td>
		</tr>
		<tr>
		    <td align="left" style="padding:0px 7px 0px 7px"><strong>研究目标:</strong><%=io.getIssueWpYjmb() %></td>
		</tr>
		<tr>
		    <td align="left" style="padding:0px 7px 0px 7px"><strong>研究内容与任务分解:</strong><%=io.getIssueWpYjnrRwfj() %></td>
		</tr>
		<tr>
		    <td align="left" style="padding:0px 7px 0px 7px"><strong>预期成果与考核指标:</strong><%=io.getIssueWpYqcgKhzb() %></td>
		</tr>
		<tr>
		    <td align="left" style="padding:0px 7px 0px 7px"><strong>合作单位与任务分工:</strong><%=io.getIssueWpHzdwRwfg() %></td>
		</tr>
      	<tr style="background:#5493a4">
          <td height="16" align="left" colspan="3">&nbsp;</td>
        </tr>
        </table>
        </td>
        </tr>
        <tr>
        <td>
           <table width="100%" border="0" cellspacing="0" cellpadding="0">
        		<tr>
          			<td colspan="3">&nbsp;</td>
        		</tr>
           </table>
          </td>
      </tr>
      <%} %>

    </table>
      </td>
  </tr>
</table>
</div>
</body>
</html>
