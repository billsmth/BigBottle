/**
 * 任务承担单位管理Store
 */

Ext.define('App.store.meeting.meetingJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.meeting.meetingModel'
    ],

    autoLoad: true,
    model: 'App.model.meeting.meetingModel',
    proxy: {
        type : 'ajax',
        api : {
            create:'meeting/add.action',
            read:'meeting/listall.action',
            update:'meeting/update.action',
            destroy:'meeting/del.action'
        },
        actionMethods: {  
            read: 'POST'  
        },  
        reader : {
                type: 'json'
        }
    }
});