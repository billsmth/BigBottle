Ext.define('App.view.people.addPeopleWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.addPeopleWin',
    id:'addPeopleWin',
    
    title: '人才信息维护',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        Ext.applyIf(me, {
            items: [
            	{
                xtype: 'form',
                region: 'north',
                collapsible: true,
                id: 'simpleForm',
                itemId:'editPoepleForm',
                width:800,
                bodyPadding: 15,
            	fieldDefaults: {
	                labelAlign: 'right',
	                labelWidth: 90,
	                msgTarget: 'under'
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
			                    xtype: 'hiddenfield',
			                    id:'people_edit_idpeople',
			                    name:'idpeople'
			                },
            				{
			                    fieldLabel: '人才类型',
			                    name: 'rcType',
			                    id:'people_edit_rcType',
			                    xtype: 'combobox',
			                    store:'com.PeopleTypeStore',
				                queryMode: 'local',
				                displayField: 'value',
				                valueField: 'key',
				                triggerAction: 'all',
		                        allowBlank: true
			                }, 
			                
		                	{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
					                        xtype: 'textfield',
					                        fieldLabel: '姓名',
					                        afterLabelTextTpl: required,
					                        id:'name',
					                        name: 'name',
					                        flex: 1,
					                        allowBlank: false,
					                        blankText: '用户名不能为空'
			                    		}, {
					                        xtype: 'radiogroup',
						                    fieldLabel: '性别',
									        labelWidth: 90,
						                    flex: 1,
					                        margin: '0 15 0 0',
						                    items: [{
							                        name: 'sex',
							                        id:'people_edit_sex_man',
										            inputValue: '0',
										            boxLabel: '男',
										            checked: true
							                    }, {
							                       name: 'sex',
							                       id:'people_edit_sex_won',
										           inputValue: '1',
										           boxLabel: '女'
							                    }]
                    				}]
                			},
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        xtype: 'textfield',
			                        fieldLabel: '电子邮件',
			                        name: 'email',
			                        flex: 1,
			                        allowBlank: false
			                    	}
			                    	,{
			                        xtype: 'datefield',
			                        fieldLabel: '出生日期',
			                        name: 'birthdayStr',
			                        id:'people_edit_birthday',
			                        format:'Y-m-d',
			                        flex: 1,
			                        allowBlank: false
                    				}
                    				]
                			},
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        xtype: 'textfield',
			                        fieldLabel: '办公电话',
			                        name: 'phone',
			                        flex: 1,
			                        allowBlank: false
			                    	},{
			                        xtype: 'textfield',
			                        fieldLabel: '移动电话',
			                        name: 'telephone',
			                        flex: 1,
			                        allowBlank: false
                    				}]
                			},
                			
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        fieldLabel: '地域类型',
				                    name: 'areaType',
				                    id:'people_edit_areaType',
				                    xtype: 'combobox',
				                    store:'com.AreaTypeStore',
					                queryMode: 'local',
					                displayField: 'value',
					                valueField: 'key',
					                triggerAction: 'all',
					                flex: 1,
			                        allowBlank: true
			                    	},{
			                        fieldLabel: '证件类型',
				                    name: 'idType',
				                    id:'people_edit_idType',
				                    xtype: 'combobox',
				                    store:'com.IDTypeStore',
					                queryMode: 'local',
					                displayField: 'value',
					                valueField: 'key',
					                triggerAction: 'all',
					                flex: 1,
			                        allowBlank: true
                    				}]
                			},
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [
			                    	
			                  	{
			                        xtype: 'textfield',
			                        fieldLabel: '证件号码',
			                        name: 'idNumber',
			                        flex: 1,
			                        allowBlank: false
			                    	},{
			                        xtype: 'textfield',
			                        fieldLabel: '照片',
			                        name: 'photo',
			                        //buttonText:"上传",
			                        flex: 1,
			                        allowBlank: false
                    				}]
                			}]
            			},
            			
            			{//222
		                xtype: 'fieldset',
		                title: '专家信息',
		                id:'people_expertMsg',
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
			                        xtype: 'textfield',
			                        fieldLabel: '工作单位',
			                        name: 'company',
			                        flex: 1,
			                        allowBlank: false
			                    	},{
			                        xtype: 'textfield',
			                        fieldLabel: '通讯地址',
			                        name: 'address',
			                        flex: 1,
			                        allowBlank: false
                    				}]
                			},
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        xtype: 'textfield',
			                        fieldLabel: '年龄',
			                        name: 'age',
			                        flex: 1,
			                        allowBlank: false
			                    	},{
			                        xtype: 'textfield',
			                        fieldLabel: '邮政编码',
			                        name: 'postcode',
			                        flex: 1,
			                        allowBlank: false
                    				}]
                			},
                			
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        fieldLabel: '学位',
				                    name: 'degree',
				                    id:'people_edit_degree',
				                    xtype: 'combobox',
				                    store:'com.DegreeStore',
					                queryMode: 'local',
					                displayField: 'value',
					                valueField: 'key',
					                triggerAction: 'all',
					                flex: 1,
			                        allowBlank: true
			                    	},{
			                        fieldLabel: '担当导师',
				                    name: 'tutor',
				                    id:'people_edit_tutor',
				                    xtype: 'combobox',
				                    store:'com.TutorStore',
					                queryMode: 'local',
					                displayField: 'value',
					                valueField: 'key',
					                triggerAction: 'all',
					                flex: 1,
			                        allowBlank: true
                    				}]
                			},
                			
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        xtype: 'textfield',
			                        fieldLabel: '毕业院校',
			                        name: 'school',
			                        flex: 1,
			                        allowBlank: false
			                    	},{
			                        xtype: 'textfield',
			                        fieldLabel: '主攻方向介绍',
			                        name: 'specialtyIntro',
			                        flex: 1,
			                        allowBlank: false
                    				}]
                			}]
            			},
            			
            			   			
            			{//333
		                xtype: 'fieldset',
		                title: '科研信息',
		                id:'people_researchMsg',
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
				                    id:'people_edit_education',
				                    xtype: 'combobox',
				                    store:'com.EducationStore',
					                queryMode: 'local',
					                displayField: 'value',
					                valueField: 'key',
					                triggerAction: 'all',
					                flex: 1,
			                        allowBlank: true
			                    	},{
			                        fieldLabel: '职称',
				                    name: 'title',
				                    id:'people_edit_title',
				                    xtype: 'combobox',
				                    store:'com.TitleStore',
					                queryMode: 'local',
					                displayField: 'value',
					                valueField: 'key',
					                triggerAction: 'all',
					                flex: 1,
			                        allowBlank: true
                    				}]
                			},
                		
                		
                			{
			                    xtype: 'container',
			                    layout: 'hbox',
			                    margin: '0 0 5 0',
			                    items: [{
			                        xtype: 'textfield',
			                        fieldLabel: '专业领域',
			                        name: 'specialty',
			                        flex: 1,
			                        allowBlank: false
			                    	},{
			                        xtype: 'textfield',
			                        fieldLabel: '工作简历',
			                        name: 'resume',
			                        flex: 1,
			                        allowBlank: false
                    				}]
                			}]
        			}]
            }],
            buttons:[{
                text: '保存',
                iconCls:'icon-submit',
               
		        handler: function() { 
		        	//Ext.getCmp('simpleForm').isValid();
		         } ,
		         action:'people_add_add_act'
            },
            
            {
                text: '关闭',
                iconCls : 'icon-cancel',
                action:'people_add_cancel_act'
            }]
        });

        me.callParent(arguments);
    }

});

function dateFormat(value){ 
    if(null != value){ 
        return Ext.Date.format(new Date(value),'Y-m-d'); 
    }else{ 
        return null; 
    } 
} 
