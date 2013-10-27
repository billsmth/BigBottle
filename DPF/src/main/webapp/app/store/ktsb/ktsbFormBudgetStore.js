Ext.define('App.store.ktsb.ktsbFormBudgetStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'App.model.ktsb.ktsbBudgetModel'
    ],
    model: 'App.model.ktsb.ktsbBudgetModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url:'app/store/ktsb/budget.json',
        reader: {
            type: 'json'
        }
    }
});