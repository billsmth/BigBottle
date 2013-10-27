/**
 * 专家信息管理Model
 */
 
Ext.define('App.model.zjxx.zjxxModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'idzjxx',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'sex',
            type: 'string'
        },
        {
            name: 'nation',
            type: 'string'
        },
        {
            name: 'birthday',
            type: 'date'
        },
        {
            name: 'age',
            type: 'int'
        },
        {
            name: 'titles',
            type: 'string'
        },
        {
            name: 'education',
            type: 'string'
        },
        {
            name: 'degree',
            type: 'string'
        },
        {
            name: 'tutor',
            type: 'string'
        },
        {
            name: 'school',
            type: 'string'
        },
        {
            name: 'company',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'officePhone',
            type: 'string'
        },
        {
            name: 'cellphone',
            type: 'string'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'postcode',
            type: 'string'
        },
        {
            name: 'specialty',
            type: 'string'
        },
        {
            name: 'researchArea',
            type: 'string'
        },
        {
            name: 'picPath',
            type: 'string'
        },
        {
            name: 'resumePath',
            type: 'string'
        },
        {
            name: 'zjStatus',
            type: 'string'
        },
        {
            name: 'createrId',
            type: 'string'
        },
        {
            name: 'createrNm',
            type: 'string'
        },
        {
            name: 'createDt',
            type: 'date'
        },
        {
            name: 'updaterId',
            type: 'string'
        },
        {
            name: 'updaterNm',
            type: 'string'
        },
        {
            name: 'updateDt',
            type: 'date'
        }
    ]
});