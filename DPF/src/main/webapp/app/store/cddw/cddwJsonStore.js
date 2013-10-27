/**
 * 任务承担单位管理Store
 */

Ext.define('App.store.cddw.cddwJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.cddw.cddwModel'
    ],

    autoLoad: true,
    model: 'App.model.cddw.cddwModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'cddw/add.action',
            read:'cddw/listall.action',
            update:'cddw/update.action',
            destroy:'cddw/del.action'
        },
        actionMethods:{
			read:'POST'        
        },
        reader : {
            type: 'json'
        }
    }
});