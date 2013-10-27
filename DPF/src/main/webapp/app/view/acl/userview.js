Ext.define('App.view.acl.userview', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.acluserlist',
    
    id: 'acluserlist',
    title: '用户管理',
    store: 'acl.userStore',
    columnLines:true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'userId',
                    flex:0.4,
                    text: '用户名'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'roleName',
                    flex:1,
                    text: '角色'
                }
            ],
            tbar:[{
                id:'acl_user_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'acl_user_list_add_act'
            }, {
                id:'acl_user_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'acl_user_list_edit_act'
            }, {
                id:'acl_user_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'acl_user_list_del_act'
            }]
        });

        me.callParent(arguments);
    }

});