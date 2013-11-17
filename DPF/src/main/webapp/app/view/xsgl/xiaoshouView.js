Ext.define('App.view.xsgl.xiaoshouView', {
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.xiaoshouView',
    autoScroll: true,
    id: 'xiaoshouView',
    title: '任务承担单位',
    store: 'xsgl.xsglStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	tbar:[{
                id:'xsgl_query_id',
                text: '查询',
                iconCls:'icon-search',
                action:'xsgl_list_query_act'
            },'-', {
                id:'xsgl_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'xsgl_add_act'
            },'-', {
                id:'xsgl_copy_id',
                text:'拷贝销售单',
                iconCls:'icon-copy',
                action:'xsgl_copy_act'
            },'-', {
                id:'xsgl_ruku_id',
                text:'销售入库',
                iconCls:'icon-checkin',
                action:'xsgl_ruku_act'
            },'-', {
                id:'xsgl_status_id',
                text:'销售状态',
                iconCls:'icon-checkin',
                action:'xsgl_status_act'
            },'-', {
                id:'xsgl_edit_id',
                text:'编辑',
                iconCls:'icon-edit',
                action:'xsgl_list_edit_act'
            },'-', {
                id:'xsgl_del_id',
                text:'删除',
                iconCls:'icon-del',
                action:'xsgl_list_del_act'
            }],
            columns: [
					{
					    header:'销售单编号',
					    dataIndex:'xiaoshou_id', 
					    width:120
					}, {
						header:'库存编号',
						dataIndex:'kucun_id', 
						width:120
					}, {
						header:'产品名称',
						dataIndex:'col1', 
						width:180
					}, {
						header:'款号',
						dataIndex:'kuanhao_id', 
						width:80
					}, {
						header:'颜色',
						dataIndex:'yanse', 
						width:80
					}, {
						header:'尺码',
						dataIndex:'chima', 
						width:40
					}, {
						header:'数量（件）',
						dataIndex:'shuliang', 
						width:80
					}, {
						header:'售价（元）',
						dataIndex:'shoujia', 
						width:80
					}, {
						header:'实际成交金额（元）',
						dataIndex:'shijishoukuan', 
						width:110
					}, {
						header:'买家编号',
						dataIndex:'maijia_id', 
						width:80
					}, {
						header:'买家姓名',
						dataIndex:'maijiaxingming', 
						width:80
					}, {
						header:'订单状态',
						dataIndex:'zhuangtai', 
						width:70, 
						renderer:showTypeChange
					}, {
						header:'删除状态',
						dataIndex:'delflg', 
						width:60, 
						renderer:showDelStatus
					}, {
						header:'备注',
						dataIndex:'beizhu', 
						flex:1
					}
            ],
            
            dockedItems : [ {
				xtype : 'tabpanel',
				dock : 'bottom',
				height : 520,
				activeTab : 0,
				id : 'xiaoshouTab',
				items : [{
					xtype : 'panel',
					title : '订单详情',
					layout: 'fit',
					items : [ {
                    	xtype: 'form',
                        bodyPadding: 10,
                        autoScroll: true,
                        layout: 'anchor',
                        items: [{
			                	xtype:'container',
			                	margin:'5 20 5 10',
		                    	layout:{
		                    		align:'stretch',
		                    		type:'hbox'
		                    	},
		                    	items:[{
	                                xtype: 'displayfield',
	                                fieldLabel: '寄单号',
	                                labelWidth: 80,
	                                labelAlign: 'right',
	                                width:400
	            	               },{
	                                xtype: 'displayfield',
	                                fieldLabel: '销售编号',
	                                labelWidth: 80,
	                                labelAlign: 'right',
	                                margin: '0 0 0 30'
	            	              }]
			                },{
			                	xtype:'container',
			                	margin:'5 20 5 10',
		                    	layout:{
		                    		align:'stretch',
		                    		type:'hbox'
		                    	},
		                    	items:[{
	                                xtype: 'displayfield',
	                                fieldLabel: '寄件方式',
	                                labelWidth: 80,
	                                labelAlign: 'right',
	                                width:400
	            	              },{
	                                xtype: 'displayfield',
	                                fieldLabel: '买家编号',
	                                labelWidth: 80,
	                                labelAlign: 'right',
	                                margin: '0 0 0 30'
	            	              }]
			                },{
            	            	xtype: 'fieldset',
				                title: '发件人信息',
				                margin:'5 20 5 0',
				                defaultType: 'textfield',
				                layout: 'anchor',
				                defaults: {
				                    anchor: '100%',
		                    		type:'hbox'
				                },
		                    	items:[{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '发件人',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '始发地',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '联系方式',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '发件地区',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '详细地址',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '单位名称',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '内件名',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '邮寄备注',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                }]
			                },{
            	            	xtype: 'fieldset',
				                title: '收件人信息',
				                margin:'5 20 5 0',
				                defaultType: 'textfield',
				                layout: 'anchor',
				                defaults: {
				                    anchor: '100%',
		                    		type:'hbox'
				                },
		                    	items:[{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '收件人',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '目的地',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '收件人电话',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '收件地址',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '详细地址',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '单位名称',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                }]
			                },
			                {
            	            	xtype: 'fieldset',
				                title: '其他信息',
				                margin:'5 20 5 0',
				                defaultType: 'textfield',
				                layout: 'anchor',
				                defaults: {
				                    anchor: '100%',
		                    		type:'hbox'
				                },
		                    	items:[{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '标签',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '标签',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '标签',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '标签',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                },{
					                	xtype:'container',
					                	margin:'5 20 5 0',
				                    	layout:{
				                    		align:'stretch',
				                    		type:'hbox'
				                    	},
				                    	items:[{
				                                xtype: 'displayfield',
				                                fieldLabel: '标签',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                width:400
				            	               },{
				                                xtype: 'displayfield',
				                                fieldLabel: '标签',
				                                labelWidth: 80,
				                                labelAlign: 'right',
				                                margin: '0 0 0 30'
				            	              }]
					                }]
			                }
                        ]
					} ]
				}]
			} ]
        });
        me.callParent(arguments);
        function showTypeChange(val, meta, record) {
            var retVal = '';
            if (val == 0) {
                retVal = "待付款";
            }else if (val == '1') {
                retVal ='<span style=\'color:red;font-weight:bold;\'>已付款</span>';
            }else if (val == '2') {
                retVal ="已确定";
            }else if (val == '3') {
                retVal ="已发货";
            }else if (val == '4') {
                retVal ="已收货";
            }else if (val == '5') {
                retVal ='<span style=\'color:green;font-weight:bold;\'>完成</span>';
            }else if (val == '6') {
                retVal ="关闭";
            }
            return retVal;
        }
        
        //function showTypeChange(val, meta) {
        //	if(val == '0') {
        //		meta.tdCls = 'red';
        //        return '未入库';
        //    } else if(val == '1'){
        //    	meta.tdCls = 'green';
        //        return '已入库';
        //    }
        //}
        function showDelStatus(val) {
            if(val == '0') {
                return '未删除';
            } else if(val == '1'){
                return '已删除';
            }
        }
    }

});