'use strict';

WhoApp.factory('users', function() {     
    return {
        'get': function(callback) {
            VK.init(function() {
                VK.api("friends.get", {
                    fields: "first_name,last_name,photo,photo_big"
                }, callback);
            });            
        }
    };
});

 
        
