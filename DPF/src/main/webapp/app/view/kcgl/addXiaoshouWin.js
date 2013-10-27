Ext.define('App.view.kcgl.addXiaoshouWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.addXiaoshouWin',
    id:'addXiaoshouWin',
    
    layout: {
        type: 'fit'
    },
    
    title: '创建销售信息',
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
                items: [ {
                    xtype:'textfield',
                    id:'editType',
                    name: 'editType',
                    value:1,
                    hidden:true
                },{
                    xtype:'textfield',
                    fieldLabel:'款号',
                    id:'kuanhao_id',
                    name:'kuanhao_id',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'库存编号',
                    id:'kucun_id',
                    name:'kucun_id',
                    allowBlank:true,
                    hidden:true
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
                    allowBlank: true
                }, {
                    xtype:'textfield',
                    fieldLabel:'出售数量(件)',
                    id:'shuliang',
                    name:'shuliang',
                    allowBlank: false,
                    listeners:{
                    	'blur':function(){
                    		if(Ext.getCmp("shuliang").getValue()!=null&&Ext.getCmp("shoujia").getValue()!=null){
                    			Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
                    			Ext.getCmp("shijishoukuan").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue());
                    		}
                    	}
                    }
                }, {
                    xtype:'textfield',
                    fieldLabel:'建议售价(元)',
                    id:'shoujia',
                    name:'shoujia',
                    allowBlank: false,
                    listeners:{
                    	'blur':function(){
                    		if(Ext.getCmp("shuliang").getValue()!=null&&Ext.getCmp("shoujia").getValue()!=null){
                    			Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
                    			Ext.getCmp("shijishoukuan").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue());
                    		}
                    	}
                    }
                }, {
                    xtype:'textfield',
                    fieldLabel:'总价(元)',
                    id:'count',
                    name:'count',
                    textColor :'#ffc',
                    backgroundColor:'#ffc'
                }, {
                    xtype:'textfield',
                    fieldLabel:'实际成交金额',
                    id:'shijishoukuan',
                    name:'shijishoukuan',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'买家编号',
                    id:'maijia_id',
                    name:'maijia_id',
                    allowBlank: false
                }, {
                    xtype:'textfield',
                    fieldLabel:'买家姓名',
                    id:'maijiaxingming',
                    name:'maijiaxingming',
                    allowBlank: false
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
		                action:'kcgl_add_xiaoshou_exec_act'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'kcgl_cancel_xiaoshou_act'
		            }]
		        });
        me.callParent(arguments);
    }

});