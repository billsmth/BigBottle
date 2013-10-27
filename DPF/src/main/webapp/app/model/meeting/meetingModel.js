/**
 * 任务承担单位管理Model
 */
 
Ext.define('App.model.meeting.meetingModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'idmeeting',
            type: 'string'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'beginTime',
            type: 'date'
        },
        {
            name: 'endTime',
            type: 'date'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'compere',
            type: 'string'
        },
        {
            name: 'contact',
            type: 'string'
        },
        {
            name: 'contactTel',
            type: 'string'
        },
        {
            name: 'contactEmail',
            type: 'string'
        },
        {
            name: 'agend',
            type: 'string'
        },
        {
            name: 'meetingRequest',
            type: 'string'
        },
        {
            name: 'mainContent',
            type: 'string'
        },
        {
            name: 'mainContentUrl',
            type: 'string'
        },
        {
            name: 'status',
            type: 'int'
        },
        {
            name: 'createUser',
            type: 'int'
        },
        {
            name: 'createDate',
            type: 'date'
        },
        {
            name: 'modifyUser',
            type: 'int'
        },
        {
            name: 'modifyDate',
            type: 'date'
        },
        {
            name: 'beginTimeStr',
            type: 'String',
            convert: strFmt
        },
        {
            name: 'endTimeStr',
            type: 'String',
            convert: strFmt
        },
        {
            name: 'mainPeople',
            type: 'String'
        },
        {
            name: 'maybePeople',
            type: 'String'
        },
        {
            name: 'mainPeopleArr'
        },
        {
            name: 'maybePeopleArr'
        },
        {
            name: 'filetest'
        }
    ]
});

function statusConv(v,record){
	if(v==1){
		return "未开始";
	}else if(v==2){
		return "已邀请";
	}else if(v==3){
		return "进行中";
	}else{
		return "已结束";
	}
}

function strFmt(v,record){
	return v.substring(0,16);
}