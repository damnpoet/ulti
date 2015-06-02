'use strict';

/**
 * @ngdoc overview
 * @name User
 * @description
 * The User module provides user CRUD functionality.
 *
 * User module.
 */
angular.module('user', []).config(function ($stateProvider) {
    $stateProvider
        .state('app.users', {
            url: 'users',
            templateUrl: 'src/modules/user/views/users.html',
            controller: 'UsersController'
        });
});
