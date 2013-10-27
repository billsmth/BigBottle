Ext.define('App.store.NonAutoLoadTreeStore', {
    extend: 'Ext.data.TreeStore',
    
    /**
     * 以下都是Extjs4.2的代码，只是因为4.2下treestore的autoload属性无效，
     * 所以重写一下这个方法，解决不能关掉autoload的情况
     * @param {} root
     * @param {} preventLoad
     * @return {}
     */
    setRootNode: function(root, /* private */ preventLoad) {
        var me = this,
            model = me.model,
            idProperty = model.prototype.idProperty

        root = root || {};
        if (!root.isModel) {
            root = Ext.apply({}, root);
            // create a default rootNode and create internal data struct.
            Ext.applyIf(root, {
                id: me.defaultRootId,
                text: me.defaultRootText,
                allowDrag: false
            });
            if (root[idProperty] === undefined) {
                root[idProperty] = me.defaultRootId;
            }
            Ext.data.NodeInterface.decorate(model);
            root = Ext.ModelManager.create(root, model);
        } else if (root.isModel && !root.isNode) {
            Ext.data.NodeInterface.decorate(model);
        }


        // Because we have decorated the model with new fields,
        // we need to build new extactor functions on the reader.
        me.getProxy().getReader().buildExtractors(true);

        // When we add the root to the tree, it will automaticaly get the NodeInterface
        me.tree.setRootNode(root);

        // If the user has set expanded: true on the root, we want to call the expand function to kick off
        // an expand process, so clear the expanded status and call expand.
        // Upon receipt, the expansion process is the most efficient way of processing the
        // returned nodes and putting them into the NodeStore in one block.
        // Appending a node to an expanded node is expensive - the NodeStore and UI are updated.
        /**
         * 注意，这个地方是被修改掉的
         * if (preventLoad !== true && !root.isLoaded() && (me.autoLoad === true || root.isExpanded())) {
         */
        //if (preventLoad !== true && !root.isLoaded() && (me.autoLoad === true || root.isExpanded())) {
        if (preventLoad !== true && !root.isLoaded() && (me.autoLoad === true)) {
            root.data.expanded = false;
            root.expand();
        }

        return root;
    }
})