Ext.define('App.view.acl.menueditwin', {
    extend: 'Ext.window.Window',

    alias : 'widget.menueditwin',

    id:'menueditwin',
    closeAction:'hide',
    height: 385,
    width: 300,
    layout: {
        type: 'fit'
    },
    title: '菜单管理',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'treepanel',
                    //id:'alc_menu_id',
                    store: 'acl.menuStore',
                    rootVisible:false,
                    buttons:[{
                        text: '保存',
                        iconCls : 'icon-submit',
                        action:'acl_menu_edit_save_act'
                    },{
                        text: '取消',
                        iconCls : 'icon-cancel',
                        action:'acl_menu_edit_cancel_act'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }
});