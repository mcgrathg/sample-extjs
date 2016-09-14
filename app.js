/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.Loader.setPath('sl.field.ComboBox','packages/Stewarts-5/src/../stewarts-all.js');
Ext.Loader.setPath('sl.panel.grid.EditorGrid','packages/Stewarts-5/src/../stewarts-all.js');
Ext.Loader.setPath('sl.panel.grid.ParentChildGridPairing','packages/Stewarts-5/src/../stewarts-all.js');

Ext.application({
    models: [
        'Post',
        'User',
        'Todo',
        'Comment',
        'Album',
        'Photo'
    ],
    stores: [
        'Users'
    ],
    views: [
        'MyViewport',
        'UsersGrid',
        'TodosGrid',
        'PostsGrid',
        'CommentsGrid',
        'AlbumsGrid',
        'ExpandedPhotoWindow',
        'PhotosView',
        'FullSizePhoto'
    ],
    name: 'Examples',
    title: 'Greg McGrath\'s Examples',

    launch: function() {
        Ext.create('Examples.view.MyViewport');
    }

});
