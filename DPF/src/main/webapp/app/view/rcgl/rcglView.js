Ext.define('App.view.rcgl.rcglView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.rcgllist',
    
    id: 'rcglList',
    title: '人才管理',
    store: 'rcgl.rcglJsonStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'idrcgl',
                    width: 150,
                    text: '编号'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rcName',
                    width: 100,
                    text: '姓名'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rcType',
                    width: 100,
                    text: '人才类型'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rcSex',
                    width: 70,
                    text: '性别'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rcEmail',
                    width: 200,
                    text: '电子邮件'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rcMobile',
                    width: 150,
                    text: '移动电话'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rcAreaType',
                    flex : 1,
                    text: '类型'
                }
            ],
            bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:'rcgl.rcglJsonStore'}),
            tbar:[{
                id:'rcgl_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'rcgl_add_act'
            }, {
                id:'rcgl_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'rcgl_edit_act'
            }, {
                id:'rcgl_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'rcgl_del_act'
            }
            ]
        });

        me.callParent(arguments);
    }

});