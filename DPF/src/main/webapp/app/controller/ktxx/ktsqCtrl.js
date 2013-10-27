Ext.define('App.controller.ktxx.ktsqCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['com.SecretLevelStore','com.BelongValleyStore', 'com.TopicStore', 'ktxx.ktsqStore'],
    views: ['ktxx.ktgrid','ktxx.ktsqview'],

    init: function() {
        this.control({
            'ktsqview' : {
                beforerender : function () {
                    
                }
            },
            'ktsqview  button[action=ktsq_list_add_act]' : {
                click: this.ktsqAdd
            },
            'ktsqview  button[action=ktsq_list_edit_act]' : {
                click: this.ktsqEdit
            },
            'ktsqview  button[action=ktsq_list_del_act]' : {
                click: this.ktsqDel
            },
            'ktsqview  button[action=ktsq_list_html_act]' : {
            },
            'ktsqview  button[action=ktsq_edit_save_act]' : {
                click: this.saveKtsq
            },
            'ktsqview  button[action=ktsq_edit_approve_act]' : {
                click: this.saveKtsqAndApprove
            },
            'ktsqview  button[action=ktsq_edit_cancel_act]' : {
                click: this.cancelSave
            }
            /*,'ktgrid':{// 暂时关闭监听。
                beforesearch : function (params) {
                    if (params.id == 'ktsq_list_id') {
                        // 因为同一事件被多处监听, 需要一个办法来实别应该由哪个方法来处理,
                        // 所以用id来实一下。还没找到更好的办法, 处理之后可以返回false.
                        return false;
                    } else {
                        // 如果不是由自己处理，交由下一个监听处理
                        return true;
                    }
                }
            }*/
            
        });
    },
 
 
    searchSQ : function () {
        // 定义ctrl的全局变量，保存查询条件
        this.conditionHolder = Ext.ComponentQuery.query("ktsqview form[region=north]")[0].getValues();
        this.storeQueryWithCondition();
    },
    ktsqAdd : function () {
        var editForm  = Ext.ComponentQuery.query('ktsqview form[region=south]')[0];
        editForm.getForm().reset();
        this.setEditPanelStatus(false);
        if(editForm.collapsed) {
            editForm.expand();
        }
    },
    ktsqEdit : function () {
        var grid = Ext.ComponentQuery.query('ktsqview gridpanel')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请选择一行，再进行编辑。");
            return;
        }
        var editForm  = Ext.ComponentQuery.query('ktsqview form[region=south]')[0];
        
        editForm.getForm().loadRecord(rowRecord);
        this.setEditPanelStatus(false);
        if(editForm.collapsed) {
            editForm.expand();
        }
    },
    ktsqDel : function () {
        var grid = Ext.ComponentQuery.query('ktsqview gridpanel')[0];
        var rowRecord = grid.getSelectionModel().selected.items[0];
        Ext.Ajax.request({
            url:'ktsq/del.action?id=' + rowRecord.data.id,
            success: this.commonCallback,
            scope: this
        });
    },
    
    saveKtsq : function () {
        var grid = Ext.ComponentQuery.query('ktsqview gridpanel')[0];
        // 取消选择的原因是当保存后，selectModel的备份数据已经与store的记录不同步
        // 此处也可以再次产生选择事件，或人为同步selectmodel与store的记录
        grid.getSelectionModel().deselectAll();
        var editForm  = Ext.ComponentQuery.query('ktsqview form[region=south]')[0];

        var values = editForm.getForm().getValues();
        // 补充单位的信息
        var orgCombo = Ext.getCmp('requestCompany');
        if (orgCombo.value != null && orgCombo.value != undefined && orgCombo.value != '') {
            var selRecord = orgCombo.getStore().findRecord('idorg', orgCombo.value);
            values.requestCompanyNo = selRecord.data.orgNo;
            values.requestCompanyName = selRecord.data.companyName;
        }

        Ext.Ajax.request({
            url: 'ktsq/edit.action',
            params : values,
            success: this.commonCallback,
            scope: this
        });
    },
    
    saveKtsqAndApprove : function () {
        var grid = Ext.ComponentQuery.query('ktsqview gridpanel')[0];
        // 取消选择的原因是当保存后，selectModel的备份数据已经与store的记录不同步
        // 此处也可以再次产生选择事件，或人为同步selectmodel与store的记录
        grid.getSelectionModel().deselectAll();
        var editForm  = Ext.ComponentQuery.query('ktsqview form[region=south]')[0];
        
        var values = editForm.getForm().getValues();
        // 补充单位的信息
        var orgCombo = Ext.getCmp('requestCompany');
        
        if (orgCombo.value == '' || orgCombo.value == null || orgCombo.value == undefined) {
            Ext.MessageBox.alert("提示", "授权单位不能为空。");
            return;
        }

        var selRecord = orgCombo.getStore().findRecord('idorg', orgCombo.value);
        values.requestCompanyNo = selRecord.data.orgNo;
        values.requestCompanyName = selRecord.data.companyName;
        values.status = '1';
        Ext.Ajax.request({
            url: 'ktsq/edit.action',
            params : values,
            success: this.commonCallback,
            scope: this
        });
    },
    
    cancelSave : function () {
        var editForm  = Ext.ComponentQuery.query('ktsqview form[region=south]')[0];
        editForm.getForm().reset();
        this.setEditPanelStatus(true);
        editForm.collapse();
    },
    
    setEditPanelStatus : function (disabled) {
        var editForm  = Ext.ComponentQuery.query('ktsqview form')[0]
        editForm.setDisabled(disabled);
    },
    
    commonCallback : function (ctrl) {
        Ext.MessageBox.alert("提示", "操作成功");
        this.storeQueryWithCondition();
        var editForm  = Ext.ComponentQuery.query('ktsqview form[region=south]')[0];
        editForm.getForm().reset();
    },
    
    storeQueryWithCondition : function () {
        var store = Ext.ComponentQuery.query('ktsqview ktgrid')[0].getStore();
        store.load({
            params: this.conditionHolder
        });
    }
});