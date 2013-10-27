Ext.define('App.store.people.peopleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.people.peopleModel'
    ],
    autoLoad: true,
    model: 'App.model.people.peopleModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'people/add.action?t=' + new Date().getTime(),
            read:'people/listall.action',
            update:'people/update.action',
            destroy:'people/del.action'
        },
        actionMethods:{
			read:'POST'        
        },
        reader : {
            type: 'json'
        }
    }
    
});