Ext.define('App.view.main.mainView', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 83,
                    layout: {
                        type: 'fit'
                    },
                    id: 'topPanel',
                    items:[{
                            xtype: 'image',
                            src: 'resources/img/banner-s2.jpg'
                    }]
                    //html:"<img src='resources/img/banner-s2.jpg'/>"
                },
                {
                    xtype: 'treepanel',
                    region: 'west',
                    id: 'menuPanel',
                    width: 150,
                    title: '菜单',
                    collapsible : true,
                    split : true,
                    rootVisible :false,
                    store:'main.menuStore',
                    /*
                    store: new Ext.data.TreeStore({
                        
                        proxy: {
                            type: 'ajax',
                            url:'app/store/main/menu.json'
                        },
                        root: {
                            text: '',
                            //id: 'src',
                            expanded: true
                            //children: []
                        }
                    }),*/
                    viewConfig: {

                    }
                },
                {
                    xtype: 'tabpanel',
                    region: 'center',
                    id: 'tabPanel',
                    items:[{
                        xtype:'todoView'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }
});