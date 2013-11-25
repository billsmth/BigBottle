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
                id: 'simpleForm',
                itemId:'editXiaoshouForm',
                width:500,
                bodyPadding: 7,
            	fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'under'
	            },
	            items: [{
	                xtype:'textfield',
	                flex: 1,
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
				  	xtype:'container',
				  	margin:'5 10 5 10',
					layout:{
						anchor: '50%',
						type:'hbox'
					},
					items:[{
						    xtype:'textfield',
						    fieldLabel:'产品分类',
						    id:'product_type',
						    name:'product_type',
						    defaults: {
				                anchor: '50%',
				        		type:'hbox'
				            },
				            width:200
						}, {
							xtype:'textfield',
			                fieldLabel:'产品编号',
			                labelWidth: 65,
			                afterLabelTextTpl: required,
			                id:'product_id',
			                name:'product_id',
						    defaults: {
				                anchor: '50%',
				        		type:'hbox'
				            },
				            flex: 1,
						    allowBlank: false
						}
					]
				}, {
	            	xtype: 'fieldset',
	                title: '产品信息',
	                margin:'5 0 5 0',
	                defaultType: 'textfield',
	                layout: 'anchor',
	                defaults: {
	                    anchor: '100%',
                		type:'hbox'
	                },
                	items:[{
						    xtype:'textfield',
						    fieldLabel:'产品名称',
						    afterLabelTextTpl: required,
						    id:'col1',
						    name:'col1',
						    allowBlank: false
						}, {
	                      	xtype:'container',
	                      	margin:'5 0 5 0',
	                    	layout:{
	                    		anchor: '50%',
	                    		type:'hbox'
	                    	},
	                    	items:[{
								    xtype:'textfield',
								    fieldLabel:'库存编号',
								    id:'kucun_id',
								    name:'kucun_id',
								    defaults: {
		    		                    anchor: '50%',
		                        		type:'hbox'
		    		                },
		    		                width:200,
								}, {
								    xtype:'textfield',
								    fieldLabel:'款号',
								    labelWidth: 65,
								    id:'kuanhao_id',
								    name:'kuanhao_id',
								    defaults: {
		    		                    anchor: '50%',
		                        		type:'hbox'
		    		                },
		    		                flex: 1
								}
							]
	                    }, {
                        	xtype:'container',
                        	margin:'5 0 5 0',
                        	layout:{
                        		anchor: '50%',
                        		type:'hbox'
                        	},
                        	items:[
								{
								    xtype:'textfield',
								    fieldLabel:'颜色',
								    afterLabelTextTpl: required,
								    id:'yanse',
								    name:'yanse',
								    defaults: {
		    		                    anchor: '50%',
		                        		type:'hbox'
		    		                },
		    		                width:200,
								    allowBlank: false
								}, {
								    xtype:'textfield',
								    fieldLabel:'尺码',
								    labelWidth: 65,
								    afterLabelTextTpl: required,
								    id:'chima',
								    name:'chima',
								    defaults: {
		    		                    anchor: '50%',
		                        		type:'hbox'
		    		                },
		    		                flex: 1,
								    allowBlank: false
								}
                      ]}, {
                      	xtype:'container',
                    	margin:'5 0 5 0',
                    	layout:{
                    		anchor: '50%',
                    		type:'hbox'
                    	},
                    	items:[
							{
							    xtype:'textfield',
							    fieldLabel:'建议售价(元)',
							    id:'shoujia',
							    name:'shoujia',
							    allowBlank: false,
							    defaults: {
	    		                    anchor: '50%',
	                        		type:'hbox'
	    		                },
	    		                width:200,
							    listeners:{
							    	'blur':function(){
							    		if(Ext.getCmp("shuliang").getValue()!=null
							    				&&Ext.getCmp("shuliang").getValue()!=""
							    				&&Ext.getCmp("shoujia").getValue()!=null
							    				&&Ext.getCmp("shoujia").getValue()!=""
							    				&&Ext.getCmp("col2").getValue()!=null
							    				&&Ext.getCmp("col2").getValue()!=""){
							    			var cnt=parseFloat(Ext.getCmp("col2").getValue())+parseFloat(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue());
							    			Ext.getCmp("count").setValue('<Strong><span style=\'color:red\'>'+cnt+'</span>'+' 元</Strong>');
							    			Ext.getCmp("shijishoukuan").setValue(cnt);
							    		}
							    	}
							    }
							}, {
							    xtype:'textfield',
							    fieldLabel:'运费(元)',
							    afterLabelTextTpl: required,
							    id:'col2',
							    name:'col2',
							    labelWidth: 65,
							    defaults: {
	    		                    anchor: '50%',
	                        		type:'hbox'
	    		                },
	    		                flex: 1,
	    		                allowBlank: false,
							    listeners:{
							    	'blur':function(){
							    		if(Ext.getCmp("shuliang").getValue()!=null
							    				&&Ext.getCmp("shuliang").getValue()!=""
							    				&&Ext.getCmp("shoujia").getValue()!=null
							    				&&Ext.getCmp("shoujia").getValue()!=""
							    				&&Ext.getCmp("col2").getValue()!=null
							    				&&Ext.getCmp("col2").getValue()!=""){
							    			var cnt=parseFloat(Ext.getCmp("col2").getValue())+parseFloat(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue());
							    			Ext.getCmp("count").setValue('<Strong><span style=\'color:red\'>'+cnt+'</span>'+' 元</Strong>');
							    			Ext.getCmp("shijishoukuan").setValue(cnt);
							    		}
							    	}
							    }
							}     
							]} 
                    ]}, {
                      	xtype:'container',
                    	margin:'5 11 5 11',
                    	layout:{
                    		anchor: '50%',
                    		type:'hbox'
                    	},
                    	items:[{
						    xtype:'textfield',
						    fieldLabel:'数量',
						    afterLabelTextTpl: required,
						    id:'shuliang',
						    name:'shuliang',
						    defaults: {
    		                    anchor: '50%',
                        		type:'hbox'
    		                },
    		                width:150,
						    allowBlank: false,
						    listeners:{
						    	'blur':function(){
						    		if(Ext.getCmp("shuliang").getValue()!=null
						    				&&Ext.getCmp("shuliang").getValue()!=""
						    				&&Ext.getCmp("shoujia").getValue()!=null
						    				&&Ext.getCmp("shoujia").getValue()!=""
						    				&&Ext.getCmp("col2").getValue()!=null
						    				&&Ext.getCmp("col2").getValue()!=""){
						    			var cnt=parseFloat(Ext.getCmp("col2").getValue())+parseFloat(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue());
						    			Ext.getCmp("count").setValue('<Strong><span style=\'color:red\'>'+cnt+'</span>'+' 元</Strong>');
						    			Ext.getCmp("shijishoukuan").setValue(cnt);
						    		}
						    	}
						    }
						}, {
			                xtype:'displayfield',
			                fieldLabel:'总价(元)',
			                id:'count',
			                name:'count',
			                labelWidth: 65,
			                width:140
			            }, {
			                xtype:'textfield',
			                fieldLabel:'实际成交金额(元)',
			                labelWidth: 110,
			                id:'shijishoukuan',
			                name:'shijishoukuan',
			                flex: 1,
			                allowBlank: true
			            }
				]}, {
                  	xtype:'container',
                  	margin:'5 11 5 11',
                	layout:{
                		anchor: '50%',
                		type:'hbox'
                	},
                	items:[{
			                xtype:'textfield',
			                fieldLabel:'买家编号',
			                afterLabelTextTpl: required,
			                id:'maijia_id',
			                name:'maijia_id',
			                defaults: {
    		                    anchor: '50%',
                        		type:'hbox'
    		                },
    		                width:200,
			                allowBlank: false
			            }, {
			                xtype:'textfield',
			                fieldLabel:'买家姓名',
			                labelWidth: 65,
			                afterLabelTextTpl: required,
			                id:'maijiaxingming',
			                name:'maijiaxingming',
			                allowBlank: false,
			                defaults: {
    		                    anchor: '50%',
                        		type:'hbox'
    		                },
    		                flex: 1
			            }]
                },{
                    xtype: 'radiogroup',
                    fieldLabel: '送货方式',
                    items: [{
	                        name: 'post_type',
	                        id:'post_type_10',
				            inputValue: '0',
				            boxLabel: '上门自取'
	                    }, {
	                       name: 'post_type',
	                       id:'post_type_11',
				           inputValue: '1',
				           boxLabel: '快递送货',
				           checked: true
	                    }
	                ]
            	},
            	{
	            	xtype: 'fieldset',
	                title: '备注',
	                margin:'5 0 5 0',
	                defaultType: 'textfield',
	                layout: 'anchor',
	                defaults: {
	                    anchor: '100%',
                		type:'hbox'
	                },
                	items:[{
			                xtype:'textareafield',
			                id:'beizhu',
			                name:'beizhu',
			                defaults: {
			                    anchor: '100%',
		                		type:'hbox'
			                },
			                flex: 1
			            }
                ]}, {
	                xtype:'textfield',
	                flex: 1,
	                id:'zhuangtai',
	                name: 'zhuangtai',
	                value:1,
	                hidden:true
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
