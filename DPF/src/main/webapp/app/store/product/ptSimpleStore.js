Ext.define('App.store.product.ptSimpleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.product.ptSimpleModel'
    ],
    autoLoad: true,
    model: 'App.model.product.ptSimpleModel',
    storeId:'product.ptSimpleStore',
    proxy: {
        type : 'ajax',
        api : {
            read:'productType/typeList.action?type=1'
        },
        actionMethods:{
			read:'POST'        
        },
        reader : {
            type: 'json'
        }
    }
    
});