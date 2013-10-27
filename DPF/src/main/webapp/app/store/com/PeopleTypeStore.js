/***
 * 人才类型
 */
Ext.define('App.store.com.PeopleTypeStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'科研'},
        {'key':'2', 'value':'法人'},
        {'key':'3', 'value':'财务'},
        {'key':'4', 'value':'专家'}
    ]
});