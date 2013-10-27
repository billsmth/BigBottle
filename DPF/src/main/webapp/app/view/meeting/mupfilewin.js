Ext.define('App.view.meeting.mupfilewin', {
    extend: 'Ext.window.Window',

    alias : 'widget.mupfilewin',
    id:'mupfilewin',
    
    layout: {
        type: 'fit'
    },
    
    title: '上传资料',
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 5,
                id:'mupfileform',
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'qtip'
	            },
	            items: [
	                    {
	                        xtype: 'filefield',
	                        anchor: '100%',
	                        name: 'filetest',
	                        fieldLabel: '上传资料',
	                        labelWidth: 70,
	                        msgTarget: 'side',
	                        allowBlank: false,
	                        buttonText: '选择...'
	                    }
	                ]
		            
		        }],
		        buttons:[{
		            text: '上传',
		            iconCls : 'icon-search',
		            action:'meeting_upfile_exec_act'
		        }, {
		            text: '关闭',
		            iconCls : 'icon-cancel',
		            action:'meeting_upfile_cancel_act'
		        }]
            });
        me.callParent(arguments);
    }

});