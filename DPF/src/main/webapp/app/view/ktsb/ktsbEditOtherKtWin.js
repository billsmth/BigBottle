Ext.define('App.view.ktsb.ktsbEditOtherKtWin', {
    extend: 'Ext.window.Window',
    alias : 'widget.qtktEditWin',
    id:'qtktEditWin',
    layout: 'fit',
    width: 400,
    closable:false,
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
                    items: [{
		                        xtype: 'hiddenfield',
		                        name: 'id'
		                    },{
		                        xtype: 'hiddenfield',
		                        name: 'issueId'
		                    },{
                                xtype: 'numberfield',
                                name: 'sortNo',
                                fieldLabel: '序号',
                                value:'1',
	                            minValue:'1',
	                            allowBlank: false
                            },{
                                xtype: 'textfield',
                                name: 'leaderName',
                                fieldLabel: '姓名'
                            },
                            {
                                xtype: 'textfield',
                                name: 'issueName',
                                fieldLabel: '课题名称'
                            },
                            {
                                xtype: 'numberfield',
                                name: 'outlay',
                                fieldLabel: '经费'
                            },
                            {
                                xtype: 'datefield',
                                id: 'qtkt_startYearMonth',
                                name: 'startDateStr',
                                fieldLabel: '开始时间',
                                vtype:'daterange1',
                                endDateField:'qtkt_endYearMonth',
                                format: 'Y-m-d'
                            },
                            {
                                xtype: 'datefield',
                                id: 'qtkt_endYearMonth',
                                name: 'endDateStr',
                                fieldLabel: '结束时间',
                                vtype:'daterange1',
                                startDateField:'qtkt_startYearMonth',
                                format: 'Y-m-d'
                            },
                            {
                                xtype: 'textfield',
                                name: 'belongPlan',
                                fieldLabel: '所属计划'
                            }
                        ]
                }
            ],
	        buttons:[{
	            text: '保存',
	            iconCls : 'icon-save',
	            action:'ktsb_qtkt_edit_exec_act'
	        }, {
	            text: '关闭',
	            iconCls : 'icon-cancel',
	            action:'ktsb_qtkt_edit_cancel_act'
	        }]
        });

        me.callParent(arguments);
    }

});