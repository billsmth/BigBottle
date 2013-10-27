Ext.define('App.view.cddw.cddwView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.cddwlist',
    autoScroll: true,
    id: 'cddwList',
    title: '任务承担单位',
    store: 'cddw.cddwJsonStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	tbar:[{
                id:'cddw_query_id',
                text: '查询',
                iconCls:'icon-search',
                action:'cddw_list_query_act'
            }, 
            {
                id:'cddw_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'cddw_list_add_act'
            }, {
                id:'cddw_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'cddw_list_edit_act'
            }, {
                id:'cddw_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'cddw_list_del_act'
            }],
            columns: [
            	{
                    xtype: 'gridcolumn',
                    dataIndex: 'companyName',
                    flex: 1,
                    text: '单位名称'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'orgNo',
                    flex: 1,
                    text: '组织机构代码'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'address',
                    flex: 1,
                    text: '通信地址'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'companyProp',
                   	flex: 1,
                    text: '单位性质',
                    renderer: function(val){
                    	var retVal = '';
	                    if (val == 1) {
	                        retVal = '社团';
	                    } else if (val == 2) {
	                        retVal = '事业单位';
	                    } else if (val == 3) {
	                        retVal = '高校';
	                    } else if (val == 4) {
	                        retVal = '科研';
	                    } else if (val == 5) {
	                        retVal = '其他';
	                    } 
	                    return retVal;
                    }
                }
            ],
            dockedItems:[
            	{
            		xtype: 'tabpanel',
                    dock: 'bottom',
                    height: 300,
                    activeTab: 0,
                    items:[
                    	    {
							xtype : 'panel',
							title : '详细信息',
							layout: 'auto',
							autoScroll : true,
							items : [ {
		                    	xtype: 'form',
		                    	id:'cddwViewForm',
		                        bodyPadding: 10,
		                        autoScroll: true,
		                        layout: 'anchor',
		                        fieldDefaults: {
						                labelAlign: 'right',
						                labelWidth: 90,
						                msgTarget: 'qtip',
						                anchor: '100%'
						            },
		                        items: [
		            	            {
					                	xtype:'container',
					                	margin: '0 0 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '单位名称',
				                        		name: 'companyName',
				                                flex: 1
					                    	   },{
				                                xtype: 'displayfield',
				                                fieldLabel: '组织机构代码',
				                        		name: 'orgNo',
				                                flex: 1
				            	               }]
					                },
		            	            {
					                	xtype:'container',
					                	margin: '0 0 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '通信地址',
				                        		name: 'address',
				                               	flex: 1
				            	               },{
			            	            	    xtype: 'displayfield',
				                                fieldLabel: '单位性质',
				                        		name: 'companyProp',
				                                flex: 1,
				                                renderer: function(val){
								                    	var retVal = '';
									                    if (val == 1) {
									                        retVal = '社团';
									                    } else if (val == 2) {
									                        retVal = '事业单位';
									                    } else if (val == 3) {
									                        retVal = '高校';
									                    } else if (val == 4) {
									                        retVal = '科研';
									                    } else if (val == 5) {
									                        retVal = '其他';
									                    } 
									                    return retVal;
								                    }
				            	              }]
					                },
					                {
					                	xtype:'container',
					                	margin: '0 0 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '开户银行',
				                        		name: 'bankName',
				                                flex: 1
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '银行账号',
				                        		name: 'bankAccount',
				                                flex: 1
				            	              }]
					                }
		            	            ,
		            	            {
		                                xtype: 'displayfield',
		                                fieldLabel: '法人信息',
				                        name: 'legalMsg',
		                               	margin: '0 0 5 0',
		                               	flex: 1
					                }
		                        ]
							} ]
					} ]
            	}
            ]
            
        });
        me.callParent(arguments);
    }

});