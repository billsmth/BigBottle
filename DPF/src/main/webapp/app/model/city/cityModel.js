/**
 * 城市Model
 */
 
Ext.define('App.model.city.cityModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'ename',
            type: 'string'
        },
        {
            name: 'up',
            type: 'int'
        },
        {
            name: 'zip',
            type: 'string'
        }
    ]
});