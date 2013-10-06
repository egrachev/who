'use strict';

WhoApp.factory('users', function() {     
    return {
        'get': function(callback) {
            VK.init(function() {
                VK.api("friends.get", {
                    fields: "first_name,last_name,photo",
                    count: 10
                }, callback);
            });            
        }
    };
});

 
        
