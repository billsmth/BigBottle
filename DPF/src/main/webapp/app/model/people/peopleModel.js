Ext.define('App.model.people.peopleModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'idpeople',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'sex',
            type: 'string',
            convert:sexConvert
        },
        {
            name: 'birthday',
            type: 'date'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'telephone',
            type: 'string'
        },
        {
            name: 'areaType',
            type: 'string',
            convert:areaTypeConvert
        },
        {
            name: 'idType',
            type: 'string',
            convert:idTypeConvert
        },
        {
            name: 'idNumber',
            type: 'string'
        },
        {
            name: 'company',
            type: 'string'
        },
        {
            name: 'address',
            type: 'string'
        },
        {
            name: 'postcode'
        },
        {
            name: 'title',
            type: 'string',
            convert:titleConvert
        },
        {
            name: 'education',
            type: 'string',
            convert:educationConvert
        },
        {
            name: 'age',
            type: 'int'
        },
        {
            name: 'degree',
            type: 'string',
            convert:degreeConvert
        },
        {
            name: 'tutor',
            type: 'string',
            convert:tutorConvert
        },
        {
            name: 'school',
            type: 'string'
        },
        {
            name: 'rcType',
            type: 'string',
            convert:rcTypeConvert
        },
        {
            name: 'photo',
            type: 'string'
        },
        {
            name: 'resume',
            type: 'string'
        },
        {
            name: 'createDate',
            type: 'date'
        },
        {
            name: 'createUser',
            type: 'int'
        },
        {
            name: 'modifyDate',
            type: 'date'
        },
        {
            name: 'modifyUser',
            type: 'int'
        },
        {
            name: 'softDel',
            type: 'string'
        },
        {
            name: 'specialty',
            type: 'string'
        },
        {
            name: 'specialtyIntro',
            type: 'string'
        },{
        	name:'birthdayStr',
        	type:'string',
        	convert:birthdayStrConvert
        },{
        	name:'fax',
        	type:'string'
        },{
        	name:'duty',
        	type:'string'
        },{
        	name:'sortNo'
        },{
        	name:'dutyTask',
        	type:'string'
        },{
        	name:'taskTime',
        	type:'string'
        }
    ]
});


function sexConvert(v, record){
	if(v==0){
		return '男';
	}else{
		return '女';
	}
}


function areaTypeConvert(v, record){
	if(v==1){
		return '大陆';
	}else if(v==2){
		return '港澳台';
	}else if(v==3){
		return '其他';
	}
}

function idTypeConvert(v, record){
	if(v==1){
		return '身份证';
	}else if(v==2){
		return '护照';
	}else if(v==3){
		return '军官证';
	}
}

function titleConvert(v, record){
	if(v==1){
		return '高工';
	}else if(v==2){
		return '教授';
	}
}

function educationConvert(v, record){
	if(v==1){
		return '本科';
	}else if(v==2){
		return '硕士';
	}else if(v==3){
		return '博士';
	}
}

function degreeConvert(v, record){
	if(v==1){
		return '学士';
	}else if(v==2){
		return '硕士';
	}else if(v==3){
		return '博士';
	}
}



function tutorConvert(v, record){
	if(v==1){
		return '博导';
	}else if(v==2){
		return '硕导';
	}
}


function rcTypeConvert(v, record){
	if(v==1){
		return '考研';
	}else if(v==2){
		return '法人';
	}else if(v==3){
		return '财务';
	}else if(v==4){
		return '专家';
	}
}

function birthdayStrConvert(v,record){
	if(v!=''&&v!=null){
		return v.substring(0,10);
	}
	return '';
}
