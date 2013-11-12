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
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/jquery.validate.min.js"></script>
	<script src="../js/common.js"></script>
	<script type="text/javascript">
		var db;
		document.addEventListener("deviceready", onDeviceReady, false);
        
        function onDeviceReady(){
	        if (db == null) {
		    	db = window.openDatabase("wg5adb", "1.0", "database", 200000);
	    	}
	    	db.transaction(function(tx) {
	            tx.executeSql('SELECT * FROM USER_TABLE ',
	                    [], function(tx, results) {
	                        if (results.rows.length > 0) {
	                        	alert("results.length:"+results.rows.length);
	                            var item = results.rows.item(0);
	                        	alert("dfsdfs"+item.ID+item.NAME+item.PWD);
	                            $("#userid").val(item.ID);
	                            $("#username").val(item.NAME);
	                            $("#userpassword").val(item.PWD);
	                            window.localStorage.setItem("USER", item);
	                            //user=item;
	                        }else{
	                        	alert("没数据");
	                        }
	                    }, errorCB);
             });
	    	
		    $("#loginForm").validate({
	    		rules : {
	    			username : {
	    				required : true
	    			}
	    		},
	    		messages : {
	    			name : {
	    				required : "必须输入!"
	    			}
	    		},
	    		submitHandler : function(form) {
	    			onSubmit();
	    		}
	    	});
        }
        
        function onSubmit() {
	        db.transaction(saveUser, errorCB);
	    }
	    
	    function saveUser(tx) {
	    	alert("1");
	    	var id = $("#userid")[0].value;
	        var name = $("#username")[0].value;
	        var upd = $("#userpassword")[0].value;
	        var user=window.localStorage.getItem("USER");
	        //alert(user.ID);
	        if (user != "null" && user != null) {
	        	showInfor("您已登陆，如需切换用户，请重置系统。");
            } else {
            	alert("2");
            	var options = {
						url : "<%=hostPath%>kehu/saveAppKehu.action",
						type : "POST",
						dataType: 'text',
						data: $("#loginForm").serialize(),
						success : function(data){
							alert(data);
							var result=eval("(" + data + ")");
							
							if(result.type=="1"){
								showInfor("登陆密码错误或者该用户名已存在！请更换密码或用户名");
								return;
							}else if(result.type=="2"){
								showInfor("用户登陆成功！");
							}else if(result.type=="3"){
								showInfor("用户创建并登陆成功！");
							}
							alert(result.kehu_id);
							var sql = "INSERT INTO USER_TABLE (ID, NAME, PWD) VALUES (?, ?, ?)";
							alert("zhi:"+result.kehu_id+" "+name+" "+upd);
							var params = [result.kehu_id, name, upd];
							db.transaction(function(tx) {
								tx.executeSql(sql, params, function(tx, results) {
									window.localStorage.setItem("USER", {'ID':result.kehu_id,'NAME':name,'PWD':upd});
								}, errorCB);
							});
						}
	            };
	            $.ajax(options);
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
