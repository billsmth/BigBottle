Ext.define('App.view.product.productUpfileWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.productUpfileWin',
    id:'productUpfileWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '上传产品图片',
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 5,
                id:'productUpfileForm',
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'qtip'
	            },
	            items: [
	                    {
		                xtype: 'textfield',
 		                flex: 1,
 		                fieldLabel: '产品编号',
 		                name:'target_product_id',
 		                id:'target_product_id',
 		                labelAlign: 'right',
 		                labelWidth: 90,
 		                hidden:true
 		            },{
                        xtype: 'filefield',
                        anchor: '100%',
                        name: 'filetest1',
                        fieldLabel: '上传资料1',
                        labelWidth: 70,
                        msgTarget: 'side',
                        buttonText: '选择...'
                    },{
                        xtype: 'filefield',
                        anchor: '100%',
                        name: 'filetest2',
                        fieldLabel: '上传资料2',
                        labelWidth: 70,
                        msgTarget: 'side',
                        buttonText: '选择...'
                    },{
                        xtype: 'filefield',
                        anchor: '100%',
                        name: 'filetest3',
                        fieldLabel: '上传资料3',
                        labelWidth: 70,
                        msgTarget: 'side',
                        buttonText: '选择...'
                    }
	                ]
		            
		        }],
		        buttons:[{
		            text: '上传图片',
		            iconCls : 'icon-search',
		            action:'product_upfile_exec_act'
		        }, {
		            text: '关闭',
		            iconCls : 'icon-cancel',
		            action:'product_upfile_cancel_act'
		        }]
            });
        me.callParent(arguments);
    }

});