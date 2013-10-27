Ext.define('App.model.ktsb.ktsbResearchTaskModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'issueId'
        },
        {
            name: 'taskName'
        },
        {
            name: 'researchContent'
        },
        {
            name: 'checkTarget'
        },
        {
            name: 'assumeOrgId'
        },
        {
            name: 'joinOrgId'
        },
        {
            name: 'outlay'
        },
        {
            name: 'sortNo'
        },
        {
            name: 'assumeOrgName'
        },
        {
            name: 'joinOrgName'
        }
    ]
});