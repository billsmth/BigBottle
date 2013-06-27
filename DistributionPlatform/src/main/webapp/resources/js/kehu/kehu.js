Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    /*************站点列表代码(开始)**************************/
    /*
     * Kehu Model 全局
     */
    Ext.regModel('kehuModel',{
        extend: 'Ext.data.Model',
        fields: ['kehu_id', 'kehuname', 'kehusex', 'age', 'biecheng', 'dianming', 'phone1', 'phone2', 'address1', 'address2', 'infor1', 'infor2', 'infor3', 'infor4', 'zuqun_id', 'zhuangtai', 'zhuceriqi', 'qq', 'weixin', 'taobao', 'beizhu']
    });

    /*
     * Kehu Grid Store
     */
    var kehuStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'kehuModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            reader: {
                type: 'json'
            }
        }
    });

    /*
     * Kehu Grid Object
     */
    var grid = Ext.create('Ext.grid.Panel', {
        id:'kehuGrid',
        store: kehuStore,
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'客户编号',dataIndex:'kehu_id', width:90
        }, {
        	header:'姓名',dataIndex:'kehuname', width:80
        }, {
        	header:'性别',dataIndex:'kehusex', width:40, renderer:showSex
        }, {
        	header:'年龄',dataIndex:'age', width:40
        }, {
        	header:'别称',dataIndex:'biecheng', width:80
        }, {
        	header:'店名',dataIndex:'dianming', width:80
        }, {
        	header:'电话 1',dataIndex:'phone1', width:80
        }, {
        	header:'电话 2',dataIndex:'phone2', width:80
        }, {
        	header:'地址 1',dataIndex:'address1', width:80
        }, {
        	header:'地址 2',dataIndex:'address2', width:80
        }, {
        	header:'组群',dataIndex:'zuqun_id', width:80
        }, {
        	header:'状态',dataIndex:'zhuangtai', width:80, renderer:showZhuangtai
        }, {
        	header:'注册日期',dataIndex:'zhuceriqi', width:80
        }, {
        	header:'QQ号码',dataIndex:'qq', width:80
        }, {
        	header:'微信号码',dataIndex:'weixin', width:80
        }, {
        	header:'淘宝号码',dataIndex:'taobao', width:80
        }, {
        	header:'备注信息',dataIndex:'beizhu', width:80
        }, {
        	header:'信息 1',dataIndex:'infor1', width:80
        }, {
        	header:'信息 2',dataIndex:'infor2', width:80
        }, {
        	header:'信息 3',dataIndex:'infor3', width:80
        }, {
        	header:'信息 4',dataIndex:'infor4', width:80
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:kehuStore}),
        tbar:[{
            id:'addNew',
            text: '新建客户',
            iconCls:'icon-add',
            handler:function(){
            	showAdd();
            }
        }, '-', {
            id:'edit',
            text:'编辑',
            iconCls:'icon-edit',
            handler:function() {
            	if(grid.getSelectionModel().selected.items.length<1){
            		Ext.Msg.alert('提示','请先选择要编辑的客户记录，再点击【编辑】按钮');
                	return;
            	}else if(grid.getSelectionModel().selected.items.length>1){
            		Ext.Msg.alert('提示','请选择一条客户记录，本系统咱不支持多条编辑');
                	return;
            	}
                var obj = grid.getSelectionModel().selected.items[0];
                showEdit(obj);
            }
        }]
    });
    
    /*
     * Tab页面的布局
     */
    Ext.create('Ext.Viewport', {
        layout : 'fit',
        items:[grid],
        renderTo : Ext.getBody()
    });
    
    function showSex(val) {
        if(val == '0') {
            return '女';
        } else {
            return '男';
        }
    }
    
    function showZhuangtai(val) {
        if(val == '0') {
            return '正常';
        }
    }
    /*************站点列表代码(结束)**************************/
    var radiogroup = new Ext.form.RadioGroup({
        fieldLabel: '性别',
        width: 100,
        items: [{
            name: 'sex',
            inputValue: '1',
            boxLabel: '女士',
            checked: true
        }, {
            name: 'sex',
            inputValue: '2',
            boxLabel: '男士'
        }]
    });
    //获取单选组的值
    radiogroup.on('change', function (rdgroup, checked) {
        alert(checked.getRawValue());
    });
    /*************库存新增/编辑代码(开始)*********************/
    var editForm = new Ext.form.FormPanel({
        
        id:'editForm',
        name:'editForm',
        labelAlign:'right',
        labelWidth : 50,
        bodyStyle:"padding:10px 7px 0px 7px",
        autoScroll:true,
        url:'../kehu/savekehu.action',
        layout: 'anchor',
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
            fieldLabel:'客户编号',
            id:'kehu_id',
            name:'kehu_id',
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'客户姓名',
            id:'kehuname',
            name:'kehuname',
            emptyText:"请输入客户姓名(必填)",
            allowBlank: false
        },radiogroup
        /*{
        	xtype:'combo',
        	name:'kehusex',
            fieldLabel:'性别',
            hiddenName:'kehusex',
            valueField:'id',
            displayField:'name',
            triggerAtion:"all",
            emptyText:'请选择',
            mode:"local",
            value:1,
            store:new Ext.data.ArrayStore({fields:["id","name"],data:[[1,"女"],[2,"男"]]})
        }*/, {
            xtype:'textfield',
            fieldLabel:'年龄',
            id:'age',
            name:'age',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'别称',
            id:'biecheng',
            name:'biecheng',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'店名',
            id:'dianming',
            name:'dianming',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'电话1',
            id:'phone1',
            name:'phone1',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'电话2',
            id:'phone2',
            name:'phone2',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'地址一',
            id:'address1',
            name:'address1',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'地址二',
            id:'address2',
            name:'address2',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'附加信息一',
            id:'infor1',
            name:'infor1',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'附加信息二',
            id:'infor2',
            name:'infor2',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'附加信息三',
            id:'infor3',
            name:'infor3',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'附加信息四',
            id:'infor4',
            name:'infor4',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'组群编号',
            id:'zuqun_id',
            name:'zuqun_id',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'状态',
            id:'zhuangtai',
            name:'zhuangtai',
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'注册日期',
            id:'zhuceriqi',
            name:'zhuceriqi',
            allowBlank: true,
            hidden:true
        }, {
            xtype:'textfield',
            fieldLabel:'QQ号码',
            id:'qq',
            name:'qq',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'微信号码',
            id:'weixin',
            name:'weixin',
            allowBlank: true
        }, {
            xtype:'textfield',
            fieldLabel:'淘宝账号',
            id:'taobao',
            name:'taobao',
            allowBlank: true
        }, {
            xtype:'textareafield',
            fieldLabel:'备注',
            id:'beizhu',
            name:'beizhu',
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
                            Ext.Msg.alert('提示','新建客户保存成功');
                            editWin.close();
                            grid.store.load();
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('提示','新建客户保存失败');
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
    
    
    var editWin = new Ext.Window({
        layout : 'fit',
        width : 400,
        title : '新建客户',
        height : 450,
        closeAction : 'hide',
        modal:true,
        items : [editForm]

    });
    function showEdit(data) {
    	editForm.getForm().loadRecord(data);
        Ext.getCmp('editType').setValue(2);
        editWin.title='编辑客户';
        editWin.show();
    }
    
    function showAdd(obj) {
    	editForm.getForm().reset();
    	editWin.title='新建客户';
    	editWin.show();
    }
    
    /*************站点新增/编辑代码(结束)*********************/
});