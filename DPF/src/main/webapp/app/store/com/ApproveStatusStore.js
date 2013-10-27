Ext.define('App.store.com.ApproveStatusStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'未授权'},
		{'key':'1', 'value':'已授权'},
		{'key':'2', 'value':'已提交'},
		{'key':'3', 'value':'修改中'},
		{'key':'4', 'value':'形式审查'},
		{'key':'5', 'value':'专家网评'},
		{'key':'6', 'value':'会议评审'},
		{'key':'7', 'value':'复审'},
		{'key':'8', 'value':'合同签订中'},
		{'key':'9', 'value':'合同已签订'}
    ]
});