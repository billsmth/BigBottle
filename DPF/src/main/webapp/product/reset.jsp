<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page pageEncoding="utf-8" %>
<%
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
	
	<script src="../js/cordova.js"></script>
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.validate.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/common.js"></script>
	<script type="text/javascript">
		var db;
		var user;
		document.addEventListener("deviceready", onDeviceReady, false);
        
        function onDeviceReady(){
	        if (db == null) {
		    	db = window.openDatabase("wg5adb", "1.0", "database", 200000);
	    	}
	    	
        }
	</script>
</head>
<body>
	<div data-role="page" id="login">
		<form id="loginForm" name="loginForm" method="POST" action="#">
			<div data-role="header" data-position="fixed">
				<h1>个人登录</h1>
				<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
			</div>
			<div data-role="content" id="homeContent" >
				<ul data-role="listview" data-inset="true">
	        		<li data-role="fieldcontain">
	        			<input type="hidden" id="userid" name="userid" value="">
	                	<input type="text" id="username" name="username" value="" data-clear-btn="true" placeholder="请输入用户名" >
	                	<br><input type="password" id="userpassword" name="userpassword" value="" placeholder="请输入密码 " />
	                </li>
	                <li class="ui-body ui-body-b">
		                <button type="submit" data-theme="b">登陆</button>
				    </li>
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
		</form>	
	</div>
</body>
</html>
