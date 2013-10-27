Ext.define('App.view.people.peopleQueryWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.peopleQueryWin',
    id:'peopleQueryWin',
    
    title: '人员查询',

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
                    fieldLabel: '姓名',
                    name:'name',
                    labelAlign: 'right',
                    labelWidth: 60
                }, {
	                xtype: 'combobox',
                    anchor: '100%',
	                fieldLabel: '人才类型',
	                name:'rcType',
	                labelAlign: 'right',
	                labelWidth: 60,
	                store:'com.PeopleTypeStore',
	                queryMode: 'local',
	                displayField: 'value',
	                valueField: 'key'
                }]
            }],
            buttons:[{
                text: '查询',
                iconCls : 'icon-search',
                action:'people_search_exec_act'
            }, {
                text: '关闭',
                iconCls : 'icon-cancel',
                action:'people_search_cancel_act'
            }]
        });

        me.callParent(arguments);
    }

});