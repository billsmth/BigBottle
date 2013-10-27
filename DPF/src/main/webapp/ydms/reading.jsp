<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@page import="com.isoftstone.model.ydms.Ydms" %>
<%@page import="com.isoftstone.model.ydms.YdmsPeople" %>
<%@page import="com.isoftstone.model.ydms.YdmsDw" %>
<%@page import="com.isoftstone.model.ydms.Ywzb" %>
<%@page import="com.isoftstone.model.ydms.Sfgc" %>
<%@page import="com.isoftstone.model.ydms.IssuePeople" %>
<%@page import="com.isoftstone.model.ydms.Plan" %>
<%@page import="com.isoftstone.model.ydms.TaskSZ" %>
<%@page import="com.isoftstone.model.ydms.Outlay" %>
<%@page import="com.isoftstone.model.ydms.Lay" %>
<%@page import="com.isoftstone.model.ydms.Result "%>
<%@page import="com.isoftstone.common.StringUtil" %>
<%@page import="java.util.List" %>

<%
	Ydms yd = (Ydms)request.getAttribute("yd");
 %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0090)http://localhost:8080/zjb.szx/ydms/listall.action?ids=50a9cec8-c9cb-46ee-a90c-7dfd549a647d -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>无标题文档</title>
<style>
td{height:30px;line-height:30px;font-size:13px;}
.STYLE2 {
	color: #FFFFFF;
	font-weight: bold;
	font-size: 14px;
}
.STYLE4 {
	color: #FFFFFF;
	font-weight: bold;
}
.STYLE5 {color: #FF0000}
</style>
<script type="text/javascript" src="reading.js"></script>
</head>

<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="showBudget()">
<div id="budgetData" style="display:none;"><%=yd.getBudget() %></div>
<!-- Save for Web Slices (reading.psd) -->
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
	<tr>
		<td width="41" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
		<td width="915" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;><span class="STYLE1"><span class="STYLE2">基本信息</span></span></td>
	</tr>
	<tr>
		<td colspan="3" bordercolor="#9f9f9f" bgcolor="#CCCCCC"><table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
          <tr>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>专项名称</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=StringUtil.nvl(yd.getProject_name()) %></div></td>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>申报单位</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="center"><div align="left"><%=yd.getRequest_company_name() %>
              </div>
            </div></td>
          </tr>
          <tr>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>主题名称</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=yd.getTopic_name() %></div></td>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>所属流域</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=yd.getBelong_valley() %></div></td>
          </tr>
          <tr>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>课题名称</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=yd.getIssue_name() %></div></td>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>课题编号</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=yd.getIssue_no() %></div></td>
          </tr>
          <tr>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>密    级</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=StringUtil.nvl(yd.getSecret_level()) %></div></td>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>实施年限</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=yd.getStart_year_month() %>至<%=yd.getEnd_year_month() %></div></td>
          </tr>
          <tr>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>课题类型</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=StringUtil.nvl(yd.getIssue_category()) %></div></td>
            <td width="100" height="45" bgcolor="#e2e2e2"><div align="center"><strong>预计完成时间</strong></div></td>
            <td width="350" height="45" bgcolor="#FFFFFF" style="padding-left:20px;><div align="left"><%=StringUtil.nvl(yd.getClose_date()) %></div></td>
          </tr>
        </table></td>
	</tr>
	
	<tr>
      <td height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
	  <td height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">责任人信息</span></span></td>
  </tr>
	<tr>
		<td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;>
	<tr>
		<td colspan="3><span class="STYLE4">行政责任人</span></td>
	</tr>
	
	<tr>
		<td colspan="3"><table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
          <tr>
            <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
            <td width="150" bgcolor="#e2e2e2"><div align="center"><strong>姓名</strong></div></td>
            <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>出生日期</strong></div></td>
            <td width="150" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>单位名称</strong> </div>            </td>
            <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>职位</strong></div></td>
            <td width="150" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>固定电话</strong></div>            </td>
          </tr>
        <% List<YdmsPeople> peopleList1=yd.getPersonXZ();
        for(YdmsPeople yp:peopleList1){ %>
          <tr>
            <td width="10%" bgcolor="#FFFFFF"><div align="center"><%=yp.getSort_no() %></div></td>
            <td width="150" bgcolor="#FFFFFF"><div align="center"><%=yp.getName() %></div></td>
            
            <td width="150" height="45" bgcolor="#FFFFFF"><div align="center"><%=(yp.getBirthday()==null?"":yp.getBirthday().substring(0,10)) %> </div></td>
            <td width="150" height="45" bgcolor="#FFFFFF" ><div align="center"><%=yp.getCompany() %></div></td>
            <td width="150" height="45" bgcolor="#FFFFFF"><div align="center"><%=yp.getTitle()%></div></td>
            <td width="150" height="45" bgcolor="#FFFFFF" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=yp.getPhone() %></div></td>
          </tr>
        <%} %>
        </table></td>
	</tr>
	
	<tr>
			<td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;>
	<tr>
		<td colspan="3><span class="STYLE4">技术负责人</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="150" bgcolor="#e2e2e2"><div align="center"><strong>姓名</strong></div></td>
    <td width="150" bgcolor="#e2e2e2"><div align="center"><strong>性别</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>出生日期</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>职称</strong> </div></td>
    <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>最高学位</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>从事专业</strong></div></td>
  </tr>
  <% List<YdmsPeople> peopleList=yd.getPersonJS();
        for(YdmsPeople js:peopleList){ %>
  <tr>
    <td width="10%" bgcolor="#FFFFFF"><div align="center"><%=js.getSort_no() %></div></td>
    <td width="150" bgcolor="#FFFFFF"><div align="center"><%=js.getName() %></div></td>
    <td width="150" bgcolor="#FFFFFF"><div align="center"><%=("0".equals("js.getSex()")?"男":"女") %></div></td>
    <td width="150" height="64" bgcolor="#FFFFFF"><div align="center"><%=(js.getBirthday()==null?"":js.getBirthday().substring(0,10)) %></div></td>
    <td width="150" height="64"  bgcolor="#FFFFFF"><div align="center"><%=js.getTitle() %></td>
    <td width="150" height="64" bgcolor="#FFFFFF"><div align="center"><%=js.getDegree() %></div></td>
    <td width="150" height="64" bgcolor="#FFFFFF" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=js.getSpecialty() %></div></td>
  </tr>
  <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">支持单位信息</span></span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="214" bgcolor="#e2e2e2"><div align="center"><strong>单位名称</strong></div></td>
    <td width="150" bgcolor="#e2e2e2"><div align="center"><strong>单位性质</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>机构代码</strong></div></td>
    <td width="381" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>通信地址</strong></div></td>
  </tr>
   <%List<YdmsDw> dwList=yd.getDwOrg();
    for(YdmsDw dw:dwList){
   %>
  <tr>
    <td width="10%"><div align="center"><%=dw.getSort_no() %></div></td>
    <td width="214"><div align="center"><%=dw.getCompany_name() %></div></td>
    <td width="150"><div align="center"><%=dw.getCompany_prop() %></div></td>
    <td width="150" height="64"><div align="center"><%=dw.getOrg_no() %></div></td>
    <td width="381" height="64" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=dw.getAddress() %></div></td>
  </tr>
  <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">必要性分析</span></span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">      
      <blockquote>
        <p><%=StringUtil.nvl(yd.getNecessity_analysis()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">总体目标及指标</span></span></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">总体目标及指标</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">
      <blockquote>
        <p><%=StringUtil.nvl(yd.getObjective()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">年度任务及指标</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="81" bgcolor="#e2e2e2"><div align="center"><strong>年度</strong></div></td>
    <td width="488" height="45" bgcolor="#e2e2e2"><div align="center"><strong>年度任务</strong></div></td>
    <td width="234" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>年度考核指标</strong></div></td>
  </tr>
  <%List<Ywzb> taskList=yd.getTask();
  for(Ywzb yw : taskList){
  %>
  <tr>
    <td width="10%"><div align="center"><%=yw.getSort_no() %></div></td>
    <td width="81"><div align="center"><%=yw.getYear_plan() %></div></td>
    <td width="488" height="64"><div align="center"><%=yw.getTask() %></div></td>
    <td width="234" height="64" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=yw.getKpi() %></div></td>
  </tr>
  <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">示范工程及配套条件</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="269" bgcolor="#e2e2e2"><div align="center"><strong>主要示范工程</strong></div></td>
    <td width="276" height="45" bgcolor="#e2e2e2"><div align="center"><strong>配套条件及落实情况</strong></div></td>
    <td width="257" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>地方责任单位</strong></div></td>
  </tr>
  <%List<Sfgc> projectList = yd.getProject();
   for(Sfgc sf : projectList){
  %>
  <tr>
    <td width="10%"><div align="center"><%=sf.getSort_no() %></div></td>
    <td width="269"><div align="center"><%=sf.getMain_project() %></div></td>
    <td width="276" height="64"><div align="center"><%=sf.getSupport_condition() %></div></td>
    <td width="257" height="64" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=sf.getLocal_org() %></div></td>
  </tr>
  <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">技术方案</span></span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">
      <blockquote>
        <p><%=StringUtil.nvl(yd.getTech_solution()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">基础条件和优势</span></span></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">主要人员情况意见</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">
      <blockquote>
        <p><%=StringUtil.nvl(yd.getBasis_info()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">主要人员情况</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="150" bgcolor="#e2e2e2"><div align="center"><strong>姓名</strong></div></td>
    <td width="150" bgcolor="#e2e2e2"><div align="center"><strong>性别</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>年龄</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><strong>职称</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2"><div align="center"><strong>专业</strong></div></td>
    <td width="150" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>课题中职务</strong></div></td>
  </tr>
  <%List <IssuePeople> ipList = yd.getBasis();
   for(IssuePeople ip : ipList){
  %>
  <tr>
    <td width="10%" bgcolor="#FFFFFF"><div align="center"><%=ip.getSort_no() %></div></td>
    <td width="150" bgcolor="#FFFFFF"><div align="center"><%=ip.getName() %></div></td>
    <td width="150" bgcolor="#FFFFFF"><div align="center"><%=("0".equals("ip.getSex()")?"男":"女")  %></div></td>
    <td width="150" height="64" bgcolor="#FFFFFF"><div align="center"><%=ip.getAge() %></div></td>
    <td width="150" height="64" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=ip.getTitle() %></div></td>
    <td width="150" height="64" bgcolor="#FFFFFF"><div align="center"><%=ip.getSpecialty() %></div></td>
    <td width="150" height="64" bgcolor="#FFFFFF" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=ip.getJob_task() %></div></td>
  </tr>
   <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">负责人及主要骨干的情况意见</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">
      <blockquote>
        <p><%=StringUtil.nvl(yd.getMember_info()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">目前承担其他计划任务</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="100" bgcolor="#e2e2e2"><div align="center"><strong>姓名</strong></div></td>
    <td width="195" height="45" bgcolor="#e2e2e2"><div align="center"><strong>课题名称</strong></div></td>
    <td width="110" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><strong>课题经费数</strong></div></td>
    <td width="122" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><strong>开始时间</strong></div></td>
    <td width="104" height="45" bgcolor="#e2e2e2"><div align="center"><strong>结束时间</strong></div></td>
    <td width="161" height="45" bgcolor="#e2e2e2" style="padding-left:20px;&gt;&lt;div align="center="center""><div align="center"><strong>所属科技计划</strong></div></td>
  </tr>
  <%List<Plan> planList =yd.getPlanList();
   for(Plan p : planList){
  %>
  <tr>
    <td width="10%"><div align="center"><%=p.getSort_no() %></div></td>
    <td width="100"><div align="center"><%=p.getLeader_name() %></div></td>
    <td width="195" height="64"><div align="center"><%=p.getIssue_name() %></div></td>
    <td width="110" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=p.getOutlay() %></div></td>
    <td width="122" height="64" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=p.getStart_date() %></div></td>
    <td width="104" height="64"><div align="center"><%=p.getEnd_date() %></div></td>
    <td width="161" height="64" bgcolor="#FFFFFF" style="padding-left:20px;&gt;&lt;div align="left="left""><div align="center"><%=p.getBelong_plan() %></div></td>
  </tr>
   <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">课题组织方式及管理机制</span></span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">
      <blockquote>
        <p><%=StringUtil.nvl(yd.getOrg_manage()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">风险分析及其对策</span></span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td height="45"><div align="left">
      <blockquote>
        <p><%=StringUtil.nvl(yd.getAnalysis()) %></p>
      </blockquote>
    </div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">经费预算(万元)</span></span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC" id="table_budget">
  <tr>
    <td width="170" bgcolor="#e2e2e2"><div align="left"><strong>费用类别</strong></div></td>
    <td width="109" bgcolor="#e2e2e2"><div align="center"><strong>中央财政投入</strong></div></td>
    <td width="109" height="45" bgcolor="#e2e2e2"><div align="center"><strong>地方财政收入</strong></div></td>
    <td width="128" bgcolor="#e2e2e2" ><div align="center"><strong>企业投资</strong></div></td>
    <td width="128" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>银行融资</strong></div></td>
    <td width="109" height="45" bgcolor="#e2e2e2"><div align="center"><strong>其他</strong></div></td>
    <td width="158" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>总计</strong></div></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td width="39" height="39" bgcolor="#0085c3"><img src="images/reading_01.jpg" width="39" height="39" /></td>
    <td width="921" height="39" colspan="2" bgcolor="#0085c3" style="padding-left:20px;&gt;&lt;span class="style1="STYLE1""><span class="STYLE2">经费及任务分解</span></span></td>
  </tr>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">研究任务设置</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="138" bgcolor="#e2e2e2"><div align="center"><strong>任务名称</strong></div></td>
    <td width="138" bgcolor="#e2e2e2"><div align="center"><strong>主要研究内容</strong></div></td>
    <td width="139" height="45" bgcolor="#e2e2e2"><div align="center"><strong>考核指标</strong></div></td>
    <td width="157" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>承担单位</strong></div></td>
    <td width="138" height="45" bgcolor="#e2e2e2"><div align="center"><strong>参加单位</strong></div></td>
    <td width="164" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>经费（万元）</strong></div></td>
  </tr>
  <% List<TaskSZ> szList=yd.getYjrwsz();
        for(TaskSZ sz : szList){ %>
  <tr>
    <td width="10%" bgcolor="#FFFFFF"><div align="center"><%=sz.getSort_no() %></div></td>
    <td bgcolor="#FFFFFF"><div align="center"><%=sz.getTask_name() %></div></td>
    <td bgcolor="#FFFFFF"><div align="center"><%=sz.getResearch_content() %></div></td>
    <td height="64" bgcolor="#FFFFFF"><div align="center"><%=sz.getCheck_target() %></div></td>
    <td height="64" ><div align="center"><%=sz.getAssume_org() %></div></td>
    <td height="64" bgcolor="#FFFFFF"><div align="center"><%=sz.getJoin_org() %></div></td>
    <td height="64" bgcolor="#FFFFFF" ><div align="center"><%=sz.getOutlay() %></div></td>
  </tr>
  <%} %>
</table>
<table width="900" border="0.5" align="center" cellpadding="0" cellspacing="0" bordercolor="#9f9f9f" id="__01">
  <tr>
    <td height="29" colspan="10" background="images/reading_25.jpg" style="padding-left:20px;&gt;
	&lt;tr&gt;
		&lt;td colspan="3><span class="STYLE4">研究经费按单位分配</span></td>
  </tr>
</table>
<table width="900" border="1" align="center" cellpadding="1" cellspacing="0" bordercolor="#CCCCCC">
  <tr>
    <td width="10%" bgcolor="#e2e2e2"><div align="center"><strong>序号</strong></div></td>
    <td width="207" bgcolor="#e2e2e2"><div align="center"><strong>单位</strong></div></td>
    <td width="233" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>承担任务</strong></div></td>
    <td width="207" height="45" bgcolor="#e2e2e2"><div align="center"><strong>考核指标</strong></div></td>
    <td width="235" height="45" bgcolor="#e2e2e2" ><div align="center"><strong>分配经费（万元）</strong></div></td>
  </tr>
   <% List<Outlay> olList=yd.getOutlayFP();
        for(Outlay o : olList){ %>
  <tr>
    <td width="10%" bgcolor="#FFFFFF"><div align="center"><%=o.getSort_no() %></div></td>
    <td bgcolor="#FFFFFF"><div align="center"><%=o.getCompany() %></div></td>
    <td height="64" ><div align="center"><%=o.getTask() %></div></td>
    <td height="64" bgcolor="#FFFFFF"><div align="center"><%=o.getCheck_target() %></div></td>
    <td height="64" bgcolor="#FFFFFF" ><div align="center"><%=o.getOutlay() %></div></td>
  </tr>
  <%} %>
</table>
<p>&nbsp; </p>
</body>
</html>