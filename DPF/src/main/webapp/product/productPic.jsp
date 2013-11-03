<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.jxc.Product" %>
<%@page import="java.util.List" %>

<%
	Product p = (Product)request.getAttribute("PRODUCT_PICS");
	String imgNames=p.getImage_name();
	String[] pics=imgNames.split(",");
	String picPath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/productlist/"+p.getProduct_id()+"/";
	
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>产品图片一览</title>
<style>
td{height:27px;line-height:27px;font-size:13px;}
</style>
</head>

<body>
<div style="width:900px; margin:0 auto;">
<table width="900" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="26" style="font-size:14px;font-weight:bold;color:#0d3ea4">
    	<% if(pics.length!=0){%>产品图片<%}%>
    </td>
  </tr>
</table>

<table width="900" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
    
      <% if(pics.length==0){%>
		<tr>
			<td align="center" style="font-size:32px;font-weight:bold;color:#0d3ea4">暂时还没有任何图片......</td>
		</tr>
      <%}else{%>
		<tr style="background:#5493a4">
		    <td height="16" align="left" colspan="3">&nbsp;</td>
		</tr>
      <%}
       for(int i=0;i<pics.length;i++){ %>
		<tr>
			<td align="center">
				<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #99bce8;margin-bottom:3px">
					<tr style="background:#1798c4">
						<td align="left" style="padding:0px 7px 0px 7px"><img src="<%=picPath+pics[i]%>"/></td>
					</tr>
				</table>
			</td>
		</tr>
      <%if(i==pics.length-1){%>
		<tr style="background:#5493a4">
		    <td height="16" align="left" colspan="3">&nbsp;</td>
		</tr>
      <%}else{%>
		<tr>
			<td>
			    <table width="100%" border="0" cellspacing="0" cellpadding="0">
			 		<tr>
			   			<td colspan="3">&nbsp;</td>
			 		</tr>
			    </table>
		  	</td>
		</tr>
      <%}%>
      <%}%>

    </table>
      </td>
  </tr>
</table>
</div>
</body>
</html>
