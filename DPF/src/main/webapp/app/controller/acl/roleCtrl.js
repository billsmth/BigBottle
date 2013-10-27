Ext.define('App.controller.acl.roleCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['acl.roleStore', 'acl.menuStore'],

    views: ['acl.roleview', 'acl.roleeditwin', 'acl.menueditwin'],
    
    init: function() {
        this.control({
            'aclrolelist button[action=acl_role_list_add_act]': {
                click: this.showAdd
            },
            'aclrolelist button[action=acl_role_list_edit_act]': {
                click: this.showEdit
            },
            'aclrolelist button[action=acl_role_list_del_act]': {
                click: this.del
            },
            'roleeditwin button[action=acl_role_edit_save_act]': {
                click: this.saverole
            },
            'roleeditwin button[action=acl_role_edit_cancel_act]': {
                click: this.cancelEdit
            },
            'aclrolelist button[action=acl_role_list_menu_act]' : {
                click: this.showMenu
            },
            'menueditwin button[action=acl_menu_edit_save_act]' : {
                click: this.saveMenu
            },
            'menueditwin button[action=acl_menu_edit_cancel_act]' : {
                click: this.cancelMenuEdit
            }
        })
        
        this.getAclRoleStoreStore().load();
    },
    
    showMenu : function (obj, event) {
        var grid = obj.up('aclrolelist');
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        
        if (this.menuForm == null || this.menuForm == undefined) {
            this.menuForm = this.getAclMenueditwinView().create();
        }
        
        this.getAclMenuStoreStore().load({
            params:{
                roleId:rowRecord.data.id
            }
        });
        this.menuForm.roleId = rowRecord.data.id
        this.menuForm.show();
    },
    
    saveMenu : function (obj, event) {
        var tree = this.menuForm.down('treepanel');
        var records = tree.getView().getChecked();
        var ids = [];
        Ext.Array.each(records, function(rec){
            ids.push(rec.get('id'));
        });
        
        Ext.Ajax.request({
            url: 'menu/edit.action',
            params : {
                ids:ids,
                roleId : this.menuForm.roleId
            },
            success: function () {
                Ext.MessageBox.alert('提示', '操作成功');
                this.menuForm.hide();
            },
            scope: this
        });
    },
    
    cancelMenuEdit : function (obj, event) {
        this.menuForm.hide();
    },
    
    saverole : function () {
        Ext.Ajax.request({
            url: 'role/edit.action',
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
        var grid = obj.up('aclrolelist');
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        var editForm  = this.getEditForm();
        
        editForm.getForm().reset();
        editForm.getForm().loadRecord(rowRecord);
        this.editForm.show();
    },
    
    del : function (obj, event) {
        var grid = obj.up('aclrolelist');
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行删除。");
            return;
        }
        
        Ext.MessageBox.confirm('确认', '是否进行删除',
            function (optional){
                if (optional == 'yes') {
                    Ext.Ajax.request({
                        url: 'role/del.action',
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
            me.editForm = this.getAclRoleeditwinView().create();
        }
        
        return me.editForm.down('form');
    },
    
    comCallback : function () {
        Ext.MessageBox.alert('提示', '操作成功');
        this.getAclRoleStoreStore().load();
        if (this.editForm != null && this.editForm != undefined) {
            this.editForm.hide();
        }
    }
    
    
});