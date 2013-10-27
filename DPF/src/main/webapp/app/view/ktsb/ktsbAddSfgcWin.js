Ext.define('App.view.ktsb.ktsbAddSfgcWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.ktsbAddSfgcWin',

    height: 300,
    id: 'ktsbAddSfgcWin',
    width: 420,
    resizable: false,
    layout: {
        type: 'fit'
    },
    closable: false,
    title: '主要示范工程与配套条件',
    modal: true,

    initComponent: function() {
        var me = this;
        var uuid = new Ext.data.UuidGenerator().generate();
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    itemId: 'ktsbAddSfgcForm',
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
                            xtype: 'textfield',
                            anchor: '100%',
                            name:'mainProject',
                            fieldLabel: '主要示范工程'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            name:'supportCondition',
                            fieldLabel: '配套条件及落实情况(配套经费、依托工程等)'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name:'localOrg',
                            fieldLabel: '地方责任单位'
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
                                	itemId:'ktsb_sfgcWin_add',
                                    xtype: 'button',
                                    x: 160,
                                    y: 10,
                                    iconCls: 'icon-save',
                                    text: '保存'
                                },
                                {
                                	itemId:'ktsb_sfgcWin_close',
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