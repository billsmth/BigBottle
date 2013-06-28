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
            text: '查询',
            iconCls : 'icon-submit',
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
            iconCls:'icon-add',
            handler:function(){
            	showAddUser();
            }
        }, '-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请先选择库存记录，再点击【编辑】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条库存记录，本系统咱不支持多条编辑');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                showEdit(obj);
            }
        }];
    } else {
    	userMenu=[{
            id:'addNew',
            text: '创建销售单',
            iconCls:'icon-add'
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
            return '正常';
        } else if(val == '1'){
            return '其他';
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
            fieldLabel:'用户名',
            id:'userName2',
            name:'userName',
            allowBlank: false,
            emptyText:"请输入用户名【必须】"
        },{
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
        },{
            xtype:'textfield',
            fieldLabel:'状态',
            id:'status2',
            name:'status',
            value:'0',
            allowBlank: true
        },{
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
                            Ext.Msg.alert('提示','新建用户保存成功');
                            editWin.close();
                            grid.store.load();
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

	var editWin = new Ext.Window({
        layout : 'fit',
        width : 300,
        title : '新建用户',
        height : 270,
        closeAction : 'hide',
        closable : false,
        items : [editForm]
    });
	
	function showAddUser() {
    	editForm.getForm().reset();
    	editWin.show();
    }
	var viewport=new Ext.Viewport({
		layout:'border',
		renderTo:Ext.getBody(),
		items:[searchForm, grid]
	});
});