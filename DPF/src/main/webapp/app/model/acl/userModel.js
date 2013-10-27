Ext.define('App.model.acl.userModel', {
    extend: 'Ext.data.Model',
    fields:['id', 'userId', 'password', 'roleId', 'roleName', 'peopleId', 'peopleName', 'orgId', 'orgName']
});