Ext.define('App.controller.product.productCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['product.productStore'],
    models: ['product.productModel'],
    views: ['product.productView', 'product.productaddwin'],
    
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
            'mupfilewin  button[action=product_upfile_cancel_act]' : {
                click: this.cancelUpfile
            },
            'mupfilewin  button[action=product_upfile_exec_act]' : {
                click: this.execUpfile
            },
            'productView  button[action=product_list_downfile_act]' : {
                click: this.execDownfile
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
    	    	    url: 'product/delete.action',
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
    	values.editType='1';
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
        this.showEdit();
        
        var editForm=Ext.ComponentQuery.query('meditwin form')[0];
        editForm.getForm().loadRecord(rowRecord);
        
        Ext.getCmp('editBeginTimeStr').setValue(rowRecord.data.beginTimeStr.split(" ")[0]);
        Ext.getCmp('editBeginTimeStr2').setValue(rowRecord.data.beginTimeStr.split(" ")[1]);
        Ext.getCmp('editEndTimeStr').setValue(rowRecord.data.endTimeStr.split(" ")[0]);
        Ext.getCmp('editEndTimeStr2').setValue(rowRecord.data.endTimeStr.split(" ")[1]);
        var mainStr="";
        for(var i=0;i<rowRecord.data.mainPeopleArr.length;i++){
        	mainStr+=rowRecord.data.mainPeopleArr[i].idPeople;
        	if(i!=rowRecord.data.mainPeopleArr.length-1)mainStr+=",";
        }
        Ext.getCmp('meeting_combobox_mainpeople').setValue(mainStr.split(","));
        var maybeStr="";
        for(var i=0;i<rowRecord.data.maybePeopleArr.length;i++){
        	maybeStr+=rowRecord.data.maybePeopleArr[i].idPeople;
        	if(i!=rowRecord.data.maybePeopleArr.length-1)maybeStr+=",";
        }
        Ext.getCmp('meeting_combobox_maybepeople').setValue(maybeStr.split(","));
        
        this.setEditPanelStatus2(false);
        if(editForm.collapsed) {
            editForm.expand();
        }
    },
    
    setEditPanelStatus2 : function (disabled) {
    	var editForm=Ext.ComponentQuery.query('meditwin form')[0];
        editForm.setDisabled(disabled);
    },
    
    showEdit : function () {
        if (this.medit==null || this.medit==undefined) {
            this.medit=Ext.create('App.view.product.meditwin');
        }
        this.medit.show();
    },
    
    /**
     * 执行修改
     */
    execEdit : function () {
    	if(!this.dateOrPass('editBeginTimeStr', 'editEndTimeStr', 'editBeginTimeStr2', 'editEndTimeStr2')){
    		Ext.MessageBox.alert("提示","请重新选择会议时间");
    		return;
    	}
    	
//    	 var grid=Ext.ComponentQuery.query('productView gridpanel')[0];
         // 取消选择的原因是当保存后，selectModel的备份数据已经与store的记录不同步
         // 此处也可以再次产生选择事件，或人为同步selectmodel与store的记录
//         grid.getSelectionModel().deselectAll();

     	//var editForm=Ext.ComponentQuery.query('addPeopleWin form[region=south]')[0];
         Ext.Ajax.request({
             url: 'product/update.action',
             //params : editForm.getForm().getValues(),
             params: this.medit.down('form').getForm().getValues(),
             success: function (response){
             	var text=response.responseText;
             	//Ext.Msg.alert('text','text---'+text);
             	//Ext.MessageBox.alert("text", "操作成功"+text);
             	this.medit.hide();
             	this.commonCallback();
             },
             scope: this
         });
    	
    },
    
    cancelEdit : function () {
        this.medit.hide();
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
    
    editContent : function () {
        Ext.getCmp('meetingTab').setActiveTab(1);
        this.currentId=Ext.ComponentQuery.query('productView')[0].getSelectionModel().getSelection()[0].get('idmeeting');
        Ext.Ajax.request({
            url: 'product/listall.action?idmeeting=' + this.currentId,
            success: function (response){
            	var text=response.responseText;
//            	Ext.MessageBox.alert("text", "操作成功"+text);
//            	Ext.getCmp('meetingMainContent').setValue(text);
            	var jsonObj=Ext.JSON.decode(text);
            	Ext.getCmp('meetingMainContent').setValue(jsonObj[0].mainContent);
            },
            scope: this
        });
    },
    
    updContent : function () {
    	var grid=Ext.ComponentQuery.query('productView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑纪要。");
            return;
        }
    	var str=Ext.getCmp('meetingMainContent').getValue();
    	var idmeeting=this.currentId;
    	Ext.Ajax.request({
            url: 'product/updMainContent.action',
            params: {
            	idmeeting:idmeeting,
            	mainContent:str
            },
            success: function (response){
            	Ext.MessageBox.alert("提示", "操作成功");
            },
            scope: this
        });
    },
    
    editSummary : function () {
        Ext.getCmp('meetingTab').setActiveTab(2);
        this.currentId=Ext.ComponentQuery.query('productView')[0].getSelectionModel().getSelection()[0].get('idmeeting');
        Ext.Ajax.request({
            url: 'product/findSummary.action?idMeeting=' + this.currentId,
            success: function (response){
            	var text=response.responseText;
//            	Ext.MessageBox.alert("text", "操作成功"+text);
//            	Ext.getCmp('meetingMainContent').setValue(text);
            	var jsonObj=Ext.JSON.decode(text);
            	Ext.getCmp('meetingSummary').setValue(jsonObj.summary);
            },
            scope: this
        });
    },
    
	updSummary : function () {
		var grid=Ext.ComponentQuery.query('productView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑总结。");
            return;
        }
		var str=Ext.getCmp('meetingSummary').getValue();
    	var idmeeting=this.currentId;
    	Ext.Ajax.request({
            url: 'product/updSummary.action',
            params: {
            	idMeeting:idmeeting,
            	summary:str
            },
            success: function (response){
            	Ext.MessageBox.alert("提示", "操作成功");
            },
            scope: this
        });
    },
    
    rowClick : function(){
    	Ext.getCmp('productTab').setActiveTab(0);
    	var grid=Ext.ComponentQuery.query('productView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        var temp;
        temp=Ext.ComponentQuery.query('productView displayfield')[0];
        temp.setValue(rowRecord.data.product_id);
        temp=Ext.ComponentQuery.query('productView displayfield')[1];
        temp.setValue(rowRecord.data.product_name);
        temp=Ext.ComponentQuery.query('productView displayfield')[2];
        temp.setValue(rowRecord.data.path);
        temp=Ext.ComponentQuery.query('productView displayfield')[3];
        temp.setValue(rowRecord.data.template_id);
        temp=Ext.ComponentQuery.query('productView displayfield')[4];
        temp.setValue(rowRecord.data.new_flg);
        temp=Ext.ComponentQuery.query('productView displayfield')[5];
        temp.setValue(rowRecord.data.status);
        temp=Ext.ComponentQuery.query('productView displayfield')[6];
        temp.setValue(rowRecord.data.creater_id);
        temp=Ext.ComponentQuery.query('productView displayfield')[7];
        temp.setValue(rowRecord.data.type);
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
    
    dateOrPass:function(beginDateId,endDateId,beginTimeId,endTimeId){
    	var bts=Ext.getCmp(beginDateId).getValue();
    	var ets=Ext.getCmp(endDateId).getValue();
    	var bts2=Ext.getCmp(beginTimeId).getValue();
    	var ets2=Ext.getCmp(endTimeId).getValue();
    	var b1=Ext.Date.format(new Date(bts),'Y-m-d'); 
    	var b2=Ext.Date.format(new Date(bts2),'H:i'); 
    	var e1=Ext.Date.format(new Date(ets),'Y-m-d'); 
    	var e2=Ext.Date.format(new Date(ets2),'H:i'); 
    	var begin=new Date(b1.split("-")[0],b1.split("-")[1],b1.split("-")[2],b2.split(":")[0],b2.split(":")[1],0);
    	var end=new Date(e1.split("-")[0],e1.split("-")[1],e1.split("-")[2],e2.split(":")[0],e2.split(":")[1],0);
    	if(begin>=end){
    		return false;
    	}
    	if(begin<end){
    		return true;
    	}
    },
    
    
    /**
     * 显示添加上传窗口
     */
    showUpfileWin:function (){
    	 if (this.mupfile==null || this.mupfile==undefined) {
             this.mupfile=Ext.create('App.view.product.mupfilewin');
         }
         this.mupfile.show();
    },
    
    /**
     * 关闭上传窗口
     */
    cancelUpfile : function () {
        Ext.destroy(this.mupfile);
        this.mupfile=null;
    },
    
    /**
     * 执行上传
     */
    execUpfile : function () {
    	var form=Ext.getCmp('mupfileform');
    	form.submit({
            url : 'product/upfile.action',
            method : 'POST',
            waitMsg : '正在上传您的文件，请耐心等候...',
            success : function(form, action) {
                Ext.Msg.alert('提示信息', "文件保存成功");
            },
            failure : function() {
                Ext.Msg.alert("提示信息", "对不起，文件保存失败");
            }
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

  