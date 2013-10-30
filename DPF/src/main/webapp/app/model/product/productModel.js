/**
 * 产品管理Model
 */
 
Ext.define('App.model.product.productModel', {
    extend: 'Ext.data.Model',

    fields: [{
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
	            type: 'string',
	            convert: statusConv
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
	            type: 'string',
	            convert: newFlgConv
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

function newFlgConv(v, record){
	if(v==0){
		return "新产品";
	}else if(v==1){
		return "普通产品";
	}else if(v==2){
		return "推荐";
	}
}

function statusConv(v, record){
	if(v==0){
		return "暂存";
	}else if(v==1){
		return "提交";
	}else if(v==9){
		return "已删除";
	}
}