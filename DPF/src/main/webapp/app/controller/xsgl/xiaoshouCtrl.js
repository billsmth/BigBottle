Ext.define('App.controller.xsgl.xiaoshouCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['xsgl.xsglStore', 'com.XiaoshouStatusStore', 'com.ExpressNameStore'],
    views: ['xsgl.xiaoshouView','xsgl.xsglQueryWin','xsgl.addXiaoshouWin','xsgl.xsglStatusWin'],
    
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
            'xiaoshouView button[action=xsgl_status_act]': {
            	click:this.showStatusMGTWin
            },
            'xsglStatusWin button[action=xsgl_change_status_act]': {
            	click:this.xsglSubmitChangeStatus
            },
            'xsglStatusWin button[action=xsgl_change_status_cancel_act]': {
            	click:this.cancelXsglSubmitChangeStatus
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
            'xiaoshouView button[action=xsgl_eidt_act]': {
            	click:this.showEditXsglWin
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
            'xiaoshouView button[action=xsgl_print_form_act]': {
            	click:this.xsglPrintFormEvent
            },
            'xiaoshouView button[action=xsgl_express_Form_edit_act]': {
            	click:this.xsglExpressFormEditEvent
            },
            'editExpressFormWin button[action=xsgl_submit_express_form_act]': {
            	click:this.xsglSubmitExpressEditEvent
            },
            'editExpressFormWin button[action=xsgl_cancel_express_form_act]': {
            	click:this.xsglcancelExpressEditEvent
            }
            
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
                var postType="<span style=\'color:red;font-weight:bold;\'>上门自取</span>";
                if(postInfo.POST_INFO.type=="1"){
                	postType="快递";
                }
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[2];
                temp.setValue(postType);
            	temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[3];
                temp.setValue(this.showTypeChange(rowRecord.data.zhuangtai));
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[4];
                temp.setValue(rowRecord.data.maijiaxingming+" [ "+rowRecord.data.maijia_id+" ]");
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[5];
                temp.setValue(rowRecord.data.express_name+" [ "+rowRecord.data.express_code+" ]");
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[6];
                temp.setValue(postInfo.POST_INFO.post_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[7];
                temp.setValue(postInfo.POST_INFO.departure);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[8];
                temp.setValue(postInfo.POST_INFO.contact_number_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[9];
                temp.setValue("<b>"+postInfo.POST_INFO.province_from+"</b> [省]  <b>"+postInfo.POST_INFO.city_from+"</b> [市] <b>"+postInfo.POST_INFO.district_from+"</b> [区/县]");
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[10];
                temp.setValue(postInfo.POST_INFO.detail_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[11];
                temp.setValue(postInfo.POST_INFO.company_name_from);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[12];
                temp.setValue(postInfo.POST_INFO.neijian);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[13];
                temp.setValue(postInfo.POST_INFO.note);
                
                //收件人区域
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[14];
                temp.setValue(postInfo.POST_INFO.post_to);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[15];
                temp.setValue(postInfo.POST_INFO.destination);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[16];
                temp.setValue(postInfo.POST_INFO.contact_number);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[17];
                temp.setValue("<b>"+postInfo.POST_INFO.province+"</b> [省]  <b>"+postInfo.POST_INFO.city+"</b> [市] <b>"+postInfo.POST_INFO.district+"</b> [区/县]");
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[18];
                temp.setValue(postInfo.POST_INFO.detail_to);
                temp=Ext.ComponentQuery.query('xiaoshouView displayfield')[19];
                temp.setValue(postInfo.POST_INFO.company_name);
            },
            scope: this
        });
    },
    showTypeChange : function(val) {
        var retVal = '';
        if (val == 0) {
            retVal = "待付款";
        }else if (val == '1') {
            retVal ='<span style=\'color:red;font-weight:bold;\'>已付款</span>';
        }else if (val == '2') {
            retVal ="已确定";
        }else if (val == '3') {
            retVal ="已发货";
        }else if (val == '4') {
            retVal ="已收货";
        }else if (val == '5') {
            retVal ='<span style=\'color:green;font-weight:bold;\'>完成</span>';
        }else if (val == '6') {
            retVal ="关闭";
        }
        return retVal;
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
    xsglPrintFormEvent : function () {
    	var grid=Ext.ComponentQuery.query('xiaoshouView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行操作。");
            return;
        }
        if(rowRecord.data.express_name==null||rowRecord.data.express_name==""){
        	Ext.MessageBox.alert("提示", "尚未指定快递名称，无法打印快递单。");
            return;
        }
        
        Ext.Msg.confirm("请确认", "确认要打印快递单吗?", function(id){
    		if (id == "yes") {
    			Ext.Ajax.request({
    	            url : 'xiaoshou/pntExpressForm.action',
    	            actionMethods:{
    					read:'POST'        
    		        },
    	            params : {
    	            	xiaoshouID : rowRecord.data.xiaoshou_id
    	            },
    	            success : function(response, option) {
    	            	Ext.Msg.alert('提示','快递单打印成功');	
    	            },
    	            failure : function() {
    	                Ext.Msg.alert('提示','快递单打印失败');
    	            },
    	            scope: this
    	        });
    		}
        });
    },
    xsglExpressFormEditEvent : function () {
    	var grid=Ext.ComponentQuery.query('xiaoshouView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行操作。");
            return;
        }
        if (this.ExpressFormWin == null || this.ExpressFormWin == undefined) {
            this.ExpressFormWin = Ext.create('App.view.xsgl.editExpressFormWin');
        }
        
        Ext.Ajax.request({
            url : 'xiaoshou/getPostInfo.action',
            actionMethods:{
				read:'POST'        
	        },
            params : {
            	xiaoshouId : rowRecord.data.xiaoshou_id
            },
            success : function(response, option) {
            	var result = Ext.decode(response.responseText);
            	
            	if(result.POST_INFO.post_id!="0"){
	            	if(result.POST_INFO.type=="1"){
	            		Ext.getCmp('post_type_1').setValue(true);
	            	}else{
	            		Ext.getCmp('post_type_0').setValue(true);
	            	}
	            	
	            	Ext.getCmp('editType3').setValue("2");
	            	Ext.getCmp('post_id').setValue(result.POST_INFO.post_id);
	            	Ext.getCmp('order_id').setValue(result.POST_INFO.order_id);
	            	Ext.getCmp('people_id').setValue(result.POST_INFO.people_id);
	            	
	            	Ext.getCmp('post_from').setValue(result.POST_INFO.post_from);
	            	Ext.getCmp('departure').setValue(result.POST_INFO.departure);
	            	Ext.getCmp('company_name_from').setValue(result.POST_INFO.company_name_from);
	            	Ext.getCmp('province_from').setValue(result.POST_INFO.province_from);
	            	Ext.getCmp('city_from').setValue(result.POST_INFO.city_from);
	            	Ext.getCmp('district_from').setValue(result.POST_INFO.district_from);
	            	Ext.getCmp('detail_from').setValue(result.POST_INFO.detail_from);
	            	Ext.getCmp('contact_number_from').setValue(result.POST_INFO.contact_number_from);
	            	Ext.getCmp('neijian').setValue(result.POST_INFO.neijian);
	            	
	            	Ext.getCmp('post_to').setValue(result.POST_INFO.post_to);
	            	Ext.getCmp('destination').setValue(result.POST_INFO.destination);
	            	Ext.getCmp('company_name').setValue(result.POST_INFO.company_name);
	            	Ext.getCmp('province').setValue(result.POST_INFO.province);
	            	Ext.getCmp('city').setValue(result.POST_INFO.city);
	            	Ext.getCmp('district').setValue(result.POST_INFO.district);
	            	Ext.getCmp('detail_to').setValue(result.POST_INFO.detail_to);
	            	Ext.getCmp('contact_number').setValue(result.POST_INFO.contact_number);
	            	Ext.getCmp('note').setValue(result.POST_INFO.note);
            	}else{
            		this.ExpressFormWin.down('form').getForm().reset();
            		
            		if(rowRecord.data.post_type=="1"){
	            		Ext.getCmp('post_type_1').setValue(true);
	            	}else{
	            		Ext.getCmp('post_type_0').setValue(true);
	            	}
            		
            		Ext.getCmp('editType3').setValue("1");
            		Ext.getCmp('order_id').setValue(rowRecord.data.xiaoshou_id);
            		Ext.getCmp('people_id').setValue(rowRecord.data.maijia_id);
            		Ext.getCmp('xiaoshou_id_lab').setValue(rowRecord.data.xiaoshou_id);
                    Ext.getCmp('maijia_lab').setValue(rowRecord.data.maijiaxingming+" [ "+rowRecord.data.maijia_id+" ]");
                    Ext.getCmp('post_to').setValue(rowRecord.data.maijiaxingming);
            	}
            },
            failure : function() {
                Ext.Msg.alert('提示','销售信息导入库存失败');
            },
            scope: this
        });
        
        this.ExpressFormWin.show();
    },
    xsglSubmitExpressEditEvent : function (obj, event) {
    	var form = Ext.ComponentQuery.query('editExpressFormWin form')[0];
        if (form.isValid()) {
        	
        	Ext.Ajax.request({
                url: 'xiaoshou/saveExpress.action',
                actionMethods:{
    				read:'POST'        
    	        },
                //params : editForm.getForm().getValues(),
                params: this.ExpressFormWin.down('form').getForm().getValues(),
                success: function (response){
                	Ext.Msg.alert('成功提示','新增或编辑快递单成功');
                	this.ExpressFormWin.hide();
                	this.queryXsglEvent();
                },
                failure: function(response) {
                    Ext.Msg.alert('错误提示','新增或编辑快递单失败');
                },
                scope: this
            });
        }
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
    showStatusMGTWin : function () { //打开状态变更页面
    	var grid=Ext.ComponentQuery.query('xiaoshouView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行操作。");
            return;
        }
        
        
        if (this.XsglStatusWin == null || this.XsglStatusWin == undefined) {
            this.XsglStatusWin = Ext.create('App.view.xsgl.xsglStatusWin');
        }
        
        Ext.getCmp('xiaoshou_id3').setValue(rowRecord.data.xiaoshou_id);
    	Ext.getCmp('xiaoshou_id3_lab').setValue(rowRecord.data.xiaoshou_id);
    	Ext.getCmp('product_name3').setValue(rowRecord.data.col1);
    	Ext.getCmp('zhuangtai3').setValue(rowRecord.data.zhuangtai);
    	Ext.getCmp('express_name').setValue(rowRecord.data.express_name);
    	Ext.getCmp('express_code').setValue(rowRecord.data.express_code);
    	if(rowRecord.data.zhuangtai=="3"){
    		Ext.getCmp('express_code').show();
            Ext.getCmp('express_name').show();
    	}else{
    		Ext.getCmp('express_code').hide();
            Ext.getCmp('express_name').hide();
    	}
        
        
        this.XsglStatusWin.show();
    },
    xsglSubmitChangeStatus:function(){
    	var grid=Ext.ComponentQuery.query('xiaoshouView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行操作。");
            return;
        }else{
        	if(rowRecord.data.post_type=="1" && Ext.getCmp('zhuangtai3').value=="3"){
        		
        		if(Ext.getCmp('express_code').value==null || Ext.getCmp('express_name').value==null){
        			Ext.MessageBox.alert("提示", "如果更新销售单状态为[已发货],请输入[快递名称]和[快递单号].");
        			return;
        		}
        	}
        	
        	var values =this.XsglStatusWin.down('form').getForm().getValues();
        	Ext.Ajax.request({
	    	    url: 'xiaoshou/changeXiaoshouStatus.action',
                params : values,
	    	    success: function(){
	    	    	Ext.Msg.alert('成功提示','销售单状态变更成功！');
                	this.XsglStatusWin.hide();
                	this.queryXsglEvent();
	    	    },
	    	    scope: this
	    	});
        }
    },
    cancelXsglSubmitChangeStatus:function(){
    	this.XsglStatusWin.hide();
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
    	Ext.getCmp('editType').setValue(1);
        this.addXiaoshouWin.show();
    },
    showEditXsglWin:function() {
    	var grid=Ext.ComponentQuery.query('xiaoshouView')[0];
        var rowRecord=grid.getSelectionModel().selected.items[0];
        if(rowRecord==undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        
    	if (this.addXiaoshouWin == null || this.addXiaoshouWin == undefined) {
            this.addXiaoshouWin = Ext.create('App.view.xsgl.addXiaoshouWin');
        }else{
        	this.addXiaoshouWin.down('form').getForm().reset();
        }
    	
    	var editForm=Ext.ComponentQuery.query('addXiaoshouWin form')[0];
        editForm.getForm().loadRecord(rowRecord);
        var cnt=parseFloat(Ext.getCmp("col2").getValue())+parseFloat(Ext.getCmp("shuliang").getValue()*Ext.getCmp("shoujia").getValue());
		Ext.getCmp("count").setValue('<Strong><span style=\'color:red\'>'+cnt+'</span>'+' 元</Strong>');
		
		if(rowRecord.data.post_type=="1"){
    		Ext.getCmp('post_type_11').setValue(true);
    	}else{
    		Ext.getCmp('post_type_10').setValue(true);
    	}
		
        Ext.getCmp('editType').setValue(2);
    	
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
    },
    xsglcancelExpressEditEvent:function(obj, event) {
    	this.ExpressFormWin.hide();
    }
    
});