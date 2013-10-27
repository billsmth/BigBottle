Ext.define('App.controller.ktxx.ktCtrl', {
    extend: 'Ext.app.Controller',
    
    stores: ['ktxx.ktsqStore','com.ApproveStatusStore'],
    views: ['ktxx.ktgrid', 'ktxx.ktquerywin'],

    init: function() {
        this.control({
            'ktgrid  button[action=ktsq_list_search_act]' : {
                click: this.showQuery
            },
            'ktgrid  button[action=ktsq_list_html_act]' : {
                click: this.showHtml
            },
            'ktquerywin  button[action=ktsq_search_exec_act]' : {
                click: this.execQuery
            },
            'ktquerywin  button[action=ktsq_search_cancel_act]' : {
                click: this.cancelQuery
            }
        });
    },
    
    /**
     * 显示查询窗口
     */
    showQuery : function (obj, event) {

        this.gridId = obj.up('gridpanel').id;

        if (this.ktquery == null || this.ktquery == undefined) {
            this.ktquery = Ext.create('App.view.ktxx.ktquerywin');
        }

        this.ktquery.down('form').getForm().reset();

        this.ktquery.show();
    },
    
    /**
     * 转到新页面，以html方式显示
     */
    showHtml : function () {
    },
    
    /**
     * 实际执行查询
     */
    execQuery : function () {
    	if(undefined!=Ext.getCmp('ktsp_grid')){
    		Ext.getCmp('ktsp_grid').getSelectionModel().deselectAll();
    	}
        var grids = Ext.ComponentQuery.query('ktgrid');
        var store = null;
        var currGrid = null;
        var id = null;
        Ext.each(grids, function(row, index) {
            if (row.id == this.gridId) {
                id = row.id;
                currGrid = row;
                store = row.getStore();
            }
        }, this);
        
        var formvalues = this.ktquery.down('form').getForm().getValues();
        store.load({
            params: formvalues,
            scope: this,
            callback: function(records, operation, success) {
                this.ktquery.hide();
            }
        });
    },
    
    /**
     * 
     */
    cancelQuery : function () {
        this.ktquery.hide();
    }
});