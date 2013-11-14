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
		    	
		    	db.transaction(function(tx) {
		    		tx.executeSql('SELECT * FROM USER_ADD',
	                    [], function(tx, results) {
	                        if (results.rows.length > 0) {
	                        	alert("results.length:"+results.rows.length);
	                            var item = results.rows.item(0);
	                        	alert("dfsdfs"+item.ID+item.POST_FROM+item.DEPARTURE);
	                        	var len = results.rows.length;
	                        	alert(len);
           						var html = "";
           						for (var i = 0; i < len; i++) {
					                item = results.rows.item(i);
					                html +="<input type='radio' id='userAdd"+i+"' name='userAdd' data-theme='b' value='"+item.ID+"' "+(i==0?" checked='checked'":"")+"/>"
		                					+"<label for='userAdd"+i+"'>"+(i+1)+" "+item.POST_FROM+" "+item.CITY_FROM+"</label>";
				                }
				                //alert(html);
				                $("#userAddressList").append(html);
				                $("input[type='radio']").attr("checked",true).checkboxradio("refresh");
	                        }else{
	                        	alert("没数据");
	                        }
	                    }, errorCB);
		    	});
		    	
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
				<h1>地址管理</h1>
				<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
			</div>
			<div data-role="navbar" data-iconpos="top">
	            <ul>
	                <li>
	                    <a href="#left-panel" data-transition="fade" data-theme="b" data-icon="plus">添加</a>
	                </li>
	                <li>
	                    <a href="#" data-transition="fade" data-theme="b" data-icon="edit">编辑</a>
	                </li>
	                <li>
	                    <a href="#" data-transition="fade" data-theme="b" data-icon="delete">删除</a>
	                </li>
	            </ul>
	        </div>
			<div data-role="content" id="addressListContent" >
				<div data-role="fieldcontain">
		            <fieldset data-role="controlgroup" data-type="vertical" id="userAddressList">
		            	<legend>发货地址</legend>
		            </fieldset>
		        </div>
		    </div>
			<div data-role="content" id="customerAddressList" >
	        	<label for="customes_list">收货地址</label>
	            <ul data-role="listview" data-inset="true" id="customes_list">
        			<li data-role="fieldcontain">
	                    <a href="#" id="post_people0" data-transition="fade" data-theme="" data-icon="edit">
	                    	<img src="../images/customer.png" class="ui-li-icon ui-corner-none">阿良河北 保定
	                    </a>
	                </li>
	                <li>
	                    <a href="#" id="post_people1" data-transition="fade" data-theme="" data-icon="edit">
	                    	<img src="../images/customer.png" class="ui-li-icon ui-corner-none">
	                    	唐老鸭 广东 广州
	                    </a>
	                </li>
	                <li>
	                    <a href="#" id="post_people2" data-transition="fade" data-theme="" data-icon="edit">
	                    	<img src="../images/customer.png" class="ui-li-icon ui-corner-none">
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
			<div data-role="panel" id="left-panel" data-display="overlay" data-position="left" data-theme="c">
				<label>发货地址</label>
				<ul data-role="listview" data-inset="true">
	        		<li data-role="fieldcontain">
	        			<input type="hidden" id="people_id" name="people_id" value="100" data-clear-btn="true" placeholder="寄件人编号" >
	                	<input type="text" id="post_from" name="post_from" value="猫小懒" data-clear-btn="true" placeholder="寄件人姓名" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="departure" name="departure" value="北京" data-clear-btn="true" placeholder="始发地" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="province_from" name="province_from" value="北京" data-clear-btn="true" placeholder="寄件省份" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="city_from" name="city_from" value="北京" data-clear-btn="true" placeholder="寄件城市" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="district_from" name="district_from" value="东城区" data-clear-btn="true" placeholder="寄件区县" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="company_name_from" name="company_name_from" value="安德路55号院16号楼 2门 106室" data-clear-btn="true" placeholder="单位名称/详细地址" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="contact_number_from" name="contact_number_from" value="13810840866" data-clear-btn="true" placeholder="联系电话" >
	                </li>
	                <li data-role="fieldcontain">
	                	<textarea name="post_from_note" id="post_from_note" placeholder="备注信息" data-clear-btn="true">备注信息</textarea>
	                </li>
			    </ul>
			    <a href="#" data-rel="close" data-role="button" data-theme="b" data-icon="check" onclick="saveUserAddress();">保存</a>
			</div>
		</div>
	</form>	
</body>
</html>
