Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', './resources/extjs/examples/ux');
Ext.require([
    'Ext.ux.form.MultiSelect',
    'Ext.ux.form.ItemSelector'
]);
Ext.define('App.controller.ktsp.ktspCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: [
             'ktsp.ktspdwlistStore', 
             'ktsp.ktspkttypeStore',
             'ktsp.ktsplistStore',
             'com.ZjStore',
             'ktsp.ktspstatusStore',
             'ktsp.ktspmjStore'
             ],
    views: ['ktxx.ktgrid','ktsp.ktspView'],

    
    init: function() {
        this.control({
        	'ktspView gridpanel': {
             	itemclick:this.ktspViewItemclick
             },
             /*
             // 打开授权窗口
            'ktspView button[action=ktsp_kt_add_act]': {
                click: this.showAddKTWin
            },
             // 授权窗口保存
             'kteditwin button[action=ktsq_edit_approve_act]' : {
                 click : this.savekt
             },
             // 授权窗口关闭
             'kteditwin button[action=ktsq_edit_cancel_act]' : {
                 click : this.cancelAddKTWin
             },*/
            // 启动阅读模式
            'ktspView button[action=ktsp_html_view_act]': {
            	click: this.ktspSbYdmsOpinion
            },
            // 进行形式审查
            'ktspView button[action=ktsp_xssc_act]': {
        		click: this.startXSSC
            },
            // 打开指定专家窗口
            'ktspView button[action=ktsp_zdzj_act]': {
        		click: this.showAddZJWin
            },
            // 提交指定专家
            'ktspAddZJWin button[action=ktsp_submit_zdzj_act]': {
        		click: this.submitZDZJ
            },
            // 关闭指定专家窗口
            'ktspAddZJWin button[action=ktsp_cancel_zdzj_act]': {
        		click: this.cancelZDZJ
            },
            // 暂存形式审查意见
            'ktspView button[action=ktsp_xssc_save_opinion_act]': {
        		click: this.tempSaveXSSsubmitZDZJCOpinion
            },
            // 提交形式审查意见
            'ktspView button[action=ktsp_xssc_submit_opinion_act]': {
        		click: this.submitXSSCOpinion
            },
            // 启动会议评审  & 添加会议
            'ktspView button[action=ktsp_start_hyps_act]': {
        		click: this.startHYPS
            },
            // 暂存网评水办意见
            'ktspView button[action=ktsp_save_sb_opinion_act]': {
        		click: this.tempSaveSBOpinion
            },
            // 提交网评水办意见
            'ktspView button[action=ktsp_submit_sb_opinion_act]': {
        		click: this.submitSBOpinion
            },
            // 暂存会议评审意见
            'ktspView button[action=ktsp_hyps_save_opinion_act]': {
        		click: this.tempSaveHYPSOpinion
            },
            // 提交会议评审意见
            'ktspView button[action=ktsp_hyps_submit_opinion_act]': {
        		click: this.submitHYPSOpinion
            },
            // 暂存复审意见
            'ktspView button[action=ktsp_fs_save_opinion_act]': {
        		click: this.tempSaveFSOpinion
            },
            // 提交复审意见
            'ktspView button[action=ktsp_fs_submit_opinion_act]': {
        		click: this.submitFSOpinion
            },
            // 启动复审  & 添加会议
            'ktspView button[action=ktsp_start_fs_act]': {
        		click: this.startFS
            },
            // 提交会议信息
            'maddfawin  button[action=meeting_add_exec_act2]' : {
                click: this.execAddMeeting
            },
            // 复审通过
            'ktspView button[action=ktsp_complete_fs_act]': {
        		click: this.fsComplete
            },
            // 会议关闭按钮
            'maddfawin  button[action=meeting_add_cancel_act2]' : {
                click: this.cancelAddMeeting
            },
            // 合同签订
            'ktspView button[action=ktsp_complete_act]': {
        		click: this.ktspComplete
            },
            // 查看修改历史
            'ktspView button[action=ktsp_ckxgls_act]': {
        		click: this.ktspCKXGLS
            },
            // 历史意见
            'ktspView button[action=ktsp_lsyj_act]': {
        		click: this.ktspLSYJ
            },
            // 测试刷新
            'ktspView button[action=ktsp_test_act]': {
        		click: this.ktspTest
            }
        });
    },
    ktspTest : function () {
//    	var grid=Ext.getCmp("ktsp_grid");
//        var store=grid.getStore();
//        var rowRecord = this.isSelectRecord();
//        var issueId=rowRecord.data.id;
//        var tempI;
//        for(var i=0;i<store.data.length;i++){
//        	var data=store.getAt(i).data;
//        	if(data.id==issueId){
//        		tempI=i;
//        	}
//        }
//        var tempRecord=store.getAt(tempI);
//        store.load({params: {}});
//        grid.getSelectionModel().select(tempRecord);
//        Ext.getCmp('ktsp_grid').fireEvent('itemclick');
    	
    	  var grid=Ext.getCmp("ktsp_grid");
	      var store=grid.getStore();
	      var rowRecord = this.isSelectRecord();
	      var issueId=rowRecord.data.id;
	      var tempI;
	      for(var i=0;i<store.data.length;i++){
	      	var data=store.getAt(i).data;
	      	if(data.id==issueId){
	      		tempI=i;
	      	}
	      }
	      var tempRecord=store.getAt(tempI);
	      var sss;
    },
    searchSQ : function () {
        // 定义ctrl的全局变量，保存查询条件
        this.conditionHolder = Ext.ComponentQuery.query("ktspView form[region=north]")[0].getValues();
        this.storeQueryWithCondition();
    },
    /**
     * 记录的点击事件
     */
    ktspViewItemclick:function(view, record, item, index, e, eOpts){
    	
//    	alert('1');
//    	alert(Ext.getCmp("ktsp_grid").getSelectionModel().getSelection()[0].index);
    	var rowRecord = this.isSelectRecord();
        if(!rowRecord) {
            return;
        }
        
        var issueStatus=rowRecord.data.status;
        Ext.getCmp("blankPanel").hide();
        Ext.getCmp("xsPanel").hide();
    	Ext.getCmp("wpSbPanel").hide();
    	Ext.getCmp("hyscPanel").hide();
    	Ext.getCmp("fsPanel").hide();
    	
    	var ktsp_html_but=Ext.getCmp("ktsp_html_but");
    	var ktsp_xssc_but=Ext.getCmp("ktsp_xssc_but");
    	var ktsp_zdzj_but=Ext.getCmp("ktsp_zdzj_but");
    	var ktsp_start_hyps_but=Ext.getCmp("ktsp_start_hyps_but");
    	var ktsp_start_fs_but=Ext.getCmp("ktsp_start_fs_but");
    	var ktsp_complete_fs_but=Ext.getCmp("ktsp_complete_fs_but");
    	var ktsp_qdht_but=Ext.getCmp("ktsp_qdht");
    	var ktsp_ckxgls_but=Ext.getCmp("ktsp_ckxgls");
    	var ktsp_lsyj_but=Ext.getCmp("ktsp_lsyj");
    	
    	
    	Ext.getCmp("html_view_separator").hide();
    	ktsp_html_but.hide();
    	Ext.getCmp("xssc_separator").hide();
    	ktsp_xssc_but.hide();
    	Ext.getCmp("zdjz_separator").hide();
    	ktsp_zdzj_but.hide();
    	Ext.getCmp("other_separator").hide();
    	ktsp_start_hyps_but.hide();
    	ktsp_start_fs_but.hide();
    	ktsp_complete_fs_but.hide();
    	ktsp_qdht_but.hide();
    	Ext.getCmp("ckxgls_separator").hide();
    	ktsp_ckxgls_but.hide();
    	Ext.getCmp("lsyj_separator").hide();
    	ktsp_lsyj_but.hide();
    	
        // 未授权  & 已授权
    	if(issueStatus=='0'||issueStatus=='1'){
        	Ext.getCmp("blankPanel").show();
        	return;
    	}else{
    		Ext.getCmp("html_view_separator").show();
        	ktsp_html_but.show();
        	Ext.getCmp("ckxgls_separator").show();
        	ktsp_ckxgls_but.show();
        	Ext.getCmp("lsyj_separator").show();
        	ktsp_lsyj_but.show();
    	}
        // 已提交
        if(issueStatus=='2'){
        	Ext.getCmp("blankPanel").show();
        	Ext.getCmp("xssc_separator").show();
        	ktsp_xssc_but.show();
        // 修改中
        }else if(issueStatus=='3'){
        	Ext.getCmp("blankPanel").show();
//        	Ext.getCmp("xsPanel").show();
        	Ext.getCmp("html_view_separator").hide();
        	ktsp_html_but.hide();
//        	Ext.getCmp("ktsp_xssc_save_submit").hide();
        // 形式审查
        }else if(issueStatus=='4'){
        	Ext.getCmp("xsPanel").show();
        	Ext.getCmp("zdjz_separator").show();
        	ktsp_zdzj_but.show();
//        	Ext.getCmp("ktsp_xssc_save_submit").show();
        	
        // 专家审查
        }else if(issueStatus=='5'){
        	Ext.getCmp("wpSbPanel").show();
        	Ext.getCmp("zdjz_separator").show();
        	ktsp_zdzj_but.show();
        	Ext.getCmp("other_separator").show();
        	ktsp_start_hyps_but.show();
        // 会议评审
        }else if(issueStatus=='6'){
        	Ext.getCmp("hyscPanel").show();
        	Ext.getCmp("other_separator").show();
        	ktsp_start_fs_but.show();
        // 复审
        }else if(issueStatus=='7'){
        	Ext.getCmp("fsPanel").show();
        	Ext.getCmp("other_separator").show();
        	ktsp_complete_fs_but.show();	
        // 合同签订
        }else if(issueStatus=='8'){
        	Ext.getCmp("blankPanel").show();
        	Ext.getCmp("other_separator").show();
        	ktsp_qdht_but.show();	
        // 其他情况
        }else{
        	
        	Ext.getCmp("blankPanel").show();
        	Ext.getCmp("zdjz_separator").hide();
        	Ext.getCmp("other_separator").hide();
        }
        
        // 取得历史记录和暂存的意见
        if(issueStatus=='4'||issueStatus=='5'||issueStatus=='6'||issueStatus=='7'){
	    	Ext.Ajax.request({
	          url: 'issueOpinion/getTempIssueOpinion.action',
	          params : {
	          	issueId:rowRecord.data.id,
	          	issueStatus:issueStatus
	          },
	          success: function(response){
	        	  var jsonResult=Ext.decode(response.responseText);
	        	  Ext.getCmp("id").setValue(jsonResult.issueOpinion.id);
	    		  Ext.getCmp("issueId").setValue(jsonResult.issueOpinion.issueId);
	        	  // 形式审查意见
	        	  if(jsonResult.issueOpinion.issueStatus=='4'){
	        		  var xsForm=Ext.getCmp('xsForm');
	        		  xsForm.getForm().reset();
	        		  Ext.getCmp("xstabpanel").setActiveTab(1);
	        		  Ext.getCmp("issueXsCydwRy").setValue(jsonResult.issueOpinion.issueXsCydwRy);
	        		  Ext.getCmp("xstabpanel").setActiveTab(2);
	        		  Ext.getCmp("issueXsJfsc").setValue(jsonResult.issueOpinion.issueXsJfsc);
	        		  Ext.getCmp("xstabpanel").setActiveTab(3);
	        		  Ext.getCmp("issueXsRwnrKhzb").setValue(jsonResult.issueOpinion.issueXsRwnrKhzb);
	        		  Ext.getCmp("xstabpanel").setActiveTab(4);
	        		  Ext.getCmp("issueXsQt").setValue(jsonResult.issueOpinion.issueXsQt);
	        		  Ext.getCmp("xstabpanel").setActiveTab(0);
	        		  Ext.getCmp("issueXsJbxx").setValue(jsonResult.issueOpinion.issueXsJbxx);
	        	  } else if(jsonResult.issueOpinion.issueStatus=='5'){
	        		  var wpSbForm=Ext.getCmp('wpSbForm');
	        		  wpSbForm.getForm().reset();
	        		  
	        		  Ext.getCmp("issueWpYjhz").setValue(jsonResult.issueOpinion.issueWpYjhz);
	        	  } else if(jsonResult.issueOpinion.issueStatus=='6'){
	        		  var hyscForm=Ext.getCmp('hyscForm');
	        		  hyscForm.getForm().reset();
	        		  
	        		  Ext.getCmp("issueHyscYj").setValue(jsonResult.issueOpinion.issueHyscYj);
	        		  
	        	  } else if(jsonResult.issueOpinion.issueStatus=='7'){
	        		  var fsForm=Ext.getCmp('fsForm');
	        		  fsForm.getForm().reset();
	        		  
	        		  Ext.getCmp("issueFsXgws").setValue(jsonResult.issueOpinion.issueFsXgws);
	        		  Ext.getCmp("issueFsFsyj").setValue(jsonResult.issueOpinion.issueFsFsyj);
	        	  }
	          },
	          scope: this
	      });
        }
        
        //修改中回显形审5tab
//        if(issueStatus=='3'){
//	    	Ext.Ajax.request({
//	          url: 'issueOpinion/getNewestIssueOpinion.action',
//	          params : {
//	          	issueId:rowRecord.data.id,
//	          	issueStatus:issueStatus
//	          },
//	          success: function(response){
//	        	  var jsonResult=Ext.decode(response.responseText);
//	        	  Ext.getCmp("id").setValue(jsonResult.issueOpinion.id);
//	    		  Ext.getCmp("issueId").setValue(jsonResult.issueOpinion.issueId);
//	    		  // 修改中
//        		  var xsForm=Ext.getCmp('xsForm');
//        		  xsForm.getForm().reset();
//        		  Ext.getCmp("xstabpanel").setActiveTab(1);
//        		  Ext.getCmp("issueXsCydwRy").setValue(jsonResult.issueOpinion.issueXsCydwRy);
//        		  Ext.getCmp("xstabpanel").setActiveTab(2);
//        		  Ext.getCmp("issueXsJfsc").setValue(jsonResult.issueOpinion.issueXsJfsc);
//        		  Ext.getCmp("xstabpanel").setActiveTab(3);
//        		  Ext.getCmp("issueXsRwnrKhzb").setValue(jsonResult.issueOpinion.issueXsRwnrKhzb);
//        		  Ext.getCmp("xstabpanel").setActiveTab(4);
//        		  Ext.getCmp("issueXsQt").setValue(jsonResult.issueOpinion.issueXsQt);
//        		  Ext.getCmp("xstabpanel").setActiveTab(0);
//        		  Ext.getCmp("issueXsJbxx").setValue(jsonResult.issueOpinion.issueXsJbxx);
//	          },
//	          failure: function(response, opts) {
//	              alert("11");
//	          },
//	          scope: this
//	      });
//        }
        
    },
    /**
     * 显示增加课题授权
     */
    showAddKTWin : function () {
        if (this.ktedit == null || this.ktedit == undefined) {
            this.ktedit = Ext.create('App.view.ktxx.kteditwin');
        }
        this.ktedit.show();
    },
    
    /**
     * 保存课题信息
     */
    savekt : function () {
        var editForm  = this.ktedit.down('form');

        var values = editForm.getForm().getValues();
        // 补充单位的信息
        var orgCombo = Ext.getCmp('requestCompany');
        if (orgCombo.value != null && orgCombo.value != undefined) {
            var selRecord = orgCombo.getStore().findRecord('idorg', orgCombo.value);
            values.requestCompanyNo = selRecord.data.orgNo;
            values.requestCompanyName = selRecord.data.companyName;
        }

        Ext.Ajax.request({
            url: 'ktsq/edit.action',
            params : values,
            success: function (){
                Ext.MessageBox.alert("提示", "操作成功");
                this.ktedit.hide();
                Ext.destroy(this.ktedit);
                this.ktedit=null;
            },
            scope: this
        });
    },
    
    /**
     * 关闭课题授权窗口
     */
    cancelAddKTWin : function () {
        Ext.destroy(this.ktedit);
        this.ktedit=null;
        return false;
    },
    
    /**
     * 阅读模式
     */
    ktspSbYdmsOpinion:function(){
    	var grid = Ext.ComponentQuery.query('ktspView ktgrid[region=center]')[0];
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
    /**
     * 弹出指定专家窗口
     */
    showAddZJWin : function () {
    	var rowRecord = this.isSelectRecord();
        if(!rowRecord) {
            return;
        }
        if (this.ktspZDZJ == null || this.ktspZDZJ == undefined) {
            this.ktspZDZJ = Ext.create('App.view.ktsp.ktspAddZJWin');
        }
        this.ktspZDZJ.show();
        var zdzjForm=Ext.getCmp('zdzjForm');
        this.getComZjStoreStore().load();
        zdzjForm.getForm().reset();
        Ext.Ajax.request({
            url: 'issuesl/getpinionzj.action',
            params : {
            	id:rowRecord.data.id
            },
            success: function(response){
            	var jsonResult=Ext.decode(response.responseText);
            	Ext.getCmp('userIds').setValue(jsonResult.val);
            },
            scope: this
        });
    },
    
    /**
     * 提交指定专家信息
     */
    submitZDZJ : function () {
        var rowRecord = this.isSelectRecord();
        if(!rowRecord) {
            return;
        }
    	var param=Ext.getCmp("zdzjForm").getValues();
    	param.issueId=rowRecord.data.id;
    	
    	Ext.Ajax.request({
            url: 'issuesl/edit.action',
            params : param,
            callback: function(){this.completeZDZJ();},
            scope: this
        });
    },
    /**
     * 成功设置专家
     */
    completeZDZJ : function () {
        this.ktspZDZJ.hide();
        this.refreshSel("指定专家");
    },
    /**
     * 关闭指定专家专家
     */
    cancelZDZJ : function () {
        this.ktspZDZJ.hide();
    },
    /**
     * 暂存形式审查意见
     */
    tempSaveXSSCOpinion : function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='4'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加形式审查意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        var param = Ext.getCmp("xsForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            success: function(){
                Ext.MessageBox.alert("提示", " [ 保存草稿 ] 操作成功。");
                return;
            },
            scope: this
        });
    },
    /**
     * 提交形式审查意见
     */
    submitXSSCOpinion : function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='4'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加形式审查意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        Ext.getCmp("createTime").setValue('1');
        var param = Ext.getCmp("xsForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        param.createTime=Ext.getCmp("createTime").value;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            callback: function(){this.refreshSel("发布意见");},
            scope: this
        });
    },

    /**
     * 暂存网评水办意见
     */
    tempSaveSBOpinion:function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='5'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加网评水办意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        var param = Ext.getCmp("wpSbForm").getValues();
        param.id = Ext.getCmp("id").getValue();
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            success: this.commonCallback("保存草稿"),
            scope: this
        });
    },
    /**
     * 提交网评水办意见
     */
    submitSBOpinion:function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='5'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加网评水办意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        Ext.getCmp("createTime").setValue('1');
        var param = Ext.getCmp("wpSbForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        param.createTime=Ext.getCmp("createTime").value;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            callback: function(){
            	this.refreshSel("发布意见");
            },
            scope: this
        });
    },
    /**
     * 暂存会议评审意见
     */
    tempSaveHYPSOpinion:function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='6'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加会议评审意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        var param = Ext.getCmp("hyscForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            success: this.commonCallback("保存草稿"),
            scope: this
        });
    },
    /**
     * 提交会议评审意见
     */
    submitHYPSOpinion:function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='6'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加会议评审意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        Ext.getCmp("createTime").setValue('1');
        var param = Ext.getCmp("hyscForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        param.createTime=Ext.getCmp("createTime").value;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            callback: function(){this.refreshSel("发布意见");},
            scope: this
        });
    },
    
    /**
     * 暂存复审意见
     */
    tempSaveFSOpinion:function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='7'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加复审意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        var param = Ext.getCmp("fsForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            success: this.commonCallback("保存草稿"),
            scope: this
        });
    },
    /**
     * 提交复审意见
     */
    submitFSOpinion:function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='7'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 添加复审意见 ] 操作。");
           	 return;
    	}
        Ext.getCmp("issueId").setValue(record.data.id);
        Ext.getCmp("createTime").setValue('1');
        var param = Ext.getCmp("fsForm").getValues();
        param.id = Ext.getCmp("id").value;
        param.issueId = Ext.getCmp("issueId").value;
        param.issueStatus = record.data.status;
        param.createTime=Ext.getCmp("createTime").value;
        Ext.Ajax.request({
            url: 'issueOpinion/edit.action',
            params:param,
            callback: function(){this.refreshSel("发布意见");},
            scope: this
        });
    },
    /**
     * 弹出添加会议的窗口
     */
    addMeeting:function () {
        if (this.ktspAddMeeting == null || this.ktspAddMeeting == undefined) {
            this.ktspAddMeeting = Ext.create('App.view.meeting.maddwinForAgain');
        }
        this.ktspAddMeeting.show();
    },
    /**
     * 执行添加会议
     */
    execAddMeeting : function () {
    	var record=this.isSelectRecord();
    	
    	if(!this.ktspdateOrPass('addBeginTimeStr3', 'addEndTimeStr3', 'addBeginTimeStr4', 'addEndTimeStr4')){
    		Ext.MessageBox.alert("请重新选择会议时间");
    		return;
    	}
        Ext.Ajax.request({
             url: 'meeting/add.action',
             //params : editForm.getForm().getValues(),
             params: this.ktspAddMeeting.down('form').getForm().getValues(),
             success: function (response){
            	 var jsonResult=Ext.decode(response.responseText);
            	 // 启动会议评审
            	 if(record.data.status=='5'){
            		 Ext.Ajax.request({
         	            url: 'ktxx/starthyps.action',
         	            params : {
         	            	id:record.data.id,
         	            	idmeeting:jsonResult.idmeeting
         	            },
         	            success: function(){
         	            	this.cancelAddMeeting();
         	            	this.refreshSel("启动会议评审 ] 并且 [ 添加会议");
         	            	},
         	            scope: this
         	        });
            	 // 启动复审
            	 }else if(record.data.status=='6'){
            		 Ext.Ajax.request({
          	            url: 'ktxx/startfs.action',
          	            params : {
          	            	id:record.data.id,
         	            	idmeeting:jsonResult.idmeeting
          	            },
          	            success: function(){
         	            	this.cancelAddMeeting();
         	            	this.refreshSel("启动复审 ] 并且 [ 添加会议");
          	            },
          	            scope: this
          	        });
            	 }
             },
             scope: this
         });
    },
    /**
     * 进行形式审查
     */
    startXSSC : function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='2'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 进行形式审查 ] 操作。");
           	 return;
    	}
        
    	Ext.MessageBox.confirm("进行形式审查", "您确定要 [ 进行形式审查 ] 吗？ 单击 [ 是 ] 确定，单击 [ 否 ] 取消操作。", function (btn) {
			if(btn=='yes'){
				Ext.Ajax.request({
      	            url: 'ktxx/startxssc.action',
      	            params : {
      	            	id:record.data.id
      	            },
      	            callback: function(){this.refreshSel("进行形式审查");},
      	            scope: this
      	        });
			}
		},this);
    },
    /**
     * 启动会议评审
     */
    startHYPS:function(){
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='5'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 启动会议评审 ] 操作。");
           	 return;
    	}
        
    	Ext.MessageBox.confirm("启动会议评审", "您确定要启动 [ 启动会议评审 ] 吗？ 单击 [ 是 ] 确定，单击 [ 否 ] 取消操作。", function (btn) {
			if(btn=='yes'){
				
				Ext.Ajax.request({
      	            url: 'issuesl/noopinionzj.action',
      	            params : {
      	            	id:record.data.id
      	            },
      	            success: function(response){
      	            	var jsonResult=Ext.decode(response.responseText);
      	            	if(jsonResult.cnt!=0){
      	            		Ext.MessageBox.alert("提示", "指定的专家中有 [ "+jsonResult.cnt+" ] 人还未作出评审，暂不能进行 [ 启动会议评审 ] 操作。");
      	            		return;
      	            	}else{
      	            		this.addMeeting();
      	            	}
      	            },
      	            scope: this
      	        });
				
				
			}
		},this);
    },
    /**
     * 启动复审
     */
    startFS:function(){
    	
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='6'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 启动复审 ] 操作。");
           	 return;
    	}
        
    	Ext.MessageBox.confirm("启动复审", "您确定要启动 [ 复审 ] 吗？ 单击 [ 是 ] 确定，单击 [ 否 ] 取消操作。", function (btn) {
			if(btn=='yes'){
				this.addMeeting();
			}
		},this);
    },

    /**
     * 复审通过
     */
    fsComplete : function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='7'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [ 复审通过 ] 操作。");
           	 return;
    	}
        
    	Ext.MessageBox.confirm("复审通过", "您确定要 [ 复审通过 ] 吗？ 单击 [ 是 ] 确定，单击 [ 否 ] 取消操作。", function (btn) {
			if(btn=='yes'){
				Ext.Ajax.request({
      	            url: 'ktxx/completefs.action',
      	            params : {
      	            	id:record.data.id
      	            },
      	            callback: function(){this.refreshSel("复审通过");},
      	            scope: this
      	        });
			}
		},this);
    },
    /**
     * 合同签订
     */
    ktspComplete : function () {
    	// 判断记录是否被选中
    	var record=this.isSelectRecord();
    	if(record && record.data.status!='8'){
           	 Ext.MessageBox.alert("提示", "记录状态错误，不能进行 [合同签订 ] 操作。");
           	 return;
    	}
        
    	Ext.MessageBox.confirm("合同签订", "您确定要 [ 合同签订 ] 吗？ 单击 [ 是 ] 确定，单击 [ 否 ] 取消操作。", function (btn) {
			if(btn=='yes'){
				Ext.Ajax.request({
      	            url: 'ktxx/completektsp.action',
      	            params : {
      	            	id:record.data.id
      	            },
      	            callback: function(){this.refreshSel("合同签订");},
      	            scope: this
      	        });
			}
		},this);
    },
    /**
     * 历史意见
     */
    ktspLSYJ:function(){
    	var rowRecord = this.isSelectRecord();
        if(!rowRecord) {
            return;
        }else{
        	var url = "issueOpinion/getIssueOpinionHistory.action?issueId="+rowRecord.data.id;
        	window.open(url);
        	//window.showModalDialog(url,window,"help:0;scroll:yes;status:no;dialogWidth:1000px;dialogHeight:500px");
        }
    },
    /**
     * 查看修改历史
     */
    ktspCKXGLS:function(){
    	var rowRecord = this.isSelectRecord();
        if(!rowRecord) {
            return;
        }else{
        	var url = "ktxx/getXGHistory.action?issueId="+rowRecord.data.id;
        	window.open(url);
        }
    },
    /**
     * 是否选中行
     */
    isSelectRecord:function(){
    	var grid = Ext.ComponentQuery.query('ktspView ktgrid[region=center]')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return false;
        }else{
        	return rowRecord;
        }
    },
    /**
     * 关闭添加会议窗口
     */
    cancelAddMeeting : function () {
        Ext.destroy(this.ktspAddMeeting);
        this.ktspAddMeeting=null;
        return false;
    },
    commonCallback : function (type) {
    	if(type==undefined){
    		type="";
    	}else{
    		type="[ "+type+"  ] ";
    	}
        
        var grid = Ext.ComponentQuery.query('ktspView ktgrid[region=center]')[0];
        grid.getSelectionModel().deselectAll();
        this.storeQueryWithCondition();
        Ext.MessageBox.alert("提示", type+"操作成功。");
        return;
    },
    storeQueryWithCondition : function () {
//        var store = Ext.ComponentQuery.query('ktspView ktgrid')[0].getStore();
        var store = Ext.getCmp('ktsp_grid').getStore();
        store.load({
            params: {
            	flag:""
            }
        });
    },
    ktspdateOrPass:function(beginDateId,endDateId,beginTimeId,endTimeId){
    	var bts=Ext.getCmp(beginDateId).getValue();
    	var ets=Ext.getCmp(endDateId).getValue();
    	var bts2=Ext.getCmp(beginTimeId).getValue();
    	var ets2=Ext.getCmp(endTimeId).getValue();
    	var b1 = Ext.Date.format(new Date(bts),'Y-m-d'); 
    	var b2 = Ext.Date.format(new Date(bts2),'H:i'); 
    	var e1 = Ext.Date.format(new Date(ets),'Y-m-d'); 
    	var e2 = Ext.Date.format(new Date(ets2),'H:i'); 
    	var begin=new Date(b1.split("-")[0],b1.split("-")[1],b1.split("-")[2],b2.split(":")[0],b2.split(":")[1],0);
    	var end=new Date(e1.split("-")[0],e1.split("-")[1],e1.split("-")[2],e2.split(":")[0],e2.split(":")[1],0);
    	if(begin>=end){
    		return false;
    	}
    	if(begin<end){
    		return true;
    	}
    },
    
    //刷新grid并选择刷新前选中行
    refreshSel : function (type) {		
    	if(type==undefined){
    		type="";
    	}else{
    		type="[ "+type+"  ] ";
    	}
    	Ext.MessageBox.alert("提示", type+"操作成功。");
    	
    	
        var rowRecord = this.isSelectRecord();
        var issueId=rowRecord.data.id;
        var tempI;
        var grid=Ext.getCmp("ktsp_grid");
        var store=grid.getStore();
        store.removeAll();
        store.load({
        	params: {},
        	callback: function(){
        		store=Ext.getCmp("ktsp_grid").getStore();
    	        for(var i=0;i<store.data.length;i++){
    	        	var data=store.getAt(i).data;
    	        	if(data.id==issueId){
    	        		tempI=i;
    	        	}
    	        }
    	        var tempRecord=store.getAt(tempI);
    	        grid.getSelectionModel().select(tempRecord);
    	        Ext.getCmp('ktsp_grid').fireEvent('itemclick');
        	}
        });
    }
});

