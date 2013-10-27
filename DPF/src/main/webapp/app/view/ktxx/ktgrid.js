Ext.define('App.view.ktxx.ktgrid', {
    extend: 'Ext.grid.Panel',

    alias : 'widget.ktgrid',

    title: '课题列表',

    initComponent: function() {
        var me = this;
        
        me.addEvents({beforesearch : true});
        
        Ext.applyIf(me, {
            store: Ext.create('App.store.ktxx.ktsqStore', {
                flag : me.flag
            }),
            tbar:[{
                text: '查询',
                iconCls:'icon-search',
                action:'ktsq_list_search_act'
            }],

            columns: [{
                xtype: 'gridcolumn',
                dataIndex: 'issueNo',
                text: '课题编号',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'issueName',
                text: '课题名称',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'projectName',
                text: '专项名称',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'topicName',
                text: '主题名称',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'belongValley',
                text: '所属流域',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'requestCompanyName',
                text: '申报单位',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'secretLevel',
                text: '密级',
                flex:1
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'status',
                text: '审批状态',
                flex:1,
                renderer : function(val) {
                    var retVal = '';
                    if (val == 0) {
                        retVal = '未授权';
                    } else if (val == 1) {
                        retVal = '已授权';
                    } else if (val == 2) {
                        retVal = '已提交';
                    } else if (val == 3) {
                        retVal = '修改中';
                    } else if (val == 4) {
                        retVal = '形式审查';
                    } else if (val == 5) {
                        retVal = '专家网评';
                    } else if (val == 6) {
                        retVal = '会议评审';
                    } else if (val == 7) {
                        retVal = '复审';
                    } else if (val == 8) {
                        retVal = '合同签订中';
                    } else if (val == 9) {
                        retVal = '合同已签订';
                    }
                    return retVal;
                }
            }]
        });

        Ext.each(this.tbar2, function(item, index) {
            this.tbar.push(item);
        }, this)
        me.callParent(arguments);
    }

});