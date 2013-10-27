Ext.define('App.view.ktsb.ktsbEditSpecialistOpinionWin', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.ktsbEditSpecialistOpinionWin',
	id:'ktsbEditSpecialistOpinionWin',
    
	title: '意见回复',
	
    resizable: false,
    modal : true,
    
    layout: {
        type: 'fit'
    },
    closable: false,
	width:900,
	autoScroll : true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
            		xtype: 'panel',
            		id:'ktsbEditSpecialistOpinionWin_top_panel',
            		height: 500,
            		region: 'south',
                    header: false,
                    //hidden: false,
                    visible:true,
                    title: '没有数据',
                    html: '没有数据'
            	},
                {
                	xtype: 'panel',
	                region: 'south',
	                header: false,
	                //hidden: true,
	                visible:true,
	                height: 500,
                    id: 'ktsbEditSpecialistOpinionWin_bottom_panel',
                    layout: {
                        type: 'fit'
                    },
                    items: [{
	                    	xtype: 'form',
			                region: 'north',
			                bodyPadding: 15,
			                height : '100%',
			                id:'ktsbEditSpecialistOpinionWin_form',
			                autoScroll : true,
			            	fieldDefaults: {
				                labelAlign: 'right',
				                labelWidth: 90,
				                msgTarget: 'qtip',
				                anchor: '100%'
				            },
			               items: [
		                      	{ //11
					                xtype: 'fieldset',
					                title: '基本信息的审查结果信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueXsJbxx_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueXsJbxx',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
													xtype : 'htmleditor',
													name: 'issueXsJbxx',
													id : 'opinionForm_issueXsJbxx',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //22
					                xtype: 'fieldset',
					                title: '参与单位及人员的审查结果信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueXsCydwRy_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueXsCydwRy',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueXsCydwRy',
													id : 'opinionForm_issueXsCydwRy',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //33
					                xtype: 'fieldset',
					                title: '经费的审查结果信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueXsJfsc_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueXsJfsc',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueXsJfsc',
													id : 'opinionForm_issueXsJfsc',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		            			
		    			     	{ //44
					                xtype: 'fieldset',
					                title: '任务内容、考核指标审查结果信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueXsRwnrKhzb_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
					                        	id : 'opinionWin_issueXsRwnrKhzb',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueXsRwnrKhzb',
													id : 'opinionForm_issueXsRwnrKhzb',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //55
					                xtype: 'fieldset',
					                title: '存在其他问题信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueXsQt_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueXsQt',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueXsQt',
													id : 'opinionForm_issueXsQt',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //66
					                xtype: 'fieldset',
					                title: '意见汇总信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueWpYjhz_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueWpYjhz',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueWpYjhz',
													id : 'opinionForm_issueWpYjhz',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //77
					                xtype: 'fieldset',
					                title: '编辑意见信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueHyscYj_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueHyscYj',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueHyscYj',
													id : 'opinionForm_issueHyscYj',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //88
					                xtype: 'fieldset',
					                title: '根据专家意见修改完善情况信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueFsXgws_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueFsXgws',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
													xtype : 'htmleditor',
													name: 'issueFsXgws',
													id : 'opinionForm_issueFsXgws',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			},
		            			
		    			     	{ //99
					                xtype: 'fieldset',
					                title: '复审意见信息',
					                defaultType: 'textfield',
					                layout: 'anchor',
					                id:'issueFsFsyj_fieldset',
					                autoScroll : true,
					                //hidden: true,
					                defaults: {
					                    anchor: '100%'
					                },
			                		items: [
			                			{
						                    xtype: 'container',
						                    layout: 'hbox',
						                    margin: '0 0 5 0',
						                    items: [{
						                        xtype: 'displayfield',
						                        id : 'opinionWin_issueFsFsyj',
						                        flex: 1
						                    	}]
			                			},
			                			{
							                xtype: 'fieldset',
							                title: '回复',
							                defaultType: 'textfield',
							                layout: 'anchor',
							                autoScroll : true,
							                defaults: {
							                    anchor: '100%'
							                },
					                		items: [
					                			{
						                        
													xtype : 'htmleditor',
													name: 'issueFsFsyj',
													id : 'opinionForm_issueFsFsyj',
													height : 150,
													fieldLabel : ''
						                    	}
					                		]
			                			}]
		            			}
		                    	,
		                    	{
				                    xtype: 'textfield',
				                    id:'ktsbEditSpecialistOpinionWin_id',
				                    name:'id',
			                		hidden: true
				                },
		                    	{
				                    xtype: 'textfield',
				                    id:'ktsbEditSpecialistOpinionWin_opinionId',
				                    name:'opinionId',
			                		hidden: true
				                },
				                {
				                    xtype: 'textfield',
				                    id:'ktsbEditSpecialistOpinionWin_issueId',
				                    name:'issueId',
			                		hidden: true
				                },
				                {
				                    xtype: 'textfield',
				                    id:'ktsbEditSpecialistOpinionWin_issueStatus',
				                    name:'issueStatus',
			                		hidden: true
				                },
				                {
				                    xtype: 'textfield',
				                    id:'ktsbEditSpecialistOpinionWin_peopleId',
				                    name:'peopleId',
			                		hidden: true
			                	},
			                	{
				                    xtype: 'textfield',
				                    id:'ktsbEditSpecialistOpinionWin_name',
				                    name:'name',
			                		hidden: true
			                	},
		                
		                        {
		                            xtype: 'fieldcontainer',
		                            height: 120,
		                            layout: {
		                                type: 'absolute'
		                            },
		                            fieldLabel: '',
		                            items: [
		                                {
		                                    xtype: 'button',
		                                    x: 200,
		                                    y: 30,
		                                    iconCls: 'icon-save',
		                                    action:'ktsb_ktsbEditSpecialistOpinionWin_exec_act',
		                                    text: '保存'
		                                }
		                            ]
		                        }]
                    }]
                }
            ],
	        buttons:[{
	            text: '关闭',
	            iconCls : 'icon-cancel',
	            action:'ktsb_ktsbEditSpecialistOpinionWin_cancel_act'
	        }]
        });
        me.callParent(arguments);
    }
});

