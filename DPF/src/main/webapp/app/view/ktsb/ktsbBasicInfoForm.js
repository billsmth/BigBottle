
Ext.define("App.view.ktsb.ktsbBasicInfoForm", {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.ktsbBasicInfoForm',
	autoScroll : true,
	layout : {
		type : 'absolute'
	},
	title : '基本信息',
	items : [{
				xtype : 'combobox',
				name:'ktsb_projectName',
				x : 10,
				y : 20,
				disabled:true,
				fieldLabel : '专项名称',
				displayField:'value',
				valueField:'value',
				value:'水体污染控制与治理',
				store: Ext.create('Ext.data.Store',{
					fields:['key','value'],
					data:[
					     {value:'水体污染控制与治理',key:1} 
					     ]
				})
			}, {
				xtype : 'combobox',
				name:'ktsb_topicName',
				x : 270,
				y : 20,
				disabled:true,
				fieldLabel : '主题名称',
				store:'com.TopicStore',
				displayField:'value',
				valueField:'value'
			}, {
				name:'ktsb_belongValley',
				xtype : 'combobox',
				disabled:true,
				x : 530,
				y : 20,
				fieldLabel : '所属流域',
				store:'com.BelongValleyStore',
                displayField:'value',
                valueField:'value'
			}, {
				name:'ktsb_issueNo',
				xtype : 'textfield',
				disabled:true,
				x : 10,
				y : 50,
				fieldLabel : '课题编号'
			}, {
				name:'ktsb_issueName',
				xtype : 'textfield',
				disabled:true,
				x : 270,
				y : 50,
				fieldLabel : '课题名称'
			}, {
				name:'ktsb_secretLevel',
				xtype : 'combobox',
				disabled:true,
				x : 530,
				y : 50,
				fieldLabel : '密级',
				store : 'com.SecretLevelStore',
				displayField : 'value',
				valueField:'value'
			}, {
				id:'ktsb_requestCompanyName',
                name:'ktsb_requestCompanyName',
				xtype : 'combobox',
				x : 10,
				y : 80,
				width : 320,
				fieldLabel : '申报单位',
				disabled:true,
                store:'cddw.cddwJsonStore',
                valueField: 'idorg',
                displayField:'companyName',
                triggerAction: 'all',
                allowBlank: true
			},
//			{
//				xtype : 'button',
//				x : 330,
//				y : 80,
//				itemId : 'sbdw_wsxx',
//				text : '完善信息'
//			},
			{
				name:'ktsb_issueType',
				xtype : 'combobox',
				x : 10,
				y : 110,
				fieldLabel : '课题类型',
				displayField : 'value',
				queryMode : 'local',
				store:'com.IssueTypeStore'
				//store : 'ktsb.ktsbkttypeStore'
			}, {
				id:'ktsb_startYearMonth',
		        name:'ktsb_startYearMonth',
				xtype : 'datefield',
				vtype:'daterange1',
                endDateField:'ktsb_endYearMonth',
				x : 270,
				y : 110,
				fieldLabel : '起始时间'
			}, {
				id:'ktsb_endYearMonth',
                name:'ktsb_endYearMonth',
				xtype : 'datefield',
				vtype:'daterange1',
                startDateField:'ktsb_startYearMonth',
				x : 530,
				y : 110,
				fieldLabel : '至'
			}, {
				id:'ktsb_achievement',
				xtype:'fieldset',
	            title: '预期成果',
	            x : 10,
				y : 140,
				width : 760,
	            defaultType: 'checkboxgroup',
	            layout: 'hbox',
	            items :[{
	            			id:'ktsb_patent',
	            			name:'achievement',
							xtype : 'checkboxfield',
							boxLabel : '专利',
							inputValue:'专利'
						}, {
							id:'ktsb_norm',
	            			name:'achievement',
							xtype : 'checkboxfield',
							boxLabel : '技术标准',
							inputValue:'技术标准'	
						}, {
							id:'ktsb_newProduct',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '新产品(或农业新品种)',
							inputValue:'新产品(或农业新品种)'
						}, {
							id:'ktsb_newCraft',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '新工艺',
							inputValue:'新工艺'	
						}, {
							id:'ktsb_newDevice',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '新装置',
							inputValue:'新装置'
						}, {
							id:'ktsb_newMaterial',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '新材料',
							inputValue:'新材料'
						}, {
							id:'ktsb_softWare',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '计算机软件',
							inputValue:'计算机软件'
						}, {
							id:'ktsb_paper',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '论文论著',
							inputValue:'论文论著'
						}, {
							id:'ktsb_report',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '研究报告',
							inputValue:'研究报告'
						}, {
							id:'ktsb_other',
	            			name:'achievement',
							xtype : 'checkboxfield',
							fieldLabel : '',
							boxLabel : '其他',
							inputValue:'其他'
						}]
			}, {
				name:'ktsb_issueIntro',
				xtype : 'textareafield',
				x : 10,
				y : 200,
				width : 760,
				fieldLabel : '课题简介'
			}]

});