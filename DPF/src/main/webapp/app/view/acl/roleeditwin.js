Ext.define('App.view.acl.roleeditwin', {
    extend: 'Ext.window.Window',

    alias : 'widget.roleeditwin',

    id:'aclroleedit',
    closeAction:'hide',
    height: 175,
    width: 400,
    layout: {
        type: 'fit'
    },
    title: '角色管理',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'hiddenfield',
                            id:'id',
                            name:'id'
                        },
                        {
                            xtype: 'textfield',
                            id:'roleName',
                            name:'roleName',
                            anchor: '95%',
                            fieldLabel: '角色名',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            id:'roleDesc',
                            name:'roleDesc',
                            anchor: '95%',
                            fieldLabel: '描述',
                            labelWidth: 60
                        }
                    ],
                    buttons:[{
                        text: '保存',
                        iconCls : 'icon-submit',
                        action:'acl_role_edit_save_act'
                    },{
                        text: '取消',
                        iconCls : 'icon-cancel',
                        action:'acl_role_edit_cancel_act'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }

});