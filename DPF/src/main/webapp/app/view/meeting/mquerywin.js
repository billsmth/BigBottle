Ext.define('App.view.meeting.mquerywin', {
    extend: 'Ext.window.Window',

    alias : 'widget.mquerywin',
    id:'mquerywin',
    
    title: '会议查询',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                width:290,
                bodyPadding: 5,
                items: [{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '编号',
                    name:'idmeeting',
                    labelAlign: 'right',
                    labelWidth: 60
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '主题',
                    name:'title',
                    labelAlign: 'right',
                    labelWidth: 60
                }
                ,
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '地点',
                    name:'address',
                    labelAlign: 'right',
                    labelWidth: 60
                },{
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '联系人',
	                name:'contact',
	                labelAlign: 'right',
	                labelWidth: 60
	            }, {
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '联系电话',
	                name:'contactTel',
	                labelAlign: 'right',
	                labelWidth: 60
	            }
	            , {
	                xtype: 'datefield',
                    anchor: '100%',
	                fieldLabel: '开始时间',
	                name:'beginTimeStr',
	                labelAlign: 'right',
	                labelWidth: 60,
            		format:'Y-m-d'
	            }
	            , {
	                xtype: 'datefield',
                    anchor: '100%',
	                fieldLabel: '结束时间',
	                name:'endTimeStr',
	                labelAlign: 'right',
	                labelWidth: 60,
            		format:'Y-m-d'
	            }
//	            , {
//	                xtype: 'combobox',
//                    anchor: '100%',
//	                fieldLabel: '审批状态',
//	                name:'status',
//	                labelAlign: 'right',
//	                labelWidth: 60,
//	                store:'com.ApproveStatusStore',
//	                queryMode: 'local',
//	                displayField: 'value',
//	                valueField: 'value'
//                }
            ]
            }],
            buttons:[{
                text: '查询',
                iconCls : 'icon-search',
                action:'meeting_search_exec_act'
            }, {
                text: '关闭',
                iconCls : 'icon-cancel',
                action:'meeting_search_cancel_act'
            }]
        });

        me.callParent(arguments);
    }

});