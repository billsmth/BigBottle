Ext.define('App.controller.xsgl.xiaoshouCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['xsgl.xsglStore'],
    views: ['xsgl.xiaoshouView','xsgl.xsglQueryWin','xsgl.addXiaoshouWin'],
    
    init: function() {
        this.control({
        	'xiaoshouView button[action=xsgl_list_query_act]': {
            	click:this.showQueryXsglView
            },
            'xiaoshouView button[action=xsgl_ruku_act]': {
            	click:this.xsglRukuEvent
            },
            'xsglQueryWin button[action=xsgl_query_query_act]': {
            	click:this.queryXsglEvent
            },
            'xsglQueryWin button[action=xsgl_query_reset_act]': {
            	click:this.queryResetXsglEvent
            },
            'xsglQueryWin button[action=xsgl_query_cancel_act]': {
            	click:this.cancelXsglQueryEvent
            },
            'xiaoshouView button[action=xsgl_add_act]': {
            	click:this.showAddXsglWin
            },
            'xiaoshouView button[action=xsgl_copy_act]': {
            	click:this.xsglCopyEvent
            },
            'addXiaoshouWin button[action=xsgl_submit_xiaoshou_act]': {
            	click:this.xsglSubmitEvent
            },
            'addXiaoshouWin button[action=xsgl_cancel_xiaoshou_act]': {
            	click:this.xsglcancelAddEvent
            },
            
            
        });
    },
    showQueryXsglView : function () { //打开查询页面信息
        if (this.XsglQuery == null || this.XsglQuery == undefined) {
            this.XsglQuery = Ext.create('App.view.xsgl.xsglQueryWin');
        }
        this.XsglQuery.show();
    },
    queryXsglEvent:function(){ //查询
    	if (this.XsglQuery == null || this.XsglQuery == undefined) {
            this.XsglQuery = Ext.create('App.view.xsgl.xsglQueryWin');
        }
	    this.getXsglXsglStoreStore().load({
            params: this.XsglQuery.down('form').getForm().getValues(),
            scope: this,
            callback: function(records, operation, success) {
                this.cancelXsglQueryEvent();
            }
        });
    },
    xsglRukuEvent : function (obj, event) {
		var grid = obj.up('xiaoshouView');
    	if(grid.getSelectionModel().selected.items.length<1){
    		Ext.Msg.alert('提示','请选择要入库的销售单(支持多选)，再点击【销售入库】按钮');
        	return;
    	}
        var obj = grid.getSelectionModel().selected.items;
        if(obj.length==0){
        	Ext.Msg.alert('提示','请先选择要入库的销售单，再点击【销售入库】按钮');
        	return;
        }else{
            Ext.Msg.confirm("请确认", "确认要将销售单信息合并到库存中吗?", function(id){
        		if (id == "yes") {
        			if(obj.length==1 && obj[0].data.zhuangtai=='1'){
                    	Ext.Msg.alert('非法操作','此销售单已经导入，不能重复导入。');
                    	return;
                    }
        			for(var a=0;a<obj.length;a++){
                		if(obj[a].data.zhuangtai=='1'){
                        	Ext.Msg.alert('非法操作','您选择了已入库的销售单，请剔除。');
                        	return;
                        }
                	}
        			var models = grid.getSelectionModel().selected.items;
                    var ids = '';
                    Ext.iterate(models, function(key, value) {
                        var tmp = key.data.xiaoshou_id;
                        if(ids.length !=0) {
                            ids = ids + ',' + tmp;
                        } else {
                            ids = ids + tmp;
                        }
                    }, this);
                    Ext.Ajax.request({
                        url : 'xiaoshou/ruku.action',
                        actionMethods:{
            				read:'POST'        
            	        },
                        params : {
                        	xiaoshouids : ids
                        },
                        success : function(response, option) {
                        	var result = Ext.decode(response.responseText);
                        	if(result.msg=="1"){
                        		Ext.Msg.alert('错误','销售数量超过库存数量，本系统暂不支持负库存。');
                        	}else if(result.msg=="0"){
                        		Ext.Msg.alert('提示','销售信息导入库存成功');	
                        	}
                        	this.getJhglJhglStoreStore.load();
                        },
                        failure : function() {
                            Ext.Msg.alert('提示','销售信息导入库存失败');
                        },
                        scope: this
                    });
        		}
        	});
        }
    },
    queryResetXsglEvent:function(){ //关闭查询窗体
    	this.XsglQuery.down('form').getForm().reset();
    },
    cancelXsglQueryEvent:function(){ //关闭查询窗体
    	//this.XsglQuery.down('form').getForm().reset();
        //Ext.destroy(this.XsglQuery);
        //this.XsglQuery = null;
        this.XsglQuery.hide();
    },
    showAddXsglWin:function() {
    	if (this.addXiaoshouWin == null || this.addXiaoshouWin == undefined) {
            this.addXiaoshouWin = Ext.create('App.view.xsgl.addXiaoshouWin');
        }else{
        	this.addXiaoshouWin.down('form').getForm().reset();
        }
        this.addXiaoshouWin.show();
    },
    xsglCopyEvent:function(obj, event) {
		var grid = obj.up('xiaoshouView');
		
    	if(grid.getSelectionModel().selected.items.length<1){
    		Ext.Msg.alert('提示','请选择要复制的销售单，再点击【复制销售单】按钮');
        	return;
    	}else if(grid.getSelectionModel().selected.items.length>1){
    		Ext.Msg.alert('提示','请选择一条要复制的销售单，本系统暂不支持多条复制');
        	return;
    	}
    	if (this.addXiaoshouWin == null || this.addXiaoshouWin == undefined) {
            this.addXiaoshouWin = Ext.create('App.view.xsgl.addXiaoshouWin');
        }
    	var rowRecord = grid.getSelectionModel().selected.items[0];
    	var editForm  = Ext.ComponentQuery.query('addXiaoshouWin form')[0];
	    editForm.getForm().loadRecord(rowRecord);
	    Ext.getCmp("count").setValue(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue()+" 元");
        Ext.getCmp('editType').setValue(1);
	    this.addXiaoshouWin.show();
    },
    xsglSubmitEvent:function(obj, event) {
    	//var grid = obj.up('xiaoshouView');
    	var form = Ext.ComponentQuery.query('addXiaoshouWin form')[0];
        if (form.isValid()) {
        	
        	Ext.Ajax.request({
                url: 'xiaoshou/savexiaoshou.action',
                actionMethods:{
    				read:'POST'        
    	        },
                //params : editForm.getForm().getValues(),
                params: this.addXiaoshouWin.down('form').getForm().getValues(),
                success: function (response){
                	Ext.Msg.alert('成功提示','新增或编辑销售单成功');
                	this.addXiaoshouWin.hide();
                	this.queryXsglEvent();
                },
                failure: function(response) {
                    Ext.Msg.alert('错误提示','新增或编辑销售单失败');
                },
                scope: this
            });
        }
    },
    xsglcancelAddEvent:function(obj, event) {
    	this.addXiaoshouWin.hide();
    }
    
});