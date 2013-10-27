Ext.define('App.view.jhgl.addJinhuoWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.addJinhuoWin',
    id:'addJinhuoWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '添加/编辑 进货信息',
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 7,
                width:250,
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 80,
	                msgTarget: 'qtip'
	            },
                items: [{
	                    xtype:'textfield',
	                    id:'editType',
	                    name: 'editType',
	                    value:1,
	                    hidden:true
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'进货单号',
	                    id:'jinhuo_id',
	                    name:'jinhuo_id',
	                    allowBlank: true,
	                    hidden:true
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'档口单号',
	                    id:'danhao_id',
	                    name:'danhao_id',
	                    allowBlank: false
	                }, {
	                    xtype:'datefield',
	                    fieldLabel:'进货日期',
	                    id:'jinhuoriqi',
	                    format:'Y-m-d',
	                    name:'jinhuoriqi',
	                    maxValue: new Date(),
	                    allowBlank: true
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'款号',
	                    id:'kuanhao_id',
	                    name:'kuanhao_id',
	                    allowBlank: false
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'颜色',
	                    id:'yanse',
	                    name:'yanse',
	                    allowBlank: false
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'尺码',
	                    id:'chima',
	                    name:'chima',
	                    allowBlank: false
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'数量',
	                    id:'shuliang',
	                    name:'shuliang',
	                    allowBlank: false
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'进价',
	                    id:'jinjia',
	                    name:'jinjia',
	                    allowBlank: true
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'成本价',
	                    id:'chengbenjia',
	                    name:'chengbenjia',
	                    allowBlank: true
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'建议售价',
	                    id:'shoujia',
	                    name:'shoujia',
	                    allowBlank: true
	                }, {
	                    xtype:'textfield',
	                    fieldLabel:'进货单状态',
	                    id:'zhuangtai',
	                    name:'zhuangtai',
	                    allowBlank: true,
	                    hidden:true
	                }, {
	                    xtype:'textareafield',
	                    fieldLabel:'备注:',
	                    id:'beizhu',
	                    name:'beizhu',
	                    allowBlank:true
	                }
			        ]
		            }],
		            buttons:[{
		                text: '提交',
		                iconCls : 'icon-submit',
		                action:'jhgl_add_exec_act'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'jhgl_cancel_act'
		            }]
		        });
        me.callParent(arguments);
    }

});