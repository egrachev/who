'use strict';

WhoApp.controller('WhoController', 
    function WhoController($scope, users) {
        users.get(function(data) {
            console.log(data);

            var online_friends = [];

            for(var i = 0; i < data.response.length; i++){
                var user = data.response[i]

                online_friends.push({
                    photo: user.photo,
                    first_name: user.first_name,
                    last_name: user.last_name
                })
            }

            console.log(online_friends);

            $scope.online_friends = online_friends;
            $scope.$apply();
        });

        
    }
);