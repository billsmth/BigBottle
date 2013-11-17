Ext.define('App.view.xsgl.xsglStatusWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.xsglStatusWin',
    id:'xsglStatusWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '调整订单状态',
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
		                name:'xiaoshou_id3',
		                id:'xiaoshou_id3'
		            },{
		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '销售编号',
 		                name:'xiaoshou_id3_lab',
 		                id:'xiaoshou_id3_lab',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
 		                xtype: 'displayfield',
 		                flex: 1,
 		                fieldLabel: '产品名称',
 		                name:'product_name3',
 		               	id:'product_name3',
 		                labelAlign: 'right',
 		                labelWidth: 90
 		            },{
	                    fieldLabel: '当前状态',
	                    name: 'zhuangtai3',
	                    id:'zhuangtai3',
	                    xtype: 'combobox',
	                    store:'com.XiaoshouStatusStore',
		                queryMode: 'local',
		                displayField: 'value',
		                valueField: 'key',
		                triggerAction: 'all',
                        allowBlank: true
	                }]
	            }],
	            buttons:[{
	                text: '提交',
	                iconCls : 'icon-submit',
	                action:'xsgl_change_status_act'
	            }, {
	                text: '关闭',
	                iconCls : 'icon-cancel',
	                action:'xsgl_change_status_cancel_act'
	            }]
        	});
        me.callParent(arguments);
	}
});