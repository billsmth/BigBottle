Ext.define('App.store.ktsb.ktxxSfgcStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.ktsb.ktxxSfgcModel'
    ],
    
    model: 'App.model.ktsb.ktxxSfgcModel',
    proxy: {
        type : 'ajax',
        api : {
        },
        reader : {
                type: 'json',
                idProperty :'id'
        }
    }
    
});