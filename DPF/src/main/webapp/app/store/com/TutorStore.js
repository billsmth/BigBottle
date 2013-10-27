/***
 * 担当导师
 */

Ext.define('App.store.com.TutorStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'博导'},
        {'key':'2', 'value':'硕导'}
    ]
});