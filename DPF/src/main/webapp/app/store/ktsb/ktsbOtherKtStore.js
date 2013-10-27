
Ext.define('App.store.ktsb.ktsbOtherKtStore', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'App.model.ktsb.ktsbIssuePlanModel',
    requires: [
               'App.model.ktsb.ktsbIssuePlanModel'
           ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ktsb.ktsbOtherKtStore',
            proxy: {
                type: 'ajax',
                api : {
                    read:'ktsb/listIssuePlan.action?t='+new Date().getTime()
                },
                actionMethods: {  
                    read: 'POST'  
                },  
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});