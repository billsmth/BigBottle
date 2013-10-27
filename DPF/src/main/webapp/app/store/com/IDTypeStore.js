/***
 * 人才类型
 */
Ext.define('App.store.com.IDTypeStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'身份证'},
        {'key':'2', 'value':'护照'},
        {'key':'3', 'value':'军官证'}
    ]
});