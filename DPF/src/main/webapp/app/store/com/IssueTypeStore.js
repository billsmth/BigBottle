/***
 * 地域类型
 */

Ext.define('App.store.com.IssueTypeStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'技术示范类'},
        {'key':'2', 'value':'技术研究类'},
        {'key':'3', 'value':'技术开发类'},
        {'key':'4', 'value':'其他'}
    ]
});