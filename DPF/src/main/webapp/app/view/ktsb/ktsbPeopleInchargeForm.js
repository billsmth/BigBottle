
Ext.define("App.view.ktsb.ktsbPeopleInchargeForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbPeopleInchargeForm',
	title : '责任人信息',
	layout : {
		type : 'fit'
	},
	items : [{
				xtype : 'container',
				autoScroll : true,
				layout : {
					align : 'stretch',
					type : 'hbox'
				},
				defaults:{margin:'0 0 0 0'},
				items : [{
					xtype : 'gridpanel',
					itemId:'ktsbPeopleGrid',
					store:'ktsb.ktsbPeopleStore',
					flex : 1,
					height : 150,
					autoScroll : true,
					title : '行政责任人',
					columns : [{
								xtype : 'gridcolumn',
								//dataIndex : 'people_xz_order',
								dataIndex : 'sortNo',
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'name',
								text : '姓名'
							}, {
								xtype : 'gridcolumn',
//								dataIndex : 'people_xz_birthday',
								dataIndex : 'birthday',
								
								text : '出生日期'
							}, {
								xtype : 'gridcolumn',
//								dataIndex : 'people_xz_org',
								dataIndex : 'company',
								text : '单位名称'
							}, {
								xtype : 'gridcolumn',
//								dataIndex : 'bool',
								dataIndex : 'duty',
								text : '职务'
							}, {
								xtype : 'gridcolumn',
//								dataIndex : 'people_xz_phone_fixed',
								dataIndex : 'phone',
								text : '固定电话'
							}, {
								xtype : 'gridcolumn',
//								dataIndex : 'people_xz_phone_mobile',
								dataIndex : 'telephone',
								text : '移动电话'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'fax',
								text : '传真号码'
							}, {
								xtype : 'gridcolumn',
//								dataIndex : 'people_xz_email',
								dataIndex : 'email',
								text : '电子邮箱'
							}],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'top',
						items : [{
							itemId:'ktsb_People_add',
							xtype : 'button',
							iconCls : 'icon-add',
							text : '添加'
						}, 
//						{
//							xtype : 'tbseparator'
//						}, 
//						{
//							xtype : 'button',
//							iconCls : 'icon-edit',
//							text : '编辑'
//						}, 
						{
							xtype : 'tbseparator'
						}, {
							itemId:'ktsb_People_del',
							xtype : 'button',
							iconCls : 'icon-del',
							text : '删除'
						}, {
							xtype : 'tbseparator'
						}]
					}]
				}, {
					xtype : 'gridpanel',
					itemId:'ktsbSkillPeopleGrid',
					store :'ktsb.ktsbSkillPeopleStore',
					flex : 1,
					height : 150,
					autoScroll : true,
					title : '技术负责人',
					margin: 0,
					columns : [{
								xtype : 'gridcolumn',
								//dataIndex : 'people_xz_order',
								dataIndex : 'sortNo',
								text : '序号'
							}, {
								xtype:'gridcolumn',
								dataIndex:'idpeople',
								hidden:true
							},{
								xtype : 'gridcolumn',
								dataIndex : 'name',
								text : '姓名'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'sex',
								text : '性别'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'birthday',
								text : '出生日期'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'title',
								text : '职称'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'degree',
								text : '最高学位'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'specialty',
								text : '从事专业'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'phone',
								text : '固定电话'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'telephone',
								text : '移动电话'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'fax',
								text : '传真号码'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'email',
								text : '电子邮箱'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'idType',
								text : '证件类型'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'idNumber',
								text : '证件号码'
							}],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'top',
						items : [{
							itemId:'ktsb_SkillPeople_add',
							xtype : 'button',
							iconCls : 'icon-add',
							text : '添加'
						}, 
//						{
//							xtype : 'tbseparator'
//						}, 
//						{
//							xtype : 'button',
//							iconCls : 'icon-edit',
//							text : '编辑'
//						}, 
						{
							xtype : 'tbseparator'
						}, {
							itemId:'ktsb_SkillPeople_del',
							xtype : 'button',
							iconCls : 'icon-del',
							text : '删除'
						}, {
							xtype : 'tbseparator'
						}]
					}]
				}]
			}]


});