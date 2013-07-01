Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function(){
	
	Ext.tip.QuickTipManager.init();
	var searchForm=new Ext.form.FormPanel({
        id:'searchForm',
        name:'searchForm',
        collapsible:true,
        width:150,
        title:"查询条件",
		region:"north",
        labelAlign:'right',
        labelWidth : 35,
        bodyStyle:"padding:10px 7px 0px 7px",
        autoScroll:true,
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items:[{
	        xtype:'textfield',
	        fieldLabel:'用户编号',
	        id:'userID',
	        name:'userID',
	        emptyText:"支持模糊查询,前后任意一致",
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'用户名',
	        id:'userName',
	        name:'userName',
	        emptyText:"支持模糊查询,前后任意一致",
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'用户组',
	        id:'userGroup',
	        name:'userGroup',
	        emptyText:"一位数字",
	        allowBlank: true,
            hidden:true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'状态',
	        id:'status',
	        name:'status',
	        emptyText:"支持模糊查询,前后任意一致",
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'备注',
	        id:'note',
	        name:'note',
	        emptyText:"支持模糊查询,前后任意一致",
	        allowBlank: true
	    }],
	    buttons:[{
            text: '重置条件',
            iconCls : 'icon-reset',
            handler: function() {
            	searchForm.getForm().reset();
            }
        }, {
            text: '查     询',
            iconCls : 'icon-search',
            handler: function() {
            	var form = searchForm.getForm();
            	grid.store.load({params:form.getValues()});
            }
        }]
	});
	
	
	/*
     * Kehu Model 全局
     */
    Ext.regModel('userModel',{
        extend: 'Ext.data.Model',
        fields: ['userID', 'userName', 'userPwd', 'userGroup', 'status', 'note']
    });

    /*
     * Kehu Grid Store
     */
    var userStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'userModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            actionMethods: {read:'post'},
            reader: {
                type: 'json'
            }
        }
    });
    
    var userMenu;
    if(group=="1"||group=="2"){
    	userMenu=[{
            id:'addNew',
            text: '创建用户',
            iconCls:'icon-adduser',
            handler:function(){
            	showAddUser();
            }
        }, '-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请先选择用户记录，再点击【编辑】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条用户记录，本系统暂不支持多条编辑');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                showEdit(obj);
            }
        }, '-', {
            id:'delete',
            text:'删除',
            iconCls:'icon-del2',
            handler:function(){
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要删除的用户记录(支持多选)，再点击【删除】按钮');
                	return;
            	}
            	Ext.Msg.confirm("请确认", "确认要删除这个/些用户吗?", function(id){
            		if (id == "yes") {
            			var models = grid.getSelectionModel().selected.items;
                        var ids = '';
                        Ext.iterate(models, function(key, value) {
                            var tmp = key.data.userID;
                            if(ids.length !=0) {
                                ids = ids + ',' + tmp;
                            } else {
                                ids = ids + tmp;
                            }
                        }, this);
                        Ext.Ajax.request({
                            url : '../user/delete.action',
                            params : {
                                userids : ids
                            },

                            success : function(response, option) {
                                Ext.Msg.alert('提示','用户删除成功');
                                grid.store.load();
                            },
                            failure : function() {
                                Ext.Msg.alert('提示','用户删除失败');
                            }
                        });
            		}
            	});
            }
        }, '-', {
            id:'changepwd',
            text: '变更密码',
            iconCls:'icon-changepwd',
            handler:function(){
            	changePwd();
            }
        } ];
    } else {
    	userMenu=[{
            id:'changepwd',
            text: '变更密码',
            iconCls:'icon-changepwd',
            handler:function(){
            	changePwd();
            }
        }];
    }

    var grid = Ext.create('Ext.grid.Panel', {
        id:'userGrid',
        store: userStore,
        region : 'center',
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'用户编号',dataIndex:'userID', width:90
        }, {
        	header:'用户名',dataIndex:'userName', width:80
        }, {
        	header:'用户组',dataIndex:'userGroup', width:80
        }, {
        	header:'状态',dataIndex:'status', width:80, renderer:showStatus
        }, {
        	header:'备注',dataIndex:'note', flex:1
        },],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:userStore}),
        tbar:userMenu
    });
    
    if(group==null||group=="3"){
    	grid.columns[2].hideable=false;
    	grid.columns[2].hidden=true;
    }
    if(group=="1"||group=="2"){
    	Ext.getCmp('userGroup').hidden=false;
    }
	
	function showStatus(val, meta){
        if(val == '0') {
        	meta.tdCls ='green';
            return '启用';
        } else if(val == '1'){
        	meta.tdCls ='yellow';
            return '停用';
        }
    }
	
	var editForm = new Ext.form.FormPanel({
        id:'editForm',
        name:'editForm',
        labelAlign : 'right',
        labelWidth : 50,
        bodyStyle:"padding:10px 7px 0px 7px",

        url:'../user/saveuser.action',

        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

        items:[{
            xtype:'textfield',
            id:'editType',
            name: 'editType',
            value:1,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'用户编号',
            id:'userID2',
            name:'userID',
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'用户名',
            id:'userName2',
            name:'userName',
            allowBlank: false,
            emptyText:"请输入用户名【必须】"
        }, {
            xtype:'textfield',
            fieldLabel:'登录密码',
            id:'userPwd2',
            name:'userPwd',
            value:'123',
            allowBlank: true
        },{
            xtype:'textfield',
            fieldLabel:'用户组',
            id:'userGroup2',
            name:'userGroup',
            value:'3',
            allowBlank: true
        },new Ext.form.RadioGroup({
            fieldLabel: '用户状态',
            id:'status2',
            name:'status',
            width: 100,
            items: [{
                name: 'status',
                inputValue: '0',
                boxLabel: '启用',
                checked: true
            }, {
                name: 'status',
                inputValue: '1',
                boxLabel: '停用'
            }]
        }),{
            xtype:'textareafield',
            fieldLabel:'备注',
            id:'note2',
            name:'note',
            allowBlank: true
        }],
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = editForm.getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                        	if(action.result.msg=="1"){
                        		Ext.Msg.alert('创建错误','用户名已经存在，请使用其他用户名。');
                        		return;
                        	}else if(action.result.msg=="2"){
                        		Ext.Msg.alert('更新错误','用户名已经存在，请使用其他用户名。');
                        		return;
                        	}else if(action.result.msg=="0"){
                        		Ext.Msg.alert('提示','创建用户保存成功');
                                editWin.close();
                                grid.store.load();	
                        	}else if(action.result.msg=="4"){
                        		Ext.Msg.alert('提示','更新用户信息成功');
                                editWin.close();
                                grid.store.load();	
                        	}
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新建用户保存失败');
                        }
                    });
                }
            }
        }, {
            text: '关闭',
            iconCls : 'icon-cancel',
            handler: function() {
                editWin.close();
            }
        }]
    });
	
	var pwdForm = new Ext.form.FormPanel({
        id:'pwdForm',
        name:'pwdForm',
        labelAlign : 'right',
        labelWidth : 50,
        bodyStyle:"padding:10px 7px 0px 7px",

        url:'../user/changepwd.action',

        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

        items:[{
            xtype:'textfield',
            fieldLabel:'原密码',
            inputType : 'password',
            id:'oldpwd',
            name:'oldpwd',
            allowBlank: false,
            emptyText:"请输入原密码【必须】"
        }, {
            xtype:'textfield',
            fieldLabel:'新密码',
            inputType : 'password',
            id:'newpwd',
            name:'newpwd',
            allowBlank: false,
            emptyText:"请输入新密码【必须】"
        }, {
            xtype:'textfield',
            fieldLabel:'确认密码',
            inputType : 'password',
            id:'confirm',
            name:'confirm',
            allowBlank: false,
            emptyText:"请再次输入新密码【必须】",
            listeners:{
            	'blur':function(){
            		if(Ext.getCmp("newpwd").getValue()!=null){
            			if(Ext.getCmp("newpwd").getValue()!=Ext.getCmp("confirm").getValue()){
            				Ext.Msg.alert('错误提示','两次输入的新密码不一致，请更正');
            			}
            		}
            	}
            }
        }],
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = pwdForm.getForm();
                if (form.isValid()) {
                	if(Ext.getCmp("newpwd").getValue()!=Ext.getCmp("confirm").getValue()){
        				Ext.Msg.alert('错误提示','两次输入的新密码不一致，请更正');
        				return;
        			}
                    form.submit({
                        success: function(form, action) {
                        	if(action.result.msg=="0"){
                        		Ext.Msg.alert('提示','用户密码变更成功！');
                        		pwdWin.close();
                        		return;
                        	}
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新密码保存失败');
                        }
                    });
                }
            }
        }, {
            text: '关闭',
            iconCls : 'icon-cancel',
            handler: function() {
                pwdWin.close();
            }
        }]
    });

	var editWin;
	
	var pwdWin=new Ext.Window({
        layout : 'fit',
        width : 300,
        title : '更改当前用户密码',
        height : 170,
        closeAction : 'hide',
        resizable:false,
        modal:true,
        closable : false,
        items : [pwdForm]
    });
	
	function showAddUser() {
    	editForm.getForm().reset();
    	editWin=new Ext.Window({
            layout : 'fit',
            width : 320,
            title : '新建用户',
            height : 290,
            closeAction : 'hide',
            resizable:false,
            modal:true,
            closable : false,
            items : [editForm]
        });
    	editWin.show();
    }
	
	function showEdit(data) {
		editForm.getForm().reset();
		editForm.getForm().loadRecord(data);
        Ext.getCmp('editType').setValue(2);
        editWin=new Ext.Window({
            layout : 'fit',
            width : 320,
            title : '修改用户',
            height : 290,
            closeAction : 'hide',
            resizable:false,
            modal:true,
            closable : false,
            items : [editForm]
        });
        editWin.show();
    }
	
	function changePwd() {
		pwdForm.getForm().reset();
		pwdWin.show();
	}
	
	var viewport=new Ext.Viewport({
		layout:'border',
		renderTo:Ext.getBody(),
		items:[searchForm, grid]
	});
});