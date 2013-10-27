
Ext.define('App.model.main.todoModel', {
    extend: 'Ext.data.Model',

    fields: [
        'id', 'projectName', 'topicName', 'belongValley', 'issueName', 'issueNo', 'requestCompany', 'requestCompanyNo',
        'director', 'directorNo', 'directorName','status',
        'requestCompanyName', 'fillDate', 'secretLevel', 'startYearMonth', 'endYearMonth', 'category'
    ]
});