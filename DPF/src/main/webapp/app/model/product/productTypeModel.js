/**
 * 产品TypeModel
 */
 
Ext.define('App.model.product.productTypeModel', {
    extend: 'Ext.data.Model',

    fields: [{
	            name: 'type_id',
	            type: 'string'
	        },{
	            name: 'type_name',
	            type: 'string'
	        },{
	            name: 'type_key',
	            type: 'string'
	        },{
	            name: 'type_status',
	            type: 'string'
	        },{
	            name: 'parent_id',
	            type: 'string'
	        },{
	            name: 'note',
	            type: 'string'
	        }
	  ]
});