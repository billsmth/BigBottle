<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.opinion.IssueOpinion" %>
<%@page import="java.util.List" %>

<%
	List<IssueOpinion> issueOpinionList = (List<IssueOpinion>)request.getAttribute("ISSUE_OPINION_HISTORY");
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>课题历史意见</title>
<style>
td{height:27px;line-height:27px;font-size:13px;}
</style>
</head>

<body>
<div style="width:900px; margin:0 auto;">
<table width="900" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="26" background="head_03.gif" style="font-size:14px;font-weight:bold;color:#0d3ea4">
    	<% if(issueOpinionList.size()!=0){%>课题历史意见汇总<%}%>
    </td>
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
      <%if(io.getIssueStatus().equals("4")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>形式审查阶段</strong></td>
      <%}else if(io.getIssueStatus().equals("5")&&io.getIssueWpLast()!=null){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>专家网评阶段</strong></td>
      <%}else if(io.getIssueStatus().equals("5")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>水办网评阶段</strong></td>
      <%}else if(io.getIssueStatus().equals("6")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>会议评审阶段</strong></td>
      <%}else if(io.getIssueStatus().equals("7")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>复审阶段</strong></td>
      <%}%>
      	
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>发布人:</strong><%=io.getName() %></td>
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>时间:</strong><%=io.getCreateTime().subSequence(0, 16) %></td>
        </tr>
      <%if(io.getIssueStatus().equals("4")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>基本信息的审查结果:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsJbxx() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>参与单位及人员的审查结果:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsCydwRy() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>经费的审查结果:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsJfsc() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>任务内容、考核指标审查结果:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsRwnrKhzb() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>存在其他问题:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsQt() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("5")&&io.getIssueWpLast()!=null){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>审查结论总意见:</strong>
		    <%if(io.getIssueWpLast().equals("0")){%>修改后<%} else if(io.getIssueWpLast().equals("1")){%>同意<%}else{%>不同意<%}%>签订合同
		    </td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>研究目标:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYjmb() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>研究内容与任务分解:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYjnrRwfj() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>预期成果与考核指标:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYqcgKhzb() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>合作单位与任务分工:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpHzdwRwfg() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("5")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>意见汇总:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYjhz() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("6")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>会议评审意见:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueHyscYj() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("7")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>根据专家意见修改完善情况:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueFsXgws() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>复审意见:</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueFsFsyj() %></td>
		</tr>
      <%}%>
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
