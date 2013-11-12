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
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#orderPost").click(function() {
	            var options = {
	                   url : "<%=hostPath%>product/createOrderBase.action",
	                   type : "POST",
	                   dataType: 'text',
	                   data: $("#orderBaseForm").serialize(),
	                   success : function(data){
	                   	var result=eval("(" + data + ")");
	                   	var res=result.success.split("-");
	                       var urlStr="<%=hostPath%>product/getPostTo.action?xiaoshou_id="+res[0]+"&postTo="+res[1];
	                       location.href =urlStr;
	                   }  
	            };
	            $.ajax(options);
	            return false;
        	});
	        $("#post_self").click(function(){
	        	$("#post_type").val("0");
	        	//alert($("#post_type").val());
	        });
	        $("#post_people_from").click(function(){
	        	$("#post_type").val("1");
	        	//alert($("#post_type").val());
	        	$("#post_people_from").attr("data-theme","b");
	        	$("#post_list").listview('refresh');
	        });
	        $("#post_people_to").click(function(){
	        	$("#post_type").val("2");
	        	//alert($("#post_type").val());
	        });
	        
		 });
		 $( "#radio-choice-post1" ).bind( "click", function() {
	        	//$("#post_type").val("1");
	        	alert($("#radio-choice-post1").val());
	        });
	</script>
	
</head>
<body>
	<div data-role="page" id="order">
		<div data-role="header" data-position="fixed">
			<h1>订单</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
		</div>
		<form id="orderBaseForm" method="POST" action="createOrderBase.action">
			<div data-role="content" id="orderContent" >
				<ul data-role="listview" data-inset="true">
	        		<li data-role="fieldcontain">
	        			<input type="hidden" id="product_id" name="product_id" value="<%=p.getProduct_id()%>" data-clear-btn="true" placeholder="产品编号" >
	                	<input type="text" id="productname" name="productname" value="<%=p.getProduct_name()%>" data-clear-btn="true" placeholder="产品名称" >
	        			<input type="hidden" id="shoujia" name="shoujia" value="<%=p.getCol2()%>" placeholder="售价" >
	                </li>
	                <li data-role="fieldcontain">
		                <fieldset data-role="controlgroup" data-type="horizontal">
					        <legend>颜色:尺码</legend>
					        <%
					        for(int i=0;i<chimaList.size();i++){
					        String chima=chimaList.get(i);
					        %>
					        <input type="radio" data-theme="a" name="radio-choice-cm" id="radio-choice-t-cm<%=i%>" value="<%=chima%>"<%if(i==0){%> checked="checked"<%}%>>
					        <label for="radio-choice-t-cm<%=i%>"><%=chima%></label>
					        <%
					        }
					         %>
					    </fieldset>
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="hidden" id="post_type" name="post_type" value="">
		                <input type="number" data-clear-btn="true" name="shuliang" pattern="[0-9]*" placeholder="购买数量" id="shuliang" value="1">
	                </li>
				    <li data-role="fieldcontain">
					    <fieldset data-role="controlgroup" data-type="horizontal">
					        <legend>送货方式</legend>
					        <input type="radio" data-theme="b" name="radio-choice-post" id="radio-choice-post0" value="0" checked="checked">
					        <label for="radio-choice-post0">上门自取</label>
					        <input type="radio" data-theme="b" name="radio-choice-post" id="radio-choice-post1" value="1">
					        <label for="radio-choice-post1">快递送货</label>
					    </fieldset>
					</li>
				    <li data-role="fieldcontain">
				    	<div data-role="navbar" data-iconpos="left">
				            <ul id="post_list">
				                <li>
				                    <a href="#left-panel" id="post_people_from" data-transition="fade" data-theme="" data-icon="edit">
				                       	寄件人
				                    </a>
				                </li>
				                <li>
				                    <a href="#right-panel" id="post_people_to" data-transition="fade" data-theme="" data-icon="edit">
				                     	收件人
				                    </a>
				                </li>
				            </ul>
				        </div>
	                </li>
				    <li data-role="fieldcontain">
		                <label for="beizhu">留言</label>
					    <textarea cols="40" rows="8" name="beizhu" id="beizhu">备注信息</textarea>
				    </li>
				    <li data-role="fieldcontain">
				    	<fieldset class="ui-grid-a">
			                <div class="ui-block-a"><button type="submit" id="submitBut" data-theme="b">提交</button></div>
			                <div class="ui-block-b"><button type="submit" data-theme="a">取消</button></div>
					     </fieldset>
				     </li>
			    </ul>
			</div>
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
	                	<input type="text" id="province_from" name="province_from" value="北京" data-clear-btn="true" placeholder="省份" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="city_from" name="city_from" value="北京" data-clear-btn="true" placeholder="城市" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="district_from" name="district_from" value="东城区" data-clear-btn="true" placeholder="区县" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="company_name_from" name="company_name_from" value="安德路55号院16号楼 2门 106室" data-clear-btn="true" placeholder="单位名称/详细地址" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="contact_number_from" name="contact_number_from" value="13810840866" data-clear-btn="true" placeholder="联系电话" >
	                </li>
			    </ul>
			    <a data-rel="close" data-role="button" data-theme="b" data-icon="delete">关闭</a>
			</div>
			<div data-role="panel" id="right-panel" data-display="overlay" data-position="right" data-theme="c">
				<label>收件人地址</label>
				<ul data-role="listview" data-inset="true">
	        		<li data-role="fieldcontain">
	                	<input type="text" id="post_to" name="post_to" value="测试收件人" data-clear-btn="true" placeholder="收件人姓名" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="destination" name="destination" value="广州" data-clear-btn="true" placeholder="目的地" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="province" name="province" value="广东" data-clear-btn="true" placeholder="省份" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="city" name="city" value="广州市" data-clear-btn="true" placeholder="城市" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="district" name="district" value="十三行" data-clear-btn="true" placeholder="区县" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="company_name" name="company_name" value="美错之家" data-clear-btn="true" placeholder="单位名称/详细地址" >
	                </li>
	                <li data-role="fieldcontain">
	                	<input type="text" id="contact_number" name="contact_number" value="134875382736" data-clear-btn="true" placeholder="联系电话" >
	                </li>
	            </ul>
			    <a data-rel="close" data-role="button" data-theme="b" data-icon="delete">关闭</a>
			</div>
		</form>
		<div data-role="footer" data-position="fixed" >
			<div data-role="navbar">
				<ul>
					<li><a href="./main.jsp" data-icon="grid"  rel="external">主菜单</a></li>
					<li><a href="#" id ='orderPost' data-role="button" data-icon="arrow-r" data-transition="fade" rel="external">下一步</a></li>
				</ul>
			</div>
		</div>		
	</div>
</body>
</html>