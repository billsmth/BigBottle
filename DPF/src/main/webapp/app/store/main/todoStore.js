Ext.define('App.store.main.todoStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.main.todoModel'
    ],
    autoLoad: true,
    model: 'App.model.main.todoModel',
    proxy: {
        type: 'ajax',
        url: 'todo/listall.action',
        reader: {
            type: 'json'
        }
    }
});