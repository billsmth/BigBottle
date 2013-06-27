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
        fields: ['xiaoshou_id','kucun_id','kuanhao_id','yanse','chima','shuliang','shoujia','shijishoukuan','maijia_id','maijiaxingming','zhuangtai','delflg','beizhu']
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
            header:'销售单编号',dataIndex:'xiaoshou_id', width:120
        }, {
        	header:'库存编号',dataIndex:'kucun_id', width:120
        }, {
        	header:'款号',dataIndex:'kuanhao_id', width:80
        }, {
        	header:'颜色',dataIndex:'yanse', width:80
        }, {
        	header:'尺码',dataIndex:'chima', width:40
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
        	header:'状态',dataIndex:'zhuangtai', width:50, renderer:showTypeChange
        }, {
        	header:'是否删除',dataIndex:'delflg', width:60, renderer:showDelStatus
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
            id:'addcopy',
            text:'复制销售单',
            iconCls:'icon-copy',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要复制的销售单，再点击【复制销售单】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条要复制的销售单，本系统咱不支持多条复制');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                showCopy(obj);
            }
        }, '-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要编辑的销售单，再点击【编辑】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条要编辑的销售单，本系统咱不支持多条编辑');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                
                if(obj.data.zhuangtai=='1'){
                	Ext.Msg.alert('提示','此销售单已经入库，不能再进行编辑。');
                	return;
                }
                showEdit(obj);
            }
        }, '-', {
            id:'tokucun',
            text:'销售入库',
            iconCls:'icon-checkin',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请选择要入库的销售单(支持多选)，再点击【销售入库】按钮');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items;
                if(obj.length==0){
                	Ext.Msg.alert('提示','请先选择要入库的销售单，再点击【销售入库】按钮');
                	return;
                }else{
                    Ext.Msg.confirm("请确认", "确认要将销售单信息合并到库存中吗?", function(id){
                		if (id == "yes") {
                			if(obj.length==1 && obj[0].data.zhuangtai=='1'){
                            	Ext.Msg.alert('非法操作','此销售单已经导入，不能重复导入。');
                            	return;
                            }
                			for(var a=0;a<obj.length;a++){
                        		if(obj[a].data.zhuangtai=='1'){
                                	Ext.Msg.alert('非法操作','您选择了已入库的销售单，请剔除。');
                                	return;
                                }
                        	}
                			var models = grid.getSelectionModel().selected.items;
                            var ids = '';
                            Ext.iterate(models, function(key, value) {
                                var tmp = key.data.xiaoshou_id;
                                if(ids.length !=0) {
                                    ids = ids + ',' + tmp;
                                } else {
                                    ids = ids + tmp;
                                }
                            }, this);
                            Ext.Ajax.request({
                                url : '../xiaoshou/ruku.action',
                                params : {
                                	xiaoshouids : ids
                                },

                                success : function(response, option) {
                                	var result = Ext.decode(response.responseText);
                                	if(result.msg=="1"){
                                		Ext.Msg.alert('错误','销售数量超过库存数量，本系统暂不支持负库存。');
                                	}else if(result.msg=="0"){
                                		Ext.Msg.alert('提示','销售信息导入库存成功');	
                                	}
                                    grid.store.load();
                                },
                                failure : function() {
                                    Ext.Msg.alert('提示','销售信息导入库存失败');
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
            		Ext.Msg.alert('提示','请选择要删除的销售单(支持多选)，再点击【删除】按钮');
                	return;
            	}
            	
            	Ext.Msg.confirm("请确认", "确认要删除?", function(id){
            		if (id == "yes") {
            			var models = grid.getSelectionModel().selected.items;
            			
            			for(var a=0;a<models.length;a++){
                    		if(models[a].data.zhuangtai=='1'){
                            	Ext.Msg.alert('非法操作','已入库的销售单不能被删除,您选择了已入库的销售单，请剔除。');
                            	return;
                            }
                    	}
            			
                        var ids = '';
                        Ext.iterate(models, function(key, value) {
                            var tmp = key.data.xiaoshou_id;
                            if(ids.length !=0) {
                                ids = ids + ',' + tmp;
                            } else {
                                ids = ids + tmp;
                            }
                        }, this);
                        Ext.Ajax.request({
                            url : '../xiaoshou/delete.action',
                            params : {
                            	xiaoshouids : ids
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
    
    function showTypeChange(val, meta) {
    	if(val == '0') {
    		meta.tdCls = 'red';
            return '未入库';
        } else if(val == '1'){
        	meta.tdCls = 'green';
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
    
    /*************销售单新增/编辑代码(开始)*********************/
    var editForm = new Ext.form.FormPanel({
        
        id:'editForm',
        name:'editForm',
        labelAlign : 'right',
        labelWidth : 50,
        bodyStyle:"padding:10px 7px 0px 7px",
        autoScroll:true,
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
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'库存编号',
            id:'kucun_id',
            name:'kucun_id',
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
            fieldLabel:'建议售价(元)',
            id:'shoujia',
            name:'shoujia',
            allowBlank: true,
            listeners:{
            	'blur':function(){
            		if(Ext.getCmp("shuliang").getValue()!=null&&Ext.getCmp("shoujia").getValue()!=null){
            			Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
            		}
            	}
            }
        }, {
            xtype:'textfield',
            fieldLabel:'总价(元)',
            id:'count',
            name:'count',
            renderer: function (value, meta, record) {
                Ext.getCmp("count-inputEl").addClass("red");
                return value;
            }
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
                            Ext.Msg.alert('成功提示','新增或编辑销售单成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('错误提示','新增或编辑销售单失败');
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
        Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
        Ext.getCmp('editType').setValue(2);
        editWin.title='编辑销售单';
        editWin.show();
    }
    
    function showCopy(data) {
    	editForm.getForm().reset();
        editForm.getForm().loadRecord(data);
        Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
        Ext.getCmp('editType').setValue(1);
        editWin = new Ext.Window({
            layout : 'fit',
            width : 400,
            title : '复制销售单',
            height : 440,
            closeAction : 'hide',
            closable : false,
            items : [editForm]

        });
        editWin.show();
    }
    
    function showAdd() {
        editForm.getForm().reset();
        editWin.title='新建销售单';
        editWin.show();
    }
    /*************站点新增/编辑代码(结束)*********************/
});