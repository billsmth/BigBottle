<%@page language="java" contentType="text/html; charset=utf-8"%>
<%
	String order_id = (String) request.getAttribute("ORDER_ID");
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script type="text/javascript">
	</script>
</head>
<body>
	<div data-role="page" id="postTo">
		<div data-role="header" data-position="fixed">
			<h1>收件地址</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back">Back</a>
		</div>
		<div data-role="content" id="postToContent" >
			<form id='postToForm'>
				<ul data-role="listview" data-inset="true">
	        		<li data-role="fieldcontain">
	        			<input type="hidden" id="order_id" name="order_id" value="<%=order_id%>" data-clear-btn="true" placeholder="订单编号" >
	                	<input type="text" id="post_to" name="post_to" value="" data-clear-btn="true" placeholder="收件人姓名" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="destination" name="destination" value="" data-clear-btn="true" placeholder="目的地" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="province" name="province" value="" data-clear-btn="true" placeholder="省份" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="city" name="city" value="" data-clear-btn="true" placeholder="城市" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="district" name="district" value="" data-clear-btn="true" placeholder="区县" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="company_name" name="company_name" value="" data-clear-btn="true" placeholder="单位名称" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="contact_number" name="contact_number" value="" data-clear-btn="true" placeholder="联系电话" >
	                </li>
			    </ul>
		    </form>
		</div>
		<div data-role="footer" data-position="fixed" >
			<div data-role="navbar">
				<ul>
					<li><a href="newProductList.html" data-role="button" data-icon="back" data-transition="slide">取消</a></li>
					<li><a href="#" id ='orderPost' data-role="button" data-icon="arrow-r" data-transition="fade" rel="external">下一步</a></li>
				</ul>
			</div>
		</div>		
	</div>
</body>
</html>