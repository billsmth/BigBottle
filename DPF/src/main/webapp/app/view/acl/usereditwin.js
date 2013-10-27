Ext.define('App.view.acl.usereditwin', {
    extend: 'Ext.window.Window',

    alias : 'widget.usereditwin',

    id:'acluseredit',
    closeAction:'hide',
    height: 235,
    width: 400,
    layout: {
        type: 'fit'
    },
    title: '用户管理',

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
                            //id:'id',
                            name:'id'
                        },
                        {
                            xtype: 'textfield',
                            id:'userId',
                            name:'userId',
                            anchor: '95%',
                            fieldLabel: '用户名',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            id:'password',
                            name:'password',
                            anchor: '95%',
                            fieldLabel: '密码',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            id:'password2',
                            name:'password2',
                            anchor: '95%',
                            fieldLabel: '确认密码',
                            labelWidth: 60,
                            inputType: 'password'
                        },
                        {
                            xtype: 'combobox',
                            id:'roleId',
                            name:'roleId',
                            labelWidth : 60,
                            anchor: '95%',
                            fieldLabel: '角色',
                            store:'acl.roleStore',
                            displayField:'roleName',
                            valueField:'id'
                        },
                        {
                            xtype: 'combobox',
                            id:'peopleId',
                            name:'peopleId',
                            labelWidth : 60,
                            anchor: '95%',
                            fieldLabel: '人员',
                            store:'people.peopleStore',
                            displayField:'name',
                            valueField:'idpeople'
                        },
                        {
                            xtype: 'combobox',
                            id:'orgId',
                            name:'orgId',
                            labelWidth : 60,
                            anchor: '95%',
                            fieldLabel: '单位',
                            store:'cddw.cddwJsonStore',
                            displayField:'companyName',
                            valueField:'idorg'
                        }
                    ],
                    buttons:[{
                        text: '保存',
                        iconCls : 'icon-submit',
                        action:'acl_user_edit_save_act'
                    },{
                        text: '取消',
                        iconCls : 'icon-cancel',
                        action:'acl_user_edit_cancel_act'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }

});