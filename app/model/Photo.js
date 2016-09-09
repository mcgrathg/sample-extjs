/*
 * File: app/model/Photo.js
 *
 * This file was generated by Sencha Architect version 4.0.0.
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

Ext.define('Examples.model.Photo', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'int',
            name: 'albumId',
            validators: [
                {
                    type: 'presence'
                }
            ]
        },
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'title'
        },
        {
            type: 'string',
            name: 'url',
            validators: [
                {
                    type: 'presence'
                }
            ]
        },
        {
            type: 'string',
            name: 'thumbnailUrl'
        }
    ]
});