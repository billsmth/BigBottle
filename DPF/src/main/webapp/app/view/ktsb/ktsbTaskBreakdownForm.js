Ext.define("App.view.ktsb.ktsbTaskBreakdownForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbTaskBreakdownForm',
	autoScroll : true,
	layout : {
		type : 'fit'
	},
	title : '经费及任务分解',
	items : [ {
		xtype : 'container',
		autoScroll : false,
		layout : {
			align : 'stretch',
			type : 'hbox'
		},
		items : [ {
			itemId : 'ktsbResearchTaskGrid',
			xtype : 'gridpanel',
			flex : 1,
			height : 150,
			autoScroll : true,
			title : '研究任务设置',
			store :'ktsb.ktsbResearchTaskStore',
			columns : [ {
				xtype : 'gridcolumn',
				dataIndex : 'sortNo',
				text : '序号'
			},{
				xtype : 'gridcolumn',
				dataIndex : 'taskName',
				text : '任务名称'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'researchContent',
				text : '主要研究内容'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'checkTarget',
				text : '考核指标'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'assumeOrgName',
				text : '承担单位'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'joinOrgName',
				text : '参加单位'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'outlay',
				text : '经费'
			} ],
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'top',
				items : [ {
					xtype : 'button',
					iconCls : 'icon-add',
					text : '添加',
					itemId : 'ktsb_research_task_add'
				}, {
					xtype : 'tbseparator'
				}, {
					xtype : 'button',
					iconCls : 'icon-edit',
					text : '编辑',
					itemId : 'ktsb_research_task_edit'
				}, {
					xtype : 'tbseparator'
				}, {
					xtype : 'button',
					iconCls : 'icon-del',
					text : '删除',
					itemId: 'ktsb_research_task_del'
				}, {
					xtype : 'tbseparator'
				} ]
			} ]
		}, {
//			itemId :'ktsbResearchFundGrid',
			xtype : 'gridpanel',
			flex : 1,
			height : 150,
			autoScroll : true,
			title : '研究经费按单位分配',
			store : 'ktsb.ktsbResearchOutlayStore',
			itemId : 'ktsbResearchOutlayPeopleGrid',
			columns : [ {
				xtype : 'gridcolumn',
				dataIndex : 'sortNo',
				text : '序号',
				flex : 1
			},{
				xtype : 'gridcolumn',
				dataIndex : 'orgName',
				text : '单位',
				flex : 2
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'task',
				text : '承担任务',
				flex : 2
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'checkTarget',
				text : '考核指标',
				flex : 1
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'outlay',
				text : '分配经费',
				flex : 1
			} ],
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'top',
				items : [ {
					xtype : 'button',
					iconCls : 'icon-add',
					itemId : 'ktsb_researchOutlay_add',
					text : '添加'
				}, {
					xtype : 'tbseparator'
				}, {
					xtype : 'button',
					iconCls : 'icon-edit',
					itemId : 'ktsb_researchOutlay_edit',
					text : '编辑'
				}, {
					xtype : 'tbseparator'
				}, {
					xtype : 'button',
					iconCls : 'icon-del',
					itemId : 'ktsb_researchOutlay_del',
					text : '删除'
				}, {
					xtype : 'tbseparator'
				} ]
			} ]
		} ]
	} ]

});