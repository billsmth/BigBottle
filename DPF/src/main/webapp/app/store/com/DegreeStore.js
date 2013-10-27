/***
 * 地域类型
 */

Ext.define('App.store.com.DegreeStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'学士'},
        {'key':'2', 'value':'硕士'},
        {'key':'3', 'value':'博士'}
    ]
});