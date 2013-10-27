Ext.define('App.store.acl.resourceStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.acl.resourceModel'
    ],
    
    model: 'App.model.acl.resourceModel',
    proxy: {
        type : 'ajax',
        api : {
            read:'resource/listall.action'
        },
        reader : {
                type: 'json',
                idProperty :'id'
        }
    }
    
});