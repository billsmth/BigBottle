Ext.define('App.store.com.ExpressNameStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'申通快递'},
		{'key':'1', 'value':'顺丰快递'},
		{'key':'2', 'value':'圆通快递'}
    ]
});