Ext.define('App.store.com.ProductStatusStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'暂存'},
		{'key':'1', 'value':'修改中'},
		{'key':'2', 'value':'已提交'},
		{'key':'3', 'value':'上架'},
		{'key':'4', 'value':'下架'},
		{'key':'9', 'value':'已删除'}
    ]
});