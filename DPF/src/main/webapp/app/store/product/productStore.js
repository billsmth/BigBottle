/**
 * 产品管理Store
 */

Ext.define('App.store.product.productStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.product.productModel'
    ],

    //autoLoad: true,
    model: 'App.model.product.productModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'product/add.action',
            read:'product/json/list.action',
            update:'product/update.action',
            destroy:'product/del.action'
        },
        actionMethods: {  
            read: 'POST'  
        },  
        reader : {
                type: 'json'
        }
    }
});