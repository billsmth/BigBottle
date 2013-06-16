Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    /*************站点列表代码(开始)**************************/
    /*
     * Xiaoshou Model 全局
     */
    Ext.regModel('xiaoshouModel',{
        extend: 'Ext.data.Model',
        fields: ['xiaoshou_id','kuanhao_id','yanse','chima','shuliang','shoujia','shijishoukuan','maijia_id','maijiaxingming','beizhu']
    });

    /*
     * Xiaoshou Grid Store
     */
    var xiaoshouStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'xiaoshouModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            reader: {
                type: 'json'
            }
        }
    });

    /*
     * Xiaoshou Grid Object
     */
    var grid = Ext.create('Ext.grid.Panel', {
        id:'xiaoshouGrid',
        store: xiaoshouStore,
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'销售单编号',dataIndex:'xiaoshou_id', width:140
        }, {
        	header:'款号',dataIndex:'kuanhao_id', width:80
        }, {
        	header:'颜色',dataIndex:'yanse', width:80
        }, {
        	header:'尺码',dataIndex:'chima', width:80
        }, {
        	header:'数量（件）',dataIndex:'shuliang', width:80
        }, {
        	header:'售价',dataIndex:'shoujia', width:80
        }, {
        	header:'实际成交金额',dataIndex:'shijishoukuan', width:80
        }, {
        	header:'买家编号',dataIndex:'maijia_id', width:80
        }, {
        	header:'买家姓名',dataIndex:'maijiaxingming', width:80
        }, {
        	header:'备注',dataIndex:'beizhu', flex:1
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:xiaoshouStore}),
        tbar:[{
            id:'addNew',
            text: '新增',
            iconCls:'icon-add',
            handler:function(){
                showAdd();
            }
        }, '-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
                var obj = grid.getSelectionModel().selected.items[0];
                showEdit(obj);
            }
        }, '-', {
            id:'del',
            text:'删除',
            iconCls:'icon-del',
            handler:function(){
            	
//            	Ext.Msg.confirm("Confirm", "Sure to delete?", function(id){
//            		if (id != "yes") {
//            			return;
//            		}
//            	}); // this does not work.
            	
            	Ext.Msg.confirm("请确认", "确认要删除?", function(id){
            		if (id == "yes") {
            			var models = grid.getSelectionModel().selected.items;
                        var ids = '';
                        Ext.iterate(models, function(key, value) {
                            var tmp = key.data.address;
                            if(ids.length !=0) {
                                ids = ids + ',' + tmp;
                            } else {
                                ids = ids + tmp;
                            }
                        }, this);
                        Ext.Ajax.request({
                            url : '../xiaoshou/delete.action',
                            params : {
                                address : ids
                            },

                            success : function(response, option) {
                                Ext.Msg.alert('提示','删除成功');
                                grid.store.load();
                            },
                            failure : function() {
                                Ext.Msg.alert('提示','删除失败');
                            }
                        });
            		}
            	});
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
    
    /*************销售单新增/编辑代码(开始)*********************/
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
            fieldLabel:'销售编号',
            id:'xiaoshou_id',
            name:'xiaoshou_id',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'款号',
            id:'kuanhao_id',
            name:'kuanhao_id',
            allowBlank: false
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
            fieldLabel:'数量',
            id:'shuliang',
            name:'shuliang',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'售价',
            id:'shoujia',
            name:'shoujia',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'实际成交金额',
            id:'shijishoukuan',
            name:'shijishoukuan',
            allowBlank: true
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
                            Ext.Msg.alert('提示','新增销售单保存成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新增销售单保存失败');
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
        width : 400,
        title : '新建销售单',
        height : 430,
        closeAction : 'hide',
        closable : false,

        items : [editForm]

    });
    
    function showEdit(data) {
        editForm.getForm().loadRecord(data);
        Ext.getCmp('editType').setValue(2);
        editWin.show();
    }
    
    function showAdd() {
        editForm.getForm().reset();
        editWin.show();
    }
    /*************站点新增/编辑代码(结束)*********************/
});