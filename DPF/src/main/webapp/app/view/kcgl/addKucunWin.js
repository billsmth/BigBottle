Ext.define('App.view.kcgl.addKucunWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.addKucunWin',
    id:'addKucunWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '添加/编辑 库存信息',
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
                    id:'kucuneditType',
                    name: 'editType',
                    value:1,
                    hidden:true
                }, {
                    xtype:'textfield',
                    fieldLabel:'库存编号',
                    id:'kucunkucun_id',
                    name:'kucun_id',
                    allowBlank:true,
                    hidden:true
                }, {
                    xtype:'textfield',
                    fieldLabel:'款号',
                    id:'kucunkuanhao_id',
                    name:'kuanhao_id',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'颜色',
                    id:'kucunyanse',
                    name:'yanse',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'尺码',
                    id:'kucunchima',
                    name:'chima',
                    allowBlank: true
                }, {
                    xtype:'textfield',
                    fieldLabel:'库存数量(件)',
                    id:'kucunshuliang',
                    name:'shuliang',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'进价(元)',
                    id:'jinjia',
                    name:'jinjia',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'成本(元)',
                    id:'chengbenjia',
                    name:'chengbenjia',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'建议售价(元)',
                    id:'kucunshoujia',
                    name:'shoujia',
                    allowBlank: false
                }, {
                    xtype:'textareafield',
                    fieldLabel:'备注:',
                    id:'kucunbeizhu',
                    name:'beizhu',
                    allowBlank:true
                }]
		            }],
		            buttons:[{
		                text: '提交',
		                iconCls : 'icon-submit',
		                action:'kcgl_add_exec_act'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'kcgl_cancel_act'
		            }]
		        });
        me.callParent(arguments);
    }

});