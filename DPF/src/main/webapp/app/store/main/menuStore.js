Ext.define('App.store.main.menuStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'App.model.main.menuModel'
    ],
    model: 'App.model.main.menuModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url:'app/store/main/menu.json',
        //url: 'findmenu.action',
        reader: {
            type: 'json'
        }
    }
});