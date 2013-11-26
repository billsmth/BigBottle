Ext.define('App.store.product.ptStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.product.ptSimpleModel'
    ],
    autoLoad: true,
    model: 'App.model.product.ptSimpleModel',
    storeId:'product.ptStore',
    proxy: {
        type : 'ajax',
        api : {
            read:'productType/typeList.action'
        },
        actionMethods:{
			read:'POST'        
        },
        reader : {
            type: 'json'
        }
    }
    
});