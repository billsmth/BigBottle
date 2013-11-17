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
		    	
			    	db.transaction(function(tx) {
		            	tx.executeSql('SELECT * FROM USER_TABLE ',
		                    [], function(tx, results) {
		                        if (results.rows.length > 0) {
		                            var item = results.rows.item(0);
		                        	//alert("dfsdfs"+item.ID+item.NAME+item.PWD);
									$.ajax({
										type: 'POST',
										url: "<%=hostPath%>/xiaoshou/json/list.action?maijia_id="+item.ID,
										success: function(data,statu){
											//alert(data.length);
											var htmlStr="";
											var zhuangtai;
											var postStatus;
											for(var i=0;i<data.length;i++){
												var xiaoshou=data[i];
												zhuangtai="";
												postStatus="";
												if(xiaoshou.zhuangtai=="0"){
													zhuangtai="代付款";
													postStatus="myOrder.png";
												}else if(xiaoshou.zhuangtai=="1"){
													zhuangtai="已付款";
													postStatus="paid.png";
												}else if(xiaoshou.zhuangtai=="2"){
													zhuangtai="已确定";
													postStatus="deal.png";
												}else if(xiaoshou.zhuangtai=="3"){
													zhuangtai="已发货";
													postStatus="underPost.png";
												}else if(xiaoshou.zhuangtai=="4"){
													zhuangtai="已收货";
													postStatus="arrive.png";
												}else if(xiaoshou.zhuangtai=="5"){
													zhuangtai="完成";
													postStatus="complete.png";
												}else if(xiaoshou.zhuangtai=="6"){
													zhuangtai="关闭";
													postStatus="off.png";
												}
												htmlStr+="<li>"
						                    		+"<a href=\'#\' id=\'"+xiaoshou.xiaoshou_id+"\'>"
						                    		+"<img src=\'../images/"+postStatus+"\'>"+xiaoshou.xiaoshou_id
						                    		+"<h2>"+xiaoshou.col1+"</h2>"
									                +"<p>￥"+xiaoshou.shijishoukuan+" 元</p>"
									                +"<p class=\'ui-li-aside\'>"+zhuangtai+"</p>"
						                			+"</a></li>";
											}
											$("#customes_list").append(htmlStr);
											$("#customes_list").listview('refresh');
									  		//alert(data[0].xiaoshou_id);
										},
										dataType: "json"
									});
		                            
		                            window.localStorage.setItem("USER", item);
		                        }else{
		                        	showInfor("您还没有登录，购买将以匿名方式购买，请注意填写收货地址。");
		                        	window.localStorage.removeItem("USER");
		                        }
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
