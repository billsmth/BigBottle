<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.jxc.Product"%>
<%@page import="com.isoftstone.common.Tools"%>
<%@page import="java.util.List"%>

<%
	List<Product> list = (List<Product>) request.getAttribute("PRODUCTS");
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
	<link rel="stylesheet" href="../css/jqm-demos.css" />
	<link rel="stylesheet" href="../css/grid-listview.css">
	<script src="../js/cordova.js"></script>
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/common.js"></script>
	<script src="./js/index.js"></script>
	<script type="text/javascript">
		</script>
</head>
<body>
	<div data-role="page" id="products">
	    <div data-role="header" data-position="fixed">
			<h1>商品列表</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
		</div>
		<div data-role="content" id="main2Content" >
	        <ul data-role="listview" data-inset="true">
	        <%
	        	Product p=null;
				for(int i=0;i<list.size();i++){
					p=list.get(i);
			%>	
				<li><a href="./getProductByID.action?productId=<%=p.getProduct_id()%>">
		            	<img src="<%=picPath+p.getProduct_id() + "/"+Tools.PROUDCT_INDEX_PIC_NAME%>">
		            	<h2><%=p.getProduct_name()%></h2>
		                <p>单价:<%=p.getCol2()+" 元"%></p>
		                <p class="ui-li-aside">运费:<%=p.getCol3()+" 元"%></p>
	            	</a>
	            </li>
			<%
				}
			%>
	        	
	        </ul>
	                
		</div>
		<div data-role="footer" data-position="fixed">
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