Ext.define('App.view.jhgl.jinhuoView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.jinhuoView',
    
    id: 'jinhuoView',
    title: '进货管理',
    store: 'jhgl.jhglStore',
    columnLines:true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {	
					xtype: 'gridcolumn',
                    dataIndex: 'jinhuo_id',
                    text: '进货编号'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'danhao_id',
                    text: '单号'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'jinhuoriqi',
                    text: '进货日期'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'kuanhao_id',
                    text: '款号'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'yanse',
                    text: '颜色'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'chima',
                    text: '尺码'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'shuliang',
                    text: '数量(件)'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'jinjia',
                    text: '进价(元)'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'chengbenjia',
                    text: '成本价(元)'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'shoujia',
                    text: '售价(元)'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'zhuangtai',
                    text: '状态'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'delflg',
                    text: '删除标记'
				},
				{	
					xtype: 'gridcolumn',
                    dataIndex: 'beizhu',
                    text: '备注',
                    flex:1
				}
            ],
            tbar:[{
                id:'jhgl_add',
                text: '创建进货',
                iconCls:'icon-add',
                action:'jhgl_add_act'
            },'-', {
                id:'jhgl_copy',
                text: '拷贝进货',
                iconCls:'icon-copy',
                action:'jhgl_copy_act'
            },'-', {
                id:'jhgl_edit',
                text:'编辑',
                iconCls:'icon-edit',
                action:'jhgl_edit_act'
            },'-', {
                id:'jhgl_ruku',
                text:'入库',
                iconCls:'icon-checkin',
                action:'jhgl_ruku_act'
            },'-', {
                id:'jhgl_del',
                text:'删除',
                iconCls:'icon-del',
                action:'jhgl_del_act'
            }]
        });

        me.callParent(arguments);
    }	

});