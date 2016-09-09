/*
 * File: app/view/MyViewportViewController.js
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

Ext.define('Examples.view.MyViewportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myviewport',

    onAlbumsGridTitleChange: function(albumsGrid, newTitle, defaultTitle, divider, recordText) {
        var me = this,
            refs = me.getReferences(),
            panel = refs.albumsandphotos,
            photos = refs.photos;

        title = defaultTitle + ' And ' + photos.getDefaultTitle() + (recordText ? divider : '') + recordText;

        panel.setTitle(title);
        albumsGrid.setTitle(defaultTitle); // revert to basic, non-parent-child title
    },

    onPhotoSelect: function(dataviewmodel, record, index, eOpts) {
        console.warn('focus thumbail into view, cause the dataview may have changed sizes automatically');
    },

    onPostsGridTitleChange: function(postsGrid, newTitle, defaultTitle, divider, recordText) {
        var me = this,
            refs = me.getReferences(),
            panel = refs.postsandcomments,
            comments = refs.comments;

        title = defaultTitle + ' And ' + comments.getDefaultTitle() + (recordText ? divider : '') + recordText;

        panel.setTitle(title);
        postsGrid.setTitle(defaultTitle); // revert to basic, non-parent-child title
    }

});
