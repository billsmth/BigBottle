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
            create:'meeting/add.action',
            read:'meeting/listall.action',
            update:'meeting/update.action',
            destroy:'meeting/del.action'
        },
        actionMethods: {  
            read: 'POST'  
        },  
        reader : {
                type: 'json'
        }
    }
});