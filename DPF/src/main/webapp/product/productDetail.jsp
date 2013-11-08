<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.jxc.Product"%>
<%@page import="java.util.List"%>

<%
	Product p = (Product) request.getAttribute("PRODUCTDETAIL");
	String imgNames = p.getImage_name();
	String[] pics = imgNames.split(",");
	String picPath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ request.getContextPath() + "/productlist/"
			+ p.getProduct_id() + "/";
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/cordova.js"></script>
</head>
<body>
<div data-role="page" id="product">
    <div data-role="header" data-position="fixed">
		<h1>产品展示</h1>
		<a href="newProductList.html" data-shadow="false" data-iconshadow="false" data-icon="arrow-l" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
	</div>
	<div data-role="content" id="main2Content">
	<%
		for (int i = 0; i < pics.length; i++) {
		%>
			<img src="<%=picPath + pics[i]%>" style="width:100%">
		<%
		}
	%>
	</div>
	<div data-role="footer" data-position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a href="main.html" data-icon="grid"  rel="external">主菜单</a></li>
				<li><a href="createOrder.html" data-icon="info"  rel="external" data-prefetch>购买</a></li>
				<li><a href="setting.html" data-icon="gear"  rel="external" >设置</a></li>
			</ul>
		</div>		
	</div>

</div>
</body>
</html>