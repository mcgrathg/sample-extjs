/*
 * File: app/view/PostsGrid.js
 *
 * This file was generated by Sencha Architect version 4.0.1.
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

Ext.define('Examples.view.PostsGrid', {
    extend: 'sl.panel.grid.EditorGrid',
    alias: 'widget.postsgrid',

    requires: [
        'Examples.view.PostsGridViewModel',
        'Ext.view.Table',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'postsgrid'
    },
    reference: 'posts',
    title: 'Posts',
    columnLines: true,
    includeSearch: true,
    includeRowCount: true,
    useStewartsRenderer: true,
    includeRefreshBtn: true,
    includeExcelBtn: true,
    isLocalExcelExport: true,
    includeValidationStatus: true,
    singleName: 'Post',
    searchAlign: 'right',
    searchWidth: 200,
    selModelMode: 'MULTI',
    clicksToEdit: 2,
    useDefaultButtons: true,
    useDefaultSaveConfig: false,
    useDefaultDeleteConfig: false,
    useDefaultNewConfig: true,
    moveEditorOnEnter: true,
    useDefaultEnterKeyHandler: true,
    showEditCursor: true,

    bind: {
        store: '{postsStore}'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            flex: 1,
            cellWrap: true,
            dataIndex: 'title',
            text: 'Title'
        },
        {
            xtype: 'gridcolumn',
            flex: 2,
            cellWrap: true,
            dataIndex: 'body',
            text: 'Body',
            variableRowHeight: true
        }
    ]

});