({
    doInit: function(component, event, helper) {
        // lightning:treeGrid
        var columns = [
            {
                type: 'text',
                fieldName: 'Name',
                label: 'Account Name'
            },
            {
                type: 'text',
                fieldName: 'Email',
                label: 'Email'
            },
            {
                type: 'number',
                fieldName: 'NumberOfEmployees',
                label: 'Employees'
            },
            {
                type: 'phone',
                fieldName: 'Phone',
                label: 'Phone Number'
            },
            {
                type: 'text',
                fieldName: 'OwnerName',
                label: 'Account Owner Name'
            },
        ];

        component.set('v.gridColumns', columns);
        helper.getAccountContacts(component);

        // lightning:carousel
        helper.getContents(component);
    },

    doOnresize: function(component, event, helper) {
        console.log('treeGrid doOnresize');
    },

    doOnrowaction: function(component, event, helper) {
        console.log('treeGrid doOnrowaction');
    },

    doOnrowselection: function(component, event, helper) {
        console.log('treeGrid doOnrowselection');
    },

    doOntoggle: function(component, event, helper) {
        console.log('treeGrid doOntoggle');
    },

    doOntoggleall: function(component, event, helper) {
        console.log('treeGrid doOntoggleall');
    },

    getExpandedRows: function(component, event, helper) {
        component.set('v.currentExpandedRows', '');
        var treeGridCmp = component.find('treeGrid');
        component.set('v.currentExpandedRows', treeGridCmp.getCurrentExpandedRows().toString());
    },

    expandAllRows: function(component, event, helper) {
        var tree = component.find('treeGrid');
        tree.expandAll();
    },


    // lightning:pillContainer
    handleItemRemove: function(component, event, helper) {
        var name = event.getParam('item').name;
        console.log(name + ' pill was removed!');
        var items = component.get('v.items');
        var item = event.getParam('index');
        items.splice(item, 1);
        component.set('v.items', items);
    }
})