Ext.define('App.view.product.productSaleTypeWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.productSaleTypeWin',
    id:'productSaleTypeWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '调整商品销售分类',
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 15,
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 60,
	                msgTarget: 'qtip'
	            },
                items: [{
	                	xtype: 'hiddenfield',
		                name:'product_id1',
		                id:'product_id1'
		            },{
		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '产品编号',
 		                name:'product_id_lab',
 		                id:'product_id_lab',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
 		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '产品名称',
 		                name:'product_name1',
 		               	id:'product_name1',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
	                    fieldLabel: '销售分类',
	                    name: 'saleType',
	                    id:'saleType',
	                    xtype: 'combobox',
	                    store:'com.SaleStore',
		                queryMode: 'local',
		                displayField: 'value',
		                valueField: 'key',
		                triggerAction: 'all',
                        allowBlank: true
	                }
		                ]
		            }],
		            buttons:[{
		                text: '提交',
		                iconCls : 'icon-submit',
		                action:'product_change_sale_type_act'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'product_change_sale_type_cancel_act'
		            }]
		        });
        me.callParent(arguments);
    }

});