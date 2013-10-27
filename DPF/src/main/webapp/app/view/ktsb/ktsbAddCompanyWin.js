Ext.define('App.view.ktsb.ktsbAddCompanyWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.ktsbAddCompanyWin',

    id: 'ktsbAddCompanyWin',
    width: 500,
    resizable: false,
    modal : true,
    layout: {
        type: 'fit'
    },
    closable: false,
    title: '添加支持单位',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    frame: true,
                    xtype: 'form',
	                region: 'south',
	                width:500,
	                bodyPadding: 10,
	                fieldDefaults: {
		                labelAlign: 'right',
		                labelWidth: 80,
		                msgTarget: 'qtip'
	            	},
                    items: [{
                            xtype: 'numberfield',
                            anchor: '100%',
                            name:'sortNo',
                            fieldLabel: '序号',
                            value:'1',
                            minValue:'1',
                            allowBlank: false
                        }, 
                        {
                        	id : 'ktsb_companyName_combobox',
                        	itemId : 'ktsb_companyName_combobox',
                            xtype: 'combobox',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '单位名称',
                            store:'cddw.cddwJsonStore',
                            displayField:'companyName',
                            queryMode:'local'
                        },{
		                    xtype: 'textfield',
		                    name:'idorg',
	                		hidden: true
		                },{
		                    xtype: 'textfield',
		                    name:'companyName',
		                    id:'ktsbAddCompanyWin_companyName',
	                		hidden: true
		                },
                        {
                        	name :'orgNo',
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '机构代码'
                        }, {
                            xtype: 'container',
                            margin: '0 0 5 0',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [ {
                                    xtype: 'combobox',
                                    id:'ktsbAddCompanyWin_belongAreaProvince',
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
                                    id:'ktsbAddCompanyWin_belongAreaCity',
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
                                    id:'ktsbAddCompanyWin_belongAreaDistrict',
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
                        },
                        {
                        	name:'address',
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '通信地址'
                        },
                        {
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
                            
                        },
                        {
                        	name:'legalMsg',
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 5 0',
                            fieldLabel: '法人信息'
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
                        }
                    ],
                    buttons:[{
                        itemId:'ktsb_company_add',
                        iconCls: 'icon-save',
                        text: '保存'
                    },{
                        itemId:'ktsb_company_close',
                        iconCls: 'icon-cancel',
                        text: '关闭'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }

});