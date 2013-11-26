Ext.define('App.view.product.productaddwin', {
    extend: 'Ext.window.Window',

    alias : 'widget.productaddwin',
    id:'productaddwin',
    
    layout: {
        type: 'fit'
    },
    
    title: '添加/编辑商品',
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 5,
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'qtip'
	            },
                items: [{
	                	xtype: 'textfield',
		                flex: 1,
		                id:'editType',
		                name: 'editType',
		                labelWidth: 90,
		                value:1,
		                hidden:true
		            },{
		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '产品编号',
 		                name:'product_id',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '图片列表',
 		                name:'image_name',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '产品名称',
 		                name:'product_name',
 		                labelAlign: 'right',
 		                emptyText:"输入产品名称",
 		                labelWidth: 90
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '产品发布路径',
 		                name:'path',
 		                labelAlign: 'right',
 		                emptyText:"输入产品发布路径,开发中。。。",
 		                labelWidth: 90
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '模板编号',
 		                name:'template_id',
 		                labelAlign: 'right',
 		                emptyText:"输入模板编号,开发中。。。",
 		                labelWidth: 90
 		            },{
	                    fieldLabel: '产品种类',
	                    name: 'type',
	                    id: 'type',
	                    xtype: 'combobox',
	                    store:'product.ptStore',
		                queryMode: 'local',
		                displayField: 'type_name',
		                valueField: 'type_name',
		                triggerAction: 'all',
		                emptyText:"选择产品分类",
		                editable:false,
                        allowBlank: false
	                },{
	                    fieldLabel: '销售分类',
	                    name: 'new_flg',
	                    xtype: 'combobox',
	                    store:'com.SaleStore',
		                queryMode: 'local',
		                displayField: 'value',
		                valueField: 'key',
		                triggerAction: 'all',
		                emptyText:"选择销售分类,默认为普通商品",
                        allowBlank: true
	                },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '状态',
 		                name:'status',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '售价（元）',
 		                name:'col2',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '运费（元）',
 		                name:'col3',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
	                	xtype:'container',
	                	margin:'10 5 5 0',
                    	layout:{
                    		align:'stretch',
                    		type:'hbox'
	                    	},
	                    	 items:[{
	      		                xtype: 'textfield',
	     		                fieldLabel: '链接地址',
	     		                anchor: '100%',
	     		                name:'col1',
	     		                labelAlign: 'right',
	     		                labelWidth: 90,
	     		                emptyText:"如需要可添加产品链接地址",
	     		                width:450
	     		            }]
	                },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '信息5',
 		                name:'col5',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '信息6',
 		                name:'col6',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '信息7',
 		                name:'col7',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '信息8',
 		                name:'col8',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '创建者编号',
 		                name:'creater_id',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
 		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '创建者姓名',
 		                name:'creater_name',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
	                	xtype:'container',
	                	margin:'10 5 5 0',
                    	layout:{
                    		align:'stretch',
                    		type:'hbox'
	                    	},
	                    	 items:[{
	     		                xtype: 'textareafield',
	     	                    anchor: '100%',
	     		                fieldLabel: '产品描述',
	     		                name:'desp',
			                    maxLength: 300,
	     		                labelAlign: 'right',
	     		                emptyText:"如需要可添加产品描述信息",
	     		                labelWidth: 90,
	     		                width:450
	     		            }]
	                },{
	                	xtype:'container',
	                	margin:'10 5 5 0',
                    	layout:{
                    		align:'stretch',
                    		type:'hbox'
	                    	},
	                    	 items:[{
	     		                xtype: 'textareafield',
	     	                    anchor: '100%',
	     		                fieldLabel: '备注',
	     		                name:'note',
			                    maxLength: 300,
	     		                labelAlign: 'right',
	     		                emptyText:"如需要可添加备注信息",
	     		                labelWidth: 90,
	     		                width:450
	     		            }]
		                },{
	 		                xtype: 'textareafield',
	 		                anchor: '100%',
	 		                fieldLabel: '颜色:尺码',
	 		                name:'col4',
	 		                maxLength: 300,
	 		                labelAlign: 'right',
	 		                labelWidth: 90,
	 		                emptyText:"格式: XX颜色:XX尺码;  例如: 黑色:L;白色:XL;",
     		                width:450
	 		            },{
		                	xtype:'container',
		                	margin:'10 5 5 0',
	                    	layout:{
	                    		align:'stretch',
	                    		type:'hbox'
		                    	},
		                    	 items:[{
		     		                xtype: 'textareafield',
		     	                    anchor: '100%',
		     		                fieldLabel: '库存编号列表',
		     		                name:'kucun_ids',
				                    maxLength: 300,
		     		                labelAlign: 'right',
		     		                emptyText:"添加库存列表,格式: XXXX,XXXX,XXXX,",
		     		                labelWidth: 90,
		     		                width:450
		     		            }]
			                }
		                ]
		            }],
		            buttons:[{
		                text: '提交',
		                iconCls : 'icon-search',
		                action:'product_add_exec_act'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'product_add_cancel_act'
		            }]
		        });
        me.callParent(arguments);
    }

});