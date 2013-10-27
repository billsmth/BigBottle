
Ext.define("App.view.ktsb.ktsbCapabilityForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbCapabilityForm',
	autoScroll : true,
	title : '基础条件及优势',
	layout:{
		align:'stretch',
		type:'vbox'
	},
	items : [{
				xtype : 'container',
				flex:0.3,
				layout : {
					align : 'stretch',
					type : 'hbox'
				},
				items : [{
							xtype : 'htmleditor',
							name : 'advantagetext',
							flex : 1,
							frame : false,
							height : 100,
							value : '基础条件和优势',
							labelAlign : 'top'
						}, {
							xtype : 'htmleditor',
							name : 'mainPeopletext',
							flex : 1,
							height : 100,
							value : '负责人及主要骨干人员',
							labelAlign : 'top'
						}]
			}, {
				xtype : 'container',
				flex:0.7,
				layout : {
					align : 'stretch',
					type : 'hbox'
				},
				items : [{
					itemId : 'ktsbCapabilityPeopleGrid',
					xtype : 'gridpanel',
					flex : 1,
					height : 150,
					autoScroll : true,
					store :'ktsb.ktsbMainPeopleStore',
					title : '主要人员情况',
					columns : [{
								xtype : 'gridcolumn',
								//dataIndex : 'people_xz_order',
								dataIndex : 'sortNo',
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'id',
								hidden : true
							},
					           {
								xtype : 'gridcolumn',
								dataIndex : 'name',
								text : '姓名'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'sex',
								text : '性别'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'age',
								text : '年龄'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'title',
								text : '职称'
							},
//							{
//								xtype : 'gridcolumn',
//								dataIndex : 'people_zyry_title',
//								text : '职务'
//							}, 
							{
								xtype : 'gridcolumn',
								dataIndex : 'specialty',
								text : '专业'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'dutyTask',
								text : '课题中职位及分担的任务'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'taskTime',
								text : '累计为本课题工作时间（人月）'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'idType',
								text : '证件类型'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'idNumber',
								text : '证件号码'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'company',
								text : '所在单位'
							}
//							, {
//								xtype : 'gridcolumn',
//								dataIndex : 'sortNo',
//								text : '排序'
//							}
							],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'top',
						items : [{
							itemId : 'ktsb_mainPeople_add',
							xtype : 'button',
							iconCls : 'icon-add',
							text : '添加'
						}, 
//						{
//							xtype : 'tbseparator'
//						}, {
//							itemId : 'ktsb_mainPeople_edit',
//							xtype : 'button',
//							iconCls : 'icon-edit',
//							text : '编辑'
//						}, 
						{
							xtype : 'tbseparator'
						}, {
							itemId : 'ktsb_mainPeople_del',
							xtype : 'button',
							iconCls : 'icon-del',
							text : '删除'
						}, {
							xtype : 'tbseparator'
						}]
					}]
				}, {
					itemId :'ktsbOtherKtGrid',
					xtype : 'gridpanel',
					flex : 1,
					height : 150,
					autoScroll : true,
					title : '目前承担其他课题情况',
					store :'ktsb.ktsbOtherKtStore',
					columns : [ {
								xtype : 'gridcolumn',
								dataIndex : 'sortNo',
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'leaderName',
								text : '姓名'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'issueName',
								text : '课题名称'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'outlay',
								text : '课题经费数（万元）'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'startDateStr',
								text : '课题开始时间'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'endDateStr',
								text : '课题结束时间'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'belongPlan',
								text : '所属科技计划'
							}],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'top',
						items : [{
							xtype : 'button',
							iconCls : 'icon-add',
							text : ' 添加',
							itemId : 'ktsb_qtkt_add'
						}, {
							xtype : 'tbseparator'
						}, {
							xtype : 'button',
							iconCls : 'icon-edit',
							text : '编辑',
							itemId : 'ktsb_qtkt_edit'
						}, {
							xtype : 'tbseparator'
						}, {
							xtype : 'button',
							iconCls : 'icon-del',
							itemId : 'ktsb_qtkt_del',
							text : '删除'
						}, {
							xtype : 'tbseparator'
						}]
					}]
				}]
			}]


});