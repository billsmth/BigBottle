Ext.define('App.store.kcgl.kcglStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.kcgl.kcglListModel'
    ],
    
    model: 'App.model.kcgl.kcglListModel',
    autoLoad: true,
    proxy: {
        type : 'ajax',
        api : {
            read:'kucun/json/list.action'
        },
        reader : {
                type: 'json',
                idProperty :'kucun_id'
        }
    }
    
});