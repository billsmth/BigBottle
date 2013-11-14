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
	<script src="../js/common.js"></script>
</head>
<body>
	<form id="addressListForm" name="addressListForm" method="POST" action="#">
		<div data-role="page" id="addressListPage">
			<script type="text/javascript">
				var db;
				if (db == null) {
			    	db = window.openDatabase("wg5adb", "1.0", "database", 200000);
		    	}
		    	
		    	
				function saveUserAddress(){
					alert("saveUserAddress");
					var post_from=$("#post_from").val();
					var departure=$("#departure").val();
					var province_from=$("#province_from").val();
					var city_from=$("#city_from").val();
					var district_from=$("#district_from").val();
					var company_name_from=$("#company_name_from").val();
					var contact_number_from=$("#contact_number_from").val();
					var post_from_note=$("#post_from_note").val();
					
					db.transaction(function(tx) {
				    	var sql = "INSERT INTO USER_ADD (POST_FROM, DEPARTURE, PROVINCE_FROM, CITY_FROM, DISTRICT_FROM, COMPANY_NAME_FROM, CONTACT_NUMBER_FROM, POST_FROM_NOTE, DEF) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
		                var params = [ post_from, departure, province_from, city_from, district_from, company_name_from, contact_number_from, post_from_note, "0"];
		                tx.executeSql(sql, params, function(tx, results) {
		                    showInfor("新增记录成功！");
		                }, errorCB);
		            });
				}
				
				
			</script>
			<div data-role="header" data-position="fixed">
				<h1>我的订单</h1>
				<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
			</div>
			<div data-role="content" id="customerAddressList" >
	            <ul data-role="listview" data-inset="true" id="customes_list">
        			<li data-role="fieldcontain">
	                    <a href="#" id="post_people0" data-transition="fade" data-theme="" data-icon="edit">
	                    	<img src="../images/customer.png">阿良河北 保定
	                    </a>
	                </li>
	                <li>
	                    <a href="#" id="post_people1" data-transition="fade" data-theme="" data-icon="edit">
	                    	<img src="../images/customer.png">
	                    	唐老鸭 广东 广州
	                    </a>
	                </li>
	                <li>
	                    <a href="#" id="post_people2" data-transition="fade" data-theme="" data-icon="edit">
	                    	<img src="../images/customer.png">
	                    	豆丁 上海 杨浦
	                    </a>
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
		</div>
	</form>	
</body>
</html>
