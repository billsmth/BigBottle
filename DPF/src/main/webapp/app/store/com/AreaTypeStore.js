/***
 * 地域类型
 */

Ext.define('App.store.com.AreaTypeStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'大陆'},
        {'key':'2', 'value':'港澳台'},
        {'key':'3', 'value':'其他'}
    ]
});