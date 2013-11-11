<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
</head>
<body>
	<div data-role="page" id="home">
		<div data-role="header" data-position="fixed">
			<h1>个人登录</h1>
			<a href="setting.html" data-role="button" data-icon="gear" data-shadow="false" data-transition="slide" class="ui-btn-right">设置</a>
		</div>
		<div data-role="content" id="homeContent" >
			<ul data-role="listview" data-inset="true">
        		<li data-role="fieldcontain">
                	<input type="text" id="username" value="" data-clear-btn="true" placeholder="请输入用户名" >
                	<br><input type="password" id="userpassword"  placeholder="请输入密码 " />
                </li>
                <li data-role="fieldcontain">
                	<fieldset class="ui-grid-a">
	                	<div class="ui-block-a">
		                	<input id="checkbox1" id="checkbox-0" type="checkbox">
			                <label for="checkbox1">
			                    	保存密码
			                </label>
		                </div>
	                	<div class="ui-block-b">
		                	<input id="checkbox2" id="checkbox-2" type="checkbox">
			                <label for="checkbox2">
			                    	自动登录
			                </label>
		                </div>
	                </fieldset>
                </li>
                <li class="ui-body ui-body-b">
	                <fieldset class="ui-grid-a">
		                <div class="ui-block-a"><button type="submit" data-theme="a" href="main.html">登陆</button></div>
		                <div class="ui-block-b"><button type="submit" data-theme="d">取消</button></div>
				     </fieldset>
			     </li>
		    </ul>
		</div>
		<div data-role="footer" data-position="fixed" >
			<div data-role="navbar">
				<ul>
					<li><a href="#result" data-role="button" data-icon="forward" data-transition="slide">登录提示</a></li>
					<li><a href="./main.jsp" data-role="button" data-icon="arrow-r" data-transition="fade" rel="external">直接登录</a></li>
				</ul>
			</div>
		</div>		
	</div>
</body>
</html>
