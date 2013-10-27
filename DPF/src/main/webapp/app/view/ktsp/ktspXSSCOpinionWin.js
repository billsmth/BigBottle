Ext.define('App.view.ktsp.ktspXSSCOpinionWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.ktspXSSCOpinionWin',
    id:'ktspXSSCOpinionWin',
    
    title: '编辑意见',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                    {
	                xtype: 'form',
	                width:550,
	                height:350,
	                layout: {
	                    type: 'fit'
	                },
	                items: [{
		                xtype: 'textfield',
		                id:'id',
		                name:'id',
		                hidden:true
		            },{
		                xtype: 'textfield',
		                id:'issueSpecialistId',
		                name:'issueSpecialistId',
		                hidden:true
		            },{
	                    xtype: 'tabpanel',
	                    flex: 0.6,
	                    border: false,
	                    collapsible: false,
	                    activeTab: 0,
	                    items: [
								{
								    xtype: 'form',
								    autoScroll: true,
								    id:'ktsbBasicForm',
								    layout: {
								        type: 'absolute'
								    },
								    title: '基本信息的审查结果',
								    items: [{
										    xtype: 'htmleditor',
										    id:'ktsbBasicEditor',
										    height: 150,
									}]
								},{
								    xtype: 'form',
								    autoScroll: true,
								    id:'companyPeopleForm',
								    layout: {
								        type: 'absolute'
								    },
								    title: '参与单位及人员的审查结果',
								    items: [{
										    xtype: 'htmleditor',
										    id:'companyPeopleEditor',
										    height: 150,
									}]
								},{
								    xtype: 'form',
								    autoScroll: true,
								    id:'moneyForm',
								    layout: {
								        type: 'absolute'
								    },
								    title: '经费的审查结果',
								    items: [{
										    xtype: 'htmleditor',
										    id:'moneyEditor',
										    height: 150,
									}]
								},{
								    xtype: 'form',
								    autoScroll: true,
								    id:'taskForm',
								    layout: {
								        type: 'absolute'
								    },
								    title: '任务内容、考核指标审查结果',
								    items: [{
										    xtype: 'htmleditor',
										    id:'taskEditor',
										    height: 150,
									}]
								},{
								    xtype: 'form',
								    autoScroll: true,
								    id:'otherOpinionForm',
								    layout: {
								        type: 'absolute'
								    },
								    title: '存在其他问题',
								    items: [{
										    xtype: 'htmleditor',
										    id:'otherOpinioEditor',
										    height: 150,
									}]
								}
	                  ]}
	            ]
            }],
            buttons:[{
            	xtype: 'tbseparator'
        	},{
                xtype: 'button',
                iconCls: 'icon-temp-save',
                action:'ktsp_xssc_save_opinion_act',
                text: '保存草稿'
            },{
            	xtype: 'tbseparator'
        	},
            {
                xtype: 'button',
                iconCls: 'icon-submit',
                action:'ktsp_xssc_submit_opinion_act',
                text: '发布意见'
            },{
            	xtype: 'tbseparator'
        	},
            {
                xtype: 'button',
                iconCls: 'icon-cancel',
                action:'ktsp_xssc_cancel_edit_act',
                text: '取消'
            }]
        });

        me.callParent(arguments);
    }

});