Ext.define('App.view.product.productView', {
    extend: 'Ext.grid.Panel',

    alias : 'widget.productView',
    id:'productView',
    
    height: 320,
    
    title: '产品列表',
    store: 'product.productStore',
    
    initComponent: function() {
        var me = this;
        Ext.apply(Ext.form.field.VTypes, {
	        daterange: function(val, field) {
	            return true;
	        },

            daterangeText: '开始日期必须大于结束日期'
        });
        Ext.applyIf(me, {
	            tbar:[{
	                xtype: 'tbseparator'
	            },{
	                id:'meeting_search_id',
	                text: '查询',
	                iconCls:'icon-search',
	                action:'meeting_list_search_act'
	            },{
	                xtype: 'tbseparator'
	            },{
	                id:'meeting_add_id',
	                text: '添加',
	                iconCls:'icon-add',
	                action:'meeting_list_add_act'
	            },{
	                xtype: 'tbseparator'
	            },{
	                id:'meeting_edit_id',
	                text: '编辑',
	                iconCls:'icon-edit',
	                action:'meeting_list_edit_act'
	            },{
	                xtype: 'tbseparator'
	            },{
	                id:'meeting_del_id',
	                text: '删除',
	                iconCls:'icon-del',
	                action:'meeting_list_del_act'
	            },{
	                xtype: 'tbseparator'
	            }
	            ,{
	                id:'meeting_upfile_id',
	                text: '测试上传功能',
	                iconCls:'icon-edit',
	                action:'meeting_list_upfile_act'
	            }
	            ]
        	,
            columns: [
            {
                xtype: 'gridcolumn',
                dataIndex: 'title',
                text: '主题',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'address',
                text: '地点',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'beginTimeStr',
                text: '开始时间',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'endTimeStr',
                text: '结束时间',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'contact',
                text: '联系人',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'contactTel',
                text: '联系电话',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'contactEmail',
                text: '联系邮箱',
                flex:1
            }]
        	 ,
            
            dockedItems : [ {
				xtype : 'tabpanel',
				dock : 'bottom',
				height : 320,
				activeTab : 0,
				id : 'meetingTab',
				items : [ {
					xtype : 'panel',
					title : '会议详情',
					layout: 'fit',
					items : [ {
                    	xtype: 'form',
                        bodyPadding: 10,
                        autoScroll: true,
                        layout: 'anchor',
                        items: [
            	            {
			                	xtype:'container',
			                	margin:'5 20 5 0',
		                    	layout:{
		                    		align:'stretch',
		                    		type:'hbox'
		                    	},
		                    	items:[{
		                                xtype: 'displayfield',
		                                fieldLabel: '会议主题',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		                                width:400
			                    	   },{
		                                xtype: 'displayfield',
		                                fieldLabel: '主持人',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		                                margin: '0 0 0 30'
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
		                                xtype: 'displayfield',
		                                fieldLabel: '会议日期',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		                                width:400
		            	               },{
	            	            	    xtype: 'displayfield',
		                                fieldLabel: '联系人',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		                                margin: '0 0 0 30'
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
		                                xtype: 'displayfield',
		                                fieldLabel: '会议地点',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		                                width:400
		            	               },{
		                                xtype: 'displayfield',
		                                fieldLabel: '联系方式',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		                                margin: '0 0 0 30'
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
		                                xtype: 'displayfield',
		                                fieldLabel: '必须参会人员',
		                                labelWidth: 80,
		                                labelAlign: 'right'
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
		                                xtype: 'displayfield',
		                                fieldLabel: '可选参会人员',
		                                labelWidth: 80,
		                                labelAlign: 'right',
		            	              }]
			                }
            	            ,
            	            {
                                xtype: 'displayfield',
                                fieldLabel: '简介',
                                labelWidth: 80,
                                labelAlign: 'right',
                                margin:'5 20 5 0',
                                anchor:'100%'
			                }
            	            ,{
                                xtype: 'displayfield',
                                fieldLabel: '要求',
                                labelWidth: 80,
                                labelAlign: 'right',
            	            }
                        ]
					} ]
				},  {
					xtype : 'panel',
					title : '会议纪要',
					layout : {
						type : 'fit'
					},
					items : [ {
						xtype : 'htmleditor',
						id : 'meetingMainContent',
						height : 150,
					} ],
					dockedItems : [ {
						xtype : 'toolbar',
						dock : 'top',
						height : 30,
						items : [ {
							xtype : 'button',
							text : '保存',
							iconCls : 'icon-submit',
							action : 'meeting_maincontent_save_act'
						} ]
					} ]
				}, {
					xtype : 'panel',
					title : '会议总结',
					layout : {
						type : 'fit'
					},
					items : [ {
						xtype : 'htmleditor',
						id : 'meetingSummary',
						height : 150,
					} ],
					dockedItems : [ {
						xtype : 'toolbar',
						dock : 'top',
						height : 30,
						items : [ {
							xtype : 'button',
							text : '保存',
							iconCls : 'icon-submit',
							action : 'meeting_summary_save_act'
						} ]
					} ]
				} ]
			} ]
        });
        

        Ext.each(this.tbar2, function(item, index) {
            this.tbar.push(item);
        }, this)
        me.callParent(arguments);
    }

});

