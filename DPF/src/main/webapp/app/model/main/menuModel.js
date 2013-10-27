Ext.define('App.model.main.menuModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'string'
        },{
            name: 'text',
            type: 'string'
        },{
            name: 'cls',
            leaf: 'string'
        },{
            name: 'leaf',
            type: 'boolean'
        },{
            name: 'qtitle',
            type: 'string'
        }
    ]
});