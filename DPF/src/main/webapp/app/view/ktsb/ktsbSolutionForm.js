
Ext.define("App.view.ktsb.ktsbSolutionForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbSolutionForm',
	autoScroll : true,
	layout : {
		type : 'fit'
	},
	title : '技术方案',
	items : [{
				xtype : 'htmleditor',
				name : 'solutiontext',
				height : 150,
				value : '技术方案',
				fieldLabel : ''
			}]


});