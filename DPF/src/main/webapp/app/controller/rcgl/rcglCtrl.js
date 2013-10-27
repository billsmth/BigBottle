Ext.define('App.controller.rcgl.rcglCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['rcgl.rcglJsonStore'],
    models: ['rcgl.rcglModel'],
    views: ['rcgl.rcglView'],
    
    init: function() {
        this.control({
            'rcgllist button[action=rcgl_del_act]': {
                click: this.on_rcgl_del
            },
            'rcgllist button[action=rcgl_add_act]': {
                click: this.on_rcgl_add
            },
            'rcgllist button[action=rcgl_edit_act]': {
                click: this.on_rcgl_edit
            }
        });
    },
    
    on_rcgl_del:function(){
    	Ext.MessageBox.alert('消息','删除人才函数');
    },
    on_rcgl_add:function(){
    	Ext.MessageBox.alert('消息','添加人才函数');
    },
    on_rcgl_edit:function(){
    	Ext.MessageBox.alert('消息','编辑人才函数');
    }
    
});