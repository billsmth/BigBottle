Ext.define('App.view.people.peopleView', {
    extend: 'Ext.panel.Panel',
    
    
    autoScroll: true,
    alias : 'widget.peopleView',
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    id: 'peopleView',
    title: '专家信息',
    store: 'people.peopleStore',
    
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items: [{
			            xtype: 'peopleGrid',
			            region: 'center',
			            tbar2:[
			            {
			                id:'people_edit_id',
			                text:'编辑',
			                iconCls:'icon-edit',
			                action:'people_list_edit_act'
			            }, {
			                id:'people_del_id',
			                text:'删除',
			                iconCls:'icon-del',
			                action:'people_list_del_act'
			            }],
			             dockedItems:[{
				            		xtype: 'tabpanel',
				                    dock: 'bottom',
				                    height: 300,
				                    activeTab: 0,
				                    items:[{
											xtype : 'panel',
											title : '详细信息',
											layout: 'auto',
											autoScroll : true,
											items : [ {
									            xtype: 'form',
						                    	id:'peopleViewForm',
						                        bodyPadding: 10,
						                        autoScroll: true,
						                        layout: 'anchor',
						                        fieldDefaults: {
										                labelAlign: 'right',
										                labelWidth: 90,
										                msgTarget: 'qtip',
										                anchor: '100%'
										            },
									            
									            
									            items: [
									            	{//111
									                xtype: 'fieldset',
									                title: '基本信息',
									                defaultType: 'textfield',
									                layout: 'anchor',
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
												                        fieldLabel: '姓名',
												                        name: 'name',
												                        flex: 1
										                    		}, {
												                        xtype: 'displayfield',
													                    fieldLabel: '性别',
																        name:'sex',
													                    flex: 1
								                					},{
												                        xtype: 'displayfield',
												                        fieldLabel: '人才类型',
												                        name: 'rcType',
												                        flex: 1
										                    		}]
								            			},
								            			{
										                    xtype: 'container',
										                    layout: 'hbox',
										                    margin: '0 0 5 0',
										                    items: [{
										                        xtype: 'displayfield',
										                        fieldLabel: '办公电话',
										                        name: 'phone',
										                        flex: 1
										                    	},{
										                        xtype: 'displayfield',
										                        fieldLabel: '移动电话',
										                        name: 'telephone',
										                        flex: 1
								                				},{
										                        xtype: 'displayfield',
										                        fieldLabel: '电子邮件',
										                        name: 'email',
										                        flex: 1
										                    	}]
								            			},
								            			
								            				{
										                    xtype: 'container',
										                    layout: 'hbox',
										                    margin: '0 0 5 0',
										                    items: [{
										                        xtype: 'displayfield',
										                        fieldLabel: '出生日期',
										                        name: 'birthdayStr',
										                        flex: 1
										                    	},{
										                        fieldLabel: '地域类型',
											                    name: 'areaType',
											                    xtype: 'displayfield',
												                flex: 1
										                    	},{
										                        fieldLabel: '证件类型',
											                    name: 'idType',
											                    xtype: 'displayfield',
												                flex: 1
								                				}]
								            			},
								            			
								            			{
										                    xtype: 'container',
										                    layout: 'hbox',
										                    margin: '0 0 5 0',
										                    items: [{
										                        xtype: 'displayfield',
										                        fieldLabel: '照片',
										                        name: 'photo',
										                        flex: 1
								                				},{
										                        xtype: 'displayfield',
										                        fieldLabel: '证件号码',
										                        name: 'idNumber',
										                        flex: 2
										                    	}]
								            			}]
								        			},
								        			
								        			{//222
									                xtype: 'fieldset',
									                title: '专家详情信息',
									                id:'people_view_expertMsg',
									                hidden: true,
									                defaultType: 'textfield',
									                layout: 'anchor',
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
									                        fieldLabel: '工作单位',
									                        name: 'company',
									                        flex: 1
									                    	},{
									                        xtype: 'displayfield',
									                        fieldLabel: '通讯地址',
									                        name: 'address',
									                        flex: 1
								            				},{
									                        xtype: 'displayfield',
									                        fieldLabel: '邮政编码',
									                        name: 'postcode',
									                        flex: 1
								            				}]
								        			},
								        			{
									                    xtype: 'container',
									                    layout: 'hbox',
									                    margin: '0 0 5 0',
									                    items: [{
									                        xtype: 'displayfield',
									                        fieldLabel: '毕业院校',
									                        name: 'school',
									                        flex: 1
									                    	},{
									                        fieldLabel: '学位',
										                    name: 'degree',
										                    xtype: 'displayfield',
											                flex: 1
									                    	},{
									                        fieldLabel: '担当导师',
										                    name: 'tutor',
										                    xtype: 'displayfield',
											                flex: 1
								            				}]
								        			},
								        			
								        			{
									                    xtype: 'container',
									                    layout: 'hbox',
									                    margin: '0 0 5 0',
									                    items: [{
									                        xtype: 'displayfield',
									                        fieldLabel: '主攻方向介绍',
									                        name: 'specialtyIntro',
									                        flex: 1
								            				}]
								        			}]
								    			},
								    			
									    			{//333
									                xtype: 'fieldset',
									                title: '科研、考研基本信息',
									                id:'people_view_researchMsg',
									                hidden: true,
									                defaultType: 'textfield',
									                layout: 'anchor',
									                defaults: {
									                    anchor: '100%'
									                },
									        		items: [
									        			{
										                    xtype: 'container',
										                    layout: 'hbox',
										                    margin: '0 0 5 0',
										                    items: [{
										                        fieldLabel: '学历',
											                    name: 'education',
											                    xtype: 'displayfield',
												                flex: 1
										                    	},{
										                        fieldLabel: '职称',
											                    name: 'title',
											                    xtype: 'displayfield',
												                flex: 1
									            				},{
										                        xtype: 'displayfield',
										                        fieldLabel: '专业领域',
										                        name: 'specialty',
										                        flex: 1
										                    	}]
									        			},{
										                    xtype: 'container',
										                    layout: 'hbox',
										                    margin: '0 0 5 0',
										                    items: [{
										                        xtype: 'displayfield',
										                        fieldLabel: '工作简历',
										                        name: 'resume',
										                        flex: 1
									            				}]
									        			}]
									    			}
								    			
									            ]
										    }]
										} ]
				            		}]
					}]
        	});
        	me.callParent(arguments);
    }

});