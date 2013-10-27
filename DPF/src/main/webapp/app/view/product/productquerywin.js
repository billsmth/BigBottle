Ext.define('App.view.product.productquerywin', {
    extend: 'Ext.window.Window',

    alias : 'widget.productquerywin',
    id:'productquerywin',
    
    title: '产品查询',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                width:320,
                bodyPadding: 5,
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 80,
	                msgTarget: 'qtip'
            	},
                items: [{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '产品ID',
                    name:'product_id',
                    emptyText:"支持模糊查询,前端一致",
                    labelAlign: 'right'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '产品名称',
                    name:'product_name',
                    emptyText:"支持模糊查询,任意一致",
                    labelAlign: 'right'
                }
                ,
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '状态',
                    name:'status',
                    labelAlign: 'right'
                },{
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '创建者编号',
	                name:'creater_id',
	                emptyText:"支持模糊查询,前端一致",
	                labelAlign: 'right'
	            },{
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '创建者姓名',
	                name:'creater_name',
	                emptyText:"支持模糊查询,任意一致",
	                labelAlign: 'right'
	            }, {
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '种类',
	                name:'type',
	                labelAlign: 'right'
	            }
            ]
            }],
            buttons:[{
                text: '查询',
                iconCls : 'icon-search',
                action:'product_search_exec_act'
            }, {
                text: '关闭',
                iconCls : 'icon-cancel',
                action:'product_search_cancel_act'
            }]
        });

        me.callParent(arguments);
    }

});