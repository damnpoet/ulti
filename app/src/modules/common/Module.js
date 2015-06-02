'use strict';

/**
 * @ngdoc overview
 * @name Common
 * @description
 * Module with shared functionality.
 *
 * Common module.
 */
angular.module('common', []).config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.when('', '/dashboard');
    $urlRouterProvider.when('/', '/dashboard');

    $stateProvider.state('app', {
        url: '/',
        templateUrl: 'src/modules/common/views/app.html'
    });

    $urlRouterProvider.otherwise('/dashboard');

});
