Ext.define("App.view.ktsb.ktsbBudgetForm", {
			extend : 'Ext.form.FormPanel',
			alias : 'widget.ktsbBudgetForm',
			autoScroll : true,
			layout : "fit",
			title : '经费预算',

			initComponent : function() {
				var me = this;
				var treeGrid = Ext.create("Ext.tree.Panel", {
							itemId : 'ktsbBudgetGrid',
							height : 300,
							useArrows : true,
							rootVisible : false,
							multiSelect : true,
							expanded : true,
							viewConfig: { 
						        stripeRows: false, 
						        getRowClass: function(record) { 
						            return record.get('leaf') ? '' : 'parent-row'; 
						        } 
						    },
							store : 'ktsb.ktsbFormBudgetStore',
							columns : [{
										xtype : 'treecolumn',
										text : '费用类别',
										flex : 2,
										sortable : true,
										dataIndex : 'budgetName'
									}, {
										text : '中央财政投入(万元)',
										flex : 1,
										sortable : true,
										dataIndex : 'investmentCenGov',
										align : 'center',
										editor : {
											xtype : 'numberfield',
											allowBlank : false,
											minValue : 0,
											maxValue : 100000
										}
									}, {
										text : '地方财政投入(万元)',
										flex : 1,
										sortable : true,
										dataIndex : 'investmentLocGov',
										align : 'center',
										editor : {
											xtype : 'numberfield',
											allowBlank : false,
											minValue : 0,
											maxValue : 100000
										}
									}, {
										text : '企业投资(万元)',
										flex : 1,
										sortable : true,
										dataIndex : 'investmentEnterprise',
										align : 'center',
										editor : {
											xtype : 'numberfield',
											allowBlank : false,
											minValue : 0,
											maxValue : 100000
										}
									}, {
										text : '银行融资(万元)',
										flex : 1,
										sortable : true,
										dataIndex : 'investmentBank',
										align : 'center',
										editor : {
											xtype : 'numberfield',
											allowBlank : false,
											minValue : 0,
											maxValue : 100000
										}
									}, {
										text : '其他(万元)',
										flex : 1,
										sortable : true,
										dataIndex : 'investmentOther',
										align : 'center',
										editor : {
											xtype : 'numberfield',
											allowBlank : false,
											minValue : 0,
											maxValue : 100000
										}
									}, {
										text : '合计(万元)',
										flex : 1,
										sortable : true,
										dataIndex : 'investmentSum',
										align : 'center',
										tdCls: 'custom-column'
									}],
									plugins : [Ext.create('Ext.grid.plugin.CellEditing',
									{
										clicksToEdit : 1,
										pluginId : 'cellEditing',
										listeners: {
								            beforeedit: function(editor, e){
								                if (!e.record.data.leaf)
								                    return false;
								            },
								            edit: function(editor, e, eOpts) {
								            	/**step 1 设置当前行的总数**/
								            	var currentRecord = e.record;
								            	var recordTotal = currentRecord.get('investmentCenGov')+currentRecord.get('investmentEnterprise')+
								            	currentRecord.get('investmentLocGov')+currentRecord.get('investmentBank')+currentRecord.get('investmentOther');
								            	currentRecord.set('investmentSum',recordTotal);
//								            	debugger;
								            	/**step 2 设置当前列父节点的总数**/
								            	var parentNode = e.grid.getStore().getById(e.record.get('parentId'));
								            	var parentNodeValue = 0,parentNodeValueSum = 0 ;
								            	
								            	if(parentNode.get('parentId')){//当前节点存在父节点
								            		
								            		while(parentNode.get('parentId')){
								            			
								            		if(parentNode.childNodes.length>0){//存在子节点
								            		
								            		for(var i=0;i<parentNode.childNodes.length;i++){
								            			parentNodeValue += parentNode.childNodes[i].get(e.column.dataIndex);
								            			parentNodeValueSum += parentNode.childNodes[i].get('investmentSum');
								            		}
								            		parentNode.set('investmentSum',parentNodeValueSum);
								            		parentNode.set(e.column.dataIndex,parentNodeValue);
								            		}
								            		parentNodeValue = 0;parentNodeValueSum = 0;	
								            		parentNode = e.grid.getStore().getById(parentNode.get('parentId'));
								            		}
								            	}
								            	
								            }
					                           
								        }
									})]

						});

				Ext.applyIf(me, {
							items : [treeGrid]
						});

				me.callParent(arguments);
			}
		});
