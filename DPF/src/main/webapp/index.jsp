<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<link rel="stylesheet" href="resources/extjs/resources/css/ext-all.css">
<link href="resources/css/login.css" rel="stylesheet" type="text/css"/>
<script src="resources/extjs/ext-lang-zh_CN.js" type="text/javascript"></script>
<script src="resources/extjs/ext-all.js"></script>
<script type="text/javascript">
/* function userlogin(){
     var username=document.getElementById("itcode");
     var password=document.getElementById("password");
     if(username.value==""){
         alert("用户名不能为空");
         username.focus();
         return;
     }
     if(password.value==""){
         alert("密码不能为空");
         password.focus();
         return;
     }
     form1.submit();
} */

</script>
<c:if test="${not empty text }">
<script type="text/javascript">
Ext.onReady(function() {
//document.getElementById("uname").style.fontSize = "14px";
//document.getElementById("upassword").style.fontSize = "14px";
	Ext.MessageBox.alert("提示", "${text}");
});
//alert("${text}");
</script>
<% 
session.removeAttribute("text");
%> 
</c:if>

</head>
<body id="LoginBody">
<form action="login.action" method="post" name="form1" id="form" >
<div id="login">
  <table width="670" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td width="380"><img src="resources/img/login/loginlg.png" width="365" height="82" /></td>
      <td width="40"><img src="resources/img/login/mline.png" width="14" height="215" /></td>
      <td width="250"><table width="250" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td width="90" height="35" align="right"><label id="uname">用户名:</label>&nbsp;</td>
          <td width="160"><input type="text" style="height:22px" name="userId" value="${userIds}" id="itcode" class="loginput"  /></td>
        </tr>
        <tr>
          <td width="90" height="35" align="right"><label id="upasssword">密码:</label>&nbsp;</td>
          <td><input type="password" style="height:22px" name="password" id="password" class="loginput" /></td>
        </tr>
        <tr>
          <td height="35">&nbsp;</td>
          <td align="right"><input type="submit" name="button" id="button" value="登录" class="loginButton" onclick="userlogin()" /></td>
        </tr> 
        <tr>
        	<td colspan="2"><div id="showMsg"><font color="red"></font></div></td>
        </tr>
      </table></td>
    </tr>
  </table>
</div>
</form>
</body>
<% 
session.removeAttribute("userIds");
%> 
</html>
