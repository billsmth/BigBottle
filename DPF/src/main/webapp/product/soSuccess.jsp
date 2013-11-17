<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page pageEncoding="utf-8" %>
<%@page import="com.isoftstone.model.jxc.*"%>
<%
	Xiaoshou xs = (Xiaoshou) request.getAttribute("SALE_ORDER");
	PostAddress pa= (PostAddress) request.getAttribute("POST_INFO");
	String hostPath=request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ request.getContextPath()+ "/";
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/cordova.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	
</head>
<body>
	<div data-role="page" id="order">
		<script type="text/javascript">
			$(document).bind("mobileinit",function() {
				$.support.cors = true;
				$.mobile.allowCrossDomainPages=true;
			});
			document.addEventListener("deviceready", onDeviceReady, false);
	       	function onDeviceReady() {
			}
		</script>
		<div data-role="header" data-position="fixed">
			<h1>购买成功</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
		</div>
		<div data-role="content" id="payMethodContent" >
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="4" align="center"><Strong>订单信息</Strong></td>
				</tr>
				<tr>
					<td align="right" width=30%>订单编号</td><td colspan="3"><Strong><%=xs.getXiaoshou_id()%></Strong></td>
				</tr>
				<tr>
					<td align="right">产品名称</td><td colspan="3"><%=xs.getCol1()%></td>
				</tr>
				<tr>
					<td align="right">颜色尺码</td><td><%=xs.getYanse()%>/<%=xs.getChima()%></td><td align="right">数量</td><td><%=xs.getShuliang()%>件</td>
				</tr>
				<tr>
					<td align="right">订单状态</td><td colspan="3">等待付款</td>
				</tr>
				<tr>
					<td align="right">价格</td><td><%=xs.getShoujia()%>元</td><td align="right">运费</td><td><%=xs.getCol2()%>元</td>
				</tr>
				<tr>
					<td align="right">汇总</td><td colspan="3"><%=xs.getShijishoukuan()%>元</td>
				</tr>
			</table>
			<br>
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="3" align="center"><Strong>付款方法</Strong></td>
				</tr>
				<tr>
					<td align="center">支付宝</td><td colspan="2">13810840866</td>
				</tr>
				<tr style="background:#009850">
					<td align="center">开户行</td><td align="center">账户</td><td align="center">银行账号</td>
				</tr>
				<tr>
					<td align="center">农行</td><td align="center">王占良</td><td>622848 0018100503079</td>
				</tr>
				<tr>
					<td align="center">建行</td><td align="center">苏哲芳</td><td>6227 0002 1010 0142 452</td>
				</tr>
			</table>
			<br>
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="3" align="center"><Strong>服务信息</Strong></td>
				</tr>
				<tr>
					<td align="center">客服微信</td><td colspan="2">18618166418</td>
				</tr>
				<tr>
					<td align="center">服务电话</td><td colspan="2">18618166418 ; 13810840866</td>
				</tr>
			</table>
		
		</div>
		<div data-role="footer" data-position="fixed" >
			<div data-role="navbar">
				<ul>
					<li><a href="./main.jsp" data-icon="grid"  rel="external">主菜单</a></li>
					<li><a href="./setting.jsp" data-icon="gear" rel="external">设置</a></li>
				</ul>
			</div>
		</div>		
	</div>
</body>
</html>