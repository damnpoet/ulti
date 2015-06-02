'use strict';

/**
 * @ngdoc overview
 * @name ulti
 * @description
 * # Document Management App
 *
 * Main module of the application.
 */
angular.module('ulti', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'toaster',
    'ngFileUpload',
    'config',
    'common',
    'dashboard',
    'user',
    'document'
]).run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $rootScope.state = toState.name;
    });
});
