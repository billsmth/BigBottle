Ext.define('App.view.xsgl.addXiaoshouWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.addXiaoshouWin',
    id:'addXiaoshouWin',
    
    title: '维护销售信息',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        Ext.applyIf(me, {
            items: [
            	{
                xtype: 'form',
                region: 'north',
                collapsible: true,
                id: 'simpleForm',
                itemId:'editXiaoshouForm',
                width:350,
                bodyPadding: 7,
            	fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'under'
	            },
	            items: [{
	                xtype:'textfield',
	                id:'editType',
	                name: 'editType',
	                value:1,
	                hidden:true
	            }, {
	                xtype:'textfield',
	                fieldLabel:'销售编号',
	                id:'xiaoshou_id',
	                name:'xiaoshou_id',
	                allowBlank: true,
	                hidden:true
	            }, {
	                xtype:'textfield',
	                fieldLabel:'库存编号',
	                id:'kucun_id',
	                name:'kucun_id',
	                allowBlank: false
	            }, {
	                xtype:'textfield',
	                fieldLabel:'产品名称',
	                id:'col1',
	                name:'col1',
	                allowBlank: false
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
	                allowBlank: true
	            }, {
	                xtype:'textfield',
	                fieldLabel:'数量',
	                id:'shuliang',
	                name:'shuliang',
	                allowBlank: false
	            }, {
	                xtype:'textfield',
	                fieldLabel:'建议售价(元)',
	                id:'shoujia',
	                name:'shoujia',
	                allowBlank: true,
	                listeners:{
	                	'blur':function(){
	                		if(Ext.getCmp("shuliang").getValue()!=null&&Ext.getCmp("shoujia").getValue()!=null){
	                			Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
	                		}
	                	}
	                }
	            }, {
	                xtype:'textfield',
	                fieldLabel:'总价(元)',
	                id:'count',
	                name:'count',
	                renderer: function (value, meta, record) {
	                    Ext.getCmp("count-inputEl").addClass("red");
	                    return value;
	                }
	            }, {
	                xtype:'textfield',
	                fieldLabel:'实际成交金额',
	                id:'shijishoukuan',
	                name:'shijishoukuan',
	                allowBlank: true
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
	            }]
            }],
            buttons:[{
                text: '保存',
                iconCls:'icon-submit',
               
		        handler: function() { 
		        	//Ext.getCmp('simpleForm').isValid();
		         } ,
		         action:'xsgl_submit_xiaoshou_act'
            },
            
            {
                text: '关闭',
                iconCls : 'icon-cancel',
                action:'xsgl_cancel_xiaoshou_act'
            }]
        });

        me.callParent(arguments);
    }

});

function dateFormat(value){ 
    if(null != value){ 
        return Ext.Date.format(new Date(value),'Y-m-d'); 
    }else{ 
        return null; 
    } 
} 
