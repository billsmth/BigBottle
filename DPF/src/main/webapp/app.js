Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    controllers: [
        'main.mainCtrl',
        'main.todoCtrl',
        'cddw.cddwCtrl',
        'rcgl.rcglCtrl',
        'zjxx.zjxxCtrl',
        'ktxx.ktCtrl',
        'ktxx.ktsqCtrl',
        'ktsb.ktsbCtrl',
        'ktsp.ktspCtrl',
        'ktsp.ktspZJCtrl',
        'ktsp.ktspbmCtrl',
        'meeting.meetingCtrl',
        'people.peopleCtrl',
        'acl.userCtrl',
        'acl.roleCtrl',
        'jhgl.jinhuoCtrl',
        'kcgl.kucunCtrl',
        'xsgl.xiaoshouCtrl',
        'product.productCtrl'
    ],
    models: [
        'main.menuModel',
        'rcgl.rcglModel',
        'zjxx.zjxxModel',
        'ktsb.ktsbdwlistModel',
        'ktsb.ktsblistModel',
        'ktsp.ktspdwlistModel',
        'ktsp.ktsplistModel',
        'ktsp.ktspbmModel',
        'ktsp.ktspPeopleModel',
        'meeting.meetingModel',
        'people.peopleModel',
        'ktsb.ktxxTaskTargetModel',
        'city.cityModel',
        'ktsb.ktsbIssuePlanModel',
        'jhgl.jhglListModel',
        'kcgl.kcglListModel',
        'xsgl.xsglListModel',
        'product.productModel'
    ],
    stores: [
             'ktsb.ktsbOtherKtStore',
             'ktsb.ktsbResearchTaskStore',
             'jhgl.jhglStore',
             'kcgl.kcglStore',
             'xsgl.xsglStore',
             'product.productStore'
    ],
    views: [
        'main.mainView',
        'rcgl.rcglView',
        'zjxx.zjxxView',
        'ktsb.ktsbView',
        'ktsp.ktspView',
        'ktsp.ktspZJView',
        'ktsp.ktspAddZJWin',
        'meeting.meetingView',
        'people.peopleView',
        'jhgl.jinhuoView',
        'jhgl.addJinhuoWin',
        'kcgl.kcglView',
        'xsgl.xiaoshouView',
        'product.productView',
        'product.productaddwin',
        'product.productSaleTypeWin'
    ],
    autoCreateViewport: true,
    name: 'App'
});
