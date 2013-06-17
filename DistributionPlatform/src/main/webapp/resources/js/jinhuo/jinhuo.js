Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    /*************站点列表代码(开始)**************************/
    /*
     * jinhuo Model 全局
     */
    Ext.regModel('jinhuoModel',{
        extend: 'Ext.data.Model',
        fields: ['jinhuo_id','danhao_id','jinhuoriqi','kuanhao_id','yanse','chima','shuliang','jinjia','chengbenjia','shoujia','zhuangtai','beizhu']
    });

    /*
     * jinhuo Grid Store
     */
    var jinhuoStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'jinhuoModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            reader: {
                type: 'json'
            }
        }
    });

    /*
     * jinhuo Grid Object
     */
    var grid = Ext.create('Ext.grid.Panel', {
        id:'jinhuoGrid',
        store: jinhuoStore,
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'进货单编号',dataIndex:'jinhuo_id', width:140
        }, {
        	header:'档口单号',dataIndex:'danhao_id', width:80
        }, {
        	header:'进货日期',dataIndex:'jinhuoriqi', width:80
        }, {
        	header:'款号',dataIndex:'kuanhao_id', width:80
        }, {
        	header:'颜色',dataIndex:'yanse', width:80
        }, {
        	header:'尺码',dataIndex:'chima', width:40
        }, {
        	header:'数量（件）',dataIndex:'shuliang', width:80
        }, {
        	header:'进价（元）',dataIndex:'jinjia', width:80
        }, {
        	header:'成本价（元）',dataIndex:'chengbenjia', width:80
        }, {
        	header:'售价（元）',dataIndex:'shoujia', width:80
        }, {
        	header:'进货单状态',dataIndex:'zhuangtai', width:80, renderer:showTypeChange
        }, {
        	header:'备注',dataIndex:'beizhu', flex:1
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有进货信息记录', store:jinhuoStore}),
        tbar:[{
            id:'addNew',
            text: '新建进货单',
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
            id:'tokucun',
            text:'进货入库',
            iconCls:'icon-edit',
            handler:function() {
                var obj = grid.getSelectionModel().selected.items[0];
                Ext.Msg.confirm("请确认", "确认要将进货单信息合并到库存中吗?", function(id){
            		if (id == "yes") {
            			var models = grid.getSelectionModel().selected.items;
                        var ids = '';
                        Ext.iterate(models, function(key, value) {
                            var tmp = key.data.jinhuo_id;
                            if(ids.length !=0) {
                                ids = ids + ',' + tmp;
                            } else {
                                ids = ids + tmp;
                            }
                        }, this);
                        Ext.Ajax.request({
                            url : '../jinhuo/ruku.action',
                            params : {
                            	jinhuoids : ids
                            },

                            success : function(response, option) {
                                Ext.Msg.alert('提示','进货信息导入库存成功');
                                grid.store.load();
                            },
                            failure : function() {
                                Ext.Msg.alert('提示','进货信息导入库存失败');
                            }
                        });
            		}
            	});
            }
        }, '-', {
            id:'del',
            text:'删除',
            iconCls:'icon-del',
            handler:function(){
            	
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
                            url : '../jinhuo/delete.action',
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
        if(val == '0') {
            return '未入库';
        } else if(val == '1'){
            return '已入库';
        }
    }
    /*************站点列表代码(结束)**************************/
    
    /*************库存新增/编辑代码(开始)*********************/
    var editForm = new Ext.form.FormPanel({
        id:'editForm',
        name:'editForm',
        labelAlign : 'right',
        labelWidth : 50,

        url:'../jinhuo/savejinhuo.action',

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
            fieldLabel:'档口单号',
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
        }],
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = editForm.getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('提示','新建进货单保存成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新建进货单保存失败');
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
            title : '修改进货单',
            height : 440,
            closeAction : 'hide',
            closable : false,

            items : [editForm]

        });
        editWin.show();
    }
    
    function showAdd() {
        editForm.getForm().reset();
        editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '新建进货单',
            height : 440,
            closeAction : 'hide',
            closable : false,

            items : [editForm]

        });
        editWin.show();
    }
    /*************站点新增/编辑代码(结束)*********************/
});