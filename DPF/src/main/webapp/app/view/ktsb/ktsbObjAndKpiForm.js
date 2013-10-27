
Ext.define("App.view.ktsb.ktsbObjAndKpiForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbObjAndKpiForm',
	autoScroll : true,
	title : '总体目标及指标',
	layout:{
		align:'stretch',
		type:'vbox'
	},
//	layout:'fit',					
	items : [{
				xtype : 'htmleditor',
				name : 'objAndKpitext',
				flex:0.3,
				height : 100,
				value : '总体目标及指标',
//				margin:'0 0 0 5',
				labelAlign : 'top'
			},{
				xtype : 'container',
				flex:0.7,
				layout: {
					align:'stretch',
					type: 'hbox'
				},
		items :[
		{			
					itemId : 'ktxxTaskTargetGrid',
					xtype : 'gridpanel',
					flex : 1,
					height : 150,
					autoScroll : true,
					margin:'0 5 0 0',
					title : '年度任务及指标',
					store : 'ktsb.ktxxTaskTargetStore',
					columns : [{
									xtype : 'gridcolumn',
									dataIndex : 'id',
									hidden :true
								},{
									xtype : 'gridcolumn',
									dataIndex : 'issueId',
									hidden :true
								},
					           {
								xtype : 'gridcolumn',
								dataIndex : 'sortNo',
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'yearPlan',
								text : '年度'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'task',
								text : '年度任务'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'kpi',
								flex:1,
								text : '年度考核指标'
							}],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'top',
						items : [{
							itemId : 'ktsb_tasktarget_add',
							xtype : 'button',
							iconCls : 'icon-add',
							text : '添加'
						}, {
							xtype : 'tbseparator'
						}, {
							itemId : 'ktsb_tasktarget_edit',
							xtype : 'button',
							iconCls : 'icon-edit',
							text : '编辑'
						}, {
							xtype : 'tbseparator'
						}, {
							itemId : 'ktsb_tasktarget_del',
							xtype : 'button',
							iconCls : 'icon-del',
							text : '删除'
						}, {
							xtype : 'tbseparator'
						}]
					}]
				}, {
					itemId : 'ktxxsfgcGrid',
					xtype : 'gridpanel',
					flex : 1,
					height : 150,
					autoScroll : true,
					title : '示范工程及配套条件',
					store : 'ktsb.ktxxSfgcStore',
					columns : [{
								xtype : 'gridcolumn',
								dataIndex : 'id',
								hidden :true
							},{
								xtype : 'gridcolumn',
								dataIndex : 'issueId',
								hidden :true
							},{
								xtype : 'gridcolumn',
								dataIndex : 'sortNo',
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'mainProject',
								text : '主要示范工程'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'supportCondition',
								flex:1,
								text : '配套条件及落实情况'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'localOrg',
								flex:1,
								text : '地方责任单位'
							}],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'top',
						items : [{
							itemId:'ktsb_sfgc_add',
							xtype : 'button',
							iconCls : 'icon-add',
							text : '添加'
						}, {
							xtype : 'tbseparator'
						}, {
							itemId:'ktsb_sfgc_edit',
							xtype : 'button',
							iconCls : 'icon-edit',
							text : '编辑'
						}, {
							xtype : 'tbseparator'
						}, {
							itemId:'ktsb_sfgc_del',
							xtype : 'button',
							iconCls : 'icon-del',
							text : '删除'
						}, {
							xtype : 'tbseparator'
						}]
					}]
				}
		]

	}]


});