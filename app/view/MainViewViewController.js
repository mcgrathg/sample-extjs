/*
 * File: app/view/MainViewViewController.js
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

Ext.define('Examples.view.MainViewViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainview',

    initViewModel: function(viewModel) {
        var me = this;

        viewModel.bind({
            photo: '{photo}',
            viewer: '{singlephotoviewer}'
        }, me.reactPhotoAndViewerChange, me);
    },

    /*
        Show appropriate panel when there is a selected photo.
        If not photo, hide everything.
    */
    reactPhotoAndViewerChange: function(value) {
        var me = this,

            photo = value.photo,
            viewer = value.viewer,

            hasPhoto = !Ext.isEmpty(photo),

            panel = me.lookupReference('selectedphotopanel'),
            win = me.getSelectedPhotoWindow();

        switch (viewer) {

            case 'panel':
                win.hide();
                active = panel;
                break;

            case 'window':
                panel.hide();
                active = win;
                break;

            default:
                console.error('Unknown Viewer Type: ' + viewer);
        }

        active.setVisible(hasPhoto);
    },

    /*
        Returns the Selected Photo Window instance.
        Will create a new photo window if it is not yet defined.
    */
    getSelectedPhotoWindow: function() {
        var me = this;

        if (!me._selectedPhotoWindow) {

            me._selectedPhotoWindow = me.getView().add({
                xtype: 'selectedwindow',
                tools: [
                    {
                        xtype: 'tool',
                        type: 'minimize',
                        tooltip: 'Dock Panel',
                        listeners: {
                            scope: me,
                            click: me.onUseSelectedPhotoPanelClick
                        }
                    }
                ]
            });
        }

        return me._selectedPhotoWindow;
    },

    /*
        Returns the Selected Photo Window instance.
        Will create a new photo window if it is not yet defined.
    */
    onUseSelectedPhotoPanelClick: function() {
        this.getViewModel().set('singlephotoviewer', 'panel');
    },

    onAlbumsGridTitleChange: function(albumsGrid, newTitle, defaultTitle, divider, recordText) {
        var me = this,
            refs = me.getReferences(),
            panel = refs.albumsandphotos,
            photos = refs.photos;

        title = defaultTitle + ' And ' + photos.getDefaultTitle() + (recordText ? divider : '') + recordText;

        panel.setTitle(title);
        albumsGrid.setTitle(defaultTitle); // revert to basic, non-parent-child title
    },

    /* adjust parent panel's height so that when the photo shrinks, there's not wasted space */
    onSelectedPhotoResize: function(component, width, height, oldWidth, oldHeight, eOpts) {
        this.lookupReference('selectedphotopanel').setHeight(height);
    },

    onExpandPhotoToolClick: function(tool, e, owner, eOpts) {
        this.getViewModel().set('singlephotoviewer', 'window');
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
