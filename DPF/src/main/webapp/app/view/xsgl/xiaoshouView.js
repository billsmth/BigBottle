Ext.define('App.view.xsgl.xiaoshouView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.xiaoshouView',
    autoScroll: true,
    id: 'xiaoshouView',
    title: '任务承担单位',
    store: 'xsgl.xsglStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	tbar:[{
                id:'xsgl_query_id',
                text: '查询',
                iconCls:'icon-search',
                action:'xsgl_list_query_act'
            },'-', {
                id:'xsgl_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'xsgl_add_act'
            },'-', {
                id:'xsgl_copy_id',
                text:'拷贝销售单',
                iconCls:'icon-copy',
                action:'xsgl_copy_act'
            },'-', {
                id:'xsgl_ruku_id',
                text:'销售入库',
                iconCls:'icon-checkin',
                action:'xsgl_ruku_act'
            },'-', {
                id:'xsgl_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'xsgl_list_edit_act'
            },'-', {
                id:'xsgl_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'xsgl_list_del_act'
            }],
            columns: [
					{
					    header:'销售单编号',
					    dataIndex:'xiaoshou_id', 
					    width:120
					}, {
						header:'库存编号',
						dataIndex:'kucun_id', 
						width:120
					}, {
						header:'款号',
						dataIndex:'kuanhao_id', 
						width:80
					}, {
						header:'颜色',
						dataIndex:'yanse', 
						width:80
					}, {
						header:'尺码',
						dataIndex:'chima', 
						width:40
					}, {
						header:'数量（件）',
						dataIndex:'shuliang', 
						width:80
					}, {
						header:'售价（元）',
						dataIndex:'shoujia', 
						width:80
					}, {
						header:'实际成交金额（元）',
						dataIndex:'shijishoukuan', 
						width:110
					}, {
						header:'买家编号',
						dataIndex:'maijia_id', 
						width:80
					}, {
						header:'买家姓名',
						dataIndex:'maijiaxingming', 
						width:80
					}, {
						header:'入库状态',
						dataIndex:'zhuangtai', 
						width:70, 
						renderer:showTypeChange
					}, {
						header:'删除状态',
						dataIndex:'delflg', 
						width:60, 
						renderer:showDelStatus
					}, {
						header:'备注',
						dataIndex:'beizhu', 
						flex:1
					}
            ]
        });
        me.callParent(arguments);
        function showTypeChange(val, meta) {
        	if(val == '0') {
        		meta.tdCls = 'red';
                return '未入库';
            } else if(val == '1'){
            	meta.tdCls = 'green';
                return '已入库';
            }
        }
        function showDelStatus(val) {
            if(val == '0') {
                return '未删除';
            } else if(val == '1'){
                return '已删除';
            }
        }
    }

});