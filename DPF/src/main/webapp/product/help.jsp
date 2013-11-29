<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	<link rel="stylesheet" href="../css/jqm-demos.css" />
	<link rel="stylesheet" href="../css/grid-listview.css">
	<script src="../js/cordova.js"></script>
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/common.js"></script>
</head>
<body>
	<form id="addressListForm" name="addressListForm" method="POST" action="#">
		<div data-role="page" id="addressListPage">
			<div data-role="header" data-position="fixed">
				<h1>我的订单</h1>
				<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
			</div>
			<div data-role="content" id="customerAddressList" >
	            <ul data-role="listview" data-inset="true" id="customes_list">
                </ul>
			</div>
			<div data-role="footer" data-position="fixed" >
				<div data-role="navbar">
					<ul>
						<li><a href="./main.jsp" data-icon="grid" rel="external">主菜单</a></li>
						<li><a href="./setting.jsp" data-icon="gear" rel="external">设置</a></li>
					</ul>
				</div>
			</div>
		</div>
	</form>	
</body>
</html>
