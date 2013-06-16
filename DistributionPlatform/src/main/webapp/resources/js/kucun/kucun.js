Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    /*************站点列表代码(开始)**************************/
    /*
     * Kucun Model 全局
     */
    Ext.regModel('kucunModel',{
        extend: 'Ext.data.Model',
        fields: ['kucun_id','danhao_id','jinhuoriqi','kuanhao_id','yanse','chima','shuliang','jinjia','chengbenjia','shoujia','beizhu']
    });

    /*
     * Kucun Grid Store
     */
    var kucunStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'kucunModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            reader: {
                type: 'json'
            }
        }
    });

    /*
     * Kucun Grid Object
     */
    var grid = Ext.create('Ext.grid.Panel', {
        id:'kucunGrid',
        store: kucunStore,
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'库存编号',dataIndex:'kucun_id', width:140
        }, {
        	header:'单号',dataIndex:'danhao_id', width:80
        }, {
        	header:'进货日期',dataIndex:'jinhuoriqi', width:80
        }, {
        	header:'款号',dataIndex:'kuanhao_id', width:80
        }, {
        	header:'颜色',dataIndex:'yanse', width:80
        }, {
        	header:'尺码',dataIndex:'chima', width:80
        }, {
        	header:'数量（件）',dataIndex:'shuliang', width:80
        }, {
        	header:'进价',dataIndex:'jinjia', width:80
        }, {
        	header:'成本价',dataIndex:'chengbenjia', width:80
        }, {
        	header:'售价',dataIndex:'shoujia', width:80
        }, {
        	header:'备注',dataIndex:'beizhu', flex:1
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:kucunStore}),
        tbar:[{
            id:'addNew',
            text: '新增库存',
            iconCls:'icon-add',
            handler:function(){
                showAdd();
            }
        }, '-',{
            id:'addNewXS',
            text: '创建销售单',
            iconCls:'icon-add',
            handler:function(){
            	showAddXiaoshou();
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
                            url : '../kucun/delete.action',
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
    
    /*************库存新增/编辑代码(开始)*********************/
    
    var kucunItems=[{
        xtype:'textfield',
        id:'editType',
        name: 'editType',
        value:1,
        hidden:true
    }, {
        xtype:'textfield',
        fieldLabel:'库存编号',
        id:'kucun_id',
        name:'kucun_id',
        allowBlank: false
    }, {
        xtype:'textfield',
        fieldLabel:'单号',
        id:'danhao_id',
        name:'danhao_id',
        allowBlank: false
    }, {
        xtype:'textfield',
        fieldLabel:'进货日期',
        id:'jinhuoriqi',
        name:'jinhuoriqi',
        allowBlank: true
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
        allowBlank: false
    }, {
        xtype:'textfield',
        fieldLabel:'数量',
        id:'shuliang',
        name:'shuliang',
        allowBlank: false
    }, {
        xtype:'textfield',
        fieldLabel:'进价',
        id:'jinjia',
        name:'jinjia',
        allowBlank: true
    }, {
        xtype:'textfield',
        fieldLabel:'成本价',
        id:'chengbenjia',
        name:'chengbenjia',
        allowBlank: true
    }, {
        xtype:'textfield',
        fieldLabel:'建议售价',
        id:'shoujia',
        name:'shoujia',
        allowBlank: true
    }, {
        xtype:'textareafield',
        fieldLabel:'备注:',
        id:'beizhu',
        name:'beizhu',
        allowBlank:true
    }];
    var xiaoshouItems=[{
        xtype:'textfield',
        id:'editType1',
        name: 'editType1',
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
        id:'xiaoshoukuanhao_id',
        name:'kuanhao_id',
        allowBlank: false
    }, {
        xtype:'textfield',
        fieldLabel:'颜色',
        id:'xiaoshouyanse',
        name:'yanse',
        allowBlank: false
    }, {
        xtype:'textfield',
        fieldLabel:'尺码',
        id:'xiaoshouchima',
        name:'chima',
        allowBlank: true
    }, {
        xtype:'textfield',
        fieldLabel:'数量',
        id:'xiaoshoushuliang',
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
        id:'xiaoshoubeizhu',
        name:'beizhu',
        allowBlank:true
    }];
    
    var kucunUrl='../kucun/savekucun.action';
    var xiaoshouUrl='../xiaoshou/savexiaoshou.action';
    var editForm = new Ext.form.FormPanel({
        
        id:'editForm',
        name:'editForm',
        labelAlign : 'right',
        labelWidth : 50,

        url:kucunUrl,

        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

        items:kucunItems,
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = editForm.getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('提示','存保存成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','保存失败');
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
   
    
    var editWin;
    
    function showEdit(data) {
        editForm.getForm().loadRecord(data);
        Ext.getCmp('editType').setValue(2);
        editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '新建库存商品',
            height : 440,
            closeAction : 'hide',
            closable : false,

            items : [editForm]

        });
        editWin.show();
    }
    
    function showAdd() {
    	editForm.url=kucunUrl;
    	editForm.items=kucunItems;
        editForm.getForm().reset();
        editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '新建库存商品',
            height : 440,
            closeAction : 'hide',
            closable : false,

            items : [editForm]

        });
        editWin.show();
    }
    function showAddXiaoshou() {
    	editForm.url=xiaoshouUrl;
    	editForm.items=xiaoshouItems;
    	editForm.getForm().reset();
    	editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '新建库存商品',
            height : 440,
            closeAction : 'hide',
            closable : false,

            items : [editForm]

        });
    	editWin.show();
    }
    
    /*************站点新增/编辑代码(结束)*********************/
});