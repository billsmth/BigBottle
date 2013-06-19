Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    /*************站点列表代码(开始)**************************/
    /*
     * Kehu Model 全局
     */
    Ext.regModel('kehuModel',{
        extend: 'Ext.data.Model',
        fields: ['kehu_id', 'kehuname', 'kehusex', 'age', 'biecheng', 'dianming', 'phone1', 'phone2', 'address1', 'address2', 'infor1', 'infor2', 'infor3', 'infor4', 'zuqun_id', 'zhuangtai', 'zhuceriqi', 'qq', 'weixin', 'taobao', 'beizhu']
    });

    /*
     * Kehu Grid Store
     */
    var kehuStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'kehuModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            reader: {
                type: 'json'
            }
        }
    });

    /*
     * Kehu Grid Object
     */
    var grid = Ext.create('Ext.grid.Panel', {
        id:'kehuGrid',
        store: kehuStore,
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'客户编号',dataIndex:'kehu_id', width:140
        }, {
        	header:'客户姓名',dataIndex:'kehuname', width:80
        }, {
        	header:'客户性别',dataIndex:'kehusex', width:80
        }, {
        	header:'年龄',dataIndex:'age', width:80
        }, {
        	header:'别称',dataIndex:'biecheng', width:80
        }, {
        	header:'店名',dataIndex:'dianming', width:80
        }, {
        	header:'电话1',dataIndex:'phone1', width:80
        }, {
        	header:'电话2',dataIndex:'phone2', width:80
        }, {
        	header:'地址1',dataIndex:'address1', width:80
        }, {
        	header:'地址2',dataIndex:'address2', width:80
        }, {
        	header:'信息1',dataIndex:'infor1', width:80
        }, {
        	header:'信息2',dataIndex:'infor2', width:80
        }, {
        	header:'信息3',dataIndex:'infor3', width:80
        }, {
        	header:'信息4',dataIndex:'infor4', width:80
        }, {
        	header:'组群',dataIndex:'zuqun_id', width:80
        },  { 'zhuangtai', 'zhuceriqi', 'qq', 'weixin', 'taobao', 'beizhu'
        	header:'备注',dataIndex:'beizhu', flex:1
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:kehuStore}),
        tbar:[{
            id:'addNew',
            text: '创建销售单',
            iconCls:'icon-add',
            handler:function(){
            	var obj = grid.getSelectionModel().selected.items[0];
            	showAddXiaoshou(obj);
            }
        }, '-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
                var obj = grid.getSelectionModel().selected.items[0];
                showEdit(obj);
            }
        }]
    });
    
    /*
     * Tab页面的布局
     */
    Ext.create('Ext.Viewport', {
        layout : 'fit',
        items:[grid],
        renderTo : Ext.getBody()
    });
    
    function showTypeChange(val) {
        if(val == '1') {
            return '跳回官网产品简介';
        } else {
            return '在目标新网页打开';
        }
    }
    /*************站点列表代码(结束)**************************/
    
    /*************库存新增/编辑代码(开始)*********************/
    var editForm = new Ext.form.FormPanel({
        
        id:'editForm',
        name:'editForm',
        labelAlign : 'right',
        labelWidth : 50,

        url:'../xiaoshou/savexiaoshou.action',

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
            fieldLabel:'款号',
            id:'kuanhao_id',
            name:'kuanhao_id',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'库存编号',
            id:'kehu_id',
            name:'kehu_id',
            allowBlank:true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'颜色',
            id:'yanse',
            name:'yanse',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'尺码',
            id:'chima',
            name:'chima',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'出售数量(件)',
            id:'shuliang',
            name:'shuliang',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'建议售价(元)',
            id:'shoujia',
            name:'shoujia',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'实际成交金额',
            id:'shijishoukuan',
            name:'shijishoukuan',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'买家编号',
            id:'maijia_id',
            name:'maijia_id',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'买家姓名',
            id:'maijiaxingming',
            name:'maijiaxingming',
            allowBlank: false
        }, {
            xtype:'textareafield',
            fieldLabel:'备注:',
            id:'beizhu',
            name:'beizhu',
            allowBlank:true
        }],
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = editForm.getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('提示','新建销售单存保存成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新建销售单保存失败');
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
    
var editkehuForm = new Ext.form.FormPanel({
        
        id:'editkehuForm',
        name:'editkehuForm',
        labelAlign : 'right',
        labelWidth : 50,

        url:'../kehu/savekehu.action',

        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

        items:[{
            xtype:'textfield',
            id:'kehueditType',
            name: 'editType',
            value:1,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'库存编号',
            id:'kehukehu_id',
            name:'kehu_id',
            allowBlank:true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'款号',
            id:'kehukuanhao_id',
            name:'kuanhao_id',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'颜色',
            id:'kehuyanse',
            name:'yanse',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'尺码',
            id:'kehuchima',
            name:'chima',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'库存数量(件)',
            id:'kehushuliang',
            name:'shuliang',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'进价(元)',
            id:'jinjia',
            name:'jinjia',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'成本(元)',
            id:'chengbenjia',
            name:'chengbenjia',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'建议售价(元)',
            id:'kehushoujia',
            name:'shoujia',
            allowBlank: false
        }, {
            xtype:'textareafield',
            fieldLabel:'备注:',
            id:'kehubeizhu',
            name:'beizhu',
            allowBlank:true
        }],
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = editkehuForm.getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('提示','编辑库存成功');
                            editkehuWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','编辑库存失败');
                        }
                    });
                }
            }
        }, {
            text: '关闭',
            iconCls : 'icon-cancel',
            handler: function() {
                editkehuWin.close();
            }
        }]
    });
   
    
    var editWin = new Ext.Window({
        layout : 'fit',
        width : 400,
        title : '新建客户',
        height : 440,
        closeAction : 'hide',
        closable : false,
        items : [editForm]

    });
    
    var editkehuWin = new Ext.Window({
        layout : 'fit',
        width : 400,
        title : '编辑库存',
        height : 440,
        closeAction : 'hide',
        closable : false,
        items : [editkehuForm]

    });
    
    function showEdit(data) {
        editkehuForm.getForm().loadRecord(data);
        Ext.getCmp('kehueditType').setValue(2);
        editkehuWin.show();
    }
    
    function showAddXiaoshou(obj) {
    	obj.data.beizhu="";
    	obj.data.shuliang=1;
    	editForm.getForm().loadRecord(obj);
        editWin.show();
    }
    
    /*************站点新增/编辑代码(结束)*********************/
});