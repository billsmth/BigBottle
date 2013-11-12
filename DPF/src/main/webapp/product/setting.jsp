<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	
	<script src="../js/cordova.js"></script>
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/common.js"></script>
	<script type="text/javascript">
	
	</script>
</head>
<body>
  <div data-role="page" id="setting">   
	    <div data-role="header" data-position="fixed">
				<h1>系统设置</h1>
				<a href="main.html" data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
		</div>
		<div data-role="content" id="main3Content" >
			
			<ul data-role="listview" data-split-icon="right" data-split-theme="d">
				<li>
					<a href="#">
						<img src="../image/album-bb.jpg" />
						<h3>设置</h3>
						<p>设置系统运行参数</p>
					</a>
					<a href="#" data-rel="dialog" data-transition="slideup">动作</a>
				</li>
				<li>
					<a href="#">
						<img src="../image/album-hc.jpg" />
						<h3>更新</h3>
						<p>更新系统表单</p>
					</a>
					<a href="#" data-rel="dialog" data-transition="slideup">动作</a>
				</li>
				<li>
					<a href="#">
						<img src="../image/album-p.jpg" />
						<h3>帮助</h3>
						<p>查看系统帮助信息</p>
					</a>
					<a href="#" data-rel="dialog" data-transition="slideup">动作</a>
				</li>
				<li>
					<a href="./login.jsp"  rel="external">
						<img src="../images/profile.png" />
						<h3>登录</h3>
						<p>前往登录界面</p>
					</a>
					<a href="./login.jsp" data-rel="dialog" data-transition="slideup"  rel="external">动作</a>
				</li>
				<li>
					<a href="#"  rel="external" onclick="reset()">
						<img src="../images/profile.png" />
						<h3>重置</h3>
						<p>重置系统设置</p>
					</a>
				</li>
			</ul>
		</div>
		<div data-role="footer" data-position="fixed">
			<div data-role="navbar">
					<ul>
						<li><a href="./main.jsp" data-icon="grid" rel="external">主菜单</a></li>
					<li><a href="#" data-icon="gear" class="ui-btn-active">设置</a></li>
					</ul>
			</div>	
					
		</div>
	</div>
</body>
</html>