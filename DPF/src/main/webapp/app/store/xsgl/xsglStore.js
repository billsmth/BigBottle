/**
 * 销售管理Store
 */

Ext.define('App.store.xsgl.xsglStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.xsgl.xsglListModel'
    ],

    autoLoad: true,
    model: 'App.model.xsgl.xsglListModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'xiaoshou/add.action',
            read:'xiaoshou/json/list.action',
            update:'xiaoshou/update.action',
            destroy:'xiaoshou/del.action'
        },
        actionMethods:{
			read:'POST'        
        },
        reader : {
            type: 'json'
        }
    }
});