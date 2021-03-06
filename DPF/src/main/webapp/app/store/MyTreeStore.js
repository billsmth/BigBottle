/*
 * File: app/store/MyTreeStore.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.MyTreeStore', {
    extend: 'Ext.data.TreeStore',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyTreeStore',
            root: [
                {
                    text: '基本信息',
                    checked: false,
                    children: [
                        {
                            text: '投保人',
                            checked: false,
                            leaf: true
                        },
                        {
                            text: '性别',
                            checked: false,
                            leaf: true
                        }
                    ]
                },
                {
                    text: '通讯方式',
                    checked: false,
                    children: [
                        {
                            text: '联系电话',
                            checked: false,
                            leaf: true
                        },
                        {
                            text: '电子邮件',
                            checked: false,
                            leaf: true
                        }
                    ]
                }
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});