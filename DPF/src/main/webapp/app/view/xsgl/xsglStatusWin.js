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

        var combo = new Ext.form.ComboBox({
        	fieldLabel: '当前状态',
        	name:'zhuangtai3',
            id:'zhuangtai3',
        	queryMode: 'local',
        	store: 'com.XiaoshouStatusStore',
        	displayField: 'value',
        	valueField: 'key',
        	allowBlank: true
        });
        
        combo.on('change', function (combo, record, index) {
        	//alert(record);
        	Ext.getCmp('express_code').hide();
            Ext.getCmp('express_name').hide();
        	if(record=="3"){
        		Ext.getCmp('express_code').show();
                Ext.getCmp('express_name').show();
        	}
        });
        
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
 		            },
 		            combo
 		            ,{
	                    fieldLabel: '快递名称<span style=\'color:red\'>*</span>',
	                    name: 'express_name',
	                    emptyText : "请选择快递..", 
	                    id:'express_name',
	                    xtype: 'combobox',
	                    store:'com.ExpressNameStore',
		                queryMode: 'local',
		                displayField: 'value',
		                valueField: 'value',
		                triggerAction: 'all',
                        allowBlank: true,
                        hidden:true
	                },{
		                xtype:'textfield',
		                fieldLabel:'快递单号<span style=\'color:red\'>*</span>',
		                id:'express_code',
		                name:'express_code',
		                allowBlank: true,
                        hidden:true
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