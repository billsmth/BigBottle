Ext.define('App.view.ktxx.kteditwin', {
    extend: 'Ext.window.Window',

    alias : 'widget.kteditwin',
    id:'kteditwin',
    
    title: '新建课题授权',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.apply(Ext.form.field.VTypes, {
            daterange: function(val, field) {
                var date = field.parseDate(val);
    
                if (!date) {
                    return false;
                }
                if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                    var start = field.up('form').down('#' + field.startDateField);
                    start.setMaxValue(date);
                    start.validate();
                    this.dateRangeMax = date;
                }
                else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                    var end = field.up('form').down('#' + field.endDateField);
                    end.setMinValue(date);
                    end.validate();
                    this.dateRangeMin = date;
                }
  
                return true;
            },

            daterangeText: '开始日期必须大于结束日期'
        });

        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                region: 'south',
                height: 320,
                width:640,
                items: [{
                    //因为disabled的字段在getValues时不会包含在内
                    xtype: 'hiddenfield',
                    name:'projectName',
                    value:'水体污染控制与治理'
                },{
                    xtype: 'combobox',
                    anchor: '60%',
                    width: 633,
                    fieldLabel: '专项名称',
                    labelWidth: 60,
                    displayField:'value',
                    valueField:'value',
                    value:'水体污染控制与治理',
                    disabled:true,
                    store: Ext.create('Ext.data.Store', {
                        fields:['key', 'value'],
                        data:[
                           {value:'水体污染控制与治理', key:1}
                        ]
                    })
                },
                {
                    xtype: 'container',
                    padding: '5 5 5 0',
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            width: 300,
                            id:'topicName',
                            name:'topicName',
                            fieldLabel: '主题名称',
                            labelWidth: 60,
                            store:Ext.create('App.store.com.TopicStore'),
                            displayField:'value',
                            valueField:'value'
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 15',
                            width: 300,
                            id:'belongValley',
                            name:'belongValley',
                            fieldLabel: '所属流域',
                            labelWidth: 60,
                            store:Ext.create('App.store.com.BelongValleyStore'),
                            displayField:'value',
                            valueField:'value'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: '5 5 5 0',
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            width: 300,
                            id:'issueName',
                            name:'issueName',
                            fieldLabel: '课题名称',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 15',
                            width: 300,
                            id:'issueNo',
                            name:'issueNo',
                            fieldLabel: '课题编号',
                            labelWidth: 60
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: '5 5 5 0',
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            width: 570,
                            id:'requestCompany',
                            name:'requestCompany',
                            fieldLabel: '申报单位',
                            labelWidth: 60,
                            queryMode: 'local',
                            store:Ext.create('App.store.cddw.cddwJsonStore'),
                            displayField:'companyName',
                            valueField:'idorg'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 7',
                            text: '新建'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: '5 5 5 0',
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            width: 303,
                            id:'secretLevel',
                            name:'secretLevel',
                            fieldLabel: '密级',
                            labelWidth: 60,
                            store:Ext.create('App.store.com.SecretLevelStore'),
                            displayField:'value',
                            valueField:'value'
                        },
                        {
                            xtype: 'datefield',
                            margin: '0 0 0 15',
                            width: 180,
                            id:'startYearMonth',
                            name:'startYearMonth',
                            fieldLabel: '实施年限',
                            labelWidth: 60,
                            vtype:'daterange',
                            endDateField:'endYearMonth'
                        },
                        {
                            xtype: 'datefield',
                            id:'endYearMonth',
                            name:'endYearMonth',
                            margin: '0 0 0 15',
                            width: 100,
                            vtype:'daterange',
                            startDateField:'startYearMonth'
                        }
                    ]
                },{
                    xtype: 'datefield',
                    width: 180,
                    id:'fillDate',
                    name:'fillDate',
                    fieldLabel: '填报日期',
                    labelWidth: 60
                }]
            }],
            buttons:[{
                text: '保存并授权',
                iconCls:'icon-submit',
                
                action:'ktsq_edit_approve_act'
            }, {
                id:'ktsq_cancel_id',
                text:'取消',
                iconCls:'icon-cancel',
                action:'ktsq_edit_cancel_act'
            }]
        });

        me.callParent(arguments);
    }

});