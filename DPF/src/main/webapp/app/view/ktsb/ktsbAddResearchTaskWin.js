Ext.define('App.view.ktsb.ktsbAddResearchTaskWin', {
    extend: 'Ext.window.Window',
    alias : 'widget.researchTaskAddWin',
    id:'researchTaskAddWin',
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
		                        xtype: 'numberfield',
	                          	labelAlign: 'right',
	                            name:'sortNo',
	                            fieldLabel: '序号',
	                            value:'1',
	                            minValue:'1',
	                            allowBlank: false
		                    },{
                                xtype: 'textfield',
                                name: 'taskName',
                                labelAlign: 'right',
                                fieldLabel: '任务名称'
                            },
                            {
                                xtype: 'numberfield',
                                name: 'outlay',
                                labelAlign: 'right',
                                fieldLabel: '经费'
                            },
                            {
                            	xtype: 'combobox',
	     	                    anchor: '100%',
	     		                fieldLabel: '承担单位',
	     		                name:'assumeOrgId',
	     		                labelAlign: 'right',
	     		                displayField:'companyName',
	     		                valueField:'idorg',
	                            store:'cddw.cddwJsonStore',
	                            id:'researchTaskAddWin_assumeOrgId'
                            },
                            {
                            	xtype: 'combobox',
	     	                    anchor: '100%',
	     		                fieldLabel: '参与单位',
	     		                name:'joinOrgId',
	     		                labelAlign: 'right',
	     		                displayField:'companyName',
	     		                valueField:'idorg',
	                            store:'cddw.cddwJsonStore',
	                            id:'researchTaskAddWin_joinOrgId'
                            },
                            {
                                xtype: 'textareafield',
                                name: 'researchContent',
                                labelAlign: 'right',
                                fieldLabel: '主要研究内容'
                            },
                            {
                                xtype: 'textareafield',
                                name: 'checkTarget',
                                labelAlign: 'right',
                                fieldLabel: '考核指标'
                            }
                        ]
                }
            ],
	        buttons:[{
	            text: '保存',
	            iconCls : 'icon-save',
	            action:'ktsb_research_task_add_exec_act'
	        }, {
	            text: '关闭',
	            iconCls : 'icon-cancel',
	            action:'ktsb_research_task_add_cancel_act'
	        }]
        });

        me.callParent(arguments);
    }

});