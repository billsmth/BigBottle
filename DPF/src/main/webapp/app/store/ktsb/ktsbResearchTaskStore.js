
Ext.define('App.store.ktsb.ktsbResearchTaskStore', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'App.model.ktsb.ktsbResearchTaskModel',
    requires: [
               'App.model.ktsb.ktsbResearchTaskModel'
           ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ktsb.ktsbResearchTaskStore',
            proxy: {
                type: 'ajax',
                api : {
                    read:'ktsb/rtlistall.action?t='+new Date().getTime()
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