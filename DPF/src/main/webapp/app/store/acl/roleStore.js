Ext.define('App.store.acl.roleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.acl.roleModel'
    ],
    
    model: 'App.model.acl.roleModel',
    proxy: {
        type : 'ajax',
        api : {
            read:'role/listall.action'
        },
        reader : {
                type: 'json',
                idProperty :'id'
        }
    }
    
});