/**
 * 产品管理Model
 */
 
Ext.define('App.model.product.productModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'product_id',
            type: 'string'
        },
        {
            name: 'product_name',
            type: 'string'
        },
        {
            name: 'path',
            type: 'string'
        },
        {
            name: 'image_name',
            type: 'string'
        },
        {
            name: 'template_id',
            type: 'string'
        },
        {
            name: 'desp',
            type: 'string'
        },
        {
            name: 'status',
            type: 'string'
        },
        {
            name: 'creater_id',
            type: 'string'
        },
        {
            name: 'type',
            type: 'string'
        },
        {
            name: 'new_flg',
            type: 'string'
        },
        {
            name: 'note',
            type: 'string'
        },
        {
            name: 'col1',
            type: 'string'
        },
        {
            name: 'col2',
            type: 'string'
        },
        {
            name: 'col3',
            type: 'string'
        },
        {
            name: 'col4',
            type: 'string'
        },
        {
            name: 'col5',
            type: 'string'
        },
        {
            name: 'col6',
            type: 'string'
        },
        {
            name: 'col7',
            type: 'string'
        },
        {
            name: 'col8',
            type: 'string'
        },
        {
            name: 'kucun_ids',
            type: 'string'
        }
    ]
});

function statusConv(v,record){
	if(v==1){
		return "未开始";
	}else if(v==2){
		return "已邀请";
	}else if(v==3){
		return "进行中";
	}else{
		return "已结束";
	}
}

function strFmt(v,record){
	return v.substring(0,16);
}