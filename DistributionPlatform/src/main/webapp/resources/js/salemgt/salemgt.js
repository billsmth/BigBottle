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
	        xtype:'textfield',
	        fieldLabel:'别称',
	        id:'biecheng',
	        name:'biecheng',
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'库存编号',
	        id:'kucun_id',
	        name:'kucun_id',
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'档口款号',
	        id:'kuanhao_id',
	        name:'kuanhao_id',
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'颜色',
	        id:'yanse',
	        name:'yanse',
	        allowBlank: true
	    }, {
	        xtype:'textfield',
	        fieldLabel:'尺码',
	        id:'chima',
	        name:'chima',
	        allowBlank: true
	    }, {
	        xtype:'datefield',
	        fieldLabel:'售出日期(始)',
	        id:'startdate',
	        name:'startdate',
	        format:'Y-m-d',
	        maxValue: new Date(),
	        allowBlank: true
	    }, {
	        xtype:'datefield',
	        fieldLabel:'售出日期(终)',
	        id:'enddate',
	        name:'enddate',
	        format:'Y-m-d',
	        maxValue: new Date(),
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
    Ext.regModel('salemgtModel',{
        extend: 'Ext.data.Model',
        fields: ['kucun_id', 'kucun_shuliang', 'kuanhao_id', 'yanse', 'chima', 'xiaoshou_shuliang', 'jinjia', 'chengbenjia', 'shoujia', 'zongchengben', 'zongjia', 'shijishoukuan', 'lirun']
    });

    /*
     * Kehu Grid Store
     */
    var salemgtStore = Ext.create('Ext.data.JsonStore',{
        autoLoad:true,
        model: 'salemgtModel',
        proxy:{
            type:'ajax',
            url:'json/list.action',
            reader: {
                type: 'json'
            }
        }
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        id:'salemgtGrid',
        store: salemgtStore,
        region : 'center',
        columnLines:true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns:[{
            header:'库存编号',dataIndex:'kucun_id', width:90
        }, {
        	header:'库存数量(件)',dataIndex:'kucun_shuliang', width:80
        }, {
        	header:'档口款号',dataIndex:'kuanhao_id', width:80
        }, {
        	header:'颜色',dataIndex:'yanse', width:80
        }, {
        	header:'尺码',dataIndex:'chima', width:80
        }, {
        	header:'售出数量(件)',dataIndex:'xiaoshou_shuliang', width:80
        }, {
        	header:'进价(元)',dataIndex:'jinjia', width:80
        }, {
        	header:'成本价(元)',dataIndex:'chengbenjia', width:80
        }, {
        	header:'建议售价(元)',dataIndex:'shoujia', width:80
        }, {
        	header:'总成本(元)',dataIndex:'zongchengben', width:80
        }, {
        	header:'总价(元)',dataIndex:'zongjia', width:80
        }, {
        	header:'实际收款(元)',dataIndex:'shijishoukuan', width:80
        }, {
        	header:'利润(元)',
        	dataIndex:'lirun', 
        	flex:1,
        	renderer: function (value, meta, record) {
                meta.tdCls = record.get('lirun')>0 ? 'yellow' : 'red';
                return value;
            }
        }],
        bbar: Ext.create('Ext.PagingToolbar', {displayInfo:true, emptyMsg:'没有记录', store:salemgtStore})
    });
	
	var viewport=new Ext.Viewport({
		layout:'border',
		renderTo:Ext.getBody(),
		items:[searchForm, grid]
	});
	 
});