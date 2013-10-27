Ext.define('App.controller.zjxx.zjxxCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['zjxx.zjxxJsonStore'],
    models: ['zjxx.zjxxModel'],
    views: ['zjxx.zjxxView'],
    
    init: function() {
        this.control({
            'zjxxlist button[action=zjxx_del_act]': {
                click: function(){
                    alert('zjxx del');
                }
            },'zjxxlist button[action=zjxx_edit_act]': {
                click: function(){
                    showEdit();
                }
            },'zjxxlist button[action=zjxx_add_act]': {
                click: function(){
                    showAdd();
                }
            }
        });
    }
});

var editForm = new Ext.form.FormPanel({
    id:'editForm',
    name:'editForm',
    labelAlign : 'right',
    labelWidth : 50,
    bodyStyle:"padding:10px 7px 0px 7px;overflow-y:auto;overflow-x:hidden;",
    url:'zjxx/add.action',
    layout: 'anchor',
    autoScroll:true,
    defaults: {
        anchor: '100%'
    },

    items:[{
        xtype:'textfield',
        id:'editType',
        name: 'editType',
        value:1,
        hidden:true
    }, {
        xtype:'textfield',
        fieldLabel:'专家编号',
        id:'idzjxx',
        name:'idzjxx',
        allowBlank: true,
        hidden:true
    }, {
        xtype:'textfield',
        fieldLabel:'姓名',
        id:'name',
        name:'name',
        allowBlank: false,
        emptyText:"请输入专家姓名【必须】"
    },new Ext.form.RadioGroup({
        fieldLabel: '性别',
        id:'sex',
        name:'sex',
        width: 100,
        items: [{
            name: 'sex',
            inputValue: '0',
            boxLabel: '男',
            checked: true
        }, {
            name: 'sex',
            inputValue: '1',
            boxLabel: '女'
        }]
    }), {
        xtype:'textfield',
        fieldLabel:'名族',
        id:'nation',
        name:'nation',
        allowBlank: true
    },{
        xtype:'datefield',
        fieldLabel:'生日',
        id:'birthday',
        name:'birthday',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'年龄',
        id:'age',
        name:'age',
        disabled:true,
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'职称',
        id:'titles',
        name:'titles',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'学历',
        id:'education',
        name:'education',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'学位',
        id:'degree',
        name:'degree',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'担当导师',
        id:'tutor',
        name:'tutor',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'毕业院校',
        id:'school',
        name:'school',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'工作单位',
        id:'company',
        name:'company',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'电子邮件',
        id:'email',
        name:'email',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'办公电话',
        id:'officePhone',
        name:'officePhone',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'移动电话',
        id:'cellphone',
        name:'cellphone',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'通信地址',
        id:'address',
        name:'address',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'邮编编码',
        id:'postcode',
        name:'postcode',
        allowBlank: true
    },{
        xtype:'textareafield',
        fieldLabel:'主攻方向介绍',
        id:'specialty',
        name:'specialty',
        allowBlank: true
    },{
        xtype:'textareafield',
        fieldLabel:'研究领域',
        id:'researchArea',
        name:'researchArea',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'照片',
        id:'picPath',
        name:'picPath',
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'工作简历',
        id:'resumePath',
        name:'resumePath',
        allowBlank: true
    },new Ext.form.RadioGroup({
        fieldLabel: '专家状态',
        id:'zjStatus',
        name:'zjStatus',
        width: 100,
        items: [{
            name: 'zjStatus',
            inputValue: '0',
            boxLabel: '活动',
            checked: true
        }, {
            name: 'zjStatus',
            inputValue: '1',
            boxLabel: '冻结'
        }]
    }),{
        xtype:'textfield',
        fieldLabel:'创建者编号',
        id:'createrId',
        name:'createrId',
        allowBlank: true,
        hidden:true
    },{
        xtype:'textfield',
        fieldLabel:'创建者姓名',
        id:'createrNm',
        name:'createrNm',
        disabled:true,
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'创建日期',
        id:'createDt',
        name:'createDt',
        disabled:true,
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'更新者编号',
        id:'updaterId',
        name:'updaterId',
        allowBlank: true,
        hidden:true
    },{
        xtype:'textfield',
        fieldLabel:'更新者姓名',
        id:'updaterNm',
        name:'updaterNm',
        disabled:true,
        allowBlank: true
    },{
        xtype:'textfield',
        fieldLabel:'更新日期',
        id:'updateDt',
        name:'updateDt',
        disabled:true,
        allowBlank: true
    }],
    buttons:[{
        text: '保存',
        iconCls : 'icon-submit',
        handler: function() {
            var form = editForm.getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                    	if(action.result.msg=="1"){
                    		Ext.Msg.alert('创建错误','专家信息已经存在。不能重复创建');
                    		return;
                    	}else if(action.result.msg=="2"){
                    		Ext.Msg.alert('更新错误','专家信息已经存在。不能重复创建');
                    		return;
                    	}else if(action.result.msg=="0"){
                    		Ext.Msg.alert('提示','专家信息保存成功');
                            editWin.close();
                            grid.store.load();	
                    	}else if(action.result.msg=="4"){
                    		Ext.Msg.alert('提示','编辑专家信息成功');
                            editWin.close();
                            grid.store.load();	
                    	}
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('提示','新建用户保存失败');
                    }
                });
            }
        }
    }, {
        text: '关闭',
        iconCls : 'icon-cancel',
        handler: function() {
            editWin.close();
        }
    }]
});
var editWin;
function showEdit() {
	editForm.getForm().reset();
	editForm.getForm().loadRecord(grid.getSelectionModel().selected.items[0]);
//	editForm.getForm().loadRecord(data);
    Ext.getCmp('editType').setValue(2);
    editWin=new Ext.Window({
        layout : 'fit',
        width : 450,
        title : '修改专家信息',
        height : 600,
        closeAction : 'hide',
        resizable:false,
        modal:true,
        closable : false,
        items : [editForm]
    });
    editWin.show();
}

function showAdd() {
	editForm.getForm().reset();
	editWin=new Ext.Window({
        layout : 'fit',
        width : 450,
        title : '新建专家信息',
        height : 600,
        closeAction : 'hide',
        resizable:false,
        modal:true,
        closable : false,
        items : [editForm]
    });
	editWin.show();
}