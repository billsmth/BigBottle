
Ext.define('App.store.ktsb.ktsbResearchOutlayStore', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'App.model.ktsb.ktsbResearchOutlayModel',
    requires: [
               'App.model.ktsb.ktsbResearchOutlayModel'
           ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ktsb.ktsbResearchOutlayStore',
            proxy: {
                type: 'ajax',
                api : {
                    read:'ktsb/listResearchOutlay.action?t='+new Date().getTime()
                },
                actionMethods: {  
                    read: 'POST'  
                },  
                reader: {
                    type: 'json'
                }
               /* ,extraParams:{
	    			issueId:'50a9cec8-c9cb-46ee-a90c-7dfd549a647d'
			    }*/
            }
        }, cfg)]);
    }
});