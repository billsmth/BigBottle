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
        fields: ['jinhuo_id','danhao_id','jinhuoriqi','kuanhao_id','yanse','chima','shuliang','jinjia','chengbenjia','shoujia','zhuangtai','delflg', 'beizhu']
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
        	header:'进价（元）',dataIndex:'jinjia', width:80//,hidden: true,hideable: false
        }, {
        	header:'成本价（元）',dataIndex:'chengbenjia', width:80//,hidden: true,hideable: false
        }, {
        	header:'售价（元）',dataIndex:'shoujia', width:80
        }, {
        	header:'进货单状态',dataIndex:'zhuangtai', width:80, renderer:showTypeChange
        }, {
        	header:'是否删除',dataIndex:'delflg', width:60, renderer:showDelStatus
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
            id:'addcopy',
            text:'复制进货单',
            iconCls:'icon-copy',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要复制的进货单，再点击【复制进货单】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条要复制的进货单，本系统咱不支持多条复制');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                showCopy(obj);
            }
        },'-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要编辑的进货单，再点击【编辑】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条要编辑的进货单，本系统咱不支持多条编辑');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                
                if(obj.data.zhuangtai=='1'){
                	Ext.Msg.alert('提示','此进货单已经入库，不能再进行编辑。');
                	return;
                }
                
                showEdit(obj);
            }
        }, '-', {
            id:'tokucun',
            text:'进货入库',
            iconCls:'icon-checkin',
            handler:function() {
                var obj = grid.getSelectionModel().selected.items;
                if(obj.length==0){
                	Ext.Msg.alert('提示','请先选择要入库的进货单，再点击【进货入库】按钮');
                	return;
                }else{
                    Ext.Msg.confirm("请确认", "确认要将进货单信息合并到库存中吗?", function(id){
                		if (id == "yes") {
                			if(obj.length==1 && obj[0].data.zhuangtai=='1'){
                            	Ext.Msg.alert('非法操作','此进货单已经导入，不能重复导入。');
                            	return;
                            }
                			for(var a=0;a<obj.length;a++){
                        		if(obj[a].data.zhuangtai=='1'){
                                	Ext.Msg.alert('非法操作','您选择了已入库的进货单，请剔除。');
                                	return;
                                }
                        	}
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
            }
        }, '-', {
            id:'del',
            text:'删除',
            iconCls:'icon-del',
            handler:function(){
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要删除的进货单(支持多选)，再点击【删除】按钮');
                	return;
            	}
            	Ext.Msg.confirm("请确认", "确认要删除?", function(id){
            		if (id == "yes") {
            			var models = grid.getSelectionModel().selected.items;
            			for(var a=0;a<models.length;a++){
                    		if(models[a].data.zhuangtai=='1'){
                            	Ext.Msg.alert('非法操作','已入库的入库单不能被删除,您选择了已入库的入库单，请剔除。');
                            	return;
                            }
                    	}
            			
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
                            url : '../jinhuo/delete.action',
                            params : {
                                jinhuoids : ids
                            },

                            success : function(response, option) {
                                Ext.Msg.alert('提示','进货单删除成功');
                                grid.store.load();
                            },
                            failure : function() {
                                Ext.Msg.alert('提示','进货单删除失败');
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
    
    function showDelStatus(val) {
        if(val == '0') {
            return '未删除';
        } else if(val == '1'){
            return '已删除';
        }
    }
    /*************站点列表代码(结束)**************************/
    
    /*************库存新增/编辑代码(开始)*********************/
    var editForm = new Ext.form.FormPanel({
        id:'editForm',
        name:'editForm',
        labelAlign : 'right',
        labelWidth : 50,
        bodyStyle:"padding:10px 7px 0px 7px",
        autoScroll:true,
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
            fieldLabel:'进货单号',
            id:'jinhuo_id',
            name:'jinhuo_id',
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'档口单号',
            id:'danhao_id',
            name:'danhao_id',
            allowBlank: false
        }, {
            xtype:'datefield',
            fieldLabel:'进货日期',
            id:'jinhuoriqi',
            format:'Y-m-d',
            name:'jinhuoriqi',
            maxValue: new Date(),
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
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'成本价',
            id:'chengbenjia',
            name:'chengbenjia',
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'建议售价',
            id:'shoujia',
            name:'shoujia',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'进货单状态',
            id:'zhuangtai',
            name:'zhuangtai',
            allowBlank: true,
            hidden:true
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
                            Ext.Msg.alert('提示','新建或修改进货单保存成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新建或修改进货单保存失败');
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
    if(group=="1"||group=="2"){
    	Ext.getCmp('jinjia').hidden=false;
    	Ext.getCmp('chengbenjia').hidden=false;
    }
    
    if(group==null||group=="3"){
    	grid.columns[8].hideable=false;
    	grid.columns[8].hidden=true;
    	grid.columns[9].hideable=false;
    	grid.columns[9].hidden=true;
    }
    
    var editWin;
    
    function showEdit(data) {
    	if(data.data.zhuangtai=='1'){
        	Ext.Msg.alert('非法操作','已入库的进货单不能被编辑,请选择未入库的进货单。');
        	return;
    	}
        editForm.getForm().loadRecord(data);
        Ext.getCmp('editType').setValue(2);
        editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '修改进货单',
            height : 440,
            closeAction : 'hide',
            resizable:false,
            modal:true,
            closable : false,
            items : [editForm]

        });
        editWin.show();
    }
    
    function showCopy(data) {
        editForm.getForm().loadRecord(data);
        Ext.getCmp('editType').setValue(1);
        editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '复制进货单',
            height : 440,
            closeAction : 'hide',
            resizable:false,
            modal:true,
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
            resizable:false,
            modal:true,
            closable : false,
            items : [editForm]
        });
        editWin.show();
    }
    /*************站点新增/编辑代码(结束)*********************/
});