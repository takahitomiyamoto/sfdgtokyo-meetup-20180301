({
    getAccountContacts: function(component) {
        var action = component.get("c.getAccountContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();

                // Change "Contacts" key to "_children"
                for(var i = 0; i < data.length; i++) {
                    data[i]._children = data[i]['Contacts'];
                    data[i].OwnerName = data[i]['Owner'].Name;
                    delete data[i].Contacts;

                }
                component.set('v.gridData', data);
            }
            // error handling when state is "INCOMPLETE" or "ERROR"
         });
         $A.enqueueAction(action);
    },

    getContents: function(component) {
        var action = component.get("c.getContents");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                var contents = [];
                for(var i = 0; i < data.length; i++) {
                    contents.push(data[i].Id);
                }
                console.log(JSON.stringify(contents));
                component.set('v.contents', contents);
            }
            // error handling when state is "INCOMPLETE" or "ERROR"
         });
         $A.enqueueAction(action);
    }
})