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
		                id:'product_search_id',
		                text: '查询',
		                iconCls:'icon-search',
		                action:'product_list_search_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_add_id',
		                text: '添加',
		                iconCls:'icon-add',
		                action:'product_list_add_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_edit_id',
		                text: '编辑',
		                iconCls:'icon-edit',
		                action:'product_list_edit_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_del_id',
		                text: '删除',
		                iconCls:'icon-del',
		                action:'product_list_del_act'
		            },{
		                xtype: 'tbseparator'
		            },{
		                id:'product_upfile_id',
		                text: '测试上传功能',
		                iconCls:'icon-edit',
		                action:'product_list_upfile_act'
		            }
	            ]
        	,
            columns: [
            {
                xtype: 'gridcolumn',
                dataIndex: 'product_id',
                text: '产品ID',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'product_name',
                text: '产品名称',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'path',
                text: '图片路径',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'image_name',
                text: '图片',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'template_id',
                text: '模板编号',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'desp',
                text: '描述',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'status',
                text: '状态',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'creater_id',
                text: '创建者编号',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'type',
                text: '种类',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'new_flg',
                text: '是否新品',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'note',
                text: '备注',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col1',
                text: '信息1',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col2',
                text: '信息2',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col3',
                text: '信息3',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col4',
                text: '信息4',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col5',
                text: '信息5',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col6',
                text: '信息6',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col7',
                text: '信息7',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'col8',
                text: '信息8',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'kucun_ids',
                text: '对应库存',
                flex:1
            }]
        	 ,
            
            dockedItems : [ {
				xtype : 'tabpanel',
				dock : 'bottom',
				height : 320,
				activeTab : 0,
				id : 'productTab',
				items : [ {
					xtype : 'panel',
					title : '产品详情',
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
					title : '产品页面',
					layout : {
						type : 'fit'
					},
					items : [ {
						xtype : 'htmleditor',
						id : 'productMainContent',
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
							action : 'product_maincontent_save_act'
						} ]
					} ]
				}, {
					xtype : 'panel',
					title : '产品',
					layout : {
						type : 'fit'
					},
					items : [ {
						xtype : 'htmleditor',
						id : 'productSummary',
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
							action : 'product_summary_save_act'
						} ]
					} ]
				} ]
			} ]
        });
        

        Ext.each(this.tbar2, function(item, index) {
            this.tbar.push(item);
        }, this);
        me.callParent(arguments);
    }

});

