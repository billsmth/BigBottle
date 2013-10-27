/***
 * 职称
 */

Ext.define('App.store.com.TitleStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'高工'},
        {'key':'2', 'value':'教授'}
    ]
});