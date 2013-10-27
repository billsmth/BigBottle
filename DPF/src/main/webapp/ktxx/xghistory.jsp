<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.opinion.IssueOpinion" %>
<%@page import="com.isoftstone.model.opinion.OpinionReplay" %>
<%@page import="java.util.List" %>

<%
	List<IssueOpinion> issueOpinionList = (List<IssueOpinion>)request.getAttribute("ISSUE_MODIFY_HISTORY");
	List<OpinionReplay> ipinionReplayList = (List<OpinionReplay>)request.getAttribute("OPINION_REPLAY_HISTORY");
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
    <td height="26" style="font-size:14px;font-weight:bold;color:#0d3ea4">
    	<% if(issueOpinionList.size()!=0){%>课题修改历史汇总<%}%>
    </td>
  </tr>
</table>
<table width="900" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <% if(issueOpinionList.size()==0){%>
      	<tr>
    		<td align="center" style="font-size:32px;font-weight:bold;color:#0d3ea4">暂时还没有任何修改历史......</td>
    	</tr>
      <%}%>
      <% for(IssueOpinion io:issueOpinionList){ %>
      <tr>
    	<td align="center">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #99bce8;margin-bottom:3px">
      <tr style="background:#1798c4">
      <%if(io.getIssueStatus().equals("4")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>形式审查阶段意见</strong></td>
      <%}else if(io.getIssueStatus().equals("5")&&io.getIssueWpLast()!=null){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>专家网评阶段意见</strong></td>
      <%}else if(io.getIssueStatus().equals("5")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>水办网评阶段意见</strong></td>
      <%}else if(io.getIssueStatus().equals("6")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>会议评审阶段意见</strong></td>
      <%}else if(io.getIssueStatus().equals("7")){%>
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>复审阶段意见</strong></td>
      <%}%>
      	
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>发布人:</strong><%=io.getName() %></td>
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>时间:</strong><%=io.getCreateTime().subSequence(0, 16) %></td>
        </tr>
      <%if(io.getIssueStatus().equals("4")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>基本信息的审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsJbxx() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>参与单位及人员的审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsCydwRy() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>经费的审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsJfsc() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>任务内容、考核指标审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsRwnrKhzb() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>存在其他问题:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueXsQt() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("5")&&io.getIssueWpLast()!=null){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>审查结论总意见:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;
		    <%if(io.getIssueWpLast().equals("0")){%>修改后<%} else if(io.getIssueWpLast().equals("1")){%>同意<%}else{%>不同意<%}%>签订合同
		    </td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>研究目标:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYjmb() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>研究内容与任务分解:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYjnrRwfj() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>预期成果与考核指标:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYqcgKhzb() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>合作单位与任务分工:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpHzdwRwfg() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("5")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>意见汇总:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueWpYjhz() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("6")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>会议评审意见:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueHyscYj() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("7")){%>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>根据专家意见修改完善情况:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueFsXgws() %></td>
		</tr>
		<tr>
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>复审意见:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=io.getIssueFsFsyj() %></td>
		</tr>
      <%}%>
        
 
        <%
        int i=1;
        for(OpinionReplay or:ipinionReplayList){
        	if(or.getOpinionId().equals(io.getId())){
        	%>
       	<tr style="background:#7adfa4">
		  <td align="left" style="padding:0px 7px 0px 7px"><strong>回复[<%=i %>]</strong></td>
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>回复人:</strong><%=or.getName() %></td>
          <td height="25" align="left"style="padding:0px 7px 0px 7px"><strong>时间:</strong><%=or.getCreateTime().subSequence(0, 16) %></td>
        </tr>

        <%i++;
        if(io.getIssueStatus().equals("4")){%>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-基本信息的审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueXsJbxx() %></td>
		</tr>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-参与单位及人员的审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueXsCydwRy() %></td>
		</tr>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-经费的审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueXsJfsc() %></td>
		</tr>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-任务内容、考核指标审查结果:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueXsRwnrKhzb() %></td>
		</tr>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-存在其他问题:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueXsQt() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("5")&&io.getIssueWpLast()==null){%>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-意见汇总:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueWpYjhz() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("6")){%>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-会议评审意见:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueHyscYj() %></td>
		</tr>
      <%}else if(io.getIssueStatus().equals("7")){%>
		<tr style="background:#acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-根据专家意见修改完善情况:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueFsXgws() %></td>
		</tr>
		<tr style="background: #acebc6">
		    <td align="left" colspan="3" style="padding:0px 7px 0px 7px"><strong>回复-复审意见:</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<%=or.getIssueFsFsyj() %></td>
		</tr>
      <%}
        	}
        }
        %>
      
      
        
        
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
