Ext.define('App.view.acl.roleview', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.aclrolelist',
    
    id: 'aclrolelist',
    title: '角色管理',
    store: 'acl.roleStore',
    columnLines:true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'roleName',
                    flex:0.4,
                    text: '角色'
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'roleDesc',
                    flex:1,
                    text: '描述'
                }
            ],
            tbar:[{
                id:'acl_role_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'acl_role_list_add_act'
            }, {
                id:'acl_role_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'acl_role_list_edit_act'
            }, {
                id:'acl_role_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'acl_role_list_del_act'
            }/*, {
                id:'acl_role_res_id',
                text:'分配资源',
                iconCls:'icon-cog',
                action:'acl_role_list_res_act'
            }*/, {
                id:'acl_role_menu_id',
                text:'分配菜单',
                iconCls:'icon-cog',
                action:'acl_role_list_menu_act'
            }]
        });

        me.callParent(arguments);
    }

});