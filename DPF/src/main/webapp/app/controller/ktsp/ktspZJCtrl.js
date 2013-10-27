Ext.define('App.controller.ktsp.ktspZJCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: [
             'ktsp.ktspdwlistStore', 
             'ktsp.ktspkttypeStore',
             'ktsp.ktsplistStore',
             'ktsp.ktspmjStore',
             'ktsp.ktspstatusStore'
             ],
    views: ['ktxx.ktgrid','ktsp.ktspZJView'],

    
    init: function() {
        this.control({
        	'ktspZJView gridpanel': {
             	itemclick:this.ktspZJViewItemclick
             },
            // 启动阅读模式
            'ktspZJView button[action=ktsp_zj_html_view_act]': {
            	click: this.ktspYdmsOpinion
            },
            // 暂存保存专家意见
            'ktspZJView button[action=ktsp_save_specialist_opinion_act]': {
        		click: this.ktspTempSaveSpecialistOpinion
            },
            // 提交专家意见
            'ktspZJView button[action=ktsp_submit_specialist_opinion_act]': {
        		click: this.ktspSaveSpecialistOpinion
            },
            // 查看专家历史意见
            'ktspZJView button[action=ktsp_zj_lsyj_act]': {
        		click: this.ktspZjLsyj
            }
        });
    },
    
    ktspYdmsOpinion:function(){
    	var grid = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0];
    	var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行");
            return;
        }else{	
        	var id = rowRecord.data.id;
        	var url = "ydms/listall.action?ids="+id;
        	window.open(url);
        	//window.showModalDialog(url,window,"help:0;scroll:yes;status:no;dialogWidth:1000px;dialogHeight:500px");
        }
    },
    
    ktspZJViewItemclick:function(){
    	var grid = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0];
    	var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
        var issueStatus=rowRecord.data.status;
    	
        // 专家审查
        if(issueStatus=='5'){
        	Ext.getCmp("wpZjPanel").show();
        }else{
        	Ext.getCmp("wpZjPanel").hide();
        }
        if(issueStatus=='5'){
        	
        	Ext.Ajax.request({
	          url: 'issueOpinion/getTempIssueOpinion.action',
	          params : {
	          	issueId:rowRecord.data.id,
	          	issueStatus:issueStatus
	          },
	          success: this.dispTempOpinion,
	          scope: this
	      });
        }
    },
    /**
     * 暂存专家意见
     */
    ktspTempSaveSpecialistOpinion:function(){
    	var grid = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        Ext.getCmp("issueId").setValue(rowRecord.data.id);
        var param = Ext.getCmp("wpZjForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = rowRecord.data.status;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            success: this.commonCallback,
            scope: this
        });
    },
    /**
     * 提交专家意见
     */
    ktspSaveSpecialistOpinion:function(){
    	var grid = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        Ext.getCmp("issueId").setValue(rowRecord.data.id);
        Ext.getCmp("createTime").setValue('1');
        var param = Ext.getCmp("wpZjForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = rowRecord.data.status;
        param.createTime=Ext.getCmp("createTime").value;
        Ext.Ajax.request({
            url: 'issueOpinion/zjyi.action',
            params:param,
            success: this.commonCallback,
            scope: this
        });
    },
    /**
     * 查看专家历史意见
     */
    ktspZjLsyj:function(){
    	var grid = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }else{
        	var url = "issueOpinion/getZJOpinionHistory.action?issueId="+rowRecord.data.id;
        	var flag = window.showModalDialog(url,window,"help:0;scroll:yes;status:no;dialogWidth:1000px;dialogHeight:500px");
        	if (flag)
        	{
        		refresh();
        	}
        }
    },
    commonCallback : function () {
        Ext.MessageBox.alert("提示", "操作成功");
        this.storeQueryWithCondition();
        
        var grid = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0];
        grid.getSelectionModel().deselectAll();
    },
    storeQueryWithCondition : function () {
        var store = Ext.ComponentQuery.query('ktspZJView ktgrid[region=center]')[0].getStore();
        store.load({
            params:{
            	flag:'zj'
            }
        });
    },
    /**
     * 显示专家意见
     */
    dispTempOpinion:function(response){

    	var wpZjForm=Ext.getCmp('wpZjForm');
    	wpZjForm.getForm().reset();
    	var jsonResult=Ext.decode(response.responseText);
    	Ext.getCmp("issueId").setValue(jsonResult.issueOpinion.issueId);
    	Ext.getCmp("issueWpYjmb").setValue(jsonResult.issueOpinion.issueWpYjmb);
    	Ext.getCmp("issueWpYjnrRwfj").setValue(jsonResult.issueOpinion.issueWpYjnrRwfj);
    	Ext.getCmp("issueWpYqcgKhzb").setValue(jsonResult.issueOpinion.issueWpYqcgKhzb);
    	Ext.getCmp("issueWpHzdwRwfg").setValue(jsonResult.issueOpinion.issueWpHzdwRwfg);
    	Ext.getCmp("id").setValue(jsonResult.issueOpinion.id);
    	Ext.getCmp("issueId").setValue(jsonResult.issueOpinion.issueId);
    	Ext.getCmp("issueWpLast").setValue(jsonResult.issueOpinion.issueWpLast);
    }
});