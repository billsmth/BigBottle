Ext.define('App.store.opinion.opinionReplayStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.opinion.opinionReplayModel'
    ],
    autoLoad: false,
    model: 'App.model.opinion.opinionReplayModel',
    
	constructor: function(cfg) {
	    var me = this;
	    cfg = cfg || {};
	    me.callParent([Ext.apply({
    	storeId:'opinion.opinionReplayStore',
	    proxy: {
	    	type : 'ajax',
	    	async:false,
	        url:'city/find.action',
	        reader: {
	            type: 'json',
	            root: 'lists'
		        },
	        actionMethods:{
				read:'POST'        
        		},
	    	extraParams:{
	    		id:0
			    }
		    }
	    }, cfg)]);
	}
    
    
});