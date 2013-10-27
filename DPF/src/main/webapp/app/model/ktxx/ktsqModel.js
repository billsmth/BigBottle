/**
 * 授权的model，以后关于课题的model都可以继承这个model，不用再继承Ext.data.Model了。
 */
Ext.define('App.model.ktxx.ktsqModel', {
    extend: 'Ext.data.Model',

    fields: [
        'id', 'projectName', 'topicName', 'belongValley', 'issueName', 'issueNo', 'issueCategory', 'requestCompany', 'requestCompanyNo',
        'director', 'directorNo', 'directorName','status',
        'requestCompanyName', 'fillDate', 'secretLevel', 'startYearMonth', 'endYearMonth'
    ]
});