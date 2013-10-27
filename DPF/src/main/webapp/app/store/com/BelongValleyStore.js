Ext.define('App.store.com.BelongValleyStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'太湖流域'},
        {'key':'2', 'value':'辽河流域'},
        {'key':'3', 'value':'滇池流域'},
        {'key':'4', 'value':'松花江流域'},
        {'key':'5', 'value':'海河流域'},
        {'key':'6', 'value':'淮河流域'},
        {'key':'7', 'value':'巢湖流域'},
        {'key':'8', 'value':'三峡水库'},
        {'key':'9', 'value':'东江流域'},
        {'key':'10', 'value':'洱海流域'},
        {'key':'11', 'value':'饮用水、产业化及其他'}
    ]
});