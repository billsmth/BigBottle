/***
 * 单位性质
 */

Ext.define('App.store.com.CompanyPropStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'社团'},
        {'key':'2', 'value':'事业单位'},
        {'key':'3', 'value':'高校'},
        {'key':'4', 'value':'科研'},
        {'key':'5', 'value':'其他'}
    ]
});