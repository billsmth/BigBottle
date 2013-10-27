Ext.define('App.store.city.districtStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.city.cityModel'
    ],
    autoLoad: false,
    model: 'App.model.city.cityModel',
    
	constructor: function(cfg) {
	    var me = this;
	    cfg = cfg || {};
	    me.callParent([Ext.apply({
    	storeId:'city.districtStore',
	    proxy: {
	    	type : 'ajax',
	    	async:false,
			//url:'app/store/city/city.json',
	        url:'city/find.action',
	        reader: {
	            type: 'json',
	            root: 'lists'
		        }
		    }
	    }, cfg)]);
	}
    
    
});