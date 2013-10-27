Ext.define('App.controller.main.mainCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['main.menuStore'],
    models: ['main.menuModel'],
    views: ['main.mainView'],
    
    init: function() {
        this.control({
            
            'viewport > treepanel':{
                itemclick: this.itemClickEvent
            }
        })
    },
    
    itemClickEvent : function (dw, record, element) {
        if(record ==  undefined || !record.get('leaf')){
            return;
        }

        this.addTab(record.get('id'), record.get('text'), record.get('qtitle'));
    },

    addTab : function(id, text, wintype) {
        
        var tabpanel = Ext.getCmp('tabPanel');
        
        if(tabpanel.items.map[id]){
                tabpanel.items.get(id).show();
        } else {
        
            var ret = tabpanel.add({
                id: id,
                title: text,
                closable: true,
                xtype:wintype
            });
            tabpanel.setActiveTab(ret);
        }
    }
});