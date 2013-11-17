Ext.define('App.controller.xsgl.xiaoshouCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['xsgl.xsglStore','com.XiaoshouStatusStore'],
    views: ['xsgl.xiaoshouView','xsgl.xsglQueryWin','xsgl.addXiaoshouWin'],
    
    init: function() {
        this.control({
        	'xiaoshouView' : {
            	itemclick: this.rowClick
            },
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
    rowClick : function () {
    	Ext.getCmp('xiaoshouTab').setActiveTab(0);
    	var grid=Ext.ComponentQuery.query('xiaoshouView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        Ext.Ajax.request({
            url: 'xiaoshou/getPostInfo.action',
            actionMethods:{
				read:'POST'        
	        },
            params: {
            	xiaoshouId:rowRecord.data.xiaoshou_id
            },
            success: function (response){
            	var postInfo=Ext.JSON.decode(response.responseText);
            	var temp;
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[0];
                temp.setValue(postInfo.POST_INFO.post_id);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[1];
                temp.setValue(postInfo.POST_INFO.order_id);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[2];
                var postType="上面自取";
                if(postInfo.POST_INFO.type=="1"){
                	postType="快递";
                }
                temp.setValue(postType);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[3];
                temp.setValue(postInfo.POST_INFO.people_id);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[4];
                temp.setValue(postInfo.POST_INFO.post_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[5];
                temp.setValue(postInfo.POST_INFO.departure);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[6];
                temp.setValue(postInfo.POST_INFO.contact_number_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[7];
                temp.setValue(postInfo.POST_INFO.people_id);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[8];
                temp.setValue("<b>"+postInfo.POST_INFO.province_from+"</b> [省]  <b>"+postInfo.POST_INFO.city_from+"</b> [市] <b>"+postInfo.POST_INFO.district_from+"</b> [区/县]");
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[9];
                temp.setValue(postInfo.POST_INFO.company_name_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[10];
                temp.setValue(postInfo.POST_INFO.neijian);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[11];
                temp.setValue(postInfo.POST_INFO.note);
                
                //收件人区域
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[12];
                temp.setValue(postInfo.POST_INFO.post_to);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[13];
                temp.setValue(postInfo.POST_INFO.destination);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[14];
                temp.setValue(postInfo.POST_INFO.contact_number);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[15];
                temp.setValue("<b>"+postInfo.POST_INFO.province+"</b> [省]  <b>"+postInfo.POST_INFO.city+"</b> [市] <b>"+postInfo.POST_INFO.district+"</b> [区/县]");
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[16];
                temp.setValue(postInfo.POST_INFO.company_name);
                
            },
            scope: this
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