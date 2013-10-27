/**
 * 人才管理Model
 */
 
Ext.define('App.model.rcgl.rcglModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'idrcgl',
            type: 'int'
        },
        {
            name: 'rcName',
            type: 'string'
        },
        {
            name: 'rcType',
            type: 'string'
        },
        {
            name: 'rcSex',
            type: 'string'
        },
        {
            name: 'rcEmail',
            type: 'string'
        },
        {
            name: 'rcMobile',
            type: 'string'
        },
        {
            name: 'rcAreaType',
            type: 'string'
        }
    ]
});