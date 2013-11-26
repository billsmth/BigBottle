<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.jxc.Product"%>
<%@page import="java.util.List"%>

<%
	Product p = (Product) request.getAttribute("PRODUCTDETAIL");
	String imgNames = p.getImage_name();
	
	String[] pics=null;
	if(imgNames!=null){
		imgNames = imgNames.replace(".", "s.");
		pics = imgNames.split(",");
	}
	String hostPath=request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ request.getContextPath()+ "/";
	String picPath = hostPath+ "productlist/";
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
</head>
<body>
	<div data-role="page" id="product">
		<script type="text/javascript">
			function downLoadPics(){
				window.downloader.downloadFile("<%=picPath+p.getProduct_id()%>/", {overwrite: true, pics:"<%=imgNames%>"},   
					function(res) {  
						$('#popupProgress').popup( "open" );
						$('#fileName').text(res.newfile);  
						$('#progress').text(res.progress);  
						if(res.progress==100){
							$('#popupProgress').popup( "close" );
						}  
				           
					}, function(error) {
						alert("下载出错:"+error);  
					}  
				);
			}
			
			function Downloader() {}  
  
			Downloader.prototype.downloadFile = function(fileUrl, params, win, fail) {  
				if (!fail){
		        	win = params;  
				}
		    	cordova.exec(win, fail, "Downloader", "downloadFile", [ fileUrl, params ]);  
			};  
			window.downloader =  new Downloader();
		</script>
	    <div data-role="header" data-position="fixed">
			<h1>商品展示</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
			<a data-role="button" href="#" data-icon="star" data-iconpos="right" onclick="downLoadPics();" class="ui-btn-right">下载</a>
		</div>
		<div data-role="content" id="main2Content">
			<div data-role="popup" id="popupProgress">
				<p><span id="fileName"></span></p>
				<p>下载进度:<span id="progress"></span>%</p>
			</div>
			<div data-role="fieldcontain">
	            <textarea name="product_desc" id="product_desc"><%=p.getDesp()%></textarea>
	        </div>
			<%
			for (int i = 0; i < pics.length; i++) {
			%>
				<img src="<%=picPath+p.getProduct_id()+"/" + pics[i]%>" style="width:100%">
			<%
			}
		%>
		</div>
		<div data-role="footer" data-position="fixed">
			<div data-role="navbar">
				<ul>
					<li><a href="./main.jsp" data-icon="grid" rel="external">主菜单</a></li>
					<li><a href="./createOrder.action?productId=<%=p.getProduct_id()%>" data-icon="info" data-transition="slide">下单</a></li>
					<li><a href="./setting.jsp" data-icon="gear" rel="external">设置</a></li>
				</ul>
			</div>		
		</div>
	</div>
</body>
</html>