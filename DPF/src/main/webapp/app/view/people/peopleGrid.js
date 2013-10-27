Ext.define('App.view.people.peopleGrid', {
    extend: 'Ext.grid.Panel',

    alias : 'widget.peopleGrid',
    id:'peopleGrid',

    title: '人员列表',
    store: 'people.peopleStore',
    

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tbar:[{
                xtype: 'tbseparator'
            },{
                id:'people_search_id',
                text: '查询',
                iconCls:'icon-search',
                action:'people_list_search_act'
            },{
                xtype: 'tbseparator'
            },{
                id:'people_add_id',
                text: '新增',
                iconCls:'icon-add',
                action:'people_list_add_act'
            },{
                xtype: 'tbseparator'
            }],

            columns: [
				{
				  xtype: 'gridcolumn',
				  dataIndex: 'name',
				  text: '姓名',
				  flex:1
				},
				{
				  xtype: 'gridcolumn',
				  dataIndex: 'sex',
				  text: '性别',
				  flex:1
				},
				{
				  xtype: 'gridcolumn',
				  dataIndex: 'email',
				  text: '电子邮件',
				  flex:1
				},
				{
				  xtype: 'gridcolumn',
				  dataIndex: 'telephone',
				  text: '办公电话',
				  flex:1
				},
				{
				  xtype: 'gridcolumn',
				  dataIndex: 'phone',
				  text: '移动电话',
				  flex: 1
				}, {
				  xtype: 'gridcolumn',
				  dataIndex: 'rcType',
				  text: '人才类型',
				  flex:1
				}
            ]
        });

        Ext.each(this.tbar2, function(item, index) {
            this.tbar.push(item);
        }, this)
        me.callParent(arguments);
    }

});