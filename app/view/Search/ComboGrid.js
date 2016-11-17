/*
 * File: app/view/Search/ComboGrid.js
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

Ext.define('Examples.view.Search.ComboGrid', {
    extend: 'sl.field.ComboGrid',
    alias: 'widget.searchcombogrid',

    requires: [
        'Examples.view.Search.ComboGridViewModel'
    ],

    viewModel: {
        type: 'search.combogrid'
    },
    anyMatch: true,
    displayField: 'body',
    forceSelection: true,
    typeAheadDelay: 500,
    valueField: 'id',
    gridXType: 'searchpickergrid',

    bind: {
        store: '{searchStore}'
    }

});