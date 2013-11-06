Ext.define('App.view.product.productSaleStatusWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.productSaleStatusWin',
    id:'productSaleStatusWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '调整商品状态',
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
		                name:'product_id2',
		                id:'product_id2'
		            },{
		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '产品编号',
 		                name:'product_id2_lab',
 		                id:'product_id2_lab',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
 		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '产品名称',
 		                name:'product_name2',
 		               	id:'product_name2',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
	                    fieldLabel: '当前状态',
	                    name: 'saleStatus',
	                    id:'saleStatus',
	                    xtype: 'combobox',
	                    store:'com.ProductStatusStore',
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
		                action:'product_change_sale_status_act'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'product_change_sale_status_cancel_act'
		            }]
		        });
        me.callParent(arguments);
    }

});