Ext.define('App.store.jhgl.jhglStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.jhgl.jhglListModel'
    ],
    
    model: 'App.model.jhgl.jhglListModel',
    autoLoad: true,
    proxy: {
        type : 'ajax',
        api : {
            read:'jinhuo/json/list.action'
        },
        reader : {
                type: 'json',
                idProperty :'jinhuo_id'
        }
    }
    
});