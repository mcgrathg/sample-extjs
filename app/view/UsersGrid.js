/*
 * File: app/view/UsersGrid.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
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

Ext.define('Examples.view.UsersGrid', {
    extend: 'sl.panel.grid.EditorGrid',
    alias: 'widget.usersgrid',

    requires: [
        'Examples.view.UsersGridViewModel',
        'Examples.view.UsersGridViewController',
        'Ext.view.Table',
        'Ext.form.field.Text',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.grid.plugin.RowExpander'
    ],

    controller: 'usersgrid',
    viewModel: {
        type: 'usersgrid'
    },
    reference: 'users',
    title: 'Users',
    singleName: 'User',

    bind: {
        store: '{test}'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'name',
            text: 'Name',
            editor: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'gridcolumn',
            isEditable: function(record) {
                return (
                !Ext.isEmpty(record.get('name')) ?
                true :
                'Please enter a <b>Name</b> first'
                );
            },
            dataIndex: 'username',
            text: 'Username',
            editor: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'templatecolumn',
            tpl: [
                '<a href="mailto:{email}">{email}</a>'
            ],
            dataIndex: 'email',
            text: 'Email',
            editor: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'phone',
            text: 'Phone',
            editor: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'website',
            text: 'Website',
            editor: {
                xtype: 'textfield'
            }
        }
    ],
    plugins: [
        {
            ptype: 'rowexpander',
            expandOnDblClick: false,
            expandOnEnter: false,
            rowBodyTpl: [
                '<div style="display:inline-flex;width:100%;">',
                '    <div style="flex:1;">',
                '        <h3>Address:</h3>',
                '        <div><b>Street:</b> {address.street}</div>',
                '        <div><b>Suite:</b> {address.suite}</div>',
                '        <div><b>City:</b> {address.city}</div>',
                '        <div><b>Zip Code:</b> {address.zipcode}</div>',
                '    </div>',
                '    <div style="flex:2;">',
                '        <h3>Company:</h2>',
                '        <div><b>Name:</b> {company.name}</div>',
                '        <div><b>Slogan:</b> {company.catchPhrase}</div>',
                '        <div><b>Category:</b> {company.bs}</div>',
                '    </div>',
                '</div>'
            ]
        }
    ],
    listeners: {
        beforerecordcreated: 'onGridpanelBeforeRecordcreated'
    }

});