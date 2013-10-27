/**
 * 专家信息管理Store
 */

Ext.define('App.store.zjxx.zjxxJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.zjxx.zjxxModel'
    ],

    autoLoad: true,
    model: 'App.model.zjxx.zjxxModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'zjxx/add.action',
            read:'zjxx/listall.action',
            update:'zjxx/update.action',
            destroy:'zjxx/del.action'
        },
        reader : {
                type: 'json'
        }
    }
});