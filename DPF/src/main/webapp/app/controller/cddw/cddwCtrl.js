Ext.define('App.controller.cddw.cddwCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: [
    	'cddw.cddwJsonStore',
    	'com.CompanyPropStore',
    	'city.provinceStore',
    	'city.cityStore',
    	'city.districtStore'
    	],
    models: ['cddw.cddwModel','city.cityModel'],
    views: [
    	'cddw.cddwView',
    	'cddw.editWin',
    	'cddw.cddwQueryWin'
    ],
    
    init: function() {
        this.control({
        	
        	'cddwlist': {
            	itemclick:this.cddwItemclick
            },
        	
        	'cddwlist button[action=cddw_list_query_act]': {
            	click:this.showQueryCddwView
            },
            'cddwlist button[action=cddw_list_add_act]': {
            	click:this.showAddCddwView
            },
            'cddwlist button[action=cddw_list_edit_act]': {
            	click:this.showEditCddwView
            },
            'cddwlist button[action=cddw_list_del_act]': {
            	click:this.delCddwEvent
            },
            
            
            'cddwQueryWin button[action=cddw_query_query_act]': {
            	click:this.queryCddwEvent
            },
            'cddwQueryWin button[action=cddw_query_cancel_act]': {
            	click:this.cancelCddwQueryEvent
            },
            
            
            
            'editWin button[action=cddw_edit_save_act]': {
            	click:this.editSaveCddwEvent
            },
            'editWin button[action=cddw_edit_cancel_act]': {
            	click:this.editCancelCddwEvent
            },
            
            'editWin combobox[id=cddw_belongAreaProvince]': {
            	select:this.selectBelongAreaProvince
            },
            
            'editWin combobox[id=cddw_belongAreaCity]': {
            	select:this.selectBelongAreaCity
            }
            
            
        })
    },
    
    cddwItemclick:function( obj, record, item, index, e, eOpts ){ //详情信息
        var cddwViewForm=Ext.getCmp('cddwViewForm');
        cddwViewForm.getForm().reset();
        cddwViewForm.getForm().loadRecord(record);
    },
    
    
    showQueryCddwView : function () { //打开查询页面信息
        if (this.cddwQuery == null || this.cddwQuery == undefined) {
            this.cddwQuery = Ext.create('App.view.cddw.cddwQueryWin');
        }
        this.cddwQuery.show();
    },
   
    showAddCddwView : function () { //打开添加页面信息
        if (this.cddwEdit == null || this.cddwEdit == undefined) {
            this.cddwEdit = Ext.create('App.view.cddw.editWin');
        }
        this.cddwEdit.show();
    },
  
    showEditCddwView:function(){ //打开修改页面信息
    	var grid = Ext.ComponentQuery.query('cddwlist')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        this.showAddCddwView();
        
        var city=Ext.getCmp('cddw_belongAreaCity');
	    var district = Ext.getCmp("cddw_belongAreaDistrict");
	    city.clearValue();
	    district.clearValue();
	    city.store.load({params:{id:rowRecord.data.belongAreaProvince}});
	    district.store.load({params:{id:rowRecord.data.belongAreaCity}});
        
        var editCddwForm  = Ext.ComponentQuery.query('editWin form')[0];
        editCddwForm.getForm().loadRecord(rowRecord);
        
        editCddwForm.setDisabled(false);
        if(editCddwForm.collapsed) {
            editCddwForm.expand();
        }
    },
  
    delCddwEvent:function(){ //删除操作
        var grid = Ext.ComponentQuery.query('cddwlist')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
      Ext.MessageBox.confirm('确认', '是否进行删除',
        function (optional){
            if (optional == 'yes') {
                Ext.Ajax.request({
                    url: 'cddw/del.action',
                    params : {
                        idorg:rowRecord.data.idorg
                    },
                    actionMethods:{
						read:'POST'        
			        },
			        reader: {
			            type: 'json'
			        },
                    success: this.commonCallback,
                    scope: this
                });
            }
        }, this);
        
        
    },
    
    queryCddwEvent:function(){ //查询
	    this.getCddwCddwJsonStoreStore().load({
	            params: this.cddwQuery.down('form').getForm().getValues(),
	            scope: this,
	            callback: function(records, operation, success) {
	                this.cancelCddwQueryEvent();
	            }
	        });
    },
    
    cancelCddwQueryEvent:function(){ //关闭查询窗体
    	this.cddwQuery.down('form').getForm().reset();
        Ext.destroy(this.cddwQuery);
        this.cddwQuery = null;
    },
    
    editSaveCddwEvent : function () { //添加承担单位信息
       var grid = Ext.ComponentQuery.query('cddwlist')[0];
        // 取消选择的原因是当保存后，selectModel的备份数据已经与store的记录不同步
        // 此处也可以再次产生选择事件，或人为同步selectmodel与store的记录
       grid.getSelectionModel().deselectAll();
        Ext.Ajax.request({
            url: 'cddw/edit.action',
            actionMethods:{
				read:'POST'        
	        },
            params: this.cddwEdit.down('form').getForm().getValues(),
            success: function (response){
            	this.editCancelCddwEvent();
            	this.commonCallback();
            },
            scope: this
        });
    },
    
     editCancelCddwEvent : function () { //关闭添加/修改承担单位窗体
        this.cddwEdit.down('form').getForm().reset();
        Ext.destroy(this.cddwEdit);
        this.cddwEdit = null;
    },
    
    searchSQ : function () {
        // 定义ctrl的全局变量，保存查询条件
        this.conditionHolder = Ext.ComponentQuery.query("cddwlist")[0].getValues();
        this.storeQueryWithCondition();
    },
    
    storeQueryWithCondition : function () {
        var store = Ext.ComponentQuery.query('cddwlist')[0].getStore();
        store.load({
            params: this.conditionHolder
        });
    },
    
    commonCallback : function (ctrl) {
        Ext.MessageBox.alert("提示", "操作成功");
        this.storeQueryWithCondition();
    },
    
    selectBelongAreaProvince:function(combo, record,index){
    	var city=Ext.getCmp('cddw_belongAreaCity');
	    var district = Ext.getCmp("cddw_belongAreaDistrict");
	    city.clearValue();
	    district.clearValue();
	    city.store.load({params:{id:record[0].data.id}});
    },
    
    selectBelongAreaCity:function(combo, record,index){
	    var cddwDistrict = Ext.getCmp("cddw_belongAreaDistrict");
	    cddwDistrict.clearValue();
	    cddwDistrict.store.load({params:{id:record[0].data.id}});
    }
});