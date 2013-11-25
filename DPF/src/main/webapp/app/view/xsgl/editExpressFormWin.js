Ext.define('App.view.xsgl.editExpressFormWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.editExpressFormWin',
    id:'editExpressFormWin',
    
    title: '添加/编辑快递单信息',

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
                id: 'expressForm',
                itemId:'expressFormForm',
                width:560,
                bodyPadding: 7,
            	fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 70,
	                msgTarget: 'under'
	            },
	            items: [{
	                xtype:'textfield',
	                flex: 1,
	                id:'editType3',
	                name: 'editType3',
	                value:1,
	                hidden:true
	            }, {
	                xtype:'textfield',
	                id:'post_id',
	                name: 'post_id',
	                hidden:true
	            }, {
	                xtype:'textfield',
	                id:'order_id',
	                name: 'order_id',
	                hidden:true
	            }, {
	                xtype:'textfield',
	                id:'people_id',
	                name: 'people_id',
	                hidden:true
	            }, {
	            	xtype: 'fieldset',
	                title: '销售单信息',
	                margin:'5 2 5 0',
	                defaultType: 'textfield',
	                layout: 'anchor',
	                defaults: {
	                    anchor: '100%',
                		type:'hbox'
	                },
                	items:[{
                    	xtype:'container',
                    	margin:'5 0 5 0',
                    	layout:{
                    		align:'stretch',
                    		type:'hbox'
                    	},
                    	items:[{
                            xtype: 'displayfield',
                            fieldLabel: '销售单号',
                            id:'xiaoshou_id_lab',
                            labelWidth: 70,
    		                defaults: {
    		                    anchor: '50%',
                        		type:'hbox'
    		                },
                            labelAlign: 'right',
                            width:250
        	              },{
                            xtype: 'displayfield',
                            fieldLabel: '买家',
                            id:'maijia_lab',
                            labelWidth: 80,
    		                defaults: {
    		                    anchor: '50%',
                        		type:'hbox'
    		                },
                            labelAlign: 'right',
                            margin: '0 0 0 20'
        	              }
                    	
                    	]},{
                        	xtype:'container',
                        	margin:'5 0 5 0',
                        	layout:{
                        		anchor: '80%',
                        		type:'hbox'
                        	},
                        	items:[{
		                        xtype: 'radiogroup',
			                    fieldLabel: '送货方式',
						        labelWidth: 70,
			                    flex: 1,
		                        margin: '0 15 0 0',
			                    items: [{
				                        name: 'type',
				                        id:'post_type_0',
							            inputValue: '0',
							            boxLabel: '上门自取'
				                    }, {
				                       name: 'type',
				                       id:'post_type_1',
							           inputValue: '1',
							           boxLabel: '快递送货',
							           checked: true
				                    }
				                ]
                        	}
                        ]}
                	]
	            }, {
                	xtype:'container',
                	margin:'5 0 5 0',
                	layout:{
                		align:'stretch',
                		type:'hbox'
                	},
                	items:[{
    	            	xtype: 'fieldset',
		                title: '发件方信息',
		                margin:'5 20 5 0',
		                defaultType: 'textfield',
		                layout: 'anchor',
		                defaults: {
		                    anchor: '50%',
                    		type:'hbox'
		                },
                    	items:[{
	        	                xtype:'textfield',
	        	                fieldLabel:'寄件人',
	        	                afterLabelTextTpl: required,
	        	                id:'post_from',
	        	                name:'post_from',
	        	                emptyText:"必填项",
	        	                value:'苏苏',
	        	                allowBlank: false
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'始发地',
	        	                id:'departure',
	        	                name:'departure',
	        	                emptyText:"填写始发地信息",
	        	                value:'北京'
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'单位名称',
	        	                id:'company_name_from',
	        	                name:'company_name_from',
	        	                emptyText:"如需要,可添加"
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'省份',
	        	                id:'province_from',
	        	                name:'province_from',
	        	                emptyText:"填写省份信息",
	        	                value:'北京'
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'市',
	        	                id:'city_from',
	        	                name:'city_from',
	        	                emptyText:"填写城市信息",
	        	                value:'北京'
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'区/县',
	        	                id:'district_from',
	        	                name:'district_from',
	        	                emptyText:"填写区县信息",
	        	                value:'东城区'
	        	            },{
	        	                xtype:'textareafield',
	        	                fieldLabel:'详细地址',
	        	                id:'detail_from',
	        	                name:'detail_from',
	        	                emptyText:"如需要,可添加",
	        	                value:'安德路55号院 16号楼 2-106'
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'联系电话',
	        	                afterLabelTextTpl: required,
	        	                id:'contact_number_from',
	        	                name:'contact_number_from',
	        	                value:'13810840866,18618166418',
	        	                emptyText:"必填项",
	        	                allowBlank: false
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'内件名',
	        	                emptyText:"如需要,可添加",
	        	                id:'neijian',
	        	                name:'neijian'
	        	            }]
			            },{
	    	            	xtype: 'fieldset',
			                title: '收件方信息',
			                margin:'5 20 5 0',
			                defaultType: 'textfield',
			                layout: 'anchor',
			                defaults: {
			                    anchor: '50%',
	                    		type:'hbox'
			                },
	                    	items:[{
	        	                xtype:'textfield',
	        	                fieldLabel:'收件人',
	        	                afterLabelTextTpl: required,
	        	                id:'post_to',
	        	                name:'post_to',
	        	                emptyText:"必填项",
	        	                allowBlank: false
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'目的地',
	        	                id:'destination',
	        	                name:'destination',
	        	                emptyText:"填写目的地信息"
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'单位名称',
	        	                id:'company_name',
	        	                name:'company_name',
	        	                emptyText:"如需要,可添加"
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'省份',
	        	                id:'province',
	        	                name:'province',
	        	                emptyText:"填写省份信息"
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'市',
	        	                id:'city',
	        	                name:'city',
	        	                emptyText:"填写城市信息"
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'区/县',
	        	                id:'district',
	        	                name:'district',
	        	                emptyText:"填写区县信息"
	        	            },{
	        	                xtype:'textareafield',
	        	                fieldLabel:'详细地址',
	        	                emptyText:"填写详细地址",
	        	                id:'detail_to',
	        	                name:'detail_to'
	        	            },{
	        	                xtype:'textfield',
	        	                fieldLabel:'联系电话',
	        	                afterLabelTextTpl: required,
	        	                id:'contact_number',
	        	                name:'contact_number',
	        	                emptyText:"必填项",
	        	                allowBlank: false
	        	            }]
		                }]
                }, {
	            	xtype: 'fieldset',
	                title: '添加备注',
	                margin:'5 2 5 0',
	                defaultType: 'textfield',
	                layout: 'anchor',
	                defaults: {
	                    anchor: '100%',
                		type:'hbox'
	                },
                	items:[{
	                xtype:'textareafield',
	                id:'note',
	                name: 'note',
	                anchor: '100%',
	                emptyText:"如需要,可填写备注信息"
	                }]
	            }]
            }],
            buttons:[{
	                text: '保存',
	                iconCls:'icon-submit',
			        handler: function() { 
			        	//Ext.getCmp('simpleForm').isValid();
			         } ,
			         action:'xsgl_submit_express_form_act'
	            },{
	                text: '关闭',
	                iconCls : 'icon-cancel',
	                action:'xsgl_cancel_express_form_act'
	            }
            ]
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
