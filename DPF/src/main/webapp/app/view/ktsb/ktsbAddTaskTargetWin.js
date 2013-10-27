Ext.define('App.view.ktsb.ktsbAddTaskTargetWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.ktsbAddTaskTargetWin',

    height: 360,
    id: 'ktsbAddTaskTargetWin',
    width: 420,
    resizable: false,
    layout: {
        type: 'fit'
    },
    closable: false,
    title: '添加年度任务指标',
    modal: true,

    initComponent: function() {
        var me = this;
        var uuid = new Ext.data.UuidGenerator().generate();
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    itemId: 'ktsbAddTaskTargetForm',
                    bodyPadding: 10,
                    title: '',
                    items: [
						{
						    xtype: 'hiddenfield',
						    anchor: '100%',
						    name:'id',
						    value:uuid,
						    fieldLabel: ''
						},
						{
						    xtype: 'hiddenfield',
						    anchor: '100%',
						    name:'issueId',
						    fieldLabel: ''
						},
						{
                            xtype: 'numberfield',
                            anchor: '100%',
                            name:'sortNo',
                            fieldLabel: '序号',
                            value:'1',
                            minValue:'1',
                            allowBlank: false
                        },
						{
                            xtype: 'numberfield',
                            anchor: '100%',
                            name:'yearPlan',
                            fieldLabel: '年度',
                            value: new Date().getFullYear(),
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            name:'quraterPlan',
                            fieldLabel: '季度',
                            value:'1',
                            minValue:'1',
                            maxValue:'4',
                            allowBlank: false
                            
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            name:'task',
                            fieldLabel: '任务'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            name:'kpi',
                            fieldLabel: '目标'
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 120,
                            layout: {
                                type: 'absolute'
                            },
                            fieldLabel: '',
                            items: [
                                {
                                	itemId:'ktsb_tasktargetWin_add',
                                    xtype: 'button',
                                    x: 160,
                                    y: 10,
                                    iconCls: 'icon-save',
                                    text: '保存'
                                },
                                {
                                	itemId:'ktsb_tasktargetWin_close',
                                    xtype: 'button',
                                    x: 220,
                                    y: 10,
                                    iconCls: 'icon-cancel',
                                    text: '关闭'
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