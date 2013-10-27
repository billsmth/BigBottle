Ext.define('App.store.ktsp.ktspbmStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'App.model.ktsp.ktspbmModel'
    ],
    model: 'App.model.ktsp.ktspbmModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        //url:'app/store/main/menu.json',
        url: 'people/findbm.action',
        reader: {
            type: 'json'
        }
    }
});