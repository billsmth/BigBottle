Ext.define('App.store.acl.menuStore', {
    extend: 'App.store.NonAutoLoadTreeStore',
    //extend: 'Ext.data.TreeStore',

    requires: [
        'App.model.main.menuModel'
    ],
    autoLoad: false,
    model: 'App.model.main.menuModel',
    proxy: {
        type: 'ajax',
        //url:'app/store/main/menu.json',
        url: 'menu/findbyrole.action',
        reader: {
            type: 'json'
        }
    }
});