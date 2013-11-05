Ext.define('App.store.com.SaleStore', {
    extend: 'Ext.data.Store',
    
    fields: ['key', 'value'],
    
    data:[
		{'key':'0', 'value':'普通产品'},
		{'key':'1', 'value':'新产品'},
		{'key':'2', 'value':'推荐品'},
		{'key':'3', 'value':'打折品'},
		{'key':'4', 'value':'畅销品'},
		{'key':'5', 'value':'定做商品'}
    ]
});