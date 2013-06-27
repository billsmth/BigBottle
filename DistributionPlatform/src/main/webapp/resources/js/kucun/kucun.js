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
        fields: ['kucun_id','kuanhao_id','yanse','chima','shuliang','jinjia','chengbenjia','shoujia','beizhu']
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
    
    var userMenu;
    if(group=="1"||group=="2"){
    	userMenu=[{
            id:'addNew',
            text: '创建销售单',
            iconCls:'icon-add',
            handler:function(){
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请先选择库存记录，再点击【创建销售单】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条库存记录，本系统咱不支持多条创建');
                	return;
            	}
            	var obj = grid.getSelectionModel().selected.items[0];
            	if(obj.data.shuliang==0){
                	Ext.Msg.alert('提示','此商品已经售完，不能继续销售。');
                	return;
                }
            	showAddXiaoshou(obj);
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
            iconCls:'icon-add',
            handler:function(){
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请先选择库存记录，再点击【创建销售单】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条库存记录，本系统咱不支持多条创建');
                	return;
            	}
            	var obj = grid.getSelectionModel().selected.items[0];
            	if(obj.data.shuliang==0){
                	Ext.Msg.alert('提示','此商品已经售完，不能继续销售。');
                	return;
                }
            	showAddXiaoshou(obj);
            }
        }];
    }

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
        	header:'档口款号',dataIndex:'kuanhao_id', width:80
        }, {
        	header:'颜色',dataIndex:'yanse', width:80
        }, {
        	header:'尺码',dataIndex:'chima', width:40
        }, {
        	header:'数量(件)',
        	dataIndex:'shuliang', 
        	width:80,
        	renderer: function (value, meta) {
        		if(value==0){
        			meta.tdCls ='red';
        		}else if(value<5){
        			meta.tdCls ='yellow';
        		}else if(value<10){
        			meta.tdCls ='green';
        		}else{
        			meta.tdCls ='blue';
        		}
                return value;
            }
        }, {
        	header:'进价(元)',dataIndex:'jinjia', width:80
        }, {
        	header:'成本价(元)',dataIndex:'chengbenjia', width:80
        }, {
        	header:'建议售价(元)',dataIndex:'shoujia', width:80
        }, {
        	header:'备注',dataIndex:'beizhu', flex:1
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:kucunStore}),
        tbar:userMenu
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
        bodyStyle:"padding:10px 7px 0px 7px",

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
            id:'kucun_id',
            name:'kucun_id',
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
            allowBlank: false,
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
            textColor :'#ffc',
            backgroundColor:'#ffc'
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
    
var editkucunForm = new Ext.form.FormPanel({
        
        id:'editkucunForm',
        name:'editkucunForm',
        labelAlign : 'right',
        labelWidth : 50,
        bodyStyle:"padding:10px 7px 0px 7px",

        url:'../kucun/savekucun.action',

        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

        items:[{
            xtype:'textfield',
            id:'kucuneditType',
            name: 'editType',
            value:1,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'库存编号',
            id:'kucunkucun_id',
            name:'kucun_id',
            allowBlank:true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'款号',
            id:'kucunkuanhao_id',
            name:'kuanhao_id',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'颜色',
            id:'kucunyanse',
            name:'yanse',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'尺码',
            id:'kucunchima',
            name:'chima',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'库存数量(件)',
            id:'kucunshuliang',
            name:'shuliang',
            allowBlank: false
        }, {
            xtype:'textfield',
            fieldLabel:'进价(元)',
            id:'jinjia',
            name:'jinjia',
            allowBlank: false,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'成本(元)',
            id:'chengbenjia',
            name:'chengbenjia',
            allowBlank: false,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'建议售价(元)',
            id:'kucunshoujia',
            name:'shoujia',
            allowBlank: false
        }, {
            xtype:'textareafield',
            fieldLabel:'备注:',
            id:'kucunbeizhu',
            name:'beizhu',
            allowBlank:true
        }],
        buttons:[{
            text: '保存',
            iconCls : 'icon-submit',
            handler: function() {
                var form = editkucunForm.getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('提示','编辑库存成功');
                            editkucunWin.close();
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
                editkucunWin.close();
            }
        }]
    });
   
	if(group=="1"||group=="2"){
		Ext.getCmp('jinjia').hidden=false;
		Ext.getCmp('chengbenjia').hidden=false;
	}
	
	if(group==null||group=="3"){
    	grid.columns[6].hideable=false;
    	grid.columns[6].hidden=true;
    	grid.columns[7].hideable=false;
    	grid.columns[7].hidden=true;
    }
	
    var editWin = new Ext.Window({
        layout : 'fit',
        width : 400,
        title : '新建销售单',
        height : 440,
        closeAction : 'hide',
        closable : false,
        items : [editForm]

    });
    
    var editkucunWin = new Ext.Window({
        layout : 'fit',
        width : 400,
        title : '编辑库存',
        height : 440,
        closeAction : 'hide',
        closable : false,
        items : [editkucunForm]

    });
    
    function showEdit(data) {
    	editkucunForm.getForm().reset();
        editkucunForm.getForm().loadRecord(data);
        Ext.getCmp('kucuneditType').setValue(2);
        editkucunWin.show();
    }
    
    function showAddXiaoshou(obj) {
    	editForm.getForm().reset();
    	obj.data.beizhu="";
    	obj.data.shuliang=1;
    	editForm.getForm().loadRecord(obj);
    	Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
        editWin.show();
    }
    
    /*************站点新增/编辑代码(结束)*********************/
});