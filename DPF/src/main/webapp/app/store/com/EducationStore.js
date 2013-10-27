/***
 * 学历
 */

Ext.define('App.store.com.EducationStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'本科'},
        {'key':'2', 'value':'硕士'},
        {'key':'3', 'value':'博士'}
    ]
});