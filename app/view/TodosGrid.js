/*
 * File: app/view/TodosGrid.js
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

Ext.define('Examples.view.TodosGrid', {
    extend: 'sl.panel.grid.EditorGrid',
    alias: 'widget.todosgrid',

    requires: [
        'Examples.view.TodosGridViewModel',
        'Ext.view.Table',
        'Ext.form.field.Text',
        'Ext.grid.column.Check'
    ],

    viewModel: {
        type: 'todosgrid'
    },
    reference: 'todos',
    title: 'Todo',
    columnLines: true,
    includeSearch: true,
    includeRowCount: true,
    useStewartsRenderer: true,
    includeRefreshBtn: true,
    isLocalExcelExport: true,
    includeValidationStatus: true,
    singleName: 'Todo',
    searchAlign: 'right',
    searchWidth: 200,
    filterLocal: true,
    filterUpdateBuffer: 550,
    filterParamPrefix: 'filter',
    selModelMode: 'MULTI',
    clicksToEdit: 2,
    autoCancel: true,
    clicksToMoveEditor: 2,
    errorSummary: true,
    useDefaultButtons: true,
    useDefaultSaveConfig: true,
    useDefaultDeleteConfig: true,
    useDefaultUndoDeleteConfig: true,
    useDefaultNewConfig: true,
    moveEditorOnEnter: true,
    useDefaultEnterKeyHandler: true,
    showEditCursor: true,

    bind: {
        store: '{todosStore}'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'userId',
            hideable: false,
            text: 'User',
            bind: {
                hidden: '{!includeUser}'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title',
            flex: 1,
            editor: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'checkcolumn',
            readOnly: true,
            dataIndex: 'completed',
            text: 'Completed'
        }
    ]

});