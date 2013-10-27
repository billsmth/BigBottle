Ext.define('App.store.com.ZjStore', {
    extend: 'Ext.data.Store',
    
	requires: [
           'App.model.ktsp.ktspPeopleModel'
       ],
       autoLoad: true,
       model: 'App.model.ktsp.ktspPeopleModel',
       proxy: {
           type : 'ajax',
           api : {
               read:'people/listallpeople.action'
           },
           actionMethods:{
   			read:'POST'        
           },
           reader : {
               type: 'json'
           }
       }
});