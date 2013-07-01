Ext.Loader.setConfig({
    enabled : true
});

Ext.onReady(function(){
	
	Ext.tip.QuickTipManager.init();
	var searchForm=new Ext.form.FormPanel({
        id:'editForm',
        name:'editForm',
        collapsible:true,
        width:150,
        title:"查询条件",
		region:"north",
        labelAlign:'right',
        labelWidth : 35,
        bodyStyle:"padding:10px 7px 0px 7px",
        autoScroll:true,
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items:[{
	        xtype:'textfield',
	        fieldLabel:'客户编号',
	        id:'kehu_id',
	        name:'kehu_id',
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'客户姓名',
	        id:'kehuname',
	        name:'kehuname',
	        allowBlank: true
	    }, {
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
	    }, {
	        xtype:'textfield',
	        fieldLabel:'别称',
	        id:'biecheng',
	        name:'biecheng',
	        allowBlank: true
	    }],
	    buttons:[{
            text: '查询',
            iconCls : 'icon-submit',
            handler: function() {
            	var form = searchForm.getForm();
            	grid.store.load({params:form.getValues()});
            }
        }]
	});
	
	
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
            actionMethods: {read:'post'},
            reader: {
                type: 'json'
            }
        }
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        id:'kehuGrid',
        store: kehuStore,
        region : 'center',
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'客户编号',dataIndex:'kehu_id', width:90
        }, {
        	header:'姓名',dataIndex:'kehuname', width:80
        }, {
        	header:'性别',dataIndex:'kehusex', width:40
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
        	header:'状态',dataIndex:'zhuangtai', width:80
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
	
	var viewport=new Ext.Viewport({
		layout:'border',
		renderTo:Ext.getBody(),
		items:[searchForm,
		       /*{
				title:"查询条件",
				region:"north",
				xtype : 'panel',
				id : 'header',
				layout : 'border',
				//split:true,
				//border:true,
				collapsible:true,
				height:200,
	            items:[searchForm]
			},
			/*{
	            xtype : 'panel',
	            title:"center",
	            id : 'contentbody',
	            layout : 'border',
	            region : 'center',
	            items:[grid]
	        }*/
			grid,{
				title:"south",
				region:"south",
				split:true,
				border:true,
				collapsible:true,
				height:100,
				minsize:100,
				maxsize:120
			}]
	});
	 
});