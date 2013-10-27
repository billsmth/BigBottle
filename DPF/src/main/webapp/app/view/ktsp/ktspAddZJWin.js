
Ext.define('App.view.ktsp.ktspAddZJWin', {
    extend: 'Ext.window.Window',

    alias : 'widget.ktspAddZJWin',
    id:'ktspAddZJWin',
    
    title: '指定专家',

    layout: {
        type: 'fit'
    },
    
    closable:false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                    {
	                xtype: 'form',
	                id:'zdzjForm',
	                width:550,
	                height:350,
	                border:0,
	                items: [
							{
								xtype : 'container',
								layout: {
									align:'stretch',
									type: 'hbox'
								},
								items :[ {
									xtype: 'treepanel',
				                    region: 'west',
				                    id: 'ktspbmPanel',
				                    height:250,
								    flex:0.3,
								    margin:1,
				                    collapsible : true,
				                    split : true,
				                    rootVisible :false,
				                    store:'ktsp.ktspbmStore',
				                    viewConfig: {
									    }
									},{
									    xtype: 'itemselector',
									    id:'userIds',
									    name:'userIds',
									    height:250,
									    flex:0.7,
									    margin:1,
									    region : 'center',
									    fromTitle: '备选专家',
									    toTitle: '入选专家',
									    imagePath: './resources/extjs/examples/ux/css/images/',
									    store: 'com.ZjStore',
									    displayField: 'value',
									    valueField: 'key',
									    value: []
									}]
						},
	                    {
                        xtype: 'panel',
                        border:0,
                        items: [{
                            xtype: 'displayfield',
                            anchor: '100%',
                            margin:'5 0 0 5',
                            value: '注 ：'
                        },{
                            xtype: 'displayfield',
                            anchor: '100%',
                            margin:'0 0 0 25',
                            value: '1, 支持拖拽。'
                        },{
                            xtype: 'displayfield',
                            anchor: '100%',
                            margin:'0 0 0 25',
                            value: '2, 按住【Ctrl】键可点选多项。'
                        },{
                            xtype: 'displayfield',
                            anchor: '100%',
                            margin:'0 0 0 25',
                            value: '3, 按住【Shift】键可选取区间多项。'
                        }]
                    }
                    
	            ]
            }],
            buttons:[
                {
	                xtype: 'button',
	                iconCls: 'icon-submit',
	                action:'ktsp_submit_zdzj_act',
	                text: '保存'
	            },{
	            	xtype: 'tbseparator'
	        	},
	            {
	                xtype: 'button',
	                iconCls: 'icon-cancel',
	                action:'ktsp_cancel_zdzj_act',
	                text: '取消'
	            }]
        });

        me.callParent(arguments);
    }

});