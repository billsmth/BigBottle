Ext.define('App.view.xsgl.xsglQueryWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.xsglQueryWin',
    id:'xsglQueryWin',
    
    layout: {
        type: 'fit'
    },
    title: '查询销售信息',
    closable:false,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [{
                    xtype: 'form',
	                region: 'south',
	                width:450,
	                bodyPadding: 7,
	                fieldDefaults: {
		                labelAlign: 'right',
		                labelWidth: 80,
		                msgTarget: 'qtip'
	            	},
                    items: [{
                    	xtype : 'panel',
                    	width :  "50%",
                    	height : 170,
                    	border : false,
                    	labelWidth : 35,
                        defaults: {
                            anchor: '100%'
                        },
                        items:[{
                	        xtype:'textfield',
                	        fieldLabel:'销售单编号',
                	        width: 400,
                	        id:'xiaoshou_id2',
                	        name:'xiaoshou_id',
                	        emptyText:"支持模糊查询,前端一致",
                	        allowBlank: true
                	    }, {
                	        xtype:'textfield',
                	        fieldLabel:'库存编号',
                	        width: 400,
                	        id:'kucun_id2',
                	        name:'kucun_id',
                	        emptyText:"支持模糊查询,前后任意一致",
                	        allowBlank: true
                	    }, {
                	        xtype:'textfield',
                	        fieldLabel:'档口款号',
                	        width: 400,
                	        id:'kuanhao_id2',
                	        name:'kuanhao_id',
                	        emptyText:"精确查询",
                	        allowBlank: true
                	    }, {
                	        xtype:'textfield',
                	        fieldLabel:'颜色',
                	        width: 400,
                	        id:'yanse2',
                	        name:'yanse',
                	        emptyText:"支持模糊查询,前后任意一致",
                	        allowBlank: true
                	    }, {
                	        xtype:'textfield',
                	        fieldLabel:'尺码',
                	        width: 400,
                	        id:'chima2',
                	        name:'chima',
                	        emptyText:"支持模糊查询,前后任意一致",
                	        allowBlank: true
                	    }, {
            			    xtype:'textfield',
            			    fieldLabel:'备注',
            			    width: 400,
            			    id:'beizhu2',
            			    name:'beizhu',
            			    emptyText:"支持模糊查询,前后任意一致",
            			    allowBlank: true
            			}]
                    },{
                    	xtype : 'panel',
                    	width : "50%",
                    	height : 170,
                    	labelWidth : 35,
                    	border : false,
                    	defaults: {
                            anchor: '100%'
                        },
                        items:[
            				{
            				    xtype:'textfield',
            				    fieldLabel:'买家编号',
            				    width: 400,
            				    id:'maijia_id2',
            				    emptyText:"精确查询",
            				    name:'maijia_id',
            				    allowBlank: true
            				}, {
            				    xtype:'textfield',
            				    fieldLabel:'买家姓名',
            				    width: 400,
            				    id:'maijiaxingming2',
            				    name:'maijiaxingming',
            				    emptyText:"支持模糊查询,前后任意一致",
            				    allowBlank: true
            				}, {
            				    fieldLabel: '订单状态',
                                name: 'zhuangtai',
                                xtype: 'combobox',
                                anchor: '100%',
                                store:'com.XiaoshouStatusStore',
            	                queryMode: 'local',
            	                displayField: 'value',
            	                valueField: 'key',
            	                triggerAction: 'all',
                                allowBlank: true
            				}, {
            				    xtype:'datefield',
            				    fieldLabel:'统计日期(始)',
            				    width: 400,
            				    id:'startdate',
            				    name:'startdate',
            				    emptyText:"结果包含当前日期",
            				    format:'Y-m-d',
            				    maxValue: new Date(),
            				    allowBlank: true
            				}, {
            				    xtype:'datefield',
            				    fieldLabel:'统计日期(终)',
            				    width: 400,
            				    id:'enddate',
            				    name:'enddate',
            				    emptyText:"结果包含当前日期",
            				    format:'Y-m-d',
            				    maxValue: new Date(),
            				    allowBlank: true
            				},new Ext.form.RadioGroup({
            				    fieldLabel: '删除状态',
            				    id:'delflg2',
            				    name:'delflg',
            				    width: 450,
            				    items: [{
            				        name: 'delflg',
            				        inputValue: '',
            				        boxLabel: '任    意',
            				        checked: true
            				    }, {
            				        name: 'delflg',
            				        inputValue: '0',
            				        boxLabel: '未删除'
            				    }, {
            				        name: 'delflg',
            				        inputValue: '1',
            				        boxLabel: '已删除'
            				    }]
            				})
                        ]
                    }],
                    buttons:[{
                        text: '查询',
                        iconCls : 'icon-submit',
                        action:'xsgl_query_query_act'
                    },{
                        text: '重置条件',
                        iconCls : 'icon-refresh',
                        action:'xsgl_query_reset_act'
                    },{
                        text: '取消',
                        iconCls : 'icon-cancel',
                        action:'xsgl_query_cancel_act'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }
});