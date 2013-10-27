Ext.define('App.store.acl.userStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.acl.userModel'
    ],
    
    model: 'App.model.acl.userModel',
    proxy: {
        type : 'ajax',
        api : {
            read:'user/listall.action'
        },
        reader : {
                type: 'json',
                idProperty :'id'
        }
    }
    
});