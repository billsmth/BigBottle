Ext.define('App.view.ktsb.ktsbEditResearchOutlayWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.ktsbEditResearchOutlayWin',

    //height: 300,
    id: 'ktsbEditResearchOutlayWin',
    width: 500,
    resizable: false,
    modal : true,
    layout: {
        type: 'fit'
    },
    closable: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    layout: 'anchor',
	                defaults: {
	                    anchor: '100%'
	                },
                    items: [
                    	{
		                    xtype: 'textfield',
		                    name:'id',
	                		hidden: true
		                },
		                {
		                    xtype: 'textfield',
		                    name:'issueId',
		                    id:'editResearchOutlay_issueId',
	                		hidden: true
		                },
		                {
                        	name:'sortNo',
                            xtype: 'numberfield',
                            fieldLabel: '序号',
                            value:'1',
                            minValue:'1',
                            allowBlank: false
                        },
                    	{
                        	id : 'ktsb_researchOutla_combobox',
                            xtype: 'combobox',
                            fieldLabel: '单位名称',
                            store:'cddw.cddwJsonStore',
                            name:'orgId',
			                valueField: 'idorg',
                            displayField:'companyName',
			                triggerAction: 'all',
	                        allowBlank: true
                        },
                        {
                        	name:'task',
                            xtype: 'textfield',
                            fieldLabel: '承担任务'
                        },
                        {
                        	name:'outlay',
                            xtype: 'numberfield',
                            fieldLabel: '分配经费'
                        },
                        {
                        	name:'checkTarget',
                            xtype: 'textareafield',
                            fieldLabel: '考核指标'
                        }
                    ]
                }
            ],
	        buttons:[{
	            text: '保存',
	            iconCls : 'icon-save',
	            action:'ktsb_researchOutla_exec_act'
	        }, {
	            text: '关闭',
	            iconCls : 'icon-cancel',
	            action:'ktsb_researchOutla_cancel_act'
	        }]
        });

        me.callParent(arguments);
    }

});