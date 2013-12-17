'use strict';

WhoApp.controller('WhoController', 
    function WhoController($scope, users) {
        $scope.online = true;
        $scope.name = "";
        $scope.hypnotoad = false;

        users.get(function(data) {
            var friends = [];
            var friends_online = [];

            for(var i = 0; i < data.response.length; i++){
                var user = data.response[i];
                var friend = {
                    photo: user.photo,
                    photo_big: user.photo_big,
                    name: user.first_name + " " + user.last_name,
                    online: user.online == "1",
                    is_checked: false
                };

                friends.push(friend);

                if (friend.online) {
                    friends_online.push(friend);
                }
            }

            $scope.friends = friends;
            $scope.friends_online = friends_online;

            $scope.$apply();
        });

        function make_unique_random(max) {
            // return unique object

            var randoms = [];
            var last_val = -1;
            var val = -1;

            return function() {
                // refill the array if needed
                if (!randoms.length) {
                    for (var i = 0; i < max; i++) {
                        randoms.push(i);
                    }
                }

                var index = -1;

                do {
                    index = Math.floor(Math.random() * randoms.length);
                    val = randoms[index];
                } while (val == last_val)

                // now remove that value from the array
                randoms.splice(index, 1);
                last_val = val;

                return val;
            }
        }

        $scope.friends_checked = [];

        $scope.check_friend = function (friend) {
            if (friend.is_checked) {
                $scope.friends_checked.push(friend);
            } else {
                var index = $scope.friends_checked.indexOf(friend);
                $scope.friends_checked.splice(index, 1);
            }

            $scope.unique_random = make_unique_random($scope.friends_checked.length);
        }

        $scope.play = function(friends) {
            var random_index = $scope.unique_random();
            var random_friend = $scope.friends_checked[random_index];

            $scope.winner = random_friend;

            enable_hypnotoad();
        }

        
    }
);