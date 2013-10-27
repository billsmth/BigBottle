Ext.define('App.store.opinion.issueOpinionStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.opinion.issueOpinionModel'
    ],
    autoLoad: false,
    model: 'App.model.opinion.issueOpinionModel',
    
	constructor: function(cfg) {
	    var me = this;
	    cfg = cfg || {};
	    me.callParent([Ext.apply({
    	storeId:'opinion.issueOpinionStore',
	    proxy: {
	    	type : 'ajax',
	    	async:false,
	        url:'issueOpinion/findIssueOpinionForReplayByIssueId.action',
	        reader: {
	            type: 'json'
		        },
		    actionMethods:{
				read:'POST'        
        		}
		    }
	    
	    }, cfg)]);
	}
    
    
});