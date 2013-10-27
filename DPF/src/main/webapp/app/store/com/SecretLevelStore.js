Ext.define('App.store.com.SecretLevelStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
        {'key':'1', 'value':'公开'},
        {'key':'2', 'value':'秘密'},
        {'key':'3', 'value':'机密'},
        {'key':'4', 'value':'绝密'}
    ]
});