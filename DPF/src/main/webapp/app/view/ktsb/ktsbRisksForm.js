Ext.define("App.view.ktsb.ktsbRisksForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbRisksForm',
	autoScroll : true,
	layout : {
		type : 'fit'
	},
	title : '风险分析及对策',
	items : [ {
		xtype : 'htmleditor',
		name : 'riskstext',
		height : 150,
		value : '风险分析及对策',
		fieldLabel : ''
	} ]

});