Ext.define('App.view.kcgl.kcglView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.kcglView',
    
    id: 'kcglView',
    title: '库存管理',
    store: 'kcgl.kcglStore',
    columnLines:true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {	
					xtype: 'gridcolumn',
                    dataIndex: 'kucun_id',
                    text: '库存编号'
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
                    text: '数量(件)',
                    renderer: function (value, meta) {
                		if(value==0){
                			meta.tdCls ='red';
                		}else if(value<5){
                			meta.tdCls ='yellow';
                		}else if(value<10){
                			meta.tdCls ='green';
                		}else{
                			meta.tdCls ='blue';
                		}
                        return value;
                    }
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
                    dataIndex: 'beizhu',
                    text: '备注',
                    flex:1
				}
            ],
            tbar:[{
                id:'kcgl_add',
                text: '新增库存',
                iconCls:'icon-add',
                action:'kcgl_add_act'
            },'-', {
                id:'kcgl_edit',
                text:'编辑',
                iconCls:'icon-edit',
                action:'kcgl_edit_act'
            },'-', {
                id:'kcgl_xiaoshou',
                text:'销售',
                iconCls:'icon-checkin',
                action:'kcgl_add_xiaoshou_act'
            },'-', {
                id:'kcgl_del',
                text:'删除',
                iconCls:'icon-del',
                action:'kcgl_del_act'
            }]
        });

        me.callParent(arguments);
    }	

});