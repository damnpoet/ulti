'use strict';

angular.module('user').factory('UserService', function() {

    var users = [
        {
            id: '1001',
            name: 'Richard Gonzalez'
        },
        {
            id: '1002',
            name: 'Glenda Gonzalez'
        },
        {
            id: '1003',
            name: 'John Doe'
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
        },
        getById: function(id) {
            return _.find(users, function(user) {
                return user.id == id;
            });
        },
        getUsers: function() {
            return users;
        }
    }
});
