Ext.define('App.view.product.productTypeaddwin', {
    extend: 'Ext.window.Window',

    alias : 'widget.productTypeaddwin',
    id:'productTypeaddwin',
    
    layout: {
        type: 'fit'
    },
    
    title: '添加/编辑商品分类',
    closable:false,
    
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
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
		                id:'editProductType',
		                name: 'editType',
		                labelWidth: 90,
		                value:1,
		                hidden:true
		            },{
		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '分类ID',
 		                name:'type_id_lab',
 		               	id:'type_id_lab',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
		                xtype: 'textfield',
 		                name:'type_id',
 		                id:'type_id',
 		                hidden:true
 		            },{
		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '分类名称',
 		                afterLabelTextTpl: required,
 		                name:'type_name',
 		               	id:'type_name',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
 		                xtype: 'textfield',
 		                fieldLabel: '键值',
 		                name:'type_key',
 		                labelAlign: 'right',
 		                hidden:true
 		            },{
	                    fieldLabel: '分类状态',
	                    name: 'type_status',
	                    xtype: 'combobox',
	                    store:'product.ptStatusStore',
		                queryMode: 'local',
		                displayField: 'value',
		                valueField: 'key',
		                value:'0',
		                triggerAction: 'all',
                        allowBlank: false
	                },{
	                    fieldLabel: '上级编号',
	                    name: 'parent_id',
	                    id:'parent_id',
	                    xtype: 'combobox',
	                    store:'product.ptSimpleStore',
		                queryMode: 'local',
		                displayField: 'type_name',
		                valueField: 'type_id',
		                triggerAction: 'all',
		                emptyText:"空白为等级分类",
		                allowBlank : true,
		                editable:false,
                        allowBlank: true
	                },{
 		                xtype: 'textareafield',
 		                anchor: '100%',
 		                flex: 1,
 		                fieldLabel: '备注',
 		                name:'note',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            }]
	            }],
	            buttons:[{
	                text: '提交',
	                iconCls : 'icon-search',
	                action:'product_type_add_exec_act'
	            }, {
	                text: '关闭',
	                iconCls : 'icon-cancel',
	                action:'product_type_add_cancel_act'
	            }]
		    });
        me.callParent(arguments);
    }

});