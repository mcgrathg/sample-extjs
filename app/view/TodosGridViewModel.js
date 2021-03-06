/*
 * File: app/view/TodosGridViewModel.js
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

Ext.define('Examples.view.TodosGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todosgrid',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    data: {
        includeUser: false
    },

    stores: {
        todosStore: {
            pageSize: 0,
            model: 'Examples.model.Todo',
            proxy: {
                type: 'jsonp',
                url: 'https://jsonplaceholder.typicode.com/todos',
                reader: {
                    type: 'json'
                }
            }
        }
    }

});