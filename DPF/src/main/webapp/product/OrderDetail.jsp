<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page pageEncoding="utf-8" %>
<%@page import="com.isoftstone.common.Tools"%>
<%@page import="com.isoftstone.model.jxc.*"%>
<%
	Xiaoshou xs = (Xiaoshou) request.getAttribute("ORDER_DETAIL");
	if(xs==null){
		xs=new Xiaoshou();
	}
	PostAddress pa= (PostAddress) request.getAttribute("EXPRESS_DETAIL");
	if(pa==null){
		pa=new PostAddress();
	}
	String hostPath=request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ request.getContextPath()+ "/";
	String zhuangtai=xs.getZhuangtai();
	if(zhuangtai.equals("0")){
		zhuangtai="待付款";
	}else if(zhuangtai.equals("1")){
		zhuangtai="已付款";
	}else if(zhuangtai.equals("2")){
		zhuangtai="已确定";
	}else if(zhuangtai.equals("3")){
		zhuangtai="已发货";
	}else if(zhuangtai.equals("4")){
		zhuangtai="已收货";
	}else if(zhuangtai.equals("5")){
		zhuangtai="完成";
	}else if(zhuangtai.equals("6")){
		zhuangtai="关闭";
	}else{
		zhuangtai="未知";
	}
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
		<div data-role="header" data-position="fixed">
			<h1>订单详情</h1>
			<a data-shadow="false" data-iconshadow="false" data-icon="back" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
		</div>
		<div data-role="content" id="payMethodContent" >
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="4" align="center"><Strong>基本信息</Strong></td>
				</tr>
				<tr>
					<td align="right" width=30% nowrap>订单编号</td><td colspan="3"><Strong><%=xs.getXiaoshou_id()%></Strong></td>
				</tr>
				<tr>
					<td align="right" nowrap>产品名称</td><td colspan="3"><%=xs.getCol1()%></td>
				</tr>
				<tr>
					<td align="right">颜色尺码</td><td><%=xs.getYanse()%>/<%=xs.getChima()%></td><td align="right">数量</td><td><%=xs.getShuliang()%>件</td>
				</tr>
				<tr>
					<td align="right">订单状态</td><td colspan="3"><%=zhuangtai%></td>
				</tr>
				<tr>
					<td align="right">价格</td><td><%=xs.getShoujia()%>元</td><td align="right">运费</td><td><%=xs.getCol2()%>元</td>
				</tr>
				<tr>
					<td align="right">汇总</td><td colspan="3"><%=xs.getShijishoukuan()%>元</td>
				</tr>
				<tr>
					<td align="right">备注</td><td colspan="3"><%=xs.getBeizhu()%></td>
				</tr>
			</table>
			<br>
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="4" align="center" nowrap><Strong>快递信息</Strong></td>
				</tr>
				<%
					if(Tools.isBlank(xs.getPost_type())){
				%>
				<tr>
					<td align="center" colspan="4" nowrap>无信息。。。</td>
				</tr>
				<%
					}else if(xs.getPost_type().equals("0")){
				%>
				<tr>
					<td align="right" nowrap>取货方式</td><td colspan="3"><Strong>上门自取</Strong></td>
				</tr>	
				<%
					}else{
				%>
				<tr>
					<td align="right" nowrap>取货方式</td><td colspan="3"><Strong>快递发货</Strong></td>
				</tr>
				<%
					if(!Tools.isBlank(xs.getExpress_name())){
				%>
				<tr>
					<td align="right" nowrap><%=xs.getExpress_name()%></td><td colspan="3"><Strong><%=xs.getExpress_code()%></Strong></td>
				</tr>	
				<%
					}
				%>
				<tr>
					<td align="right" nowrap>发件人</td><td><%=pa.getPost_from()%></td><td align="right">始发地</td><td><%=pa.getDeparture()%></td>
				</tr>
				<tr>
					<td align="right" nowrap>寄件地址</td><td colspan="3"><%=pa.getProvince_from()+"[省]"+pa.getCity_from()+"[市]"+pa.getDistrict_from()+"[区/县]"%></td>
				</tr>
				<%
					if(!Tools.isBlank(pa.getCompany_name_from())){
				%>
				<tr>
					<td align="right" nowrap>单位名称</td><td colspan="3"><%=pa.getCompany_name_from()%></td>
				</tr>
				<%
					}
					if(!Tools.isBlank(pa.getDetail_from())){
				%>
				<tr>
					<td align="right" nowrap>详细地址</td><td colspan="3"><%=pa.getDetail_from()%></td>
				</tr>
				<%
					}
				%>
				<tr>
					<td align="right" nowrap>联系电话</td><td colspan="3"><%=pa.getContact_number_from()%></td>
				</tr>
				<%
					if(!Tools.isBlank(pa.getNeijian())){
				%>
				<tr>
					<td align="right" nowrap>内件名</td><td colspan="3"><%=pa.getNeijian()%></td>
				</tr>
				<%
					}
					if(!Tools.isBlank(pa.getNote())){
				%>
				<tr>
					<td align="right" nowrap>寄件备注</td><td colspan="3"><%=pa.getNote()%></td>
				</tr>
				<%
					}
				%>
				<tr>
					<td align="right" nowrap>收件人</td><td><%=pa.getPost_to()%></td><td align="right">目的地</td><td><%=pa.getDestination()%></td>
				</tr>
				<tr>
					<td align="right" nowrap>收件地址</td><td colspan="3"><%=pa.getProvince()+"[省]"+pa.getCity()+"[市]"+pa.getDistrict()+"[区/县]"%></td>
				</tr>
				<%
					if(!Tools.isBlank(pa.getCompany_name())){
				%>
				<tr>
					<td align="right" nowrap>单位名称</td><td colspan="3"><%=pa.getCompany_name()%></td>
				</tr>
				<%
					}
					if(!Tools.isBlank(pa.getDetail_to())){
				%>
				<tr>
					<td align="right" nowrap>详细地址</td><td colspan="3"><%=pa.getDetail_to()%></td>
				</tr>
				<%
					}
				%>
				<tr>
					<td align="right" nowrap>联系电话</td><td colspan="3"><%=pa.getContact_number()%></td>
				</tr>
				<%
					}
				%>
			</table>
			<br>
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="3" align="center" nowrap><Strong>付款方法</Strong></td>
				</tr>
				<tr>
					<td align="center" nowrap>支付宝</td><td colspan="2">13810840866</td>
				</tr>
				<tr style="background:#009850">
					<td align="center" nowrap>开户行</td><td align="center">账户</td><td align="center">银行账号</td>
				</tr>
				<tr>
					<td align="center" nowrap>农行</td><td align="center">王占良</td><td>622848 0018100503079</td>
				</tr>
				<tr>
					<td align="center" nowrap>建行</td><td align="center">苏哲芳</td><td>6227 0002 1010 0142 452</td>
				</tr>
			</table>
			<br>
			<table border="1px" width=100%>
				<tr style="background:#009900">
					<td colspan="3" align="center" nowrap><Strong>服务信息</Strong></td>
				</tr>
				<tr>
					<td align="center" nowrap>客服微信</td><td colspan="2">18618166418</td>
				</tr>
				<tr>
					<td align="center" nowrap>服务电话</td><td colspan="2">18618166418 ; 13810840866</td>
				</tr>
			</table>
		
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
</body>
</html>