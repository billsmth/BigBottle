/**
 * 任务承担单位管理Model
 */
 
Ext.define('App.model.cddw.cddwModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'idorg',
            type: 'string'
        },
        {
            name: 'companyName',
            type: 'string'
        },
        {
            name: 'orgNo',
            type: 'string'
        },
        {
            name: 'belongAreaProvince',
            type: 'int'
        },
        {
            name: 'belongAreaCity',
            type: 'int'
        },
        {
            name: 'belongAreaDistrict',
            type: 'int'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'companyProp',
            type: 'string'
        },
        {
            name: 'bankName',
            type: 'string'
        },
        {
            name: 'bankAccount',
            type: 'string'
        },
        {
            name: 'legalMsg',
            type: 'string'
        },
        {
            name: 'createDate',
            type: 'date'
        },
        {
            name: 'createUser',
            type: 'int'
        },
        {
            name: 'modifyDate',
            type: 'date'
        },
        {
            name: 'modifyUser',
            type: 'int'
        },
        {
            name: 'softDel',
            type: 'string'
        },
        {
            name: 'softNo',
            type: 'int'
        }
    ]
});