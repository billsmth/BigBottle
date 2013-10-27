Ext.define('App.controller.acl.userCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['acl.userStore'],

    views: ['acl.userview', 'acl.usereditwin'],
    
    init: function() {
        this.control({
            'acluserlist button[action=acl_user_list_add_act]': {
                click: this.showAdd
            },
            'acluserlist button[action=acl_user_list_edit_act]': {
                click: this.showEdit
            },
            'acluserlist button[action=acl_user_list_del_act]': {
                click: this.del
            },
            'usereditwin button[action=acl_user_edit_save_act]': {
                click: this.saveUser
            },
            'usereditwin button[action=acl_user_edit_cancel_act]': {
                click: this.cancelEdit
            }
        })//,
        
        this.getAclUserStoreStore().load();
    },
    
    saveUser : function () {
        Ext.Ajax.request({
            url: 'user/edit.action',
            params : this.getEditForm().getForm().getValues(),
            success: this.comCallback,
            scope: this
        });
    },
    
    cancelEdit : function (obj, event) {
        this.editForm.hide();
    },
    
    showAdd : function (obj, event) {
        this.getEditForm().getForm().reset();
        this.editForm.show();
    },
    
    showEdit: function (obj, event) {
        var grid = obj.up('acluserlist');
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        var editForm  = this.getEditForm();
        
        editForm.getForm().reset();
        editForm.getForm().loadRecord(rowRecord);
        Ext.getCmp('userId').setReadOnly(true);
        //Ext.getCmp('password').setValue(null);
        this.editForm.show();
    },
    
    del : function (obj, event) {
        var grid = obj.up('acluserlist');
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
        
        Ext.MessageBox.confirm('确认', '是否进行删除',
            function (optional){
                if (optional == 'yes') {
                    Ext.Ajax.request({
                        url: 'user/del.action',
                        params : {
                            id:rowRecord.data.id
                        },
                        success: this.comCallback,
                        scope: this
                    });
                }
            }, 
        this);
    },
    
    getEditForm : function () {
        var me = this;
        if (me.editForm == null || me.editForm == undefined) {
            me.editForm = this.getAclUsereditwinView().create();
        }
        
        return me.editForm.down('form');
    },
    
    comCallback : function () {
        Ext.MessageBox.alert('提示', '操作成功');
        this.getAclUserStoreStore().load();
        if (this.editForm != null && this.editForm != undefined) {
            this.editForm.hide();
        }
        
        var grid = Ext.ComponentQuery.query('acluserlist')[0];
        // 取消选择的原因是当保存后，selectModel的备份数据已经与store的记录不同步
        // 此处也可以再次产生选择事件，或人为同步selectmodel与store的记录
        grid.getSelectionModel().deselectAll();
    }
    
});