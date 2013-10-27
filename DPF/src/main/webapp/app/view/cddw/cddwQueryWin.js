Ext.define('App.view.cddw.cddwQueryWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.cddwQueryWin',
    id:'cddwQueryWin',
    
    layout: {
        type: 'fit'
    },
    title: '承担单位查询',
    closable:false,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [{
                    xtype: 'form',
	                region: 'south',
	                width:500,
	                bodyPadding: 15,
	                fieldDefaults: {
		                labelAlign: 'right',
		                labelWidth: 90,
		                msgTarget: 'qtip'
	            	},
                    items: [
                    	{
                            xtype: 'textfield',
                            name:'companyName',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '单位名称'
                        }, {
                            xtype: 'textfield',
                            name:'orgNo',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '组织机构代码'
                        },{
                            xtype: 'combobox',
                            name:'companyProp',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '单位性质',
	                        store:'com.CompanyPropStore',
			                queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all',
	                        allowBlank: true
                            
                        }, {
                        	xtype: 'textfield',
                            name:'legalMsg',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '法人信息'
                        }
                    ],
                    buttons:[{
                        text: '查询',
                        iconCls : 'icon-submit',
                        action:'cddw_query_query_act'
                    },{
                        text: '取消',
                        iconCls : 'icon-cancel',
                        action:'cddw_query_cancel_act'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }
});