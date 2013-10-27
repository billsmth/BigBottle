Ext.define('App.store.ktxx.ktsqStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.ktxx.ktsqModel'
    ],
    
    model: 'App.model.ktxx.ktsqModel',
    proxy: {
        type : 'ajax',
        actionMethods : {
            create: 'POST', 
            read: 'POST', 
            update: 'POST', 
            destroy: 'POST'
        },
        api : {
            create:'ktsq/add.action',
            read:'ktsq/listall.action',
            update:'ktsq/update.action',
            destroy:'ktsq/del.action'
        },
        reader : {
                type: 'json',
                idProperty :'id'
        }
    },
    
    listeners: {
        beforeload : function (store, operation) {
            // 在查询之前填加过滤条件
            if (store.flag != undefined) {
                operation.params.flag = store.flag;
            }
        }
    }
});