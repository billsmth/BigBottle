Ext.define('App.controller.main.todoCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['main.todoStore'],
    views: ['main.todoView'],
    
    init: function() {
        this.control({
            
            'todoView button[action=main_todo_refresh_act]':{
                click: this.refreshTodo
            },
            'todoView button[action=main_todo_go_act]':{
                click: this.openItem
            }
        })
    },
    
    refreshTodo : function () {
        this.getMainTodoStoreStore().load();
    },
    
    openItem : function (obj, event) {
        var grid = obj.up('grid');

        var rowRecord = grid.getSelectionModel().selected.items[0];
        if(rowRecord == undefined) {
            Ext.MessageBox.alert("提示", "请先选择一行。");
            return;
        }
        
        var category = rowRecord.get('category');
        var issueId = rowRecord.get('id');
        if(category == '1') {
            // 转到授权
            this.showTab('ktsq_list_id', issueId, {id:'0201', text:'课题授权', wintype:'ktsqview'});
        } else if (category == '2') {
            // 转到材料申报
            this.showTab('kt_ktsb_grid', issueId, {id:'0202', text:'材料申报', wintype:'ktsbView'});
        } else if (category == '3') {
            // 转到合同审核-专家
            this.showTab('ktsp_ZJ_grid', issueId, {id:'0204', text:'合同审核-专家', wintype:'ktspZJView'});
        } else if (category == '4') {
            // 转到合同审核
            this.showTab('ktsp_grid', issueId, {id:'0203', text:'合同审核', wintype:'ktspView'});
        }
    },
    
    /*
     * @private
     */
    showTab : function (gridId, issueId, tabParam) {
        var tabpanel = Ext.getCmp('tabPanel');
        if (tabpanel.items.map[tabParam.id]) {
            // 存的情况，重新加载数据
            this.reLoadIssue(gridId, issueId, tabParam, function() {
                tabpanel.items.get(tabParam.id).show();
            });
        } else {
            // 如果不存在，需要先创建一个
            var ret = tabpanel.add({
                id: tabParam.id,
                title: tabParam.text,
                closable: true,
                xtype:tabParam.wintype
            });
            
            // 加载数据
            this.reLoadIssue(gridId, issueId, tabParam, function() {
                tabpanel.items.get(tabParam.id).show();
            });
        }
    },
    
    /*
     * @private
     * 进行课题grid的数据加载
     */
    reLoadIssue : function (gridId, issueId, tabParam, fn) {

        var grids = Ext.ComponentQuery.query('ktgrid');
        var store = null;
        Ext.each(grids, function(row, index) {
            if (row.id == gridId) {
                store = row.getStore();
            }
        }, this);

        store.load({
            params: {id:issueId},
            scope: this,
            callback: fn
        });
    }
});