Ext.define('App.controller.product.productCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['product.productStore'],
    models: ['product.productModel'],
    views: ['product.productView', 'product.productaddwin', 'product.productUpfileWin'],
    
    init: function() {
        this.control({
        
	        'productView  button[action=product_list_search_act]' : {
	            click: this.showQuery
	        },
            'productquerywin  button[action=product_search_exec_act]' : {
                click: this.execQuery
            },
            'productquerywin  button[action=product_search_cancel_act]' : {
                click: this.cancelQuery
            },
            'productView  button[action=product_list_del_act]' : {
	            click: this.delProducts
	        },
	        'productView  button[action=product_list_add_act]' : {
	            click: this.showProductAddWin
	        },
	        'productaddwin  button[action=product_add_exec_act]' : {
                click: this.execProductAdd
            },
            'productaddwin  button[action=product_add_cancel_act]' : {
                click: this.cancelProductAdd
            },
            'productView  button[action=product_list_edit_act]' : {
            	click: this.showEditWin
            },
            'meditwin  button[action=product_edit_exec_act]' : {
                click: this.execEdit
            },
            'meditwin  button[action=product_edit_cancel_act]' : {
                click: this.cancelEdit
            },
            'productView  button[action=product_list_edit_maincontent_act]' : {
            	click: this.editContent
            },
            'productView  button[action=product_maincontent_save_act]' : {
            	click: this.updContent
            },
            'productView  button[action=product_list_edit_summary_act]' : {
            	click: this.editSummary
            },
            'productView  button[action=product_summary_save_act]' : {
            	click: this.updSummary
            },
            'productView' : {
            	itemclick: this.rowClick
            },
            'productView  button[action=product_test_act]' : {
            	click: this.test
            },
            'productView  button[action=product_list_upfile_act]' : {
            	click: this.showUpfileWin
            },
            'productUpfileWin  button[action=product_upfile_cancel_act]' : {
                click: this.cancelUpfile
            },
            'productUpfileWin  button[action=product_upfile_exec_act]' : {
                click: this.execUpfile
            },
            'productView  button[action=product_list_downfile_act]' : {
                click: this.execDownfile
            },
            'productView  button[action=product_view_pic_act]' : {
                click: this.viewPic
            },
        });
    },
    
    test : function () {
        Ext.Ajax.request({
            url: 'product/test.action',
            success: function (response){
//            	Ext.MessageBox.alert("提示", "操作成功");
            },
            scope: this
        });
    },
    viewPic : function (obj, event) {
    	var grid = obj.up('productView');
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }else{
        	var url = "product/getProductPic.action?productId="+rowRecord.data.product_id;
        	var flag = window.showModalDialog(url,window,"help:0;scroll:yes;status:no;dialogWidth:1000px;dialogHeight:500px");
        	if (flag)
        	{
        		refresh();
        	}
        }
    	
    },
    
    /**
     * 显示查询窗口
     */
    showQuery : function () {
        if (this.productquery==null || this.productquery==undefined) {
            this.productquery=Ext.create('App.view.product.productquerywin');
        }
        
        this.productquery.show();
    },
    
    /**
     * 实际执行查询
     */
    execQuery : function () {
        this.getProductProductStoreStore().load({
            params: this.productquery.down('form').getForm().getValues(),
            scope: this,
            callback: function(records, operation, success) {
                this.productquery.hide();
            }
        });
    },
    
    /**
     * 关闭查询窗口
     */
    cancelQuery : function () {
        this.productquery.hide();
    },
    
    /**
     * 软删除
     */
    delProducts : function (obj, event) {
    	var grid = obj.up('productView');
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
    	
    	Ext.MessageBox.confirm('提示','确认删除此条产品信息吗？',function(btn){
    		if(btn=='no'){
    			return;
    		}else{
    			var models = grid.getSelectionModel().selected.items;
    			var ids = '';
                Ext.iterate(models, function(key, value) {
                    var tmp = key.data.product_id;
                    if(ids.length !=0) {
                        ids = ids + ',' + tmp;
                    } else {
                        ids = ids + tmp;
                    }
                }, this);
    			
    			Ext.Ajax.request({
    	    	    url: 'product/delProduct.action',
                    params : {
                    	productIds : ids
                    },
    	    	    success: this.commonCallback,
    	    	    scope: this
    	    	});
    		}
    	},this);
    },
    
    /**
     * 显示添加产品窗口
     */
    showProductAddWin:function (){
    	this.showAddProduct();
    	var editForm=Ext.ComponentQuery.query('productaddwin form')[0];
        editForm.getForm().reset();
        this.setEditPanelStatus(false);
        if(editForm.collapsed) {
            editForm.expand();
        }
    },
    
    showAddProduct : function () {
        if (this.productaddwin==null || this.productaddwin==undefined) {
            this.productaddwin=Ext.create('App.view.product.productaddwin');
        }
        Ext.getCmp('editType').setValue('1');
        this.productaddwin.show();
    },
    
    setEditPanelStatus : function (disabled) {
    	var editForm=Ext.ComponentQuery.query('productaddwin form')[0];
        editForm.setDisabled(disabled);
    },
    
    /**
     * 执行添加
     */
    execProductAdd : function () {
    	var values =this.productaddwin.down('form').getForm().getValues();
		Ext.Ajax.request({
		     url: 'product/saveproduct.action',
		     params: values,
		     success: function (response){
		     	var text=response.responseText;
		     	this.productaddwin.hide();
		     	if (this.productquery !=null || this.productquery !=undefined) {
		            Ext.destroy(this.productquery );
		            this.productquery=null;
		        }
		
		     	this.commonCallback();
		     },
		     scope: this
		});
    },
    
    /**
     * 关闭添加产品窗口
     */
    cancelProductAdd : function () {
        this.productaddwin.hide();
    },
    
    /**
     * 显示修改页面
     */
    showEditWin: function() {
        var grid=Ext.ComponentQuery.query('productView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        this.showAddProduct();
        
        var editForm=Ext.ComponentQuery.query('productaddwin form')[0];
        editForm.getForm().loadRecord(rowRecord);
        
        Ext.getCmp('editType').setValue(2);
    },
    
    commonCallback : function (ctrl) {
        Ext.MessageBox.alert("提示", "操作成功");
        this.storeQueryWithCondition();
    },
    
    storeQueryWithCondition : function () {
        var store=Ext.ComponentQuery.query('productView')[0].getStore();
        if (this.productquery==null || this.productquery==undefined) {
            this.productquery=Ext.create('App.view.product.productquerywin');
        }
//        this.conditionHolder=Ext.ComponentQuery.query("productView form[region=north]")[0].getValues();
        store.load({
            params: this.productquery.down('form').getForm().getValues()
        });
    },
    
    rowClick : function(){
    	Ext.getCmp('productTab').setActiveTab(0);
    	var grid=Ext.ComponentQuery.query('productView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        var temp;
        temp=Ext.ComponentQuery.query('productView displayfield')[0];
        temp.setValue(rowRecord.data.product_name+" [ ID: "+rowRecord.data.product_id+" ]");
        temp=Ext.ComponentQuery.query('productView displayfield')[1];
        temp.setValue(rowRecord.data.type);
        temp=Ext.ComponentQuery.query('productView displayfield')[2];
        temp.setValue(rowRecord.data.path);
        temp=Ext.ComponentQuery.query('productView displayfield')[3];
        temp.setValue(rowRecord.data.template_id);
        temp=Ext.ComponentQuery.query('productView displayfield')[4];
        var newFlg=rowRecord.data.new_flg;
        if(newFlg==0){
        	newFlg= "新产品";
    	}else if(newFlg==1){
    		newFlg= "普通产品";
    	}else if(newFlg==2){
    		newFlg= "推荐";
    	}
        temp.setValue(newFlg);
        temp=Ext.ComponentQuery.query('productView displayfield')[5];
        var statusFlg=rowRecord.data.status;
        if(statusFlg==0){
        	statusFlg= "暂存";
    	}else if(statusFlg==1){
    		statusFlg= "已提交";
    	}else if(statusFlg==2){
    		statusFlg= "已审批";
    	}else if(statusFlg==3){
    		statusFlg= "修改中";
    	}else if(statusFlg==9){
    		statusFlg= "已删除";
    	}
        temp.setValue(statusFlg);
        temp=Ext.ComponentQuery.query('productView displayfield')[6];
        temp.setValue(rowRecord.data.creater_name+" [ ID: "+rowRecord.data.creater_id+" ]");
        temp=Ext.ComponentQuery.query('productView displayfield')[7];
        temp.setValue(rowRecord.data.updater_name+" [ ID: "+rowRecord.data.updater_id+" ]");
        temp=Ext.ComponentQuery.query('productView displayfield')[8];
        temp.setValue(rowRecord.data.desp);
        temp=Ext.ComponentQuery.query('productView displayfield')[9];
        temp.setValue(rowRecord.data.note);
        
//        //纪要：
//        Ext.getCmp('productTab').setActiveTab(1);
//        Ext.getCmp('meetingMainContent').setValue(rowRecord.data.mainContent);
//        
//        //总结
//        Ext.getCmp('productTab').setActiveTab(2);
//        this.currentId=Ext.ComponentQuery.query('productView')[0].getSelectionModel().getSelection()[0].get('idmeeting');
//        Ext.Ajax.request({
//            url: 'product/findSummary.action?idMeeting=' + this.currentId,
//            success: function (response){
//            	var text=response.responseText;
//            	var jsonObj=Ext.JSON.decode(text);
//            	Ext.getCmp('meetingSummary').setValue(jsonObj.summary);
//            },
//            scope: this
//        });
//        Ext.getCmp('productTab').setActiveTab(0);
    },
    
    /**
     * 显示添加上传窗口
     */
    showUpfileWin:function (){
    	var grid=Ext.ComponentQuery.query('productView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        
		if (this.productUpfile==null || this.productUpfile==undefined) {
		    this.productUpfile=Ext.create('App.view.product.productUpfileWin');
		}
		Ext.getCmp('target_product_id').setValue(rowRecord.data.product_id);
		this.productUpfile.show();
		
    },
    
    /**
     * 关闭上传窗口
     */
    cancelUpfile : function () {
        Ext.destroy(this.productUpfile);
        this.productUpfile=null;
    },
    
    /**
     * 执行上传
     */
    execUpfile : function () {
    	var form=Ext.getCmp('productUpfileForm');
    	form.submit({
            url : 'product/upfile.action',
            method : 'POST',
            waitMsg : '正在上传您的文件，请耐心等候...',
            success : function(form, action) {
            	this.productUpfile.hide();
            	this.commonCallback;
            	Ext.Msg.alert('提示信息', "图片文件保存成功");
            },
            failure : function() {
            	this.productUpfile.hide();
            	this.commonCallback;
            	Ext.Msg.alert("提示信息", "对不起，文件保存失败");
            },
            scope:this
        });
    },
    
    /**
     * 执行下载
     */
    execDownfile : function () {
    	Ext.Ajax.request({
            url: 'product/downfile.action',
            success: function (response){
//            	var text=response.responseText;
//            	var jsonObj=Ext.JSON.decode(text);
//            	window.location.href=jsonObj.path;//这样就可以弹出下载对话框了  
            },
            scope: this
        });
    },
});

  