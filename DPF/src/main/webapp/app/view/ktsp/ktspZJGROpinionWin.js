Ext.define('App.view.ktsp.ktspZJGROpinionWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.ktspZJGROpinionWin',
    id:'ktspZJGROpinionWin',
    
    title: '编辑专家个人审查意见',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                    xtype: 'form',
                    width:550,
                    border:0,
	                height:350,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            padding: '0 0 0 300',
                            rtl: true,
                            items: [
                                {
					            	xtype: 'tbseparator'
					        	},{
                                    xtype: 'button',
                                    iconCls: 'icon-temp-save',
                                    action:'ktsp_xssc_save_opinion_act',
                                    text: '保存草稿'
                                },{
                                	xtype: 'tbseparator'
                            	},
                                {
                                    xtype: 'button',
                                    iconCls: 'icon-submit',
                                    action:'ktsp_xssc_submit_opinion_act',
                                    text: '发布意见'
                                },{
                                	xtype: 'tbseparator'
                            	},
                                {
                                    xtype: 'button',
                                    iconCls: 'icon-cancel',
                                    action:'ktsp_xssc_cancel_edit_act',
                                    text: '取消'
                                }
                            ]
                        },
                        {
                            xtype: 'radiogroup',
                            dock: 'bottom',
                            width: 400,
                            padding: '0 0 0 10',
                            fieldLabel: '审查结论总意见',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    boxLabel: '修改后签订合同'
                                },
                                {
                                    xtype: 'radiofield',
                                    boxLabel: '同意签订合同'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            flex: 0.8,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: '研究目标',
                                    layout: {
                                    	type: 'absolute'
                                    },
                                    items: [
                                            {
                                                xtype: 'htmleditor',
                                                height: 300,
                                                fieldLabel: ''
                                            }
                                        ]
                                },
                                {
                                    xtype: 'panel',
                                    title: '研究内容与任务分解',
                                    layout: {
                                    	type: 'absolute'
                                    },
                                    items: [
                                            {
                                                xtype: 'htmleditor',
                                                height: 300,
                                                fieldLabel: ''
                                            }
                                        ]
                                },
                                {
                                    xtype: 'panel',
                                    title: '预期成果与考核指标',
                                    layout: {
                                    	type: 'absolute'
                                    },
                                    items: [
                                            {
                                                xtype: 'htmleditor',
                                                height: 300,
                                                fieldLabel: ''
                                            }
                                        ]
                                },
                                {
                                    xtype: 'panel',
                                    title: '合作单位与任务分工',
                                    layout: {
                                    	type: 'absolute'
                                    },
                                    items: [
                                            {
                                                xtype: 'htmleditor',
                                                height: 300,
                                                fieldLabel: ''
                                            }
                                        ]
                                },{
            		                xtype: 'textfield',
            		                id:'id',
            		                name:'id',
            		                hidden:true
            		            },{
            		                xtype: 'textfield',
            		                id:'issueSpecialistId',
            		                name:'issueSpecialistId',
            		                hidden:true
            		            }
                            ]
                        }
                    ]
                }
             ]
        });

        me.callParent(arguments);
    }

});