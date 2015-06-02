'use strict';

/**
 * @ngdoc overview
 * @name Dashboard
 * @description
 * The Dashboard module provides users with a dashboard.
 *
 * Dashboard module.
 */
angular.module('dashboard', []).config(function ($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: 'dashboard',
            templateUrl: 'src/modules/dashboard/views/dashboard.html',
            controller: 'DashboardController'
        });
});
