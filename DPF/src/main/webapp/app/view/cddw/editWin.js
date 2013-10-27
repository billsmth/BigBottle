Ext.define('App.view.cddw.editWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.editWin',
    
    id: 'editWin',
    layout: {
        type: 'fit'
    },
    title: '单位信息',
    closable:false,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
	                region: 'south',
	                width:500,
	                bodyPadding: 15,
	                fieldDefaults: {
		                labelAlign: 'right',
		                labelWidth: 90,
		                msgTarget: 'qtip'
	            	},
	                    
                    items: [
                    	{
		                    xtype: 'textfield',
		                    id:'idorg',
		                    name:'idorg',
	                		hidden: true
		                },{
                            xtype: 'textfield',
                            name:'companyName',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '单位名称'
                        }, {
                            xtype: 'textfield',
                            name:'orgNo',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '组织机构代码'
                        }, {
                            xtype: 'container',
                            margin: '0 0 5 0',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [ {
                                    xtype: 'combobox',
                                    id:'cddw_belongAreaProvince',
                                    name:'belongAreaProvince',
                                    store:'city.provinceStore',
					                queryMode: 'local',
					                displayField: 'name',
					                valueField: 'id',
					                triggerAction: 'all',
			                        allowBlank: true,
                                    fieldLabel: '所属地区',
                                    flex: 1
                                }, {
                                    xtype: 'combobox',
                                    id:'cddw_belongAreaCity',
                                    name:'belongAreaCity',
                                    store:'city.cityStore',
					                queryMode: 'local',
					                displayField: 'name',
					                valueField: 'id',
					                triggerAction: 'all',
			                        allowBlank: true,
                                    flex: 1
                                }, {
                                    xtype: 'combobox',
                                    id:'cddw_belongAreaDistrict',
                                    name:'belongAreaDistrict',
                                    store:'city.districtStore',
					                queryMode: 'local',
					                displayField: 'name',
					                valueField: 'id',
					                triggerAction: 'all',
			                        allowBlank: true,
                                    flex: 1
                                }
                            ]
                        }, {
                            xtype: 'textfield',
                            name:'address',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '通信地址:'
                        }, {
                            xtype: 'combobox',
                            name:'companyProp',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '单位性质',
	                        store:'com.CompanyPropStore',
			                queryMode: 'local',
			                displayField: 'value',
			                valueField: 'key',
			                triggerAction: 'all',
	                        allowBlank: true
                            
                        }, {
                            xtype: 'textfield',
                            name:'bankName',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '开户银行'
                        }, {
                            xtype: 'textfield',
                            name:'bankAccount',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '银行账号'
                        }, {
                        	xtype: 'textfield',
                            name:'legalMsg',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '法人信息'
                        }
                    ],
                    buttons:[{
                        text: '保存',
                        iconCls : 'icon-submit',
                        action:'cddw_edit_save_act'
                    },{
                        text: '取消',
                        iconCls : 'icon-cancel',
                        action:'cddw_edit_cancel_act'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }

});

