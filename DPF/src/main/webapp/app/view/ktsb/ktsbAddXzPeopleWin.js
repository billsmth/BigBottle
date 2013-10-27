Ext.define('App.view.ktsb.ktsbAddXzPeopleWin', {
    extend: 'Ext.window.Window',
	alias : 'widget.ktsbAddXzPeopleWin',
    id:'ktsbAddXzPeopleWin',
    height: 355,
    width: 420,
    resizable: false,
    modal: true,
    closable: false,
    layout: {
        type: 'fit'
    },
    title: '添加行政责任人',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id:'ktsbXzPeopleForm',
                    frame: true,
                    bodyPadding: 10,
                    title: '',
                    items: [
						{
						    xtype: 'numberfield',
						    anchor: '100%',
						    name: 'sortNo',
						    fieldLabel: '序号',
						    id: 'ktsbaxzpsortno',
                            value:'1',
                            minValue:'1',
                            allowBlank: false
						},
                        {
                        	itemId:'ktsb_people_xz_zrr',
                        	id:'ktsb_people_xz_zrr',
                            xtype: 'combobox',
                            anchor: '100%',
                            queryMode: 'local',
                            fieldLabel: '责任人',
                            displayField:'name',
                            store:'people.peopleStore'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            name:'idpeople',
                            id: 'ktsbaxzphideid'
                            	
                        },
                        {
                            xtype: 'datefield',
                            name: 'birthdayStr',
                            anchor: '100%',
                            format:'Y-m-d',
                            fieldLabel: '出生日期',
                            id: 'ktsbaxzpbirthday'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'company',
                            fieldLabel: '所在单位',
                            id: 'ktsbaxzpcompany'
                        },
                        {
                        	name:'duty',
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '职务',
                            id: 'ktsbaxzpduty'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'phone',
                            fieldLabel: '固定电话',
                            id: 'ktsbaxzpphone'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'telephone',
                            fieldLabel: '移动电话',
                            id: 'ktsbaxzptelephone'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'fax',
                            fieldLabel: '传真号码',
                            id: 'ktsbaxzpfax'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'email',
                            fieldLabel: '电子邮件',
                            id: 'ktsbaxzpemail'
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
                                	itemId:'ktsb_people_xz_zrr_add',
                                    xtype: 'button',
                                    x: 170,
                                    y: 30,
                                    iconCls: 'icon-save',
                                    text: '保存'
                                },
                                {
                                	itemId:'ktsb_people_xz_zrr_close',
                                    xtype: 'button',
                                    x: 230,
                                    y: 30,
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