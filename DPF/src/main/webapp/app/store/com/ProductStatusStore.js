Ext.define('App.store.com.ProductStatusStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'暂存'},
		{'key':'1', 'value':'已提交'},
		{'key':'2', 'value':'已审批'},
		{'key':'3', 'value':'修改中'},
		{'key':'9', 'value':'已删除'}
    ]
});