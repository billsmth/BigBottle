Ext.define('App.view.meeting.maddwinForAgain', {
    extend: 'Ext.window.Window',

    alias : 'widget.maddfawin',
    id:'maddfawin',
    
    layout: {
        type: 'fit'
    },
    
    title: '添加会议',
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 5,
                fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'qtip'
	            },
                items: [{
	                xtype: 'fieldset',
	                title: '会议信息',
	                defaultType: 'combobox',
	                layout: 'anchor',
	                defaults: {
	                    anchor: '100%'
	                },
	                	items: [ {
		                	xtype:'container',
		                	margin:'5 20 5 0',
		                	layout:{
		                		align:'stretch',
		                		type:'hbox'
			                	},
			                	items:[{
			                		xtype: 'textfield',
			                		hidden: true,
			                		name:'softDel',
			                		value: 1
			                	},{
			                		xtype: 'textfield',
			                		hidden: true,
			                		name:'status',
			                		value: 1
			                	},{
				                    xtype: 'textfield',
				                    flex: 1,
				                    fieldLabel: '议题',
				                    name:'title',
				                    maxLength: 15,
				                    labelAlign: 'right',
				                    labelWidth: 90
				                },{
				                    xtype: 'textfield',
				                    flex: 1,
				                    fieldLabel: '地点',
				                    name:'address',
				                    maxLength: 15,
				                    labelAlign: 'right',
				                    labelWidth: 90
				                }]
			                },{
		                		xtype:'container',
			                	margin:'5 20 5 0',
		                    	layout:{
		                    		align:'stretch',
		                    		type:'hbox'
			                    	},
			                    	 items:[{
			     		                xtype: 'textfield',
			     		                flex: 1,
			     		                fieldLabel: '联系人',
			     		                name:'contact',
			     		                maxLength: 15,
			     		                labelAlign: 'right',
			     		                labelWidth: 90
			     		            }, {
			     		                xtype: 'textfield',
			     		                flex: 1,
			     		                fieldLabel: '联系电话',
			     		                name:'contactTel',
			     		                maxLength: 15,
			     		                labelAlign: 'right',
			     		                labelWidth: 90
			     		            }]
				                },{
				                	xtype:'container',
				                	margin:'5 20 5 0',
			                    	layout:{
			                    		align:'stretch',
			                    		type:'hbox'
				                    	},
				                    	 items:[{
				     		                xtype: 'textfield',
				     		                flex: 1,
				     		                fieldLabel: '联系邮箱',
				     		                name:'contactEmail',
				     		                maxLength: 30,
				     		                vtype: 'email',
				     		                labelAlign: 'right',
				     		                labelWidth: 90
				     		            }, {
				     		                xtype: 'textfield',
				     		                flex: 1,
				     		                fieldLabel: '主持人',
				     		                name:'compere',
				     		                maxLength: 15,
				     		                labelAlign: 'right',
				     		                labelWidth: 90
				     		            }]
					                }
				                ,
				                {
			                	xtype:'container',
			                	margin:'5 20 5 0',
		                    	layout:{
		                    		align:'stretch',
		                    		type:'hbox'
			                    	},
			                    	 items:[{
			     		                xtype: 'datefield',
			     	                    flex: 1,
			     		                fieldLabel: '开始日期',
			     		                name:'beginTimeStr',
			     		                labelAlign: 'right',
			     		                labelWidth: 90,
				                		format:'Y-m-d',
				                		id:'addBeginTimeStr3',
				                		endDateField:'endTimeStr'
			     		            }, {
			     		                xtype: 'timefield',
			     	                    flex: 1,
			     		                fieldLabel: '开始时间',
			     		                name:'beginTimeStr2',
			     		                labelAlign: 'right',
			     		                labelWidth: 90,
				                		format:'H:i',
				                		id:'addBeginTimeStr4',
				                		startDateField:'endTimeStr2'
			     		            }]
				                },
					                {
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
					                    	},
					                    	 items:[{
					     		                xtype: 'datefield',
					     	                    flex: 1,
					     		                fieldLabel: '结束日期',
					     		                name:'endTimeStr',
					     		                labelAlign: 'right',
					     		                labelWidth: 90,
						                		format:'Y-m-d',
						                		id:'addEndTimeStr3',
						                		endDateField:'endTimeStr'
					     		            }, {
					     		                xtype: 'timefield',
					     	                    flex: 1,
					     		                fieldLabel: '结束时间',
					     		                name:'endTimeStr2',
					     		                labelAlign: 'right',
					     		                labelWidth: 90,
						                		format:'H:i',
						                		id:'addEndTimeStr4',
						                		startDateField:'endTimeStr2'
					     		            }]
						                },
						                {
						                	xtype:'container',
						                	margin:'5 20 5 0',
					                    	layout:{
					                    		align:'stretch',
					                    		type:'hbox'
						                    	},
						                    	 items:[{
						     		                xtype: 'combobox',
						     	                    anchor: '100%',
						     		                fieldLabel: '必选参会人员',
						     		                name:'mainPeople',
						     		                labelAlign: 'right',
						     		                labelWidth: 90,
						     		                width:450,
						     		                displayField:'name',
						     		                valueField:'idpeople',
						     		                multiSelect:true,
						                            store:'people.peopleStore'
						     		            }]
						                },
						                {
						                	xtype:'container',
						                	margin:'5 20 5 0',
					                    	layout:{
					                    		align:'stretch',
					                    		type:'hbox'
						                    	},
						                    	 items:[{
						     		                xtype: 'combobox',
						     	                    anchor: '100%',
						     		                fieldLabel: '可选参会人员',
						     		                name:'maybePeople',
						     		                labelAlign: 'right',
						     		                labelWidth: 90,
						     		                width:450,
						     		                displayField:'name',
						     		                valueField:'idpeople',
						     		                multiSelect:true,
						                            store:'people.peopleStore'
						     		            }]
						                }
					                ,{
				                	xtype:'container',
				                	margin:'5 20 5 0',
			                    	layout:{
			                    		align:'stretch',
			                    		type:'hbox'
				                    	},
				                    	 items:[{
				     		                xtype: 'textareafield',
				     		                fieldLabel: '会议内容',
				     		                name:'agend',
						                    maxLength: 300,
				     		                labelWidth: 90,
				     		                labelAlign: 'right',
				     		                width:450
				     		            }]
					                }
					                ,
					                {
				                	xtype:'container',
				                	margin:'5 20 5 0',
			                    	layout:{
			                    		align:'stretch',
			                    		type:'hbox'
				                    	},
				                    	 items:[{
				     		                xtype: 'textareafield',
				     	                    anchor: '100%',
				     		                fieldLabel: '参会要求',
				     		                name:'meetingRequest',
						                    maxLength: 300,
				     		                labelAlign: 'right',
				     		                labelWidth: 90,
				     		                width:450
				     		            }]
					                }
//					                ,{
//					                	xtype:'container',
//					                	margin:'5 20 5 0',
//					                	width: 410,
//				                    	layout:{
//				                    		align: 'stretch',
//				                    		type:'hbox'
//					                    	},
//					                    	 items:[{
//					     		                xtype: 'textfield',
//					     		                fieldLabel: '必参人员',
//					     		                name:'',
//					     		                labelAlign: 'right',
//					     		                labelWidth: 70,
//					     		                flex:1
//					     		            }]
//						                },{
//					                	xtype:'container',
//					                	margin:'5 20 5 0',
//					                	width: 410,
//				                    	layout:{
//				                    		align: 'stretch',
//				                    		type:'hbox'
//					                    	},
//					                    	 items:[{
//					     		                xtype: 'textfield',
//					     		                fieldLabel: '选参人员',
//					     		                name:'',
//					     		                labelAlign: 'right',
//					     		                labelWidth: 70,
//					     		                flex: 1
//					     		            }]
//						                }
					//	            , {
					//	                xtype: 'combobox',
					//                    anchor: '100%',
					//	                fieldLabel: '审批状态',
					//	                name:'status',
					//	                labelAlign: 'right',
					//	                labelWidth: 60,
					//	                store:'com.ApproveStatusStore',
					//	                queryMode: 'local',
					//	                displayField: 'value',
					//	                valueField: 'value'
					//                }
	                	]
	                }
			                
		                ]
		            }],
		            buttons:[{
		                text: '提交',
		                iconCls : 'icon-search',
		                action:'meeting_add_exec_act2'
		            }, {
		                text: '关闭',
		                iconCls : 'icon-cancel',
		                action:'meeting_add_cancel_act2'
		            }]
		        });
        me.callParent(arguments);
    }

});