Ext.define('App.store.com.XiaoshouStatusStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'待付款'},
		{'key':'1', 'value':'已付款'},
		{'key':'2', 'value':'已确定'},
		{'key':'3', 'value':'已发货'},
		{'key':'4', 'value':'已收货'},
		{'key':'5', 'value':'完成'},
		{'key':'6', 'value':'关闭'}
    ]
});