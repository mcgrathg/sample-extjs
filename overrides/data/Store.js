Ext.define('overrides.data.Store', {
    override: 'Ext.data.Store',

    /**
     * @cfg {Boolean} [isStoreValidatedOnLoad=true]
     * If `true`, all loaded records are immediately validated on the store's `datachanged` event (fired during the store's loading process, & before a grid will render cell data)
     */
    isStoreValidatedOnLoad: true,

    /**
     * @cfg {Boolean} [isRecordChangeValidated=true]
     * If `true`, when the store 'update' event is fired, if a record is being edited, it will validate it
     * Can set as an object if other functionality is required
     * If setting to an object, the available properties are:
     * -- customValidation: a function that accepts the record and the existing errors object as its parameters.  Returns the error object with custom errors added
     */
    isRecordChangeValidated: true,

    /**
     * @cfg {Boolean} [isNewRecordValidated=true]
     * If `true`, when a new record is added to the store, it will immediately be validated
     */
    isNewRecordValidated: true,
    
    constructor: function(config) {
        var store = this;
        
        store.callParent(arguments);

        store.on({
            priority: 1000,
            datachanged: (store.isStoreValidatedOnLoad ? store.validateOnStoreLoad : Ext.emptyFn),
            update: (store.isRecordChangeValidated ? store.validateOnRecordChange : Ext.emptyFn),
            add: (store.isNewRecordValidated ? store.validateOnRecordAdded : Ext.emptyFn)
        });   
    }
});