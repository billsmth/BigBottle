Ext.define("App.view.ktsb.ktsbMemberOrgForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbMemberOrgForm',
	autoScroll : true,
	layout : {
		type : 'fit'
	},
	title : '支持单位信息',
	items : [ {
		itemId:'ktsbCompanyListGrid',
		xtype : 'gridpanel',
		minHeight : 200,
		autoScroll : true,
		title : '',
		store : 'ktsb.ktsbdwlistStore',
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				xtype : 'button',
				itemId : 'ktsb_zcdw_add',
				iconCls : 'icon-add',
				text : '添加'
			}, 
//			{
//				xtype : 'tbseparator'
//			}, {
//				xtype : 'button',
//				itemId : 'ktsb_zcdw_edit',
//				iconCls : 'icon-edit',
//				text : '编辑'
//			}, 
			{
				xtype : 'tbseparator'
			}, {
				xtype : 'button',
				itemId : 'ktsb_zcdw_del',
				iconCls : 'icon-del',
				text : '删除'
			} ]
		} ],
		columns : [{
			xtype : 'gridcolumn',
			dataIndex : 'softNo',
			text : '序号'
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'companyName',
			text : '单位名称'
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'companyProp',
			text : '单位性质'
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'orgNo',
			text : '机构代码'
		} ,{
			xtype : 'gridcolumn',
			dataIndex : 'address',
			text : '通信地址',
			flex : 1
		}]
	} ]

});