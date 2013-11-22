<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page pageEncoding="utf-8" %>
<%@page import="com.isoftstone.model.jxc.Product"%>
<%@page import="java.util.List"%>
<%
	Product p = (Product) request.getAttribute("PRODUCT");
	String imgNames = p.getImage_name();
	String[] pics = imgNames.split(",");
	String hostPath=request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ request.getContextPath()+ "/";
	String picPath = hostPath+ "productlist/";
	List<String> chimaList=(List)request.getAttribute("PRODUCT_CHIMA");
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
	       		if (db == null) {
			    	db = window.openDatabase("wg5adb", "1.0", "database", 200000);
		    	}
		    	
			    var newFlg = window.localStorage.getItem("new");
		        if (newFlg == "null" || newFlg == null) {
		            $("#post_type").html("新增");
		        } else {
			    	$("#post_type").html("编辑");
			    	
				    db.transaction(function(tx) {
		                tx.executeSql('SELECT * FROM USER_ADD WHERE ID = ' + id,
		                        [], function(tx, results) {
		                            if (results.rows.length > 0) {
		                                var item = results.rows.item(0);
		                                $("#post_from").attr("value", item.POST_FROM);
		                                $("#departure").attr("value", item.DEPARTURE);
		                            }
		                        }, errorCB);
		            });	
			    }
			}
		</script>
		<div data-role="header" data-position="fixed">
			<h1>发货地址 (<label id="post_type"></label>)</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
		</div>
		<form id="orderBaseForm" method="POST" action="createOrderBase.action">
			<div data-role="panel" id="left-panel" data-display="overlay" data-position="left" data-theme="c">
				<label>我的地址</label>
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
			    <a href="./addressList.jsp" data-rel="close" data-role="button" data-theme="b" data-icon="delete">保存</a>
			</div>
		</form>
		<div data-role="footer" data-position="fixed" >
			<div data-role="navbar">
				<ul>
					<li><a href="./main.jsp" data-icon="grid" rel="external">主菜单</a></li>
					<li><a href="./setting.jsp" data-icon="gear" rel="external">设置</a></li>
				</ul>
			</div>
		</div>		
	</div>
</body>
</html>