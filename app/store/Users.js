/*
 * File: app/store/Users.js
 *
 * This file was generated by Sencha Architect version 4.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Examples.store.Users', {
    extend: 'Ext.data.Store',

    requires: [
        'Examples.model.User',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            pageSize: 0,
            storeId: 'Users',
            autoLoad: true,
            model: 'Examples.model.User',
            proxy: {
                type: 'jsonp',
                url: 'https://jsonplaceholder.typicode.com/users',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});