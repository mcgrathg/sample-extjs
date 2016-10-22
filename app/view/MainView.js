/*
 * File: app/view/MainView.js
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

Ext.define('Examples.view.MainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainview',

    uses: [
        'Ext.window.Toast'
    ],
    requires: [
        'Examples.view.MainViewViewModel',
        'Examples.view.MainViewViewController',
        'Examples.view.UsersGrid',
        'Examples.view.AlbumsGrid',
        'Examples.view.PhotosView',
        'Examples.view.FullSizePhoto.SelectedPhoto',
        'Examples.view.TodosGrid',
        'Examples.view.PostsGrid',
        'Examples.view.CommentsGrid',
        'sl.panel.grid.EditorGrid',
        'Ext.resizer.Splitter',
        'Ext.view.View',
        'Ext.Img',
        'Ext.panel.Tool',
        'sl.panel.grid.ParentChildGridPairing'
    ],

    controller: 'mainview',
    viewModel: {
        type: 'mainview'
    },
    title: 'Greg McGrath\'s Examples',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'usersgrid',
            stateful: true,
            collapseDirection: 'left',
            includeStateViewPanel: true,
            flex: 1
        },
        {
            xtype: 'splitter',
            collapseOnDblClick: false,
            collapseTarget: 'prev',
            collapsible: true
        },
        {
            xtype: 'container',
            flex: 1,
            layout: 'accordion',
            items: [
                {
                    xtype: 'panel',
                    reference: 'albumsandphotos',
                    title: 'Albums And Photos',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'albumsgrid',
                            flex: 1,
                            minWidth: 150,
                            scrollable: 'y',
                            collapseDirection: 'left',
                            listeners: {
                                parentchildtitlechange: 'onAlbumsGridTitleChange'
                            }
                        },
                        {
                            xtype: 'splitter'
                        },
                        {
                            xtype: 'container',
                            flex: 3,
                            maxWidth: 612,
                            minWidth: 200,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'photosview',
                                    defaultTitle: 'Photos',
                                    cls: 'photo-chooser-view',
                                    minHeight: 215,
                                    flex: 1,
                                    bind: {
                                        hidden: '{!isPhotoViewVisible}',
                                        selection: '{photo}'
                                    }
                                },
                                {
                                    xtype: 'splitter'
                                },
                                {
                                    xtype: 'panel',
                                    reference: 'selectedphotopanel',
                                    hidden: true,
                                    maxHeight: 600,
                                    bind: {
                                        title: '<a href="{photo.url}" target="_blank">{photo.title}</a>'
                                    },
                                    items: [
                                        {
                                            xtype: 'selectedphoto',
                                            autoEl: 'div',
                                            cls: 'full-size-photo',
                                            bind: {
                                                hidden: '{!photo}'
                                            },
                                            listeners: {
                                                resize: 'onSelectedPhotoResize'
                                            }
                                        }
                                    ],
                                    tools: [
                                        {
                                            xtype: 'tool',
                                            tooltip: 'Undock Panel',
                                            type: 'maximize',
                                            listeners: {
                                                click: 'onExpandPhotoToolClick'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    plugins: [
                        {
                            ptype: 'parentchild',
                            pluginId: 'albumToPhotos',
                            parentGridReference: 'albums',
                            childGridReference: 'photos',
                            parentFieldName: 'id',
                            cacheParamName: 'albumId',
                            childForeignKeyFieldName: 'albumId',
                            directionArrow: 'l',
                            parentFieldsForChildGridTitle: [
                                'title'
                            ],
                            monitorUIUpdate: true
                        }
                    ]
                },
                {
                    xtype: 'todosgrid'
                },
                {
                    xtype: 'panel',
                    reference: 'postsandcomments',
                    title: 'Posts and Comments',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'postsgrid',
                            flex: 1,
                            listeners: {
                                parentchildtitlechange: 'onPostsGridTitleChange'
                            }
                        },
                        {
                            xtype: 'splitter',
                            collapseOnDblClick: false,
                            collapseTarget: 'prev',
                            collapsible: true
                        },
                        {
                            xtype: 'commentsgrid',
                            flex: 1
                        }
                    ],
                    plugins: [
                        {
                            ptype: 'parentchild',
                            pluginId: 'postToComments',
                            parentGridReference: 'posts',
                            childGridReference: 'comments',
                            parentFieldName: 'id',
                            cacheParamName: 'postId',
                            childForeignKeyFieldName: 'postId',
                            directionArrow: 'u',
                            parentFieldsForChildGridTitle: [
                                'title'
                            ],
                            monitorUIUpdate: true,
                            baseAndParentDivider: ' On '
                        }
                    ]
                }
            ]
        }
    ],
    plugins: [
        {
            ptype: 'parentchild',
            pluginId: 'userToTodos',
            parentGridReference: 'users',
            childGridReference: 'todos',
            parentFieldName: 'id',
            cacheParamName: 'userId',
            childForeignKeyFieldName: 'userId',
            directionArrow: 'l',
            parentFieldsForChildGridTitle: [
                'name'
            ],
            monitorUIUpdate: true,
            baseAndParentDivider: ' For '
        },
        {
            ptype: 'parentchild',
            pluginId: 'userToPosts',
            parentGridReference: 'users',
            childGridReference: 'posts',
            parentFieldName: 'id',
            cacheParamName: 'userId',
            childForeignKeyFieldName: 'userId',
            directionArrow: 'l',
            parentFieldsForChildGridTitle: [
                'name'
            ],
            monitorUIUpdate: true,
            baseAndParentDivider: ' By '
        },
        {
            ptype: 'parentchild',
            pluginId: 'userToAlbums',
            parentGridReference: 'users',
            childGridReference: 'albums',
            parentFieldName: 'id',
            cacheParamName: 'userId',
            directionArrow: 'l',
            parentFieldsForChildGridTitle: [
                'name'
            ],
            monitorUIUpdate: true,
            baseAndParentDivider: ' By '
        }
    ]

});