Ext.define('App.view.ktsb.ktsbAddTechPeopleWin', {
    extend: 'Ext.window.Window',
	alias : 'widget.ktsbAddTechPeopleWin',
    id:'ktsbAddTechPeopleWin',
    height: 460,
    width: 420,
    resizable: false,
    modal: true,
    closable: false,
    layout: {
        type: 'fit'
    },
    title: '添加技术责任人',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id:'ktsbTechPeopleForm',
                    frame: true,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            name: 'sortNo',
                            fieldLabel: '序号',
                            id: 'ktsbatpsortno',
                            value:'1',
                            minValue:'1',
                            allowBlank: false
                        },
                        {
                        	itemId:'ktsb_people_tech_zrr',
                        	id:'ktsb_people_tech_zrr',
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
                            id: 'ktsbatphideid',
                        },
                        {
	                        xtype: 'radiogroup',
	                        anchor: '100%',
                            fieldLabel: '性别',
                            id: 'ktsbatpsex',
	                        items: [
	                            {
	                                xtype: 'radiofield',
	                                boxLabel  : '男',
                                    name      : 'sex',
                                    checked: true,
                                    inputValue: '0'
	                            },
	                            {
	                                xtype: 'radiofield',
	                                boxLabel  : '女',
                                    name      : 'sex',
                                    inputValue: '1'
	                            }
	                        ]
                        },
                        {
                            xtype: 'datefield',
                            name: 'birthdayStr',
                            anchor: '100%',
                            format:'Y-m-d',
                            fieldLabel: '出生日期',
                            id: 'ktsbatpbirthdayStr'
                        },
                        {
                            xtype: 'combobox',
                            name: 'title',
                            anchor: '100%',
                            fieldLabel: '职称',
                            id: 'ktsbatptitle',
                            store:'com.TitleStore',
                            queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all',
                        },
                        {
                            xtype: 'combobox',
                            name:'degree',
                            anchor: '100%',
                            fieldLabel: '最高学位',
                            id: 'ktsbatpdegree',
                            store:'com.DegreeStore',
                            queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all',
                        },
                        {
                            xtype: 'textfield',
                            name:'specialty',
                            anchor: '100%',
                            fieldLabel: '从事专业',
                            id: 'ktsbatpspecialty',
                        },
                        {
                            xtype: 'textfield',
                            name:'phone',
                            anchor: '100%',
                            fieldLabel: '固定电话',
                            id: 'ktsbatpphone',
                        },
                        {
                            xtype: 'textfield',
                            name:'telephone',
                            anchor: '100%',
                            fieldLabel: '移动电话',
                            id: 'ktsbatptelephone',
                        },
                        {
                            xtype: 'textfield',
                            name:'fax',
                            anchor: '100%',
                            fieldLabel: '传真号码',
                            id: 'ktsbatpfax',
                        },
                        {
                            xtype: 'textfield',
                            name:'email',
                            anchor: '100%',
                            fieldLabel: '电子邮箱',
                            id: 'ktsbatpemail',
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            name: 'idType',
                            fieldLabel: '证件类型',
                            id: 'ktsbatpidtype',
                            store:'com.IDTypeStore',
                            queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all',
                        },
                        {
                            xtype: 'textfield',
                            name:'idNumber',
                            anchor: '100%',
                            fieldLabel: '证件号码',
                            id: 'ktsbatpidnumber',
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
                                	itemId:'ktsb_people_tech_zrr_add',
                                    xtype: 'button',
                                    x: 170,
                                    y: 30,
                                    iconCls: 'icon-save',
                                    text: '保存'
                                },
                                {
                                	itemId:'ktsb_people_tech_zrr_close',
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