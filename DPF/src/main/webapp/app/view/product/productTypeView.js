Ext.define('App.view.product.productTypeView', {
    extend: 'Ext.grid.Panel',

    alias : 'widget.productTypeView',
    id:'productTypeView',
    
    height: 320,
    
    title: '产品种类列表',
    store: 'product.productTypeStore',
    
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
	            tbar:[{
		                xtype: 'tbseparator'
		            },{
		                id:'product_type_search_id',
		                text: '查询',
		                iconCls:'icon-search',
		                action:'product_type_list_search_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_type_add_id',
		                text: '添加',
		                iconCls:'icon-add',
		                action:'product_type_list_add_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_type_edit_id',
		                text: '编辑',
		                iconCls:'icon-edit',
		                action:'product_type_list_edit_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_type_del_id',
		                text: '删除',
		                iconCls:'icon-del',
		                action:'product_type_list_del_act'
		            }
	            ],
            columns: [
	            {
	                xtype: 'gridcolumn',
	                dataIndex: 'type_id',
	                text: '种类ID',
	                width:60
	            }, {
	                xtype: 'gridcolumn',
	                dataIndex: 'type_name',
	                text: '种类名称',
	                width:90
	            }, {
	                xtype: 'gridcolumn',
	                dataIndex: 'type_key',
	                text: '键值',
	                width:50
	            }, {
	                xtype: 'gridcolumn',
	                dataIndex: 'type_status',
	                text: '状态',
	                width:50,
	                renderer : function(val) {
	                	var retVal = '';
	                    if (val == 0) {
	                        retVal = '暂存';
	                    } else if (val == 1) {
	                        retVal = '启用';
	                    } else if (val == 2) {
	                        retVal = '删除';
	                    }
	                    return retVal;
	                }
	            }, {
	                xtype: 'gridcolumn',
	                dataIndex: 'parent_id',
	                text: '上级分类',
	                width:60,
	                renderer : function(val) {
	                    return val==0?'顶级':val;
	                }
	            }, {
	                xtype: 'gridcolumn',
	                dataIndex: 'note',
	                text: '备注',
	                flex:1
	            }
	        ],
            dockedItems : [{
				xtype : 'tabpanel',
				dock : 'bottom',
				height : 520,
				activeTab : 0,
				id : 'productTab',
				items : [{
					xtype : 'panel',
					title : '详情',
					layout: 'fit',
					items : [{
                    	xtype: 'form',
                        bodyPadding: 10,
                        autoScroll: true,
                        layout: 'anchor',
                        items: []
						} 
					]
				}]
			}]
        });

        Ext.each(this.tbar2, function(item, index) {
	            this.tbar.push(item);
	        }, this);
	        me.callParent(arguments);
	    }
});

