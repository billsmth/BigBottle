Ext.define('App.controller.product.productTypeCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['product.productTypeStore', 'product.ptSimpleStore', 'product.ptStatusStore'],
    models: ['product.productTypeModel'],
    views: ['product.productTypeView', 'product.productTypeaddwin'],
    
    init: function() {
        this.control({
        
	        'productTypeView  button[action=product_type_list_search_act]' : {
	            click: this.showQuery
	        },
            'productTypeView  button[action=product_type_list_del_act]' : {
	            click: this.delProductType
	        },
	        'productTypeView  button[action=product_type_list_add_act]' : {
	            click: this.showProductTypeAddWin
	        },
	        'productTypeaddwin  button[action=product_type_add_exec_act]' : {
                click: this.execProductTypeAdd
            },
            'productTypeaddwin  button[action=product_type_add_cancel_act]' : {
                click: this.cancelProductTypeAdd
            },
            'productTypeView  button[action=product_type_list_edit_act]' : {
            	click: this.showProductTypeEditWin
            },
            'productTypeView' : {
            	itemclick: this.rowClick
            },
        });
    },
    
    /**
     * 显示查询窗口
     */
    showQuery : function () {
        if (this.productTypequery==null || this.productTypequery==undefined) {
            this.productTypequery=Ext.create('App.view.product.productquerywin');
        }
        
        this.productTypequery.show();
    },
    
    /**
     * 实际执行查询
     */
    execQuery : function () {
        this.getProductProductStoreStore().load({
            params: this.productTypequery.down('form').getForm().getValues(),
            scope: this,
            callback: function(records, operation, success) {
                this.productTypequery.hide();
            }
        });
    },
    
    /**
     * 关闭查询窗口
     */
    cancelQuery : function () {
        this.productTypequery.hide();
    },
    
    /**
     * 删除产品分类
     */
    delProductType : function (obj, event) {
    	var grid = obj.up('productTypeView');
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
    	
    	Ext.MessageBox.confirm('提示','确认删除此条产品信息吗？',function(btn){
    		if(btn=='no'){
    			return;
    		}else{
    			Ext.Ajax.request({
    	    	    url: 'productType/delProductType.action',
                    params : {
                    	typeID : rowRecord.data.type_id
                    },
    	    	    success: this.commonCallback,
    	    	    scope: this
    	    	});
    		}
    	},this);
    },
    
    showProductTypeAddWin : function () {
        if (this.productTypeaddwin==null || this.productTypeaddwin==undefined) {
            this.productTypeaddwin=Ext.create('App.view.product.productTypeaddwin');
        }
        Ext.getCmp('editProductType').setValue('1');
        this.productTypeaddwin.show();
    },
    
    /**
     * 执行添加
     */
    execProductTypeAdd : function () {
    	var values =this.productTypeaddwin.down('form').getForm().getValues();
    	
    	if(Ext.getCmp('type_name').getValue()==""){
    		Ext.MessageBox.alert("错误", "[分类名称]项为必须输入项, 请输入。");
            return;
    	}
		Ext.Ajax.request({
		     url: 'productType/saveproductType.action',
		     params: values,
		     success: function (response){
		     	var text=response.responseText;
		     	this.productTypeaddwin.hide();
		     	if (this.productTypeaddwin !=null || this.productTypeaddwin !=undefined) {
		            Ext.destroy(this.productTypeaddwin );
		            this.productTypeaddwin=null;
		        }
		
		     	this.commonCallback();
		     },
		     scope: this
		});
    },
    
    /**
     * 关闭添加产品窗口
     */
    cancelProductTypeAdd : function () {
        this.productTypeaddwin.hide();
    },
    
    /**
     * 显示修改页面
     */
    showProductTypeEditWin: function() {
        var grid=Ext.ComponentQuery.query('productTypeView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        if (this.productTypeaddwin==null || this.productTypeaddwin==undefined) {
            this.productTypeaddwin=Ext.create('App.view.product.productTypeaddwin');
        }
        var editForm=Ext.ComponentQuery.query('productTypeaddwin form')[0];
        editForm.getForm().loadRecord(rowRecord);

        Ext.getCmp('type_id_lab').setValue("<span style='background:#009900;color:#6633FF;padding:0px 20px 0px 5px'><Strong>"+rowRecord.data.type_id+"</Strong></span>");
        Ext.getCmp('editProductType').setValue('2');

        this.productTypeaddwin.show();
    },
    
    commonCallback : function (ctrl) {
        Ext.MessageBox.alert("提示", "操作成功");
        this.getProductPtSimpleStoreStore().load();
        this.storeQueryWithCondition();
    },
    
    storeQueryWithCondition : function () {
        var store=Ext.ComponentQuery.query('productTypeView')[0].getStore();
        if (this.productquery==null || this.productquery==undefined) {
            this.productquery=Ext.create('App.view.product.productquerywin');
        }
        store.load({
            params: this.productquery.down('form').getForm().getValues()
        });
    },
    
    rowClick : function(){
    	Ext.getCmp('productTab').setActiveTab(0);
    	var grid=Ext.ComponentQuery.query('productTypeView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        
    }
});

  