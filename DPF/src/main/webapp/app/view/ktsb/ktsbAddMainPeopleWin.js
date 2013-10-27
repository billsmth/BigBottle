Ext.define('App.view.ktsb.ktsbAddMainPeopleWin', {
    extend: 'Ext.window.Window',
	alias : 'widget.ktsbAddMainPeopleWin',
    id:'ktsbAddMainPeopleWin',
    height: 410,
    width: 420,
    resizable: false,
    modal: true,
    closable: false,
    layout: {
        type: 'fit'
    },
    title: '添加主要人员',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id:'ktsbMainPeopleForm',
                    frame: true,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            name: 'sortNo',
                            fieldLabel: '序号',
                            id: 'ktsbampsortno',
                            value:'1',
                            minValue:'1',
                            allowBlank: false
                        },
                        {
                        	itemId:'ktsb_main_people',
                        	id:'ktsb_main_people',
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
                            id: 'ktsbamphideid'
                        },
                        {
	                        xtype: 'radiogroup',
	                        anchor: '100%',
                            fieldLabel: '性别',
                            id: 'ktsbampsex',
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
                            id: 'ktsbampbirthday'
                        },
                        {
                            xtype: 'combobox',
                            name: 'title',
                            anchor: '100%',
                            fieldLabel: '职称',
                            id: 'ktsbamptitle',
                            store:'com.TitleStore',
                            queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'specialty',
                            fieldLabel: '专业',
                            id: 'ktsbampspecialty'
                        },
                        
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'dutyTask',
                            fieldLabel: '职位及任务',
                            id: 'ktsbampdutytask'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'taskTime',
                            fieldLabel: '累计工时(人月)',
                            id: 'ktsbamptasktime'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'company',
                            fieldLabel: '所在单位',
                            id: 'ktsbampcompany'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            name: 'idType',
                            fieldLabel: '证件类型',
                            id: 'ktsbampidtype',
                            store:'com.IDTypeStore',
                            queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all'
                        },
                        {
                            xtype: 'textfield',
                            name:'idNumber',
                            anchor: '100%',
                            fieldLabel: '证件号码',
                            id: 'ktsbampidnumber'
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
                                	itemId:'ktsb_main_people_add',
                                    xtype: 'button',
                                    x: 170,
                                    y: 30,
                                    iconCls: 'icon-save',
                                    text: '保存'
                                },
                                {
                                	itemId:'ktsb_main_people_close',
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