/**
 * 产品分类Store
 */

Ext.define('App.store.product.productTypeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.product.productTypeModel'
    ],

    autoLoad: true,
    model: 'App.model.product.productTypeModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'productType/add.action',
            read:'productType/listall.action',
            update:'productType/update.action',
            destroy:'productType/delProduct.action'
        },
        actionMethods: {
            read: 'POST'  
        },  
        reader : {
        	type: 'json'
        }
    }
});