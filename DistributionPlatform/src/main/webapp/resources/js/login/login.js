
Ext.onReady(function() {
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    // 使用表单提示
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';

    // 定义表单
    var login = new Ext.FormPanel({
    labelWidth : 35,
    monitorValid : true,// 把有formBind:true的按钮和验证绑定
    baseCls : 'x-plain',
    labelAlign:'right',
    defaults : {
         width : 250
    },
    defaultType : 'textfield',// 默认字段类型

    // 定义表单元素
    items : [{
                  fieldLabel : '帐户',
                  name : 'username',// 元素名称
                  // anchor:'95%',//也可用此定义自适应宽度
                  allowBlank : false,// 不允许为空
                  blankText : '帐户不能为空!',// 错误提示内容
                  emptyText:"请输入帐户名(必填)"
             }, {
                  inputType : 'password',
                  fieldLabel : '密码',
                  // anchor:'95%',
                  name : 'userpwd',
                  allowBlank : false,
                  blankText : '密码不能为空!',
                  emptyText:"请输入密码(必填)"
             }],
    buttons : [{
         text : '登陆',
         formBind : true,
         type : 'submit',
         // 定义表单提交事件
         handler : function() {
             if (login.form.isValid()) {// 验证合法后使用加载进度条
                  Ext.MessageBox.show({
                                title : '请稍等',
                                msg : '正在登陆...',
                                progressText : '',
                                width : 300,
                                progress : true,
                                closable : false,
                                animEl : 'loading'
                           });
                  // 控制进度速度
                  var f = function(v) {
                       return function() {
                           var i = v / 11;
                           Ext.MessageBox.updateProgress(i, '');
                       };
                  };

                  for (var i = 1; i < 12; i++) {
                      setTimeout(f(i), i * 150);
                  }

                  // 提交到服务器操作
                  login.form.doAction('submit', {
                        url : 'login/doLogin.action',// 文件路径
                        method : 'post',
                        params : '',
                        success : function(form, action) {
                        	if (action.result.msg == '1'){
                        		window.location = 'index.html';
                        	}else if(action.result.msg == '2'){
                        		Ext.Msg.alert('登陆失败', "用户名或者密码错误");
                        	}
                        },
						failure : function(form, action) {
						    Ext.Msg.alert('错误', '服务器出现错误请稍后再试！');
						}
                  	});
             	}
         	}
		}, {
			text : '取消',
			handler : function() {
				login.form.reset();
			}
		}]
	});
    // 定义窗体
    var win = new Ext.Window({
         id : 'loginWin',
         title : '用户登陆',
         layout : 'fit', // 布局方式fit，自适应布局
         width : 300,
         height : 150,
         modal : true,
         plain : true,
         bodyStyle : 'padding:10px;',
         maximizable : false,// 禁止最大化
         closeAction : 'close',
         closable : false,// 禁止关闭
         collapsible : true,// 可折叠
         plain : true,
         buttonAlign : 'center',
         items : login
             // 将表单作为窗体元素嵌套布局
         });
    win.show();// 显示窗体
 
});