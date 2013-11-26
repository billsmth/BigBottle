/**
 * 产品类型Model
 */
 
Ext.define('App.model.product.ptSimpleModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'type_id',
            type: 'string'
        },
        {
            name: 'type_name',
            type: 'string'
        }
    ]
});