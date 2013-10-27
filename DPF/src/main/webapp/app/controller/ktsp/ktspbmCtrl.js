Ext.define('App.controller.ktsp.ktspbmCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['ktsp.ktspbmStore','com.ZjStore'],
    models: ['ktsp.ktspbmModel'],
    views: ['ktsp.ktspAddZJWin'],
    
    init: function() {
        this.control({
            
            'ktspAddZJWin treepanel':{
                itemclick: this.itemClickEvent
            }
        });
    },
    
    itemClickEvent : function (dw, record, element) {
        if(record ==  undefined || !record.get('leaf')){
            return;
        }
        var zdzjForm=Ext.getCmp('zdzjForm');
        
//        Ext.MessageBox.alert("提示", "更新专家组");
        var param=Ext.getCmp("zdzjForm").getValues();
        var ids=Ext.getCmp("zdzjForm").getValues();
    	param.group=record.get('id');
        this.getComZjStoreStore().load({params: param,callback:function(){
        	 
        	 Ext.getCmp('zdzjForm').getForm().reset();
            Ext.getCmp('userIds').setValue(ids.userIds);
        }});
        
    },
});