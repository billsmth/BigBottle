Ext.define('App.store.ktsb.ktxxTaskTargetStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.ktsb.ktxxTaskTargetModel'
    ],
    
    model: 'App.model.ktsb.ktxxTaskTargetModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'ktxxtask/add.action?t='+new Date().getTime(),
            read:'ktxxtask/listall.action?t='+new Date().getTime(),
            destroy:'ktxxtask/del.action?t='+new Date().getTime()
        },
        reader : {
                type: 'json',
                idProperty :'id'
        }
    }
    
});