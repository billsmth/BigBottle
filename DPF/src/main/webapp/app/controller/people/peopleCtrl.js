Ext.define('App.controller.people.peopleCtrl', {
    extend: 'Ext.app.Controller',

    stores: [
             'people.peopleStore',
    		 'com.PeopleTypeStore',
    		 'com.AreaTypeStore',
    		 'com.IDTypeStore',
    		 'com.EducationStore',
    		 'com.TutorStore',
    		 'com.DegreeStore',
    		 'com.TitleStore'
             ],
    views: [
    		'people.peopleView',
    		'people.peopleGrid',
    		'people.addPeopleWin',
    		'people.peopleQueryWin'
    		],
    
    init: function(application) {
       // console.log('fff');
        //debugger;
        this.control({
        	
        	'peopleView gridpanel': {
            	itemclick:this.peopleViewItemclick
            },
            
            'peopleView  button[action=people_list_edit_act]':{
                click:this.editPeopleEvent
            },
            'peopleView  button[action=people_list_del_act]':{
                click:this.delPeopleEvent
            },
            
            
            'peopleGrid  button[action=people_list_search_act]' : {
                click: this.showQuery
            },
            'peopleGrid  button[action=people_list_add_act]' : {
                click: this.showAddWin
            },
            
            
            
            'peopleQueryWin  button[action=people_search_exec_act]' : {
                click: this.execQuery
            },
            'peopleQueryWin  button[action=people_search_cancel_act]' : {
                click: this.cancelQuery
            },
            
            
            
            'addPeopleWin  button[action=people_add_add_act]' : {
            	
                click: this.execAdd
            },
            'addPeopleWin  button[action=people_add_cancel_act]' : {
                click: this.cancelAdd
            },
            
            
            'addPeopleWin combobox[id=people_edit_rcType]' : {
                select:this.selectComboboxEditRcType
            }
            
            
        });
    }, 
    
    peopleViewItemclick:function(obj, record, item, index, e, eOpts){
        var peopleViewForm=Ext.getCmp('peopleViewForm');
        peopleViewForm.getForm().reset();
        peopleViewForm.getForm().loadRecord(record);
        
        
        var people_view_expertMsg=Ext.getCmp('people_view_expertMsg');
        var people_view_researchMsg=Ext.getCmp('people_view_researchMsg');
    	var rcTypeVal=record.data.rcType;
    	if(rcTypeVal==4||rcTypeVal=="专家"){
    		people_view_expertMsg.show();
    		people_view_researchMsg.show();
    	}else if(rcTypeVal==1||rcTypeVal=="科研"){
    		people_view_expertMsg.show();
    		people_view_researchMsg.hide();
    	}else{
    		people_view_expertMsg.hide();
    		people_view_researchMsg.hide();
    	}
        
        
    },
    
    
    /***
     * 修改按钮，显示修改页面
     */
    editPeopleEvent: function() {
        var grid = Ext.ComponentQuery.query('peopleView gridpanel')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        this.showAddWin();
        
        var editForm  = Ext.ComponentQuery.query('addPeopleWin form')[0];
        editForm.getForm().loadRecord(rowRecord);
        this.setEditPanelStatus(false);
        if(editForm.collapsed) {
            editForm.expand();
        }
        this.selectComboboxEditRcType();
        
        
           Ext.Ajax.request({
            url: 'people/findById.action',
            params : {
                idpeople:rowRecord.data.idpeople
            },
            actionMethods:{
				read:'POST'        
	        },
	         reader: {
	            type: 'json'
	        },
            success: function(response){
		        var obj=JSON.parse(response.responseText); 
		        Ext.getCmp('people_edit_rcType').setValue(obj.rcType);
		        
		        if(obj.sex!=null&&obj.sex!=''){
		        	if(obj.sex=='0'){
		        		Ext.getCmp('people_edit_sex_man').setValue(true);
		        	}else{
		        		Ext.getCmp('people_edit_sex_won').setValue(true);
		        	}
		        }
		        
		        Ext.getCmp('people_edit_areaType').setValue(obj.areaType);
		        Ext.getCmp('people_edit_idType').setValue(obj.idType);
		        Ext.getCmp('people_edit_degree').setValue(obj.degree);
		        Ext.getCmp('people_edit_tutor').setValue(obj.tutor);
		        Ext.getCmp('people_edit_education').setValue(obj.education);
		        Ext.getCmp('people_edit_title').setValue(obj.title);
		    },
            scope: this
        });
        
    },

    /****
     * 删除按钮，删除数据
     */
    delPeopleEvent: function() {
        var grid = Ext.ComponentQuery.query('peopleView gridpanel')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
        
       Ext.MessageBox.confirm('确认', '是否进行删除',
        function (optional){
            if (optional == 'yes') {
                Ext.Ajax.request({
                    url: 'people/del.action',
                    params : {
                        idpeople:rowRecord.data.idpeople
                    },
                    actionMethods:{
						read:'POST'        
			        },
                    success: this.commonCallback,
                    scope: this
                });
            }
        }, this);
    },
    
    
    
        
    /**
     * 查询按钮，显示查询窗口
     */
    showQuery : function () {
        if (this.peopleQuery == null || this.peopleQuery == undefined) {
            this.peopleQuery = Ext.create('App.view.people.peopleQueryWin');
        }
        this.peopleQuery.show();
    },
    
    
    /**
     * 查询窗体，实际执行查询
     */
    execQuery : function () {
        this.getPeoplePeopleStoreStore().load({
            params: this.peopleQuery.down('form').getForm().getValues(),
            scope: this,
            callback: function(records, operation, success) {
                this.cancelQuery();
            }
        });
    },
    
    /**
     * 查询窗体，关闭查询窗体
     */
    cancelQuery : function () {
    	this.peopleQuery.down('form').getForm().reset();
        this.peopleQuery.hide();
    },
    
    
    /*showAddWin:function (){
    	this.showAdd();
    	var editForm  = Ext.ComponentQuery.query('addPeopleWin form[region=south]')[0];
        this.setEditPanelStatus(false);
        if(editForm.collapsed) {
            editForm.expand();
        }
    },*/
   
    /***
     * 添加按钮，显示添加页面窗体
     */
    showAddWin : function () {
    	if (this.peopleAdd == null || this.peopleAdd == undefined) {
            this.peopleAdd = Ext.create('App.view.people.addPeopleWin');
        }
        this.peopleAdd.show();
    },
    
    
    /***
     * 添加页面，执行添加操作
     */
    execAdd : function () {
    	
    	/***
        this.getPeoplePeopleStoreStore().create({
            params: this.peopleAdd.down('form').getForm().getValues(),
            scope: this,
            callback: function(records, operation, success) {
                this.peopleAdd.hide();
            }
        });
        */
        var grid = Ext.ComponentQuery.query('peopleView gridpanel')[0];
        // 取消选择的原因是当保存后，selectModel的备份数据已经与store的记录不同步
        // 此处也可以再次产生选择事件，或人为同步selectmodel与store的记录
        grid.getSelectionModel().deselectAll();
        
        /*if(!Ext.getCmp('simpleForm').isValid()){
    		//alert("请输入必填项");
    		return false;
    	}*/

        /*var name = Ext.getCmp('name');
        
        if (name.value == '' || name.value == null || name.value == undefined) {
            Ext.MessageBox.alert("提示", "输入姓名");
            return;
        }*/
    	//var editForm  = Ext.ComponentQuery.query('addPeopleWin form[region=south]')[0];
        //var value= this.peopleAdd.down('form').getForm().getValues();
        // var value11= this.peopleAdd.up('form').getForm();
        //var value= this.peopleAdd.down('form').getForm().getValues();
        
        Ext.Ajax.request({
            url: 'people/edit.action',
            actionMethods:{
				read:'POST'        
	        },
            //params : editForm.getForm().getValues(),
            params: this.peopleAdd.down('form').getForm().getValues(),
            success: function (response){
            	var text = response.responseText;
            	//Ext.MessageBox.alert("text", "操作成功"+text);
            	this.cancelAdd();
            	this.commonCallback();
            },
            scope: this
        });
    },
    
    /***
     * 添加窗体，关闭及窗体
     */
     cancelAdd : function () {
     	this.peopleAdd.down('form').getForm().reset();
        this.peopleAdd.hide();
    },
    
    
    setEditPanelStatus : function (disabled) {
        var editForm  = Ext.ComponentQuery.query('peopleView')[0]
        editForm.setDisabled(disabled);
    },
    
    searchSQ : function () {
        // 定义ctrl的全局变量，保存查询条件
        this.conditionHolder = Ext.ComponentQuery.query("peopleView form[region=north]")[0].getValues();
        this.storeQueryWithCondition();
    },
    
    storeQueryWithCondition : function () {
        var store = Ext.ComponentQuery.query('peopleView peopleGrid')[0].getStore();
        store.load({
            params: this.conditionHolder
        });
    },
    
    
    commonCallback : function (ctrl) {
        Ext.MessageBox.alert("提示", "操作成功");
        this.storeQueryWithCondition();
    },
    
    
    selectComboboxEditRcType:function(){
    	var edit_rcType=Ext.getCmp("people_edit_rcType");
    	var expertMsg=Ext.getCmp("people_expertMsg");
    	var researchMsg=Ext.getCmp("people_researchMsg");
    	
    	
    	if(edit_rcType.getValue()==4||edit_rcType.getValue()=="专家"){
    		expertMsg.show();
    		researchMsg.show();
    	}else if(edit_rcType.getValue()==1||edit_rcType.getValue()=="科研"){
    		researchMsg.show();
    		expertMsg.hide();
    	}else{
    		expertMsg.hide();
    		researchMsg.hide();
    	}
    }
    
});