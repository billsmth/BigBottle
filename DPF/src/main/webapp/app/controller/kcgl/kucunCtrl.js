Ext.define('App.controller.kcgl.kucunCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['kcgl.kcglStore'],

    views: ['kcgl.kcglView'],
    
    init: function() {
        this.control({
        	'kcglView button[action=kcgl_add_act]': {
                click: this.showAddKucunWin
            },
            'kcglView button[action=kcgl_add_xiaoshou_act]': {
                click: this.showAddXiaoshouWin
            },
            'kcglView button[action=kcgl_edit_act]': {
                click: this.showEditKucunWin
            },
            'addKucunWin button[action=kcgl_add_exec_act]': {
                click: this.submitKucun
            },
            'addKucunWin button[action=kcgl_cancel_act]': {
                click: this.cancelAddKucun
            },
            'addXiaoshouWin button[action=kcgl_add_xiaoshou_exec_act]': {
                click: this.submitXiaoshou
            },
            'addXiaoshouWin button[action=kcgl_cancel_xiaoshou_act]': {
                click: this.cancelAddXiaoshou
            },
            'kcglView button[action=kcgl_del_act]': {
                click: this.delKucun
            }
        })//,
        
        //this.getJhglJhglStoreStore().load();
    },
    /***
     * 添加库存按钮，显示添加页面窗体
     */
    showAddKucunWin : function () {
    	if (this.addKucunWin == null || this.addKucunWin == undefined) {
            this.addKucunWin = Ext.create('App.view.kcgl.addKucunWin');
        }
        this.addKucunWin.show();
    },
    /***
     * 添加销售按钮，显示添加页面窗体
     */
    showAddXiaoshouWin : function (obj, event) {
    	var grid = obj.up('kcglView');
        var rowRecord = grid.getSelectionModel().selected.items[0];
	    if(rowRecord == undefined) {
	        Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
	        return;
	    }
    	if (this.addXiaoshouWin == null || this.addXiaoshouWin == undefined) {
            this.addXiaoshouWin = Ext.create('App.view.kcgl.addXiaoshouWin');
        }
        this.addXiaoshouWin.show();
        var editForm  = Ext.ComponentQuery.query('addXiaoshouWin form')[0];
	    editForm.getForm().loadRecord(rowRecord);
	    Ext.getCmp('shuliang').setValue('1');
	    Ext.getCmp('count').setValue(Ext.getCmp('shoujia').getValue()+" 元");
	    Ext.getCmp("shijishoukuan").setValue(Ext.getCmp("shoujia").getValue());
	    Ext.getCmp('beizhu').setValue('');
	    
    },
    submitKucun : function () {
    	Ext.Ajax.request({
            url: 'kucun/savekucun.action',
            actionMethods:{
				read:'POST'        
	        },
            //params : editForm.getForm().getValues(),
            params: this.addKucunWin.down('form').getForm().getValues(),
            success: function (response){
            	var text = response.responseText;
            	//Ext.MessageBox.alert("text", "操作成功"+text);
            	this.cancelAddKucun();
            	this.commonCallback();
            },
            scope: this
        });
    },
    submitXiaoshou : function () {
    	Ext.Ajax.request({
            url: 'xiaoshou/savexiaoshou.action',
            actionMethods:{
				read:'POST'        
	        },
            //params : editForm.getForm().getValues(),
            params: this.addXiaoshouWin.down('form').getForm().getValues(),
            success: function (response){
            	var text = response.responseText;
            	//Ext.MessageBox.alert("text", "操作成功"+text);
            	this.cancelAddXiaoshou();
            	this.commonCallback();
            },
            scope: this
        });
    },
    delKucun : function () {
    	// TODO
    	alert("删除库存,");
    },
    /***
     * 编辑按钮，显示编辑页面窗体
     */
    showEditKucunWin : function (obj, event) {
    	var grid = obj.up('kcglView');
        var rowRecord = grid.getSelectionModel().selected.items[0];
	    if(rowRecord == undefined) {
	        Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
	        return;
	    }
	    this.showAddKucunWin();
	    
	    var editForm  = Ext.ComponentQuery.query('addKucunWin form')[0];
	    editForm.getForm().loadRecord(rowRecord);
	    Ext.getCmp('kucuneditType').setValue(2);
    },
    /***
     * 关闭按钮，关闭添加页面窗体
     */
    cancelAddKucun : function () {
     	this.addKucunWin.down('form').getForm().reset();
        this.addKucunWin.hide();
    },
    /***
     * 关闭按钮，关闭添加页面窗体
     */
    cancelAddXiaoshou : function () {
     	this.addXiaoshouWin.down('form').getForm().reset();
        this.addXiaoshouWin.hide();
    },
    commonCallback : function (ctrl) {
        Ext.MessageBox.alert("提示", "操作成功");
        this.storeQueryWithCondition();
    }
    
});