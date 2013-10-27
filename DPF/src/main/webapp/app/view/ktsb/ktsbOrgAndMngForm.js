
Ext.define("App.view.ktsb.ktsbOrgAndMngForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbOrgAndMngForm',
	autoScroll : true,
	layout : {
		type : 'fit'
	},
	title : '课题组织及管理机制',
	items : [{
				xtype : 'htmleditor',
				name : 'orgAndMngtext',
				height : 150,
				value : '课题组织及管理机制',
				fieldLabel : ''
			}]


});