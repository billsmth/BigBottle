Ext.define('App.store.product.ptStatusStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'暂存'},
		{'key':'1', 'value':'启用'},
		{'key':'2', 'value':'删除'}
    ]
});