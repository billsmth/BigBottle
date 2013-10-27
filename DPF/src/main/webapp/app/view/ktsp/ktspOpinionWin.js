Ext.define('App.view.ktsp.ktspOpinionWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.ktspOpinionWin',
    id:'ktspOpinionWin',
    
    title: '编辑意见',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                    {
	                xtype: 'form',
	                width:550,
	                height:350,
	                layout: {
	                    type: 'fit'
	                },
	                items: [{
		                xtype: 'textfield',
		                id:'id',
		                name:'id',
		                hidden:true
		            },{
		                xtype: 'textfield',
		                id:'issueSpecialistId',
		                name:'issueSpecialistId',
		                hidden:true
		            },{
			            xtype: 'htmleditor',
			            id:'opinionEditor',
			            height: 150,
			            fieldLabel: ''
			        }
	            ]
            }],
            buttons:[{
            	xtype: 'tbseparator'
        	},{
                xtype: 'button',
                iconCls: 'icon-temp-save',
                action:'ktsp_save_opinion_act',
                text: '保存草稿'
            },{
            	xtype: 'tbseparator'
        	},
            {
                xtype: 'button',
                iconCls: 'icon-submit',
                action:'ktsp_submit_opinion_act',
                text: '发布意见'
            },{
            	xtype: 'tbseparator'
        	},
            {
                xtype: 'button',
                iconCls: 'icon-cancel',
                action:'ktsp_cancel_edit_act',
                text: '取消'
            }]
        });

        me.callParent(arguments);
    }

});