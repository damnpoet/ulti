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
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'config',
    'common',
    'dashboard',
    'user',
    'document'
]);
