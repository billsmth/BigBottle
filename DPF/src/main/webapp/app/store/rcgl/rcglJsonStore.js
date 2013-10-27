/**
 * 人才管理Store
 */

Ext.define('App.store.rcgl.rcglJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.rcgl.rcglModel'
    ],

    autoLoad: true,
    model: 'App.model.rcgl.rcglModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'rcgl/add.action',
            read:'rcgl/listall.action',
            update:'rcgl/update.action',
            destroy:'rcgl/del.action'
        },
        reader : {
                type: 'json'
        }
    }
});