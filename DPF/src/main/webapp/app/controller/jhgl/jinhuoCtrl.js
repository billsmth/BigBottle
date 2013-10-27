Ext.define('App.controller.jhgl.jinhuoCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['jhgl.jhglStore'],

    views: ['jhgl.jinhuoView','jhgl.addJinhuoWin'],
    
    init: function() {
        this.control({
        	'jinhuoView button[action=jhgl_add_act]': {
                click: this.showAddWin
            },
            'jinhuoView button[action=jhgl_copy_act]': {
                click: this.copyJinhuo
            },
            'jinhuoView button[action=jhgl_edit_act]': {
                click: this.showEditWin
            },
            'jinhuoView button[action=jhgl_ruku_act]': {
                click: this.duRuku
            },
            'jinhuoView button[action=jhgl_del_act]': {
                click: this.delJinhuo
            },
            'addJinhuoWin button[action=jhgl_add_exec_act]': {
                click: this.submitJinhuo
            },
            'addJinhuoWin button[action=jhgl_cancel_act]': {
                click: this.cancelAddJinhuo
            }
        });
    },
    /***
     * 添加按钮，显示添加页面窗体
     */
    showAddWin : function () {
    	if (this.addJinhuoWin == null || this.addJinhuoWin == undefined) {
            this.addJinhuoWin = Ext.create('App.view.jhgl.addJinhuoWin');
        }
        this.addJinhuoWin.show();
    },
    copyJinhuo : function (obj, event) {
    	var grid = obj.up('jinhuoView');
    	if(grid.getSelectionModel().selected.items.length<1){
    		Ext.Msg.alert('提示','请选择要复制的进货单，再点击【复制进货单】按钮');
        	return;
    	}else if(grid.getSelectionModel().selected.items.length>1){
    		Ext.Msg.alert('提示','请选择一条要复制的进货单，本系统咱不支持多条复制');
        	return;
    	}
    	if (this.addJinhuoWin == null || this.addJinhuoWin == undefined) {
            this.addJinhuoWin = Ext.create('App.view.jhgl.addJinhuoWin');
        }
    	var rowRecord = grid.getSelectionModel().selected.items[0];
    	var editForm  = Ext.ComponentQuery.query('addJinhuoWin form')[0];
	    editForm.getForm().loadRecord(rowRecord);
	    Ext.getCmp('editType').setValue(1);
	    this.showAddWin();
    },
    delJinhuo : function (obj, event) {
    	var grid = obj.up('jinhuoView');
    	if(grid.getSelectionModel().selected.items.length<1){
    		Ext.Msg.alert('提示','请选择要删除的进货单(支持多选)，再点击【删除】按钮');
        	return;
    	}
    	Ext.Msg.confirm("请确认", "确认要删除?", function(id){
    		if (id == "yes") {
    			var models = grid.getSelectionModel().selected.items;
    			for(var a=0;a<models.length;a++){
            		if(models[a].data.zhuangtai=='1'){
                    	Ext.Msg.alert('非法操作','已入库的入库单不能被删除,您选择了已入库的入库单，请剔除。');
                    	return;
                    }
            	}
    			
                var ids = '';
                Ext.iterate(models, function(key, value) {
                    var tmp = key.data.jinhuo_id;
                    if(ids.length !=0) {
                        ids = ids + ',' + tmp;
                    } else {
                        ids = ids + tmp;
                    }
                }, this);
                Ext.Ajax.request({
                    url : 'jinhuo/delete.action',
                    params : {
                        jinhuoids : ids
                    },

                    success : function(response, option) {
                        Ext.Msg.alert('提示','进货单删除成功');
                        this.getJhglJhglStoreStore.load();
                        //grid.store.load();
                    },
                    failure : function() {
                        Ext.Msg.alert('提示','进货单删除失败');
                    },
                    scope: this
                });
    		}
    	});
    },
    submitJinhuo : function () {
    	Ext.Ajax.request({
            url: 'jinhuo/savejinhuo.action',
            actionMethods:{
				read:'POST'        
	        },
            //params : editForm.getForm().getValues(),
            params: this.addJinhuoWin.down('form').getForm().getValues(),
            success: function (response){
            	var text = response.responseText;
            	//Ext.MessageBox.alert("text", "操作成功"+text);
            	this.cancelAddJinhuo();
            	this.commonCallback;
            },
            scope: this
        });
    },
    /***
     * 编辑按钮，显示编辑页面窗体
     */
    showEditWin : function (obj, event) {
    	var grid = obj.up('jinhuoView');
        var rowRecord = grid.getSelectionModel().selected.items[0];
	    if(rowRecord == undefined) {
	        Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
	        return;
	    }
	    this.showAddWin();
	    
	    var editForm  = Ext.ComponentQuery.query('addJinhuoWin form')[0];
	    editForm.getForm().loadRecord(rowRecord);
	    Ext.getCmp('editType').setValue(2);
    }, 
    duRuku: function (obj, event) {
    	var grid = obj.up('jinhuoView');
        var rowRecord = grid.getSelectionModel().selected.items[0];
	    if(rowRecord == undefined) {
	        Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
	        return;
	    }else{
            Ext.Msg.confirm("请确认", "确认要将进货单信息合并到库存中吗?", function(id){
        		if (id == "yes") {
        			if(rowRecord.length==1 && rowRecord[0].data.zhuangtai=='1'){
                    	Ext.Msg.alert('非法操作','此进货单已经导入，不能重复导入。');
                    	return;
                    }
        			for(var a=0;a<rowRecord.length;a++){
                		if(rowRecord[a].data.zhuangtai=='1'){
                        	Ext.Msg.alert('非法操作','您选择了已入库的进货单，请剔除。');
                        	return;
                        }
                	}
        			var models = grid.getSelectionModel().selected.items;
                    var ids = '';
                    Ext.iterate(models, function(key, value) {
                        var tmp = key.data.jinhuo_id;
                        if(ids.length !=0) {
                            ids = ids + ',' + tmp;
                        } else {
                            ids = ids + tmp;
                        }
                    }, this);
                    Ext.Ajax.request({
                        url : 'jinhuo/ruku.action',
                        params : {
                        	jinhuoids : ids
                        },

                        success : this.commonCallback,
                        failure : function() {
                            Ext.Msg.alert('提示','进货信息导入库存失败');
                        },
                        scope: this
                    });
        		}
        	});
        }
    },
    /***
     * 关闭按钮，关闭添加页面窗体
     */
    cancelAddJinhuo : function () {
     	this.addJinhuoWin.down('form').getForm().reset();
        this.addJinhuoWin.hide();
    },
    commonCallback : function () {
    	this.getJhglJhglStoreStore.load();
        Ext.MessageBox.alert("提示", "操作成功");
    }
    
});