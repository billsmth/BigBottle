
Ext.define("App.view.ktsb.ktsbNecessityForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbNecessityForm',
	layout : {
		type : 'fit'
	},
	title : '必要性分析',
	items : [{
				xtype : 'htmleditor',
				id:'ktsbNecessityForm_necessitytext',
				name :'necessitytext',
				height : 150,
				value : '必要性分析',
				//fieldLabel : ''
				hideLabel: true
			}]


});