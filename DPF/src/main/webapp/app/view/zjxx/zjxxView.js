Ext.define('App.view.zjxx.zjxxView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.zjxxlist',
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    id: 'zjxxList',
    title: '专家信息',
    store: 'zjxx.zjxxJsonStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'idzjxx',
                    width: 100,
                    text: '编号'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    width: 100,
                    text: '姓名'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'education',
                    width: 200,
                    text: '学历'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'email',
                    width: 200,
                    text: '电子邮件'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'cellphone',
                    width: 150,
                    text: '移动电话'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'resumePath',
                    flex: 1,
                    text: '简历'
                }
            ],
            bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:'zjxx.zjxxJsonStore'}),
            tbar:[{
                id:'zjxx_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'zjxx_add_act'
            }, {
                id:'zjxx_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'zjxx_edit_act'
            }, {
                id:'zjxx_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'zjxx_del_act'
            }]
        });

        me.callParent(arguments);
        
        
    }

});