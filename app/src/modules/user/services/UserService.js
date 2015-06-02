'use strict';

angular.module('user').factory('UserService', function() {

    var users = [
        {
            id: '1',
            name: 'Richard Gonzalez'
        }
    ];

    var isUser = function(user) {
        return !(angular.isUndefined(user.name));
    };

    return {
        count: function() {
            return users.length;
        },
        add: function(user) {
            if(isUser(user)) {
                users.push(user);
            }
        }
    }
});
