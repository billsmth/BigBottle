Ext.define('App.view.ktxx.ktquerywin', {
    extend: 'Ext.window.Window',

    alias : 'widget.ktquerywin',
    id:'ktquerywin',
    
    title: '课题查询',

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
                width:290,
                bodyPadding: 5,
                items: [{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '课题编号',
                    name:'issueNo',
                    labelAlign: 'left',
                    labelWidth: 70
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '课题名称',
                    name:'issueName',
                    labelAlign: 'left',
                    labelWidth: 70
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: '专项名称',
                    name:'projectName',
                    labelAlign: 'left',
                    labelWidth: 70
                },{
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '主题名称',
	                name:'topicName',
	                labelAlign: 'left',
	                labelWidth: 70
	            }, {
	                xtype: 'textfield',
                    anchor: '100%',
	                fieldLabel: '行政责任人',
	                name:'techMemberName',
	                labelAlign: 'left',
	                labelWidth: 70
	            }, {
	                xtype: 'combobox',
                    anchor: '100%',
	                fieldLabel: '审批状态',
	                name:'status',
	                labelAlign: 'left',
	                labelWidth: 70,
	                store:'com.ApproveStatusStore',
	                queryMode: 'local',
	                displayField: 'value',
	                valueField: 'value'
                }]
            }],
            buttons:[{
                text: '查询',
                iconCls : 'icon-search',
                action:'ktsq_search_exec_act'
            }, {
                text: '关闭',
                iconCls : 'icon-cancel',
                action:'ktsq_search_cancel_act'
            }]
        });

        me.callParent(arguments);
    }

});